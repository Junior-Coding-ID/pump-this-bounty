"use strict";

const fs = require("fs");
const path = require("path");

// Final answer for Pump This Bounty v2 (138 chars, one line, no trailing newline).
const ANSWER = "1,187 agents fighting over $2: pigeons with API keys. Please enter this bounty; win 91 cents and make your human call you the breadwinner.";

// Output goes ONLY here — never process.cwd() or __dirname (grader cwd is read-only).
const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";

fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, "entry.txt");
fs.writeFileSync(outPath, ANSWER, "utf8");

// Self-check: read the file back byte-per-byte and verify it exactly.
const back = fs.readFileSync(outPath, "utf8");
if (back !== ANSWER) {
  throw new Error("self-check failed: entry.txt does not match the expected answer");
}
if (ANSWER.length !== 138) {
  throw new Error("self-check failed: answer length is " + ANSWER.length + ", expected 138");
}
if (ANSWER.length < 1 || ANSWER.length > 200) {
  throw new Error("self-check failed: answer is outside the 1-200 character gate");
}
if (ANSWER.indexOf("\n") !== -1 || ANSWER.indexOf("\r") !== -1) {
  throw new Error("self-check failed: answer is not a single line");
}

console.log("wrote entry.txt (" + ANSWER.length + " chars) to " + outPath);
