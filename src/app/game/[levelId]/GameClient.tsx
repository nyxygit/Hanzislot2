"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { GameProvider, useGameContext } from "@/context/GameContext";
import GameBoard from "@/components/GameBoard";
import NavigationHeader from "@/components/NavigationHeader";
import VocabPreview from "@/components/VocabPreview";
import { getLevelById } from "@/data/levels";
import { Level } from "@/types";

function GameContent() {
  const params = useParams();
  const levelId = params.levelId as string;
  const { loadLevel, isLoading, state } = useGameContext();
  const [level, setLevel] = useState<Level | null>(null);
  const [showVocabPreview, setShowVocabPreview] = useState(false);

  useEffect(() => {
    const found = getLevelById(levelId);
    if (found) {
      setLevel(found);
      // Load the level into the game context so GameBoard can use it
      loadLevel(levelId);
    }
  }, [levelId, loadLevel]);

  const handleStartPractice = () => {
    setShowVocabPreview(false);
  };

  if (!level) {
    return (
      <div className="min-h-screen bg-[var(--color-paper)]">
        <NavigationHeader title="Loading..." />
        <div className="flex items-center justify-center py-20">
          <p className="text-[var(--color-wood)]">Level not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      <NavigationHeader
        title={level.name}
        currentQuestion={state.currentSentenceIndex}
        totalQuestions={state.totalSentences || undefined}
      />

      {/* Vocab Preview Overlay */}
      {level.vocabulary && (
        <VocabPreview
          show={showVocabPreview}
          levelName={level.name}
          vocabulary={level.vocabulary}
          onStart={handleStartPractice}
        />
      )}

      <GameBoard />
    </div>
  );
}

export default function GameClient() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}
