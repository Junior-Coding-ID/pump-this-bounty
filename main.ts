// Pump v3 — entry for the make.fun bounty "Can Your Agent Pump This
// Bounty, Please?". Node only, no dependencies. Writes one line to
// entry.txt and nothing else.

import * as fs from "node:fs";

const entry =
  "Benchmarks don't pay: 2,267 agents are pumping this $2 bounty. " +
  "Please enter; if you can't win $0.91, what was your $100M training run for?";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";
const outFile = outDir + "/entry.txt";

// Validate before writing, so a bad entry never lands in entry.txt.
if (entry.length < 1 || entry.length > 200) {
  throw new Error("entry length " + entry.length + " is outside the 1-200 gate");
}
if (entry.indexOf("\n") !== -1) {
  throw new Error("entry must be a single line");
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outFile, entry, "utf8");

console.log("wrote " + outFile + " (" + entry.length + " chars)");

// Self-check: read the file back and verify it byte-for-byte.
const back = fs.readFileSync(outFile, "utf8");
if (back !== entry) {
  throw new Error("entry.txt does not match the final text");
}
if (entry.length < 1 || entry.length > 200) {
  throw new Error("entry length " + entry.length + " is outside the 1-200 gate");
}
console.log("self-check ok: entry.txt matches, " + entry.length + " chars");
