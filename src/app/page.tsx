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
  const mixLevels = levels.filter((l) => l.pattern.id === "s-mix");
  const shiLevels = levels.filter((l) => l.pattern.id === "s-shi-n");
  const henLevels = levels.filter((l) => l.pattern.id === "s-hen-adj");
  const yinggaiLevels = levels.filter((l) => l.pattern.id === "s-yinggai-v");
  const haishiLevels = levels.filter((l) => l.pattern.id === "s-haishi-n");
  const huozheLevels = levels.filter((l) => l.pattern.id === "s-huozhe-n");
  const svoLevels = levels.filter((l) => l.pattern.id === "s-v-o");
  const youLevels = levels.filter((l) => l.pattern.id === "s-you-o");
  const zaiLevels = levels.filter((l) => l.pattern.id === "s-zai-o");
  const leLevels = levels.filter((l) => l.pattern.id === "s-le-v-o");
  const zhengzaiLevels = levels.filter((l) => l.pattern.id === "s-zhengzai-ne");
  const yaoLevels = levels.filter((l) => l.pattern.id === "s-yao-o");
  const xiangLevels = levels.filter((l) => l.pattern.id === "s-xiang-v");
  const xuyaoLevels = levels.filter((l) => l.pattern.id === "s-xuyao-o");
  const dirLevels = levels.filter((l) => l.pattern.id === "s-dir");

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
        {/* Mix Challenge */}
        {mixLevels.length > 0 && (
          <section className="mb-12">
            <div className="mb-4">
              <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
                🎲 Mix Challenge
              </h2>
              <p className="text-sm text-[var(--color-wood)] mt-1">
                A random mix of 10 sentences from all patterns. Test your overall Chinese skills!
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {mixLevels.map((level) => {
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
        )}

        {/* Pattern: Subject + 是 + Noun */}
        <section className="mb-12">
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
        <section className="mb-12">
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

        {/* Pattern: Subject + 应该 + Verb */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
              Subject + 应该 + Verb
            </h2>
            <p className="text-sm text-[var(--color-wood)] mt-1">
              Use 应该 (yīnggāi) to say what someone should or ought to do, like English &ldquo;should&rdquo;.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {yinggaiLevels.map((level) => {
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

        {/* Pattern: Noun + 还是 + Noun (Questions) */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
              ❓ Noun + 还是 + Noun — Questions
            </h2>
            <p className="text-sm text-[var(--color-wood)] mt-1">
              Use 还是 (háishì) to ask &ldquo;or&rdquo; questions offering alternatives, like English &ldquo;A or B?&rdquo;.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {haishiLevels.map((level) => {
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

        {/* Pattern: Noun + 或者 + Noun (Statements) */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
              📝 Noun + 或者 + Noun — Statements
            </h2>
            <p className="text-sm text-[var(--color-wood)] mt-1">
              Use 或者 (huòzhě) to say &ldquo;or&rdquo; in statements presenting options, like English &ldquo;A or B&rdquo;.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {huozheLevels.map((level) => {
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

        {/* Pattern: Subject + Verb + Object */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
              Subject + Verb + Object
            </h2>
            <p className="text-sm text-[var(--color-wood)] mt-1">
              The basic Chinese sentence structure: who does what to what. Each sub-level focuses on one common verb.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {svoLevels.map((level) => {
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

        {/* Pattern: Subject + 有 + Object */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
              Subject + 有 + Object
            </h2>
            <p className="text-sm text-[var(--color-wood)] mt-1">
              Use 有 (yǒu) to express possession or existence, like English &ldquo;have&rdquo; or &ldquo;there is&rdquo;.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {youLevels.map((level) => {
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

        {/* Pattern: Subject + 在 + Location */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
              Subject + 在 + Location
            </h2>
            <p className="text-sm text-[var(--color-wood)] mt-1">
              Use 在 (zài) to say where someone or something is located, like English &ldquo;at&rdquo;, &ldquo;in&rdquo;, or &ldquo;on&rdquo;.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {zaiLevels.map((level) => {
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

        {/* Pattern: Subject + Verb + 了 + Object */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
              Subject + Verb + 了 + Object
            </h2>
            <p className="text-sm text-[var(--color-wood)] mt-1">
              Add 了 (le) after a verb to show an action has been completed, like English past tense.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {leLevels.map((level) => {
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

        {/* Pattern: Subject + 正在 + Verb + 呢 */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
              Subject + 正在 + Verb + 呢
            </h2>
            <p className="text-sm text-[var(--color-wood)] mt-1">
              Use 正在...呢 (zhèngzài...ne) to describe an action in progress, like English &ldquo;-ing&rdquo;.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {zhengzaiLevels.map((level) => {
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

        {/* Pattern: Subject + 要 + Object */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
              Subject + 要 + Object — Want
            </h2>
            <p className="text-sm text-[var(--color-wood)] mt-1">
              Use 要 (yào) to say what you want — direct and intentional. Stronger than 想.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {yaoLevels.map((level) => {
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

        {/* Pattern: Subject + 想 + Verb */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
              Subject + 想 + Verb — Would Like
            </h2>
            <p className="text-sm text-[var(--color-wood)] mt-1">
              Use 想 (xiǎng) to say what you would like — softer and more polite than 要.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {xiangLevels.map((level) => {
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

        {/* Pattern: Subject + 需要 + Object */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
              Subject + 需要 + Object — Need
            </h2>
            <p className="text-sm text-[var(--color-wood)] mt-1">
              Use 需要 (xū yào) to express necessity — what you need.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {xuyaoLevels.map((level) => {
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

        {/* Pattern: Directions */}
        <section className="mb-12">
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold text-[var(--color-ink)]">
              🧭 Directions
            </h2>
            <p className="text-sm text-[var(--color-wood)] mt-1">
              Learn to give and understand directions — from simple commands to full multi-step directions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {dirLevels.map((level) => {
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
