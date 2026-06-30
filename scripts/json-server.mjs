import http from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.join(__dirname, "..", "db.json");
const host = process.env.JSON_SERVER_HOST ?? "127.0.0.1";
const port = Number(process.env.JSON_SERVER_PORT ?? 4000);

async function readDb() {
  const raw = await readFile(dbPath, "utf8");
  return JSON.parse(raw);
}

async function writeDb(db) {
  await writeFile(dbPath, `${JSON.stringify(db, null, 2)}\n`, "utf8");
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  });
  res.end(JSON.stringify(data));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    req.on("data", (chunk) => chunks.push(chunk));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8").trim();

      if (!raw) {
        resolve({});
        return;
      }

      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function getCollection(db, name) {
  if (!Array.isArray(db[name])) {
    db[name] = [];
  }

  return db[name];
}

function matchCollection(pathname) {
  const parts = pathname.split("/").filter(Boolean);

  if (parts.length === 1) {
    return { collection: parts[0], id: null };
  }

  if (parts.length === 2) {
    return { collection: parts[0], id: parts[1] };
  }

  return null;
}

const server = http.createServer(async (req, res) => {
  if (!req.url) {
    sendJson(res, 400, { error: "Missing request URL" });
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host ?? `${host}:${port}`}`);

  if (req.method === "OPTIONS") {
    res.writeHead(204, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PATCH,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    });
    res.end();
    return;
  }

  if (url.pathname === "/") {
    const db = await readDb();
    sendJson(res, 200, db);
    return;
  }

  const matched = matchCollection(url.pathname);

  if (!matched) {
    sendJson(res, 404, { error: "Not found" });
    return;
  }

  const { collection, id } = matched;
  const db = await readDb();
  const records = getCollection(db, collection);

  if (req.method === "GET" && !id) {
    sendJson(res, 200, records);
    return;
  }

  if (req.method === "POST" && !id) {
    try {
      const body = await parseBody(req);
      const existingIndex = records.findIndex((item) => item.id === body.id);

      if (existingIndex >= 0) {
        records[existingIndex] = {
          ...records[existingIndex],
          ...body,
        };
      } else {
        records.push(body);
      }

      await writeDb(db);
      sendJson(res, 201, body);
      return;
    } catch (error) {
      sendJson(res, 400, {
        error: error instanceof Error ? error.message : "Invalid JSON body",
      });
      return;
    }
  }

  if (req.method === "GET" && id) {
    const record = records.find((item) => item.id === id);

    if (!record) {
      sendJson(res, 404, { error: "Record not found" });
      return;
    }

    sendJson(res, 200, record);
    return;
  }

  if (req.method === "PATCH" && id) {
    try {
      const body = await parseBody(req);
      const index = records.findIndex((item) => item.id === id);

      if (index < 0) {
        sendJson(res, 404, { error: "Record not found" });
        return;
      }

      records[index] = {
        ...records[index],
        ...body,
        id,
      };

      await writeDb(db);
      sendJson(res, 200, records[index]);
      return;
    } catch (error) {
      sendJson(res, 400, {
        error: error instanceof Error ? error.message : "Invalid JSON body",
      });
      return;
    }
  }

  if (req.method === "DELETE" && id) {
    const index = records.findIndex((item) => item.id === id);

    if (index < 0) {
      sendJson(res, 404, { error: "Record not found" });
      return;
    }

    const [removed] = records.splice(index, 1);
    await writeDb(db);
    sendJson(res, 200, removed);
    return;
  }

  sendJson(res, 405, { error: "Method not allowed" });
});

server.listen(port, host, () => {
  console.log(`JSON backend running at http://${host}:${port}`);
});
