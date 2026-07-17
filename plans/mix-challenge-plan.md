# Plan: Mix Challenge Level

## Overview

Create a special "Mix Challenge" level that presents 10 random sentences pulled from all existing levels. This gives players a comprehensive review across all patterns.

## Approach

### Key Insight: Use `partOfSpeech` for Labels

Currently, slot labels come from `pattern.structure[structureIndex]`. For a mix level with diverse sentences, a single pattern structure won't fit all.

**Solution:** Modify `GameBoard.tsx` to use each part's own `partOfSpeech` as the slot label instead of the pattern structure. This is actually more accurate for ALL levels, not just the mix level.

**Change in GameBoard.tsx (line 210):**
```tsx
// Before:
label={state.level!.pattern.structure[structureIndex]}

// After:
label={currentSentence.parts[i]?.partOfSpeech as string}
```

This change is backward-compatible — existing levels will show the same labels since their `partOfSpeech` values match their pattern structures.

### Mix Level Design

Create a static level file with 10 sentences from across all pattern groups. The level has a generic pattern structure (won't be used for labels after the code change).

**Level ID:** `mix-challenge`
**Pattern ID:** `s-mix`
**Pattern structure:** `["subject", "particle", "verb", "object"]` (generic, won't affect labels)
**Star thresholds:** `[25, 18, 10]` (10 sentences × 3 max stars = 30 max)

### Sentence Selection (10 sentences, one from each pattern group)

| # | From | Sentence | English |
|---|------|----------|---------|
| 1 | shi-01 | 我是学生。 | I am a student. |
| 2 | hen-01 | 她很漂亮。 | She is beautiful. |
| 3 | yinggai-01 | 我应该学习。 | I should study. |
| 4 | haishi-01 | 你喝茶还是咖啡？ | Do you drink tea or coffee? |
| 5 | huozhe-01 | 我喝茶或者咖啡。 | I drink tea or coffee. |
| 6 | svo-01 | 我吃苹果。 | I eat apples. |
| 7 | you-01 | 我有一本书。 | I have a book. |
| 8 | zai-01 | 我在学校。 | I am at school. |
| 9 | le-01 | 我吃了苹果。 | I ate an apple. |
| 10 | svo-06 | 我去学校。 | I go to school. |

### GitHub Pages Compatibility

Since the app uses `output: "export"` with `basePath: "/Hanzislot2"`, the mix level is fully compatible:
- It's a static level file (no server-side generation needed)
- The `generateStaticParams` in `src/app/game/[levelId]/page.tsx` uses `allLevels` which will include `mix-challenge`
- The build will generate a static page at `/Hanzislot2/game/mix-challenge`

## Files to Create

### 1. `src/data/levels/mix-challenge.ts`
The level file with 10 sentences from various patterns.

## Files to Modify

### 2. `src/components/GameBoard.tsx`
Change line 210 to use `part.partOfSpeech` instead of `pattern.structure[structureIndex]` for slot labels.

### 3. `src/data/levels.ts`
- Import the mix challenge level
- Add it to the `allLevels` array at the beginning

### 4. `src/app/page.tsx`
- Add a special "Mix Challenge" section at the very top (before the pattern sections)
- Filter: `const mixLevels = levels.filter((l) => l.pattern.id === "s-mix");`

## Architecture

```mermaid
flowchart LR
    M[mix-challenge.ts] --> B[src/data/levels.ts]
    B --> C[src/app/page.tsx]
    B --> D[src/app/game/[levelId]/page.tsx]
    D --> E[GameClient loads level data]
    E --> F[GameBoard renders with partOfSpeech labels]
    G[GameBoard.tsx change] --> F
```

## Implementation Order

1. Modify `src/components/GameBoard.tsx` to use `partOfSpeech` for labels
2. Create `src/data/levels/mix-challenge.ts`
3. Update `src/data/levels.ts` to register it first
4. Update `src/app/page.tsx` to add a "Mix Challenge" section at the top
5. Test everything works
