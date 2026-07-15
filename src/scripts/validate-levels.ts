import { allLevels } from "../data/levels";

/**
 * Validates all level data for consistency:
 * - Every sentence has the correct number of parts matching the pattern structure
 * - Every part has distractors
 * - Vocabulary entries are consistent with sentences
 */

let errors = 0;

for (const level of allLevels) {
  console.log(`\n📋 Checking level: ${level.id} — ${level.name}`);

  // Check pattern structure matches sentence parts
  const expectedSlotCount = level.pattern.structure.length;

  for (const sentence of level.sentences) {
    const actualSlotCount = sentence.parts.length;

    if (actualSlotCount !== expectedSlotCount) {
      console.error(
        `  ❌ Sentence "${sentence.id}" has ${actualSlotCount} parts but pattern expects ${expectedSlotCount}`
      );
      errors++;
    }

    // Check each part has distractors
    for (let i = 0; i < sentence.parts.length; i++) {
      const part = sentence.parts[i];
      if (!part.distractors || part.distractors.length === 0) {
        console.error(
          `  ❌ Sentence "${sentence.id}" part ${i} ("${part.chinese}") has no distractors`
        );
        errors++;
      }
      if (part.distractors && part.distractors.includes(part.chinese)) {
        console.error(
          `  ❌ Sentence "${sentence.id}" part ${i} ("${part.chinese}") has itself as a distractor`
        );
        errors++;
      }
    }
  }

  // Check vocabulary if present
  if (level.vocabulary) {
    console.log(`  📖 ${level.vocabulary.length} vocabulary entries`);
    for (const entry of level.vocabulary) {
      if (!entry.chinese || !entry.pinyin || !entry.english) {
        console.error(`  ❌ Vocabulary entry missing fields: ${JSON.stringify(entry)}`);
        errors++;
      }
    }
  }

  // Check star thresholds
  const maxScore = level.sentences.length * 3;
  const [threeStar, twoStar, oneStar] = level.starThresholds;
  if (threeStar > maxScore || twoStar > maxScore || oneStar > maxScore) {
    console.error(
      `  ❌ Star thresholds [${threeStar}, ${twoStar}, ${oneStar}] exceed max score ${maxScore}`
    );
    errors++;
  }
  if (threeStar <= twoStar || twoStar <= oneStar) {
    console.error(
      `  ❌ Star thresholds must be descending: [${threeStar}, ${twoStar}, ${oneStar}]`
    );
    errors++;
  }
}

console.log(`\n${errors === 0 ? "✅ All levels valid!" : `❌ ${errors} errors found`}`);
process.exit(errors > 0 ? 1 : 0);
