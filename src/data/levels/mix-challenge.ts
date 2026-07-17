import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Subjects
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  // Particles
  { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle" as const },
  { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle" as const },
  { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle" as const },
  { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle" as const },
  { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle" as const },
  // Verbs
  { chinese: "学习", pinyin: "xué xí", english: "study / learn", partOfSpeech: "verb" as const },
  { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb" as const },
  { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb" as const },
  { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb" as const },
  { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb" as const },
  { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb" as const },
  { chinese: "吃了", pinyin: "chī le", english: "ate", partOfSpeech: "verb" as const },
  // Nouns / Objects
  { chinese: "学生", pinyin: "xué shēng", english: "student", partOfSpeech: "noun" as const },
  { chinese: "漂亮", pinyin: "piào liang", english: "beautiful", partOfSpeech: "adjective" as const },
  { chinese: "茶", pinyin: "chá", english: "tea", partOfSpeech: "noun" as const },
  { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "noun" as const },
  { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "object" as const },
  { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object" as const },
  { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "object" as const },
];

export const mixChallenge: Level = {
  id: "mix-challenge",
  name: "🎲 Mix Challenge",
  description: "10 random sentences from all patterns — test your skills!",
  pattern: {
    id: "s-mix",
    name: "Mix Challenge",
    description: "A random mix of sentences from all patterns.",
    structure: ["subject", "particle", "verb", "object"],
    subLevels: 1,
  },
  subLevelIndex: 1,
  starThresholds: [25, 18, 10],
  vocabulary,
  sentences: [
    // 1. 是 pattern (shi-01)
    {
      id: "mix-s1",
      english: "I am a student.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "学生", pinyin: "xué shēng", english: "student", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "学生", 3) },
      ],
    },
    // 2. 很 pattern (hen-01)
    {
      id: "mix-s2",
      english: "She is beautiful.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "漂亮", pinyin: "piào liang", english: "beautiful", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "漂亮", 3) },
      ],
    },
    // 3. 应该 pattern (yinggai-01)
    {
      id: "mix-s3",
      english: "I should study.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "学习", pinyin: "xué xí", english: "study / learn", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "学习", 3) },
      ],
    },
    // 4. 还是 pattern (haishi-01) — with static subject/verb
    {
      id: "mix-s4",
      english: "Do you drink tea or coffee?",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "茶", pinyin: "chá", english: "tea", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "茶", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "咖啡", 3) },
      ],
    },
    // 5. 或者 pattern (huozhe-01) — with static subject/verb
    {
      id: "mix-s5",
      english: "I drink tea or coffee.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "茶", pinyin: "chá", english: "tea", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "茶", 3) },
        { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle", distractors: ["还是", "是", "很"] },
        { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "咖啡", 3) },
      ],
    },
    // 6. SVO - 吃 (svo-01)
    {
      id: "mix-s6",
      english: "I eat apples.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: ["喝", "看", "买"] },
        { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "苹果", 3) },
      ],
    },
    // 7. 有 pattern (you-01)
    {
      id: "mix-s7",
      english: "I have a book.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "书", 3) },
      ],
    },
    // 8. 在 pattern (zai-01)
    {
      id: "mix-s8",
      english: "I am at school.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "学校", 3) },
      ],
    },
    // 9. 了 pattern (le-01)
    {
      id: "mix-s9",
      english: "I ate an apple.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "吃了", pinyin: "chī le", english: "ate", partOfSpeech: "verb", distractors: ["吃", "没吃", "要吃"] },
        { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "苹果", 3) },
      ],
    },
    // 10. SVO - 去 (svo-06)
    {
      id: "mix-s10",
      english: "I go to school.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "学校", 3) },
      ],
    },
  ],
};
