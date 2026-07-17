# Plan: New Level Groups — 还是 (háishì) and 或者 (huòzhě)

## Overview

Create two new level groups for the Chinese "or" connectors:

1. **还是 (háishì)** — "or" used in **questions** offering alternatives
2. **或者 (huòzhě)** — "or" used in **statements** presenting options

## Pattern Structures

### 还是 (háishì) — "or" in questions
- **Pattern ID:** `s-haishi-n`
- **Structure:** `["noun", "particle", "noun"]`
  - Slot 1: noun (first option) — quizzed
  - Slot 2: 还是 (particle, auto-detected as fixed)
  - Slot 3: noun (second option) — quizzed
- **subLevels:** 3

### 或者 (huòzhě) — "or" in statements
- **Pattern ID:** `s-huozhe-n`
- **Structure:** `["noun", "particle", "noun"]`
  - Slot 1: noun (first option) — quizzed
  - Slot 2: 或者 (particle, auto-detected as fixed)
  - Slot 3: noun (second option) — quizzed
- **subLevels:** 3

## Full Sentence Representation

Full sentences include a subject and verb as **static context** (not quizzed), with only the two noun alternatives as interactive slots.

Example: "你喝茶还是咖啡？"
```
[你] static subject  |  [喝] static verb  |  [茶] noun slot  |  [还是] fixed  |  [咖啡] noun slot
```

The `SentencePart.static` property marks the subject and verb as display-only context. The pattern structure `["noun", "particle", "noun"]` only references the quizzed slots.

## Sub-Levels

### 还是 Levels (Questions — "A or B?")

**Sub-level 1: `haishi-01` — Food & Drink (食物与饮料)**
Questions about food/drink preferences.
- 你喝茶还是咖啡？ — "Do you drink tea or coffee?"
- 你吃米饭还是面？ — "Do you eat rice or noodles?"
- 你要水果还是菜？ — "Do you want fruit or vegetables?"
- 你喝咖啡还是水？ — "Do you drink coffee or water?"
- 你喜欢苹果还是香蕉？ — "Do you like apples or bananas?"
- 你吃肉还是鱼？ — "Do you eat meat or fish?"

**Sub-level 2: `haishi-02` — People & Roles (人与身份)**
Questions about identity/roles.
- 他是学生还是老师？ — "Is he a student or a teacher?"
- 她是护士还是医生？ — "Is she a nurse or a doctor?"
- 你是中国人还是美国人？ — "Are you Chinese or American?"
- 他是司机还是厨师？ — "Is he a driver or a chef?"
- 她是姐姐还是妹妹？ — "Is she an older sister or younger sister?"
- 他是你朋友还是同学？ — "Is he your friend or classmate?"

**Sub-level 3: `haishi-03` — Choices & Preferences (选择与喜好)**
Questions about preferences/descriptions.
- 你喜欢大还是小？ — "Do you like big or small?"
- 这本书是新的还是旧的？ — "Is this book new or old?"
- 天气是热还是冷？ — "Is the weather hot or cold?"
- 这个菜是辣还是甜？ — "Is this dish spicy or sweet?"
- 他是高还是矮？ — "Is he tall or short?"
- 咖啡是热还是冷？ — "Is the coffee hot or cold?"

### 或者 Levels (Statements — "A or B")

**Sub-level 1: `huozhe-01` — Food & Drink (食物与饮料)**
Statements about food/drink options.
- 我喝茶或者咖啡。 — "I drink tea or coffee."
- 他可以吃米饭或者面。 — "He can eat rice or noodles."
- 我们要水果或者菜。 — "We want fruit or vegetables."
- 她喝咖啡或者水。 — "She drinks coffee or water."
- 大家吃肉或者鱼。 — "Everyone eats meat or fish."
- 你买苹果或者香蕉。 — "You buy apples or bananas."

**Sub-level 2: `huozhe-02` — People & Roles (人与身份)**
Statements about people/roles.
- 他是学生或者老师。 — "He is a student or a teacher."
- 她是护士或者医生。 — "She is a nurse or a doctor."
- 他是中国人或者日本人。 — "He is Chinese or Japanese."
- 她是姐姐或者妹妹。 — "She is an older sister or younger sister."
- 他是你朋友或者同学。 — "He is your friend or classmate."
- 她是英国人或者美国人。 — "She is British or American."

**Sub-level 3: `huozhe-03` — Descriptions & Qualities (描述与性质)**
Statements about qualities/descriptions.
- 这本书是新的或者旧的。 — "This book is new or old."
- 天气是热或者冷。 — "The weather is hot or cold."
- 这个菜是辣或者甜。 — "This dish is spicy or sweet."
- 咖啡是热或者冷。 — "The coffee is hot or cold."
- 他是高或者矮。 — "He is tall or short."
- 这个房间是大或者小。 — "This room is big or small."

## Files to Create

### 还是 Levels
1. `src/data/levels/haishi/haishi-01-food-drink.ts`
2. `src/data/levels/haishi/haishi-02-people-roles.ts`
3. `src/data/levels/haishi/haishi-03-choices.ts`

### 或者 Levels
4. `src/data/levels/huozhe/huozhe-01-food-drink.ts`
5. `src/data/levels/huozhe/huozhe-02-people-roles.ts`
6. `src/data/levels/huozhe/huozhe-03-descriptions.ts`

## Files to Modify

### 7. `src/data/wordBank.ts`
- Add 还是 and 或者 to `particle` category
- Add any missing nouns (香蕉, 鱼, etc.) to `noun` category

### 8. `src/data/levels.ts`
- Add imports for all 6 new levels
- Add them to the `allLevels` array

### 9. `src/app/page.tsx`
- Add filter: `const haishiLevels = levels.filter((l) => l.pattern.id === "s-haishi-n");`
- Add filter: `const huozheLevels = levels.filter((l) => l.pattern.id === "s-huozhe-n");`
- Add two new `<section>` blocks for each pattern

## Architecture

```mermaid
flowchart LR
    subgraph haishi [还是 Levels]
        H1[haishi-01-food-drink.ts]
        H2[haishi-02-people-roles.ts]
        H3[haishi-03-choices.ts]
    end
    subgraph huozhe [或者 Levels]
        Z1[huozhe-01-food-drink.ts]
        Z2[huozhe-02-people-roles.ts]
        Z3[huozhe-03-descriptions.ts]
    end
    H1 --> B[src/data/levels.ts]
    H2 --> B
    H3 --> B
    Z1 --> B
    Z2 --> B
    Z3 --> B
    B --> C[src/app/page.tsx]
    C --> D[LevelSelectCard renders on homepage]
    B --> E[src/app/game/[levelId]/page.tsx]
    E --> F[GameClient loads level data]
    F --> G[GameBoard renders static parts + quizzed slots]
```

## Key Design Decisions

1. **Subject and verb are static context** — Using `SentencePart.static = true` to display the subject and verb as non-interactive context, so the full sentence is visible but only the two noun options are quizzed.

2. **Connector is auto-detected as fixed** — Both 还是 and 或者 will be the same across all sentences in their respective levels, so `isSlotFixed()` will detect them and render them as static text.

3. **Pattern structure is `["noun", "particle", "noun"]`** — This only references the quizzed slots. The static parts (subject, verb) are outside the pattern structure.

4. **Topical sub-levels** — Each sub-level focuses on a real-world context for meaningful practice.

## Implementation Order

1. Add 还是, 或者, and any missing nouns to `src/data/wordBank.ts`
2. Create `src/data/levels/haishi/` directory
3. Create 3 haishi level files
4. Create `src/data/levels/huozhe/` directory
5. Create 3 huozhe level files
6. Update `src/data/levels.ts` to register all 6 levels
7. Update `src/app/page.tsx` to add both new pattern sections
8. Test everything works
