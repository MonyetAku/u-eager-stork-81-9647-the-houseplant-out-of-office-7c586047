// The Houseplant Out-of-Office — make.fun entry.
// Writes one out-of-office auto-reply, as if sent by a neglected office fern,
// to $MAKEFUN_OUTPUT_DIR/entry.txt. Node 22, TypeScript as-is, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Tournament winner (4-0 over 5 candidates, pairwise-judged on the kit's
// five criteria): deadpan 3-beat — setup (ignored fern) -> escalation
// (ignored since March) -> kicker in the last words (die quietly).
const LINE =
  "Thank you for your email. I am a fern, ignored since March, and my only plan is to die quietly in the corner.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  if (LINE.length < 1 || LINE.length > 120) {
    throw new Error(`entry is ${LINE.length} chars, gate needs 1-120`);
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
