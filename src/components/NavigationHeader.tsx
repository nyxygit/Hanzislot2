"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavigationHeaderProps {
  title?: string;
  showBack?: boolean;
  backHref?: string;
  /** Current question index (0-based) */
  currentQuestion?: number;
  /** Total number of questions */
  totalQuestions?: number;
}

export default function NavigationHeader({
  title,
  showBack = true,
  backHref = "/",
  currentQuestion,
  totalQuestions,
}: NavigationHeaderProps) {
  const router = useRouter();

  return (
    <header className="bg-[var(--color-primary)] text-white hero-roof">
      <div className="max-w-4xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {showBack && (
            <button
              onClick={() => router.push(backHref)}
              className="text-white/80 hover:text-white transition-colors text-lg"
              aria-label="Go back"
            >
              ←
            </button>
          )}
          <Link href="/" className="font-bold text-lg md:text-xl tracking-tight">
            HanziSlot
          </Link>
        </div>

        {/* Question progress — centered */}
        {currentQuestion !== undefined && totalQuestions !== undefined && (
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <span className="text-xs md:text-sm font-medium text-white/80">
              {currentQuestion + 1}/{totalQuestions}
            </span>
            <div className="flex gap-1">
              {Array.from({ length: totalQuestions }, (_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-colors ${
                    i < currentQuestion
                      ? "bg-white/80"
                      : i === currentQuestion
                      ? "bg-white"
                      : "bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {title && (
          <span className="text-sm md:text-base font-medium text-white/90 truncate max-w-[160px] md:max-w-[200px]">
            {title}
          </span>
        )}
      </div>
    </header>
  );
}
