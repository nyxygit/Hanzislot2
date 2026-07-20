# Plan: New Level Group — 正在...呢 (zhèngzài...ne) for Ongoing Actions

## Overview

Create a new level group for the 正在...呢 (zhèngzài...ne) pattern, which indicates an action in progress (like English present continuous "-ing").

**Pattern:** Subject + 正在 + Verb + 呢
**Example:** 我正在吃饭呢。 — "I am eating."

## Pattern Structure

- **Pattern ID:** `s-zhengzai-ne`
- **Structure:** `["subject", "particle", "verb", "particle"]`
  - Slot 1: subject — quizzed (who is doing the action)
  - Slot 2: 正在 — particle, auto-detected as fixed
  - Slot 3: verb (or verb+object compound) — quizzed (the action)
  - Slot 4: 呢 — particle, auto-detected as fixed
- **subLevels:** 3

### How the auto-fixed slots work

Both 正在 and 呢 are the same across ALL sentences in each sub-level, so `isSlotFixed()` will detect them and render them as static text. Only the subject and verb slots are interactive.

## Word Bank Additions

Add 正在 and 呢 to the `particle` category in the word bank for proper pinyin/english lookup.

Also add any missing verb+object compounds (like 吃饭, 喝水, 看书, etc.) to the `verb` category.

## Sub-Levels

### Sub-level 1: `zhengzai-01` — Eating & Drinking (吃喝)
Actions in progress related to eating and drinking.
- 我正在吃饭呢。 — "I am eating."
- 他正在喝水呢。 — "He is drinking water."
- 她正在喝茶呢。 — "She is drinking tea."
- 你正在吃苹果呢。 — "You are eating an apple."
- 我们正在喝咖啡呢。 — "We are drinking coffee."
- 大家正在吃面包呢。 — "Everyone is eating bread."

### Sub-level 2: `zhengzai-02` — Daily Activities (日常活动)
Actions in progress related to daily activities.
- 我正在看书呢。 — "I am reading a book."
- 他正在做作业呢。 — "He is doing homework."
- 她正在写字呢。 — "She is writing characters."
- 你正在看电视呢。 — "You are watching TV."
- 我们正在听音乐呢。 — "We are listening to music."
- 大家正在学中文呢。 — "Everyone is learning Chinese."

### Sub-level 3: `zhengzai-03` — Actions & Movement (动作与移动)
Actions in progress related to movement and activities.
- 我正在跑步呢。 — "I am running."
- 他正在睡觉呢。 — "He is sleeping."
- 她正在休息呢。 — "She is resting."
- 你正在运动呢。 — "You are exercising."
- 我们正在工作呢。 — "We are working."
- 大家正在玩游戏呢。 — "Everyone is playing a game."

## Bonus: Make Mix Challenge Dynamic

Since you asked about new levels being included in the mix challenge, I'll also update the mix challenge to **dynamically generate** its sentences from all registered levels instead of using a hardcoded list.

**How it works:**
1. When `mix-challenge` is loaded, it imports `allLevels` from `levels.ts`
2. It picks 1 random sentence from each level (or 10 random sentences from the entire pool)
3. It creates a temporary level object with those sentences
4. New levels added to `allLevels` are automatically included

**Change location:** [`src/lib/api.ts`](src/lib/api.ts) — modify `fetchLevel` to handle `mix-challenge` specially, OR modify [`src/context/GameContext.tsx`](src/context/GameContext.tsx) to build the mix level dynamically.

**Better approach:** Modify `fetchLevel` in `api.ts` since that's the data layer. When `id === "mix-challenge"`, dynamically build the level from all other levels.

## Files to Create

1. `src/data/levels/zhengzai/zhengzai-01-eating-drinking.ts`
2. `src/data/levels/zhengzai/zhengzai-02-daily-activities.ts`
3. `src/data/levels/zhengzai/zhengzai-03-actions-movement.ts`

## Files to Modify

### 4. `src/data/wordBank.ts`
- Add 正在 and 呢 to the `particle` category
- Add any missing verb compounds (跑步, 玩游戏, etc.) to the `verb` category

### 5. `src/data/levels.ts`
- Add imports for all 3 new levels
- Add them to the `allLevels` array

### 6. `src/app/page.tsx`
- Add filter: `const zhengzaiLevels = levels.filter((l) => l.pattern.id === "s-zhengzai-ne");`
- Add a new `<section>` block for the 正在...呢 pattern

### 7. `src/lib/api.ts` (bonus)
- Modify `fetchLevel` to dynamically build the mix challenge from all levels

### 8. `src/data/levels/mix-challenge.ts` (bonus)
- Can be simplified or removed since the mix challenge will be generated dynamically

## Architecture

```mermaid
flowchart LR
    subgraph zhengzai [正在...呢 Levels]
        Z1[zhengzai-01-eating-drinking.ts]
        Z2[zhengzai-02-daily-activities.ts]
        Z3[zhengzai-03-actions-movement.ts]
    end
    Z1 --> B[src/data/levels.ts]
    Z2 --> B
    Z3 --> B
    B --> C[src/app/page.tsx]
    B --> D[src/lib/api.ts]
    D --> E[Dynamic mix challenge from allLevels]
    C --> F[LevelSelectCard renders on homepage]
    B --> G[src/app/game/[levelId]/page.tsx]
    G --> H[GameClient loads level data]
```

## Implementation Order

1. Add 正在, 呢, and missing verbs to `src/data/wordBank.ts`
2. Create `src/data/levels/zhengzai/` directory
3. Create 3 zhengzai level files
4. Update `src/data/levels.ts` to register all 3 levels
5. Update `src/app/page.tsx` to add the new section
6. Update `src/lib/api.ts` to make mix challenge dynamic
7. Test everything works
