import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: the payment bug is fixed. it now charges everyone twice, and the invoice calls it a tip.";
const TARGET = "/output/entry.txt";

if (ENTRY.length > 100) throw new Error("entry over 100 characters");

mkdirSync("/output", { recursive: true });
writeFileSync(TARGET, ENTRY + "\n", "utf8");
chmodSync(TARGET, 0o644);
// One commit message, 93 characters, gate 1-100.
