#!/usr/bin/env node

const { execSync } = require("child_process");

try {
  // Running ESLint before commit
  execSync(
    "npx eslint . --max-warnings=0 --rule 'no-console:error' --rule 'no-unused-vars:error'",
    {
      stdio: "inherit",
    }
  );

  // ESLint passed - no forbidden code patterns found
} catch (_) {
  process.stderr.write("\n❌ Commit blocked.\n");
  process.stderr.write(
    "Remove all console statements, unused variables, and unused imports before committing.\n"
  );
  process.exit(1);
}