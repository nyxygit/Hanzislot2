"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VocabEntry } from "@/types";
import VocabLegend from "./VocabLegend";

interface VocabPreviewProps {
  show: boolean;
  levelName: string;
  vocabulary: VocabEntry[];
  onStart: () => void;
  onClose?: () => void;
}

export default function VocabPreview({ show, levelName, vocabulary, onStart, onClose }: VocabPreviewProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[var(--color-paper)] rounded-2xl shadow-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto border border-[var(--color-gold)]/30 relative"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[var(--color-wood)] hover:text-[var(--color-ink)] hover:bg-[var(--color-paper-dark)] transition-colors text-lg"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-[var(--color-ink)]">
                Vocabulary Preview
              </h2>
              <p className="text-sm text-[var(--color-wood)] mt-1">
                Review these words before you start practicing — click any card to hear pronunciation
              </p>
            </div>

            <VocabLegend vocabulary={vocabulary} />

            <button
              onClick={onStart}
              className="w-full mt-6 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold py-3 px-6 rounded-xl transition-colors text-lg"
            >
              Start Practice →
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
