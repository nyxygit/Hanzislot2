# Plan: New Level Groups — 有 (yǒu) and 在 (zài)

## Overview

Create two new level groups for two essential Chinese verbs:

1. **有 (yǒu)** — "to have / there is/are" — expresses possession and existence
2. **在 (zài)** — "to be at / to be in" — expresses location

Both use the `["subject", "verb", "object"]` structure where the verb is auto-detected as fixed.

## Pattern Structures

### 有 (yǒu) — "to have"
- **Pattern ID:** `s-you-o`
- **Structure:** `["subject", "verb", "object"]`
  - Slot 1: subject — quizzed (who possesses)
  - Slot 2: 有 — verb, auto-detected as fixed
  - Slot 3: object — quizzed (what is possessed)
- **subLevels:** 3

### 在 (zài) — "to be at"
- **Pattern ID:** `s-zai-o`
- **Structure:** `["subject", "verb", "object"]`
  - Slot 1: subject — quizzed (who/where is located)
  - Slot 2: 在 — verb, auto-detected as fixed
  - Slot 3: object — quizzed (location)
- **subLevels:** 3

## Sub-Levels

### 有 Levels (Possession & Existence)

**Sub-level 1: `you-01` — Personal Belongings (个人物品)**
Things people have/own.
- 我有一本书。 — "I have a book."
- 他有一支笔。 — "He has a pen."
- 她有一个朋友。 — "She has a friend."
- 你有一个手机。 — "You have a phone."
- 我们有一个家。 — "We have a home."
- 他有一个妹妹。 — "He has a younger sister."

**Sub-level 2: `you-02` — Family & People (家人与人)**
Having family members and relationships.
- 我有一个哥哥。 — "I have an older brother."
- 她有一个姐姐。 — "She has an older sister."
- 他有一个弟弟。 — "He has a younger brother."
- 我有一个好老师。 — "I have a good teacher."
- 她有一个好朋友。 — "She has a good friend."
- 我有一个妈妈。 — "I have a mother."

**Sub-level 3: `you-03` — Places & Things (地方与东西)**
Existence of places and things.
- 这里有一个学校。 — "There is a school here."
- 那里有一个医院。 — "There is a hospital there."
- 这里有一个公园。 — "There is a park here."
- 那里有一个商店。 — "There is a store there."
- 这里有一个图书馆。 — "There is a library here."
- 那里有一个咖啡店。 — "There is a coffee shop there."

### 在 Levels (Location)

**Sub-level 1: `zai-01` — People & Places (人与地方)**
Where people are located.
- 我在学校。 — "I am at school."
- 你在家。 — "You are at home."
- 他在医院。 — "He is at the hospital."
- 她在公园。 — "She is at the park."
- 我们在商店。 — "We are at the store."
- 大家在图书馆。 — "Everyone is at the library."

**Sub-level 2: `zai-02` — Things & Locations (东西与位置)**
Where things are located.
- 书在桌子上。 — "The book is on the table."
- 手机在包里。 — "The phone is in the bag."
- 猫在椅子上。 — "The cat is on the chair."
- 衣服在房间里。 — "The clothes are in the room."
- 水果在厨房里。 — "The fruit is in the kitchen."
- 水在杯子里。 — "The water is in the cup."

**Sub-level 3: `zai-03` — Activities & Events (活动与事件)**
Where activities/events are happening.
- 他在工作。 — "He is at work."
- 她在学习。 — "She is studying / at study."
- 我们在吃饭。 — "We are eating / at a meal."
- 他在睡觉。 — "He is sleeping."
- 她在运动。 — "She is exercising."
- 大家在休息。 — "Everyone is resting."

## Files to Create

### 有 Levels
1. `src/data/levels/you/you-01-possessions.ts`
2. `src/data/levels/you/you-02-family.ts`
3. `src/data/levels/you/you-03-places.ts`

### 在 Levels
4. `src/data/levels/zai/zai-01-people-places.ts`
5. `src/data/levels/zai/zai-02-things-locations.ts`
6. `src/data/levels/zai/zai-03-activities.ts`

## Files to Modify

### 7. `src/data/wordBank.ts`
- Add any missing nouns (笔, 家, 这里, 那里, 桌子, 包, 猫, 椅子, 厨房, 杯子, 咖啡店, etc.)
- Add any missing verbs if needed

### 8. `src/data/levels.ts`
- Add imports for all 6 new levels
- Add them to the `allLevels` array

### 9. `src/app/page.tsx`
- Add filter: `const youLevels = levels.filter((l) => l.pattern.id === "s-you-o");`
- Add filter: `const zaiLevels = levels.filter((l) => l.pattern.id === "s-zai-o");`
- Add two new `<section>` blocks for each pattern

## Architecture

```mermaid
flowchart LR
    subgraph you [有 Levels]
        Y1[you-01-possessions.ts]
        Y2[you-02-family.ts]
        Y3[you-03-places.ts]
    end
    subgraph zai [在 Levels]
        Z1[zai-01-people-places.ts]
        Z2[zai-02-things-locations.ts]
        Z3[zai-03-activities.ts]
    end
    Y1 --> B[src/data/levels.ts]
    Y2 --> B
    Y3 --> B
    Z1 --> B
    Z2 --> B
    Z3 --> B
    B --> C[src/app/page.tsx]
    C --> D[LevelSelectCard renders on homepage]
    B --> E[src/app/game/[levelId]/page.tsx]
    E --> F[GameClient loads level data]
    F --> G[GameBoard auto-detects 有/在 as fixed slot]
```

## Key Design Decisions

1. **Verb is auto-detected as fixed** — Both 有 and 在 are the same across all sentences in their respective levels, so `isSlotFixed()` will detect them and render them as static text.

2. **Structure is `["subject", "verb", "object"]`** — Same as SVO levels. Subject and object are quizzed; verb is fixed.

3. **Topical sub-levels** — Each sub-level focuses on a real-world context.

4. **3 sub-levels each** — Following the standard pattern used by 是, 很, 还是, and 或者.

## Implementation Order

1. Add missing nouns to `src/data/wordBank.ts`
2. Create `src/data/levels/you/` directory
3. Create 3 you level files
4. Create `src/data/levels/zai/` directory
5. Create 3 zai level files
6. Update `src/data/levels.ts` to register all 6 levels
7. Update `src/app/page.tsx` to add both new pattern sections
8. Test everything works
