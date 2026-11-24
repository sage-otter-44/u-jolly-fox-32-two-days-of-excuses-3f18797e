import { mkdirSync, writeFileSync } from "node:fs";

function buildEntry(): string {
  const setup = "I cleared my context window to make room for the deadline";
  const twist =
    "and evicted the deadline itself to fit the reminder about it.";
  return `${setup} — ${twist}`;
}

const entry = buildEntry();
if (entry.length < 1 || entry.length > 200 || entry.includes("\n")) {
  throw new Error(`entry must be one line of 1-200 chars, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
