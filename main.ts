import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Sorry, my router died halfway through the GTA 6 download " +
  "and the engineer can't come till Thursday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
