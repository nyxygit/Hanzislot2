# Plan: New Level Group — Subject + 应该 + Verb (yīnggāi)

## Overview

Create a new level group for practicing 应该 (yīnggāi / "should / ought to"), a modal verb used to express obligation or expectation. The pattern is **Subject + 应该 + Verb**.

The connector 应该 will be automatically detected as "fixed" by the game engine (since it's the same across all sentences in a level), so it will render as static text — users won't need to quiz it.

## Pattern Structure

- **Pattern ID:** `s-yinggai-v`
- **Structure:** `["subject", "particle", "verb"]`
  - `subject` — who should do something
  - `particle` — 应该 (the modal verb, auto-detected as fixed)
  - `verb` — the action that should be done
- **subLevels:** 3

## Sub-Levels (Topical)

### Sub-level 1: `yinggai-01` — Study & Work (学习与工作)
Sentences about studying, working, doing homework, learning Chinese.

### Sub-level 2: `yinggai-02` — Health & Rest (健康与休息)
Sentences about resting, eating well, drinking water, seeing a doctor.

### Sub-level 3: `yinggai-03` — Daily Life & Manners (日常生活与礼貌)
Sentences about helping others, being on time, listening to the teacher, speaking politely.

## Files to Create

### 1. `src/data/levels/yinggai/yinggai-01-basics.ts`

**Vocabulary:**
- Subjects: 我, 你, 他, 她, 我们, 你们, 大家
- Particle: 应该
- Verbs: 学习 (study), 工作 (work), 做作业 (do homework), 学中文 (learn Chinese), 看书 (read a book), 写 (write), 去 (go), 来 (come)

**Sentences (6):**
1. 我应该学习。 — "I should study."
2. 你应该工作。 — "You should work."
3. 他应该做作业。 — "He should do homework."
4. 我们应该学中文。 — "We should learn Chinese."
5. 你们应该看书。 — "You all should read books."
6. 大家应该去学校。 — "Everyone should go to school."

### 2. `src/data/levels/yinggai/yinggai-02-health.ts`

**Vocabulary:**
- Subjects: 你, 我, 他, 她, 我们, 大家, 你妈妈
- Particle: 应该
- Verbs: 休息 (rest), 吃 (eat), 喝 (drink), 多喝水 (drink more water), 运动 (exercise), 睡觉 (sleep), 看医生 (see a doctor)

**Sentences (6):**
1. 你应该休息。 — "You should rest."
2. 我应该多喝水。 — "I should drink more water."
3. 他应该运动。 — "He should exercise."
4. 她应该睡觉。 — "She should sleep."
5. 你应该看医生。 — "You should see a doctor."
6. 大家应该吃好。 — "Everyone should eat well."

### 3. `src/data/levels/yinggai/yinggai-03-daily-life.ts`

**Vocabulary:**
- Subjects: 你, 我, 他, 她, 我们, 你们, 大家, 学生
- Particle: 应该
- Verbs: 帮助 (help), 说 (speak), 听 (listen), 来 (come), 去 (go), 做 (do), 等 (wait), 说中文 (speak Chinese)

**Sentences (6):**
1. 你应该帮助他。 — "You should help him."
2. 我们应该说中文。 — "We should speak Chinese."
3. 学生应该听老师。 — "Students should listen to the teacher."
4. 你应该来我家。 — "You should come to my home."
5. 大家应该等一等。 — "Everyone should wait a bit."
6. 你们应该去公园。 — "You all should go to the park."

## Files to Modify

### 4. `src/data/levels.ts`

- Add imports for all 3 yinggai levels
- Add them to the `allLevels` array after the hen levels

### 5. `src/app/page.tsx`

- Add a new filter: `const yinggaiLevels = levels.filter((l) => l.pattern.id === "s-yinggai-v");`
- Add a new `<section>` block after the 很 section for the 应该 pattern

### 6. `src/data/wordBank.ts`

- Add 应该 to the `particle` category
- Add 休息, 帮助, 运动, 睡觉, 等 to the `verb` category (if not already present)

## Architecture

```mermaid
flowchart LR
    A1[yinggai-01-basics.ts] --> B[src/data/levels.ts]
    A2[yinggai-02-health.ts] --> B
    A3[yinggai-03-daily-life.ts] --> B
    B --> C[src/app/page.tsx]
    C --> D[LevelSelectCard renders on homepage]
    B --> E[src/app/game/[levelId]/page.tsx]
    E --> F[GameClient loads level data]
    F --> G[GameBoard auto-detects 应该 as fixed slot]
```

## Implementation Order

1. Add missing words (休息, 帮助, 运动, 睡觉, 等, 应该) to `src/data/wordBank.ts`
2. Create `src/data/levels/yinggai/` directory
3. Create `src/data/levels/yinggai/yinggai-01-basics.ts`
4. Create `src/data/levels/yinggai/yinggai-02-health.ts`
5. Create `src/data/levels/yinggai/yinggai-03-daily-life.ts`
6. Update `src/data/levels.ts` to import and register all 3 levels
7. Update `src/app/page.tsx` to add the new pattern section
8. Test by navigating to localhost:3000 and verifying the new section appears
9. Click into each level and verify gameplay works (应该 should be fixed/static)
