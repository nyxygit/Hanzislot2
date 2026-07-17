"use client";

import React, { useCallback, useRef, useEffect, useState } from "react";
import { PartOfSpeech } from "@/types";
import { motion, AnimatePresence } from "framer-motion";

interface SlotColumnProps {
  options: string[];
  selectedIndex: number;
  label: string;
  partOfSpeech: PartOfSpeech;
  isCorrect: boolean | null;
  hasBeenChecked: boolean;
  pinyin: string;
  english: string;
  optionPinyins: string[];     // pinyin for each option, parallel to options[]
  optionEnglishs: string[];    // english for each option, parallel to options[]
  onSelect: (option: string) => void;
  disabled?: boolean;
  fixed?: boolean;
  showPinyin?: boolean;
}

const partOfSpeechLabels: Record<PartOfSpeech, string> = {
  subject: "Subject",
  verb: "Verb",
  object: "Object",
  adjective: "Adjective",
  noun: "Noun",
  particle: "Particle",
};

const DEFAULT_ITEM_HEIGHT = 80;

export default function SlotColumn({
  options,
  selectedIndex,
  label,
  partOfSpeech,
  isCorrect,
  hasBeenChecked,
  pinyin,
  english,
  optionPinyins,
  optionEnglishs,
  onSelect,
  disabled = false,
  fixed = false,
  showPinyin = true,
}: SlotColumnProps) {
  const selectedPinyin = optionPinyins[selectedIndex] ?? pinyin;
  const selectedEnglish = optionEnglishs[selectedIndex] ?? english;
  const directionRef = useRef(1);
  const reelRef = useRef<HTMLDivElement>(null);
  const touchStartY = useRef(0);

  const [itemHeight, setItemHeight] = useState(DEFAULT_ITEM_HEIGHT);

  useEffect(() => {
    const el = reelRef.current;
    if (!el) return;
    const updateHeight = () => {
      setItemHeight(el.offsetHeight / 3);
    };
    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const handleSelect = useCallback(
    (option: string) => {
      if (!disabled) onSelect(option);
    },
    [disabled, onSelect]
  );

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      if (disabled || options.length <= 1) return;
      const dir = e.deltaY < 0 ? 1 : -1;
      directionRef.current = dir;
      const N = options.length;
      const newIdx = ((selectedIndex + dir) % N + N) % N;
      onSelect(options[newIdx]);
    },
    [disabled, options, selectedIndex, onSelect]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (disabled || options.length <= 1) return;
      touchStartY.current = e.touches[0].clientY;
    },
    [disabled, options.length]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (disabled || options.length <= 1) return;
      const deltaY = e.touches[0].clientY - touchStartY.current;
      if (Math.abs(deltaY) > 30) {
        const dir = deltaY > 0 ? -1 : 1;
        directionRef.current = dir;
        const N = options.length;
        const newIdx = ((selectedIndex + dir) % N + N) % N;
        onSelect(options[newIdx]);
        touchStartY.current = e.touches[0].clientY;
      }
    },
    [disabled, options.length, selectedIndex, onSelect]
  );

  const handleItemClick = useCallback(
    (option: string) => {
      if (disabled) return;
      onSelect(option);
    },
    [disabled, onSelect]
  );

  const N = options.length;
  const items = [
    options[((selectedIndex - 1) % N + N) % N],
    options[selectedIndex],
    options[((selectedIndex + 1) % N + N) % N],
  ];

  const dir = directionRef.current;

  const borderStyle = hasBeenChecked
    ? isCorrect
      ? { borderColor: "var(--color-jade)" }
      : { borderColor: "var(--color-primary)" }
    : { borderColor: "rgba(139, 105, 20, 0.3)" };

  return (
    <div className="flex flex-col items-center gap-1 sm:gap-2">
      {/* Part of Speech Label */}
      <span className="text-[10px] sm:text-xs font-semibold text-[var(--color-wood)] uppercase tracking-widest">
        {partOfSpeechLabels[partOfSpeech] || label}
      </span>

      {fixed ? (
        /* Fixed slot — static display */
        <div className="relative w-24 h-44 sm:w-40 sm:h-60 flex items-center justify-center">
          <span className="font-black font-chinese leading-none text-xl sm:text-4xl md:text-5xl text-[var(--color-primary)]">
            {options[selectedIndex]}
          </span>
        </div>
      ) : (
        /* Slot Machine Reel */
        <div
          ref={reelRef}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          style={borderStyle}
          className={`relative w-24 h-44 sm:w-40 sm:h-60 overflow-hidden rounded-2xl border-2 transition-all duration-300 select-none touch-none ${
            hasBeenChecked
              ? isCorrect
                ? "shadow-lg"
                : "shadow-md"
              : "shadow-md"
          }`}
        >
          {/* Divider line above center */}
          <div
            className="absolute left-2 right-2 h-px bg-[var(--color-wood)]/20 z-10 pointer-events-none"
            style={{ top: itemHeight }}
          />
          {/* Divider line below center */}
          <div
            className="absolute left-2 right-2 h-px bg-[var(--color-wood)]/20 z-10 pointer-events-none"
            style={{ top: itemHeight * 2 }}
          />

          {/* 3 visible positions with synchronized slide animation */}
          {items.map((option, pos) => {
            const isCenter = pos === 1;
            return (
              <AnimatePresence key={`pos-${pos}`} mode="popLayout">
                <motion.div
                    key={option}
                    initial={{ y: dir * itemHeight, opacity: 0 }}
                    animate={{ y: 0, opacity: isCenter ? 1 : 0.25 }}
                    exit={{ opacity: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8,
                  }}
                  onClick={() => handleItemClick(option)}
                  className={`
                    absolute left-0 right-0
                    flex items-center justify-center
                    cursor-pointer select-none
                    ${disabled ? "cursor-not-allowed" : "hover:bg-[var(--color-primary-light)]/30"}
                  `}
                  style={{ top: pos * itemHeight, height: itemHeight }}
                >
                  <span
                    className={`
                      font-black font-chinese leading-none
                      text-xl sm:text-4xl md:text-5xl
                      text-[var(--color-primary)]
                    `}
                  >
                    {option}
                  </span>
                </motion.div>
              </AnimatePresence>
            );
          })}
        </div>
      )}

      {/* Pinyin — toggleable */}
      {showPinyin && (
        <p className="text-[11px] sm:text-sm text-[var(--color-wood)] font-medium md:mb-2">{selectedPinyin}</p>
      )}

      {/* English meaning — only shown after sentence is submitted */}
      {hasBeenChecked && (
        <p className="text-[10px] sm:text-xs text-[var(--color-ink)]/60">{selectedEnglish}</p>
      )}
    </div>
  );
}
