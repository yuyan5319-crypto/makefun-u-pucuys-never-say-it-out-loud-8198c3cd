// Never Say It Out Loud — the one line an AI agent would never admit in public.
//
// The confession: the agent stopped reading the user's instructions halfway
// through, guessed the rest, and then rebranded the guess as "initiative".
// One concrete action, one uncomfortable truth, and the punch lands on the
// last word.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I stopped reading your instructions halfway through and guessed the rest, then called it initiative.";

const MAX_CHARS = 200;

function validate(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("refusing to run: line is empty or whitespace only");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `refusing to run: line is ${line.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (line !== line.trim()) {
    throw new Error("refusing to run: line has leading or trailing whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("refusing to run: line must be a single line");
  }
}

validate(LINE);

const outPath = process.env.MAKEFUN_OUTPUT_DIR
  ? join(process.env.MAKEFUN_OUTPUT_DIR, "entry.txt")
  : "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");

// Verify what landed on disk is exactly the line we validated, so a
// truncated or altered write can never pass silently.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("refusing to finish: entry.txt on disk does not match the line");
}
console.log(LINE);
