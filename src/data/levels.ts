import { Level } from "@/types";

// Import 是 pattern sub-levels
import { shi01Basics } from "./levels/shi/shi-01-basics";
import { shi02Professions } from "./levels/shi/shi-02-professions";
import { shi03Identity } from "./levels/shi/shi-03-identity";

// Import 很 pattern sub-levels
import { hen01Basics } from "./levels/hen/hen-01-basics";
import { hen02FoodTaste } from "./levels/hen/hen-02-food-taste";
import { hen03PeopleFeelings } from "./levels/hen/hen-03-people-feelings";

// All levels in order
export const allLevels: Level[] = [
  shi01Basics,
  shi02Professions,
  shi03Identity,
  hen01Basics,
  hen02FoodTaste,
  hen03PeopleFeelings,
];

// Index levels by ID for quick lookup
export const levelMap: Record<string, Level> = {};
for (const level of allLevels) {
  levelMap[level.id] = level;
}

export function getLevelById(id: string): Level | undefined {
  return levelMap[id];
}

export function getLevels(): Level[] {
  return allLevels;
}

export function getLevelsByPattern(patternId: string): Level[] {
  return allLevels.filter((l) => l.pattern.id === patternId);
}

// For future backend: this function simulates async loading
export async function loadLevel(id: string): Promise<Level | undefined> {
  return Promise.resolve(getLevelById(id));
}

export async function loadAllLevels(): Promise<Level[]> {
  return Promise.resolve(getLevels());
}
