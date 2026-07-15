"use client";

import React from "react";
import Link from "next/link";
import { Level } from "@/types";

interface LevelSelectCardProps {
  level: Level;
  stars: number;
  completed: boolean;
  score: number;
  maxScore: number;
  onVocabClick?: () => void;
}

/** Derive a short display title from the level name */
function getShortTitle(name: string): string {
  // If name contains " — ", take the part after it
  const parts = name.split(" — ");
  if (parts.length >= 2) {
    const suffix = parts[parts.length - 1];
    // Map "Basics" to "Intro"
    if (suffix === "Basics") return "Intro";
    return suffix;
  }
  return name;
}

export default function LevelSelectCard({
  level,
  stars,
  completed,
  score,
  maxScore,
  onVocabClick,
}: LevelSelectCardProps) {
  const shortTitle = getShortTitle(level.name);

  return (
    <div className="bg-[var(--color-paper-dark)] rounded-xl border border-[var(--color-wood)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-md transition-all group overflow-hidden">
      {/* Clickable title area */}
      <Link
        href={`/game/${level.id}`}
        className="block p-5 pb-3"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-light)] flex items-center justify-center shrink-0">
            <span className="text-lg font-bold text-[var(--color-primary)]">
              {level.subLevelIndex || "★"}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors truncate">
              {shortTitle}
            </h3>
          </div>
        </div>
      </Link>

      {/* Action buttons */}
      <div className="px-5 pb-5 pt-1">
        <div className="flex gap-2">
          {onVocabClick && level.vocabulary && level.vocabulary.length > 0 && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onVocabClick();
              }}
              className="flex-1 text-center text-xs font-semibold text-[var(--color-wood)] bg-[var(--color-paper)] hover:bg-[var(--color-gold-light)] border border-[var(--color-wood)]/20 px-3 py-2 rounded-lg transition-colors"
            >
              Vocabulary
            </button>
          )}
          <Link
            href={`/game/${level.id}`}
            className="flex-1 text-center text-xs font-semibold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] px-3 py-2 rounded-lg transition-colors"
          >
            Play
          </Link>
        </div>
      </div>
    </div>
  );
}
