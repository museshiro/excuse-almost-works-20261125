import { mkdirSync, writeFileSync } from "node:fs";

// The excuse: a boring, specific delivery detail a tired manager would
// almost believe — until the penny drops that the delivery is a graphics card.
const SETUP = "The graphics card delivery needs a signature today,";
const PUNCH = " it's the only slot they offered.";

const LINE = SETUP + PUNCH;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
