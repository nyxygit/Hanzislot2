# Plan: New Level Group — 了 (le) for Completed Actions

## Overview

Create a new level group for practicing the action-completion 了 (le). Using **Approach 1**: Verb + 了 is treated as a combined slot option. The verb+了 form is auto-detected as fixed (same across all sentences in a sub-level), so only subject and object are quizzed.

## Pattern Structure

- **Pattern ID:** `s-le-v-o`
- **Structure:** `["subject", "verb", "object"]`
  - Slot 1: subject — quizzed (who performed the action)
  - Slot 2: verb + 了 — auto-detected as fixed (same verb+了 across all sentences)
  - Slot 3: object — quizzed (what was acted upon)
- **subLevels:** 3

## Word Bank Additions

For `lookupChinese()` to find pinyin/english for verb+了 forms, we need to add entries to the word bank's `verb` category:

| Chinese | Pinyin | English |
|---------|--------|---------|
| 吃了 | chī le | ate |
| 喝了 | hē le | drank |
| 看了 | kàn le | watched / read |
| 做了 | zuò le | did / made |
| 买了 | mǎi le | bought |
| 去了 | qù le | went |
| 写了 | xiě le | wrote |
| 学了 | xué le | studied |
| 听了 | tīng le | listened |
| 来了 | lái le | came |

## Sub-Levels

### Sub-level 1: `le-01` — Eating & Drinking (吃喝)
Verb: 吃了 (chī le) / 喝了 (hē le)
- 我吃了苹果。 — "I ate an apple."
- 他吃了米饭。 — "He ate rice."
- 她吃了面包。 — "She ate bread."
- 你喝了水。 — "You drank water."
- 我们喝了茶。 — "We drank tea."
- 大家喝了咖啡。 — "Everyone drank coffee."

### Sub-level 2: `le-02` — Daily Activities (日常活动)
Verb: 看了 (kàn le) / 做了 (zuò le) / 买了 (mǎi le) / 写了 (xiě le) / 学了 (xué le) / 听了 (tīng le)
- 我看了书。 — "I read a book."
- 他做了作业。 — "He did homework."
- 她写了字。 — "She wrote characters."
- 你买了水果。 — "You bought fruit."
- 我们学了中文。 — "We studied Chinese."
- 大家听了音乐。 — "Everyone listened to music."

### Sub-level 3: `le-03` — Going & Coming (来往)
Verb: 去了 (qù le) / 来了 (lái le)
- 我去了学校。 — "I went to school."
- 他来了家。 — "He came home."
- 她去了商店。 — "She went to the store."
- 你来了公园。 — "You came to the park."
- 我们去了医院。 — "We went to the hospital."
- 大家来了图书馆。 — "Everyone came to the library."

## Files to Create

1. `src/data/levels/le/le-01-eating-drinking.ts`
2. `src/data/levels/le/le-02-daily-activities.ts`
3. `src/data/levels/le/le-03-going-coming.ts`

## Files to Modify

### 4. `src/data/wordBank.ts`
- Add verb+了 forms to the `verb` category

### 5. `src/data/levels.ts`
- Add imports for all 3 new levels
- Add them to the `allLevels` array

### 6. `src/app/page.tsx`
- Add filter: `const leLevels = levels.filter((l) => l.pattern.id === "s-le-v-o");`
- Add a new `<section>` block for the 了 pattern

## Architecture

```mermaid
flowchart LR
    subgraph le [了 Levels]
        L1[le-01-eating-drinking.ts]
        L2[le-02-daily-activities.ts]
        L3[le-03-going-coming.ts]
    end
    L1 --> B[src/data/levels.ts]
    L2 --> B
    L3 --> B
    B --> C[src/app/page.tsx]
    C --> D[LevelSelectCard renders on homepage]
    B --> E[src/app/game/[levelId]/page.tsx]
    E --> F[GameClient loads level data]
    F --> G[GameBoard auto-detects verb+了 as fixed slot]
```

## Key Design Decisions

1. **Verb + 了 is auto-detected as fixed** — Each sub-level uses one verb+了 form across all 6 sentences, so `isSlotFixed()` renders it as static text. Only subject and object are quizzed.

2. **Verb+了 forms added to word bank** — So `lookupChinese()` can find pinyin/english for all options.

3. **Distractors for verb slot** — Since the verb is fixed, the distractors don't matter much, but we'll include other verb forms like 吃, 没吃, 要吃 for completeness.

4. **3 sub-levels** — Following the standard pattern.

## Implementation Order

1. Add verb+了 forms to `src/data/wordBank.ts`
2. Create `src/data/levels/le/` directory
3. Create 3 le level files
4. Update `src/data/levels.ts` to register all 3 levels
5. Update `src/app/page.tsx` to add the new section
6. Test everything works
