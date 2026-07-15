"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import NavigationHeader from "@/components/NavigationHeader";
import { getLevelsByPattern, getLevelById } from "@/data/levels";

export default function StructureDetailPage() {
  const params = useParams();
  const patternId = params.levelId as string;

  // Map pattern IDs to display info
  const patternInfo: Record<string, { name: string; description: string; structure: string }> = {
    "s-shi-n": {
      name: "Subject + 是 + Noun",
      description: "Use 是 (shì) to say what someone or something is, like English 'is/am/are'. This is one of the most fundamental Chinese sentence patterns.",
      structure: "Subject → 是 → Noun",
    },
    "s-hen-adj": {
      name: "Subject + 很 + Adjective",
      description: "Use 很 (hěn) to connect a subject with an adjective. In Chinese, 很 is used as a linking word even when 'very' isn't intended — it's grammatically required between a subject and an adjective.",
      structure: "Subject → 很 → Adjective",
    },
  };

  const info = patternInfo[patternId];
  const subLevels = getLevelsByPattern(patternId);

  if (!info) {
    return (
      <div className="min-h-screen bg-[var(--color-paper)]">
        <NavigationHeader title="Pattern Not Found" />
        <div className="max-w-4xl mx-auto px-4 py-10 text-center">
          <p className="text-[var(--color-wood)]">This sentence pattern could not be found.</p>
          <Link href="/" className="text-[var(--color-primary)] hover:underline mt-4 inline-block">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      <NavigationHeader title={info.name} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Pattern Info */}
        <div className="bg-[var(--color-paper-dark)] rounded-xl p-6 border border-[var(--color-wood)]/20 mb-8">
          <h1 className="text-2xl font-bold text-[var(--color-ink)] mb-2">{info.name}</h1>
          <p className="text-[var(--color-wood)] mb-4">{info.description}</p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-semibold text-[var(--color-primary)] bg-[var(--color-primary-light)] px-3 py-1 rounded-full">
              Structure
            </span>
            <span className="text-sm font-chinese font-bold text-[var(--color-ink)]">
              {info.structure}
            </span>
          </div>
        </div>

        {/* Sub-levels */}
        <h2 className="text-lg font-bold text-[var(--color-ink)] mb-4">Practice Levels</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {subLevels.map((level) => (
            <Link
              key={level.id}
              href={`/game/${level.id}`}
              className="block bg-[var(--color-paper-dark)] rounded-xl p-5 border border-[var(--color-wood)]/20 hover:border-[var(--color-primary)]/40 hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-primary-light)] group-hover:bg-[var(--color-primary)]/20 flex items-center justify-center transition-colors">
                  <span className="text-lg font-bold text-[var(--color-primary)]">
                    {level.subLevelIndex}/{level.pattern.subLevels}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                    {level.name}
                  </h3>
                  <p className="text-xs text-[var(--color-wood)]">
                    {level.sentences.length} sentences
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
