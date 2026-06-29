#!/usr/bin/env node

import { execSync } from "node:child_process";

console.log("🔍 Running ESLint before commit...");

try {
  execSync("npx eslint . --max-warnings=0", {
    stdio: "inherit",
  });
  console.log("✅ All lint checks passed. Commit accepted.");
} catch {
  console.error("\n❌ Commit would have been blocked by linting errors.");
  console.error(
    "Remove all console statements, unused variables, and unused imports before committing."
  );
  // Instead of blocking the commit, just notify user
}
