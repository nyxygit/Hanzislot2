"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Level } from "@/types";
import { fetchLevels, fetchUserProgress, UserProgress } from "@/lib/api";
import LevelSelectCard from "@/components/LevelSelectCard";
import VocabPreview from "@/components/VocabPreview";

export default function Home() {
  const router = useRouter();
  const [levels, setLevels] = useState<Level[]>([]);
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);
  const [vocabPreviewLevel, setVocabPreviewLevel] = useState<Level | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const [fetchedLevels, userProgress] = await Promise.all([
          fetchLevels(),
          fetchUserProgress(),
        ]);
        setLevels(fetchedLevels);
        setProgress(userProgress);
      } catch (error) {
        console.error("Failed to load levels:", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Group levels by pattern
  const shiLevels = levels.filter((l) => l.pattern.id === "s-shi-n");
  const henLevels = levels.filter((l) => l.pattern.id === "s-hen-adj");

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[var(--color-paper)]">
        <div className="w-12 h-12 border-4 border-[var(--color-primary-light)] border-t-[var(--color-primary)] rounded-full animate-spin mb-4" />
        <p className="text-[var(--color-wood)] font-medium">Loading HanziSlot...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[var(--color-primary)] via-[#a01830] to-[#7a1224] text-white hero-roof">
        <div className="max-w-4xl mx-auto px-4 py-10 md:py-14 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-2">
            HanziSlot
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-md mx-auto">
            Master Chinese sentence structures one pattern at a time
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-10">
        {/* Pattern: Subject + 是 + Noun */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
              Subject + 是 + Noun
            </h2>
            <p className="text-sm text-[var(--color-wood)] mt-1">
              Use 是 (shì) to say what someone or something is, like English &ldquo;is/am/are&rdquo;.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {shiLevels.map((level) => {
              const completedLevel = progress?.completedLevels[level.id];
              const bestStars = completedLevel?.stars ?? 0;
              const bestScore = completedLevel?.score ?? 0;
              const maxScore = level.sentences.length * 3;

              return (
                <LevelSelectCard
                  key={level.id}
                  level={level}
                  stars={bestStars}
                  completed={completedLevel?.completed ?? false}
                  score={bestScore}
                  maxScore={maxScore}
                  onVocabClick={() => setVocabPreviewLevel(level)}
                />
              );
            })}
          </div>
        </section>

        {/* Pattern: Subject + 很 + Adjective */}
        <section>
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
              Subject + 很 + Adjective
            </h2>
            <p className="text-sm text-[var(--color-wood)] mt-1">
              Use 很 (hěn) to connect a subject with an adjective. In Chinese, 很 is used even when &ldquo;very&rdquo; isn&rsquo;t intended.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {henLevels.map((level) => {
              const completedLevel = progress?.completedLevels[level.id];
              const bestStars = completedLevel?.stars ?? 0;
              const bestScore = completedLevel?.score ?? 0;
              const maxScore = level.sentences.length * 3;

              return (
                <LevelSelectCard
                  key={level.id}
                  level={level}
                  stars={bestStars}
                  completed={completedLevel?.completed ?? false}
                  score={bestScore}
                  maxScore={maxScore}
                  onVocabClick={() => setVocabPreviewLevel(level)}
                />
              );
            })}
          </div>
        </section>
      </div>

      {/* Vocab Preview Modal */}
      {vocabPreviewLevel && vocabPreviewLevel.vocabulary && (
        <VocabPreview
          show={true}
          levelName={vocabPreviewLevel.name}
          vocabulary={vocabPreviewLevel.vocabulary}
          onClose={() => setVocabPreviewLevel(null)}
          onStart={() => {
            setVocabPreviewLevel(null);
            router.push(`/game/${vocabPreviewLevel.id}`);
          }}
        />
      )}
    </div>
  );
}
