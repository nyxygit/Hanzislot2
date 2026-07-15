import { Level } from "@/types";
import { loadLevel, loadAllLevels } from "@/data/levels";

// API abstraction layer
// Currently uses static data. When a backend is ready:
// 1. Replace import with fetch() calls
// 2. Keep the same function signatures
// 3. No other code needs to change

export interface UserProgress {
  userId?: string;
  currentLevel: string;
  completedLevels: Record<string, LevelCompletion>;
}

export interface LevelCompletion {
  stars: number;
  score: number;
  completed: boolean;
}

/**
 * Get all available levels
 */
export async function fetchLevels(): Promise<Level[]> {
  return loadAllLevels();
}

/**
 * Get a single level by ID
 */
export async function fetchLevel(id: string): Promise<Level | undefined> {
  return loadLevel(id);
}

/**
 * Get user progress (stored in localStorage for now)
 */
export async function fetchUserProgress(): Promise<UserProgress> {
  if (typeof window === "undefined") {
    return { currentLevel: "shi-01", completedLevels: {} };
  }
  const stored = localStorage.getItem("hanzislot2-progress");
  if (stored) {
    return JSON.parse(stored);
  }
  return { currentLevel: "shi-01", completedLevels: {} };
}

/**
 * Save user progress
 */
export async function saveUserProgress(progress: UserProgress): Promise<void> {
  if (typeof window !== "undefined") {
    localStorage.setItem("hanzislot2-progress", JSON.stringify(progress));
  }
}

/**
 * Submit a score for a level
 */
export async function submitScore(
  levelId: string,
  score: number,
  stars: number
): Promise<void> {
  const progress = await fetchUserProgress();
  const existing = progress.completedLevels[levelId];
  if (!existing || score > existing.score) {
    progress.completedLevels[levelId] = { stars, score, completed: true };
    await saveUserProgress(progress);
  }
}
