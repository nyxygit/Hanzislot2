"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ResultOverlayProps {
  show: boolean;
  allCorrect: boolean;
  stars: number;
  correctSentence: string;
  onNext: () => void;
  onRetry: () => void;
  isLastSentence: boolean;
}

export default function ResultOverlay({
  show,
  allCorrect,
  stars,
  correctSentence,
  onNext,
  onRetry,
  isLastSentence,
}: ResultOverlayProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="bg-[var(--color-paper)] rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center border border-[var(--color-gold)]/30"
          >
            {allCorrect ? (
              <>
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-[var(--color-ink)] mb-2">
                  Correct!
                </h3>
                <div className="flex justify-center gap-1 mb-4">
                  {[1, 2, 3].map((star) => (
                    <span
                      key={star}
                      className={`text-2xl ${
                        star <= stars ? "text-[var(--color-gold)]" : "text-[var(--color-paper-dark)]"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="bg-[var(--color-paper-dark)] rounded-lg p-3 mb-6">
                  <p className="text-lg font-bold text-[var(--color-primary)]">
                    {correctSentence}
                  </p>
                  <p className="text-xs text-[var(--color-wood)] mt-1">
                    {stars === 3
                      ? "Perfect! First try!"
                      : stars === 2
                      ? "Great! Got it on the second try!"
                      : "Good effort!"}
                  </p>
                </div>
                <button
                  onClick={onNext}
                  className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  {isLastSentence ? "Complete Level 🏆" : "Next Sentence →"}
                </button>
              </>
            ) : (
              <>
                <div className="text-5xl mb-4">🤔</div>
                <h3 className="text-xl font-bold text-[var(--color-ink)] mb-2">
                  Not quite right
                </h3>
                <p className="text-sm text-[var(--color-wood)] mb-4">
                  Some slots have the wrong word. Try again!
                </p>
                <div className="bg-[var(--color-paper-dark)] rounded-lg p-3 mb-6">
                  <p className="text-sm text-[var(--color-wood)] mb-1">Correct answer:</p>
                  <p className="text-lg font-bold text-[var(--color-jade)]">
                    {correctSentence}
                  </p>
                </div>
                <button
                  onClick={onRetry}
                  className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Try Again 🔄
                </button>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
