"use client";

import React, { useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { getLevelStarRating } from "@/engine/validation";

interface LevelCompleteOverlayProps {
  show: boolean;
  score: number;
  maxScore: number;
  thresholds: [number, number, number];
  onRetry: () => void;
}

export default function LevelCompleteOverlay({
  show,
  score,
  maxScore,
  thresholds,
  onRetry,
}: LevelCompleteOverlayProps) {
  const router = useRouter();
  const stars = getLevelStarRating(score, thresholds);
  const goHome = useCallback(() => router.push("/"), [router]);

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
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-6">
              Level Complete!
            </h2>

            {/* Back to Home button */}
            <button
              onClick={goHome}
              className="block w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center text-lg cursor-pointer"
            >
              Back to Home
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
