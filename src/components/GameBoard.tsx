"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGameContext } from "@/context/GameContext";
import { Level, PartOfSpeech, SentencePart } from "@/types";
import SlotColumn from "./SlotColumn";
import EnglishSentence from "./EnglishSentence";
import LevelCompleteOverlay from "./LevelCompleteOverlay";
import VocabLegend from "./VocabLegend";
import { validateAnswer, calculateStars, getLevelStarRating } from "@/engine/validation";
import { submitScore } from "@/lib/api";
import { speakChinese } from "@/lib/tts";

// Check if a slot part is invariant across all sentences in the level.
function isSlotFixed(level: Level, partIndex: number): boolean {
  if (!level || level.sentences.length === 0) return false;
  const sentencesWithIndex = level.sentences.filter(
    (s) => s.parts.length > partIndex
  );
  if (sentencesWithIndex.length < level.sentences.length) return false;
  const firstVal = sentencesWithIndex[0].parts[partIndex]?.chinese;
  if (!firstVal) return false;
  return sentencesWithIndex.every(
    (s) => s.parts[partIndex]?.chinese === firstVal
  );
}

function getFixedSlotIndices(level: Level): number[] {
  const indices: number[] = [];
  if (!level || level.sentences.length === 0) return indices;
  const maxParts = Math.max(...level.sentences.map((s) => s.parts.length));
  for (let i = 0; i < maxParts; i++) {
    if (isSlotFixed(level, i)) indices.push(i);
  }
  return indices;
}

const posLabels: Record<PartOfSpeech, string> = {
  subject: "Subject",
  verb: "Verb",
  object: "Object",
  adjective: "Adjective",
  noun: "Noun",
  particle: "Particle",
};

function StaticPartBadge({ part }: { part: SentencePart }) {
  const posLabel = posLabels[part.partOfSpeech] || part.partOfSpeech;
  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2 select-none snap-start shrink-0">
      <span className="text-[10px] sm:text-xs font-semibold text-[var(--color-wood)] uppercase tracking-widest">
        {posLabel}
      </span>
      <div className="relative min-w-24 h-44 sm:h-60 flex items-center justify-center px-4">
        <span className="font-black font-chinese leading-none text-xl sm:text-4xl md:text-5xl text-[var(--color-primary)] whitespace-nowrap">
          {part.chinese}
        </span>
      </div>
      <span className="text-[11px] sm:text-sm text-[var(--color-wood)] font-medium">
        {part.pinyin}
      </span>
    </div>
  );
}

export default function GameBoard() {
  const { state, selectOption, confirmAnswer, nextSentence, retrySentence, isLoading } =
    useGameContext();
  const slotsContainerRef = useRef<HTMLDivElement>(null);
  const [slotsOverflow, setSlotsOverflow] = useState(false);
  const [showVocabPopup, setShowVocabPopup] = useState(false);

  useEffect(() => {
    const el = slotsContainerRef.current;
    if (!el) return;
    const check = () => setSlotsOverflow(el.scrollWidth > el.clientWidth);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [state.currentSentence]);

  // Save score when level is completed
  useEffect(() => {
    if (state.phase === "levelComplete" && state.level) {
      const stars = getLevelStarRating(state.overallScore, state.level.starThresholds);
      submitScore(state.level.id, state.overallScore, stars);
    }
  }, [state.phase, state.level, state.overallScore]);

  // Speak the correct Chinese sentence aloud when answered correctly
  useEffect(() => {
    if ((state.phase === "result" || state.phase === "levelComplete") && state.currentSentence) {
      const sentence = state.currentSentence.parts.map((p) => p.chinese).join("");
      speakChinese(sentence);
    }
  }, [state.phase, state.currentSentence]);

  const fixedSlotIndices = useMemo(
    () => (state.level ? getFixedSlotIndices(state.level) : []),
    [state.level]
  );

  const staticIndices = useMemo(
    () =>
      state.currentSentence
        ? state.currentSentence.parts
            .map((part, i) => (part.static ? i : -1))
            .filter((i) => i >= 0)
        : [],
    [state.currentSentence]
  );

  const skipIndices = useMemo(
    () => [...fixedSlotIndices, ...staticIndices],
    [fixedSlotIndices, staticIndices]
  );

  const handleConfirm = useMemo(
    () => () => confirmAnswer(skipIndices),
    [confirmAnswer, skipIndices]
  );

  const validationResult = useMemo(() => {
    if (!state.currentSentence || !state.level) return null;
    if (state.phase === "result" || state.phase === "checking") {
      return validateAnswer(state.slots, state.currentSentence, skipIndices);
    }
    return null;
  }, [state.phase, state.slots, state.currentSentence, skipIndices, state.level]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-[var(--color-primary-light)] border-t-[var(--color-primary)] rounded-full animate-spin mx-auto mb-4" />
          <p className="text-[var(--color-wood)]">Loading level...</p>
        </div>
      </div>
    );
  }

  if (!state.level || !state.currentSentence) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-[var(--color-wood)]">Level not found.</p>
      </div>
    );
  }

  const { currentSentence, slots, currentSentenceIndex, totalSentences, phase, overallScore } =
    state;
  const isAnswered = phase === "result" || phase === "checking";
  const isCorrect = phase === "result";

  const currentProgress = state.sentenceProgress[currentSentenceIndex];
  const currentAttempts = currentProgress.attempts;

  let resultStars = 0;
  let correctSentenceStr = "";
  if (validationResult) {
    resultStars = validationResult.allCorrect ? calculateStars(currentAttempts) : 0;
    correctSentenceStr = validationResult.correctSentence;
  }

  const speakSentence = () => {
    if (correctSentenceStr) {
      speakChinese(correctSentenceStr);
    }
  };

  const handleNext = () => {
    if (phase === "levelComplete") return;
    nextSentence();
  };

  const handleRetry = () => {
    retrySentence();
  };

  const handleLevelRetry = () => {
    if (state.level) {
      retrySentence();
    }
  };

  // Build the slot/static-part elements array
  const slotElements: React.ReactNode[] = [];
  let quizzedIndex = 0;
  for (let i = 0; i < currentSentence.parts.length; i++) {
    const part = currentSentence.parts[i];
    if (part.static) {
      slotElements.push(
        <StaticPartBadge key={`static-${currentSentence.id}-${i}`} part={part} />
      );
    } else {
      const slot = slots[i];
      const structureIndex = quizzedIndex;
      quizzedIndex++;
      const fixed = state.level ? isSlotFixed(state.level, i) : false;
      const fixedSelectedIndex = fixed && currentSentence
        ? slot.options.indexOf(currentSentence.parts[i]?.chinese)
        : slot.selectedIndex;

      slotElements.push(
        <div key={`slot-${currentSentence.id}-${i}`} className="snap-start shrink-0">
          <SlotColumn
            options={slot.options}
            selectedIndex={fixedSelectedIndex >= 0 ? fixedSelectedIndex : slot.selectedIndex}
            label={state.level!.pattern.structure[structureIndex]}
            partOfSpeech={currentSentence.parts[i]?.partOfSpeech as PartOfSpeech}
            isCorrect={slot.isCorrect}
            hasBeenChecked={slot.hasBeenChecked}
            pinyin={slot.pinyin}
            english={slot.english}
            optionPinyins={slot.optionPinyins}
            optionEnglishs={slot.optionEnglishs}
            onSelect={(option) => selectOption(i, option)}
            disabled={phase === "result" || (phase === "checking" && slot.isCorrect === true)}
            fixed={fixed}
          />
        </div>
      );
    }
  }

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 py-3 md:py-6 min-h-dvh md:min-h-0">
      {/* English Sentence */}
      <EnglishSentence
        sentence={currentSentence.english}
        sentenceIndex={currentSentenceIndex}
        totalSentences={totalSentences}
      />

      {/* Pattern badge + Vocab toggle */}
      <div className="mb-2 md:mb-6 flex items-center gap-2">
        <span className="text-[10px] sm:text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary-light)] px-3 py-1 rounded-full">
          Pattern: {state.level.pattern.name}
        </span>
        <button
          onClick={() => setShowVocabPopup(true)}
          className="text-[10px] sm:text-xs font-medium text-[var(--color-wood)] bg-[var(--color-paper-dark)] hover:bg-[var(--color-gold-light)] px-3 py-1 rounded-full transition-colors"
        >
          Vocabulary
        </button>
      </div>

      {/* VocabLegend popup overlay */}
      {showVocabPopup && state.level.vocabulary && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setShowVocabPopup(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[var(--color-paper)] rounded-2xl shadow-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto border border-[var(--color-gold)]/30 relative"
          >
            <button
              onClick={() => setShowVocabPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[var(--color-wood)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-dark)] transition-colors text-lg"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="text-center mb-4">
              <h2 className="text-lg font-bold text-[var(--color-ink)]">
                Level Vocabulary
              </h2>
            </div>
            <VocabLegend vocabulary={state.level.vocabulary} />
          </div>
        </div>
      )}

      {/* Scroll zone */}
      <div className="flex-1 w-[calc(100%+2rem)] -mx-4 overflow-x-auto overscroll-x-contain scrollbar-thick md:mx-0 md:w-full md:flex-none md:min-h-0 md:mb-8">
        <div
          ref={slotsContainerRef}
          className={`
            flex flex-nowrap gap-3 md:gap-6
            pl-6 pr-4 md:px-4
            ${slotsOverflow ? "justify-start" : "justify-center"}
          `}
        >
          {slotElements}
        </div>
      </div>

      {/* Submit / Action Button */}
      <div className="
        sticky bottom-0
        w-full
        bg-gradient-to-t from-[var(--color-paper)] via-[var(--color-paper)]/95 to-transparent
        pt-3 pb-4 md:pb-0 md:pt-0
        md:bg-none md:static md:w-auto
        flex flex-col items-center
      ">
        {!isAnswered ? (
          <button
            onClick={handleConfirm}
            className="
              bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold
              py-3 md:py-4 px-10 md:px-14 rounded-xl text-lg md:text-xl
              transition-all duration-200
              hover:shadow-xl hover:shadow-[var(--color-primary)]/20 active:scale-95
              w-full max-w-xs md:w-auto
            "
          >
            Check Answer
          </button>
        ) : isCorrect ? (
          <>
            <button
              onClick={handleNext}
              className="
                bg-[var(--color-jade)] hover:bg-[#266648] text-white font-bold
                py-3 md:py-4 px-10 md:px-14 rounded-xl text-lg md:text-xl
                transition-all duration-200
                hover:shadow-xl hover:shadow-[var(--color-jade)]/20 active:scale-95
                w-full max-w-xs md:w-auto
              "
            >
              {currentSentenceIndex >= totalSentences - 1
                ? "Complete Level 🏆"
                : "Next Sentence →"}
            </button>
            <button
              onClick={speakSentence}
              className="
                mt-2 md:mt-3 text-[var(--color-wood)] hover:text-[var(--color-primary)]
                transition-colors duration-200 text-xl md:text-2xl
                active:scale-95
              "
              aria-label="Replay audio"
              title="Listen again"
            >
              🔊
            </button>
          </>
        ) : (
          <button
            onClick={handleConfirm}
            className="
              bg-[var(--color-gold)] hover:bg-[#b8922e] text-white font-bold
              py-3 md:py-4 px-10 md:px-14 rounded-xl text-lg md:text-xl
              transition-all duration-200
              hover:shadow-xl hover:shadow-[var(--color-gold)]/20 active:scale-95
              w-full max-w-xs md:w-auto
            "
          >
            Check Again
          </button>
        )}
      </div>

      {/* Level Complete Overlay */}
      <LevelCompleteOverlay
        show={phase === "levelComplete"}
        score={overallScore}
        maxScore={totalSentences * 3}
        thresholds={state.level.starThresholds}
        onRetry={handleLevelRetry}
      />
    </div>
  );
}
