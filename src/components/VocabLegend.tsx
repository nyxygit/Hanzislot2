"use client";

import React from "react";
import { VocabEntry } from "@/types";
import { speakChinese } from "@/lib/tts";

interface VocabLegendProps {
  vocabulary: VocabEntry[];
}

const posLabels: Record<string, string> = {
  subject: "Subject",
  verb: "Verb",
  object: "Object",
  adjective: "Adjective",
  noun: "Noun",
  particle: "Connector",
};

export default function VocabLegend({ vocabulary }: VocabLegendProps) {
  // Group vocabulary by part of speech
  const grouped = vocabulary.reduce<Record<string, VocabEntry[]>>((acc, entry) => {
    const key = entry.partOfSpeech;
    if (!acc[key]) acc[key] = [];
    acc[key].push(entry);
    return acc;
  }, {});

  const posOrder = ["subject", "particle", "noun", "adjective", "verb", "object"];

  return (
    <div className="w-full mb-4 bg-[var(--color-paper-dark)] rounded-xl p-4 border border-[var(--color-wood)]/20">
      <h3 className="text-sm font-bold text-[var(--color-ink)] mb-3">
        Level Vocabulary
      </h3>
      <div className="space-y-3">
        {posOrder.map((pos) => {
          const entries = grouped[pos];
          if (!entries || entries.length === 0) return null;
          return (
            <div key={pos}>
              <span className="text-[10px] sm:text-xs font-semibold text-[var(--color-wood)] uppercase tracking-widest">
                {posLabels[pos] || pos}
              </span>
              <div className="flex flex-nowrap gap-2 mt-1.5 overflow-x-auto overscroll-x-contain pb-1 scrollbar-thin">
                {entries.map((entry) => (
                  <div
                    key={entry.chinese}
                    onClick={() => speakChinese(entry.chinese)}
                    className="bg-white rounded-xl p-3 border border-[var(--color-wood)]/10 shadow-sm cursor-pointer hover:bg-[var(--color-primary-light)] hover:shadow-md hover:-translate-y-0.5 transition-all text-center shrink-0"
                    title="Click to hear pronunciation"
                  >
                    <div className="font-chinese font-black text-2xl text-[var(--color-primary)] leading-none mb-1">
                      {entry.chinese}
                    </div>
                    <div className="text-[11px] text-[var(--color-wood)] font-medium">
                      {entry.pinyin}
                    </div>
                    <div className="text-[10px] text-[var(--color-ink)]/50 mt-0.5">
                      {entry.english}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
