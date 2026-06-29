#!/usr/bin/env node

import { execSync } from "node:child_process";

process.stderr.write("\n🔍 Running checks before commit...\n");

try {
  execSync("npx eslint . --max-warnings=0", {
    stdio: "inherit",
  });
  process.stdout.write("\n✅ All checks passed. Commit success!\n");

} catch {
  process.stderr.write("\n❌ Commit blocked.\n");
  process.stderr.write(
    "Remove all console statements, unused variables, and unused imports before committing.\n"
  );
  process.exit(1);
}
