import { SentenceItem } from "@/types";

export interface StructureMatch {
  levelId: string;
  patternName: string;
}

/**
 * Match a sentence to its structure pattern.
 * For HanziSlot2, this is simplified since we only have two patterns.
 * Returns the pattern info for display purposes.
 */
export function matchSentenceToStructure(
  _sentence: SentenceItem
): StructureMatch | null {
  // In HanziSlot2, the structure is always determined by the level context.
  // This function exists for API compatibility with the GameBoard component.
  return null;
}
