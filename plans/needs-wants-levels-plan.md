# Plan: New Level Groups — Expressing Needs & Wants

## Overview

Create new level groups for expressing needs, wants, and desires in Chinese. Three key modal verbs:

1. **要 (yào)** — "to want" — stronger, more direct, implies intention/determination
2. **想 (xiǎng)** — "to want to / would like" — softer, more polite, implies thinking/wishing
3. **需要 (xū yào)** — "to need" — expresses necessity

## Nuance: 想 vs 要

The key difference is clearly communicated through level names and descriptions:

| Verb | Tone | English | Usage |
|------|------|---------|-------|
| 要 | Stronger, direct | "want" | Intention, demand, determination |
| 想 | Softer, polite | "would like to" | Wish, desire, polite request |

Example contrast:
- 我要水。 — "I want water." (direct demand)
- 我想喝水。 — "I would like to drink water." (polite wish)

## Bonus: Fix 还是/或者 Distinction

The existing 还是/或者 levels need clearer differentiation. I'll update their level names and descriptions to make the question-vs-statement distinction obvious.

| Current | Issue | Fix |
|---------|-------|-----|
| "A or B? — Food & Drink" | OK for 还是 | Keep but clarify description |
| "A or B — Food & Drink" | Same name as 还是! | Change to "Or — Food & Drink" with "statement" emphasis |

## Pattern Structures

### 要 (yào) — "to want"
- **Pattern ID:** `s-yao-o`
- **Structure:** `["subject", "verb", "object"]`
  - Slot 1: subject — quizzed
  - Slot 2: 要 — verb, auto-detected as fixed
  - Slot 3: object/verb — quizzed
- **subLevels:** 3

### 想 (xiǎng) — "to want to / would like"
- **Pattern ID:** `s-xiang-v`
- **Structure:** `["subject", "verb", "verb"]`
  - Slot 1: subject — quizzed
  - Slot 2: 想 — verb, auto-detected as fixed
  - Slot 3: action verb — quizzed
- **subLevels:** 3

### 需要 (xū yào) — "to need"
- **Pattern ID:** `s-xuyao-o`
- **Structure:** `["subject", "verb", "object"]`
  - Slot 1: subject — quizzed
  - Slot 2: 需要 — verb, auto-detected as fixed
  - Slot 3: object/verb — quizzed
- **subLevels:** 3

## Sub-Levels

### 要 (yào) — "to want" (direct, intentional)

**Sub-level 1: `yao-01` — Food & Drink (食物与饮料)**
- 我要水。 — "I want water."
- 他要咖啡。 — "He wants coffee."
- 她要茶。 — "She wants tea."
- 你要苹果。 — "You want an apple."
- 我们要米饭。 — "We want rice."
- 大家要面包。 — "Everyone wants bread."

**Sub-level 2: `yao-02` — Things & Items (东西与物品)**
- 我要一本书。 — "I want a book."
- 他要一个手机。 — "He wants a phone."
- 她要一件衣服。 — "She wants clothes."
- 你要一个礼物。 — "You want a gift."
- 我们要水果。 — "We want fruit."
- 大家要水。 — "Everyone wants water."

**Sub-level 3: `yao-03` — Actions (动作)**
- 我要去学校。 — "I want to go to school."
- 他要吃苹果。 — "He wants to eat an apple."
- 她要喝水。 — "She wants to drink water."
- 你要看书。 — "You want to read a book."
- 我们要学中文。 — "We want to learn Chinese."
- 大家要休息。 — "Everyone wants to rest."

### 想 (xiǎng) — "would like to" (polite, wishful)

**Sub-level 1: `xiang-01` — Food & Drink (食物与饮料)**
- 我想喝水。 — "I would like to drink water."
- 他想喝茶。 — "He would like to drink tea."
- 她想吃面包。 — "She would like to eat bread."
- 你想吃苹果。 — "You would like to eat an apple."
- 我们想喝咖啡。 — "We would like to drink coffee."
- 大家想吃饭。 — "Everyone would like to eat."

**Sub-level 2: `xiang-02` — Activities (活动)**
- 我想看书。 — "I would like to read a book."
- 他想看电影。 — "He would like to watch a movie."
- 她想听音乐。 — "She would like to listen to music."
- 你想去公园。 — "You would like to go to the park."
- 我们想学中文。 — "We would like to learn Chinese."
- 大家想玩游戏。 — "Everyone would like to play games."

**Sub-level 3: `xiang-03` — Places (地方)**
- 我想去学校。 — "I would like to go to school."
- 他想去医院。 — "He would like to go to the hospital."
- 她想去商店。 — "She would like to go to the store."
- 你想去公园。 — "You would like to go to the park."
- 我们想去中国。 — "We would like to go to China."
- 大家想去图书馆。 — "Everyone would like to go to the library."

### 需要 (xū yào) — "to need" (necessity)

**Sub-level 1: `xuyao-01` — Basic Needs (基本需求)**
- 我需要水。 — "I need water."
- 他需要帮助。 — "He needs help."
- 她需要休息。 — "She needs to rest."
- 你需要睡觉。 — "You need to sleep."
- 我们需要食物。 — "We need food."
- 大家需要朋友。 — "Everyone needs friends."

**Sub-level 2: `xuyao-02` — Work & Study (工作与学习)**
- 我需要一本书。 — "I need a book."
- 他需要一支笔。 — "He needs a pen."
- 她需要学习。 — "She needs to study."
- 你需要工作。 — "You need to work."
- 我们需要做作业。 — "We need to do homework."
- 大家需要老师。 — "Everyone needs a teacher."

**Sub-level 3: `xuyao-03` — Health & Daily Life (健康与生活)**
- 我需要看医生。 — "I need to see a doctor."
- 他需要运动。 — "He needs to exercise."
- 她需要多喝水。 — "She needs to drink more water."
- 你需要帮助。 — "You need help."
- 我们需要钱。 — "We need money."
- 大家需要时间。 — "Everyone needs time."

## Files to Create

### 要 Levels
1. `src/data/levels/yao/yao-01-food-drink.ts`
2. `src/data/levels/yao/yao-02-things.ts`
3. `src/data/levels/yao/yao-03-actions.ts`

### 想 Levels
4. `src/data/levels/xiang/xiang-01-food-drink.ts`
5. `src/data/levels/xiang/xiang-02-activities.ts`
6. `src/data/levels/xiang/xiang-03-places.ts`

### 需要 Levels
7. `src/data/levels/xuyao/xuyao-01-basic-needs.ts`
8. `src/data/levels/xuyao/xuyao-02-work-study.ts`
9. `src/data/levels/xuyao/xuyao-03-health-life.ts`

## Files to Modify

### 10. `src/data/wordBank.ts`
- Add 想 (xiǎng) and 需要 (xū yào) to the `verb` category
- Add 时间 (shí jiān), 食物 (shí wù), 帮助 (bāng zhù) if not present

### 11. `src/data/levels.ts`
- Add imports for all 9 new levels
- Add them to the `allLevels` array

### 12. `src/app/page.tsx`
- Add filters for 3 new patterns
- Add 3 new `<section>` blocks

### 13. `src/data/levels/haishi/` (bonus fix)
- Update level names to clearly show these are QUESTIONS

### 14. `src/data/levels/huozhe/` (bonus fix)
- Update level names to clearly show these are STATEMENTS

## Implementation Order

1. Add missing words to `src/data/wordBank.ts`
2. Create 3 directories (yao, xiang, xuyao)
3. Create 9 level files
4. Update `src/data/levels.ts` to register all 9 levels
5. Update `src/app/page.tsx` to add 3 new sections
6. Fix 还是/或者 level names for clarity
7. Test everything works
