import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject" as const },
  { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject" as const },
  { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb" as const },
  { chinese: "喝水", pinyin: "hē shuǐ", english: "drink water", partOfSpeech: "verb" as const },
  { chinese: "喝茶", pinyin: "hē chá", english: "drink tea", partOfSpeech: "verb" as const },
  { chinese: "吃面包", pinyin: "chī miàn bāo", english: "eat bread", partOfSpeech: "verb" as const },
  { chinese: "吃苹果", pinyin: "chī píng guǒ", english: "eat an apple", partOfSpeech: "verb" as const },
  { chinese: "喝咖啡", pinyin: "hē kā fēi", english: "drink coffee", partOfSpeech: "verb" as const },
  { chinese: "吃饭", pinyin: "chī fàn", english: "eat a meal", partOfSpeech: "verb" as const },
];

export const xiang01FoodDrink: Level = {
  id: "xiang-01",
  name: "Would Like — Food & Drink",
  description: "Subject + 想 + Verb — Politely express what you'd like to eat or drink",
  pattern: {
    id: "s-xiang-v",
    name: "Subject + 想 + Verb",
    description: "Use 想 (xiǎng) to say what you would like — softer and more polite than 要.",
    structure: ["subject", "verb", "verb"],
    subLevels: 3,
  },
  subLevelIndex: 1,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-xiang01",
      english: "I would like to drink water.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "喝水", pinyin: "hē shuǐ", english: "drink water", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "喝水", 3) },
      ],
    },
    {
      id: "s2-xiang01",
      english: "He would like to drink tea.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "喝茶", pinyin: "hē chá", english: "drink tea", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "喝茶", 3) },
      ],
    },
    {
      id: "s3-xiang01",
      english: "She would like to eat bread.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "吃面包", pinyin: "chī miàn bāo", english: "eat bread", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "吃面包", 3) },
      ],
    },
    {
      id: "s4-xiang01",
      english: "You would like to eat an apple.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "吃苹果", pinyin: "chī píng guǒ", english: "eat an apple", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "吃苹果", 3) },
      ],
    },
    {
      id: "s5-xiang01",
      english: "We would like to drink coffee.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "喝咖啡", pinyin: "hē kā fēi", english: "drink coffee", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "喝咖啡", 3) },
      ],
    },
    {
      id: "s6-xiang01",
      english: "Everyone would like to eat.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "吃饭", pinyin: "chī fàn", english: "eat a meal", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "吃饭", 3) },
      ],
    },
  ],
};
