# Plan: New Level Group — Subject + Verb + Object (SVO)

## Overview

Create a new level group for basic Chinese SVO (Subject-Verb-Object) sentence structure. This is the fundamental sentence pattern in Chinese. Each sub-level uses a specific common verb, with the verb being auto-detected as "fixed" (same across all sentences in that sub-level).

## Pattern Structure

- **Pattern ID:** `s-v-o`
- **Structure:** `["subject", "verb", "object"]`
  - Slot 1: subject — quizzed (who performs the action)
  - Slot 2: verb — auto-detected as fixed (same verb across all sentences in the sub-level)
  - Slot 3: object — quizzed (what receives the action)
- **subLevels:** 6

## 6 Verbs

| Verb | Pinyin | English | Sub-level Topic |
|------|--------|---------|-----------------|
| 吃 | chī | eat | Food & Meals |
| 喝 | hē | drink | Beverages |
| 看 | kàn | watch/read | Media & Entertainment |
| 买 | mǎi | buy | Shopping |
| 做 | zuò | do/make | Activities & Creation |
| 去 | qù | go | Places & Destinations |

## Sub-Levels

### Sub-level 1: `svo-01-eat` — 吃 (chī) — Food & Meals
Sentences about eating different foods.
- 我吃苹果。 — "I eat apples."
- 他吃米饭。 — "He eats rice."
- 她吃面包。 — "She eats bread."
- 你吃水果。 — "You eat fruit."
- 我们吃肉。 — "We eat meat."
- 大家吃菜。 — "Everyone eats vegetables."

### Sub-level 2: `svo-02-drink` — 喝 (hē) — Beverages
Sentences about drinking different beverages.
- 我喝水。 — "I drink water."
- 你喝茶。 — "You drink tea."
- 他喝咖啡。 — "He drinks coffee."
- 她喝牛奶。 — "She drinks milk."
- 我们喝果汁。 — "We drink juice."
- 大家喝汤。 — "Everyone drinks soup."

### Sub-level 3: `svo-03-watch` — 看 (kàn) — Media & Entertainment
Sentences about watching/reading things.
- 我看书。 — "I read a book."
- 你看电影。 — "You watch a movie."
- 他看电视。 — "He watches TV."
- 她看报纸。 — "She reads the newspaper."
- 我们看手机。 — "We look at our phones."
- 大家看风景。 — "Everyone looks at the scenery."

### Sub-level 4: `svo-04-buy` — 买 (mǎi) — Shopping
Sentences about buying things.
- 我买水果。 — "I buy fruit."
- 你买衣服。 — "You buy clothes."
- 他买书。 — "He buys a book."
- 她买礼物。 — "She buys a gift."
- 我们买菜。 — "We buy groceries."
- 大家买水。 — "Everyone buys water."

### Sub-level 5: `svo-05-make` — 做 (zuò) — Activities & Creation
Sentences about doing/making things.
- 我做作业。 — "I do homework."
- 你做饭。 — "You cook / make food."
- 他做蛋糕。 — "He makes a cake."
- 她做衣服。 — "She makes clothes."
- 我们做运动。 — "We do exercise."
- 大家做工作。 — "Everyone does work."

### Sub-level 6: `svo-06-go` — 去 (qù) — Places & Destinations
Sentences about going to places.
- 我去学校。 — "I go to school."
- 你去医院。 — "You go to the hospital."
- 他去商店。 — "He goes to the store."
- 她去公园。 — "She goes to the park."
- 我们去中国。 — "We go to China."
- 大家去图书馆。 — "Everyone goes to the library."

## Files to Create

1. `src/data/levels/svo/svo-01-eat.ts`
2. `src/data/levels/svo/svo-02-drink.ts`
3. `src/data/levels/svo/svo-03-watch.ts`
4. `src/data/levels/svo/svo-04-buy.ts`
5. `src/data/levels/svo/svo-05-make.ts`
6. `src/data/levels/svo/svo-06-go.ts`

## Files to Modify

### 7. `src/data/wordBank.ts`
- Add any missing nouns (面包, 牛奶, 果汁, 汤, 电视, 报纸, 手机, 风景, 衣服, 礼物, 医院, 商店, 公园, 图书馆, 中国, 蛋糕, 饭, etc.)

### 8. `src/data/levels.ts`
- Add imports for all 6 new levels
- Add them to the `allLevels` array

### 9. `src/app/page.tsx`
- Add filter: `const svoLevels = levels.filter((l) => l.pattern.id === "s-v-o");`
- Add a new `<section>` block for the SVO pattern

## Architecture

```mermaid
flowchart LR
    subgraph svo [SVO Levels]
        S1[svo-01-eat.ts - 吃]
        S2[svo-02-drink.ts - 喝]
        S3[svo-03-watch.ts - 看]
        S4[svo-04-buy.ts - 买]
        S5[svo-05-make.ts - 做]
        S6[svo-06-go.ts - 去]
    end
    S1 --> B[src/data/levels.ts]
    S2 --> B
    S3 --> B
    S4 --> B
    S5 --> B
    S6 --> B
    B --> C[src/app/page.tsx]
    C --> D[LevelSelectCard renders on homepage]
    B --> E[src/app/game/[levelId]/page.tsx]
    E --> F[GameClient loads level data]
    F --> G[GameBoard auto-detects verb as fixed slot]
```

## Key Design Decisions

1. **Verb is auto-detected as fixed** — Each sub-level uses one specific verb across all 6 sentences, so `isSlotFixed()` will detect it and render it as static text. The user only quizzes subject and object.

2. **Structure is `["subject", "verb", "object"]`** — All three parts are quizzed slots in the pattern definition, but the verb gets auto-detected as fixed.

3. **Topical sub-levels** — Each sub-level focuses on a real-world context centered around one verb.

4. **6 sub-levels** — Covers 6 of the most common Chinese verbs for beginners.

## Implementation Order

1. Add missing nouns to `src/data/wordBank.ts`
2. Create `src/data/levels/svo/` directory
3. Create 6 svo level files
4. Update `src/data/levels.ts` to register all 6 levels
5. Update `src/app/page.tsx` to add the new pattern section
6. Test everything works
