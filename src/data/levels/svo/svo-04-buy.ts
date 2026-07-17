import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Subjects (quizzed)
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject" as const },
  { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject" as const },
  // Verb (fixed)
  { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb" as const },
  // Objects (quizzed)
  { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit", partOfSpeech: "object" as const },
  { chinese: "衣服", pinyin: "yī fu", english: "clothes", partOfSpeech: "object" as const },
  { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object" as const },
  { chinese: "礼物", pinyin: "lǐ wù", english: "gift", partOfSpeech: "object" as const },
  { chinese: "菜", pinyin: "cài", english: "dish / vegetable", partOfSpeech: "object" as const },
  { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "object" as const },
];

export const svo04Buy: Level = {
  id: "svo-04",
  name: "SVO — Buy",
  description: "Subject + 买 + Object — Talk about buying things",
  pattern: {
    id: "s-v-o",
    name: "Subject + Verb + Object",
    description: "The basic Chinese sentence structure: who does what to what.",
    structure: ["subject", "verb", "object"],
    subLevels: 6,
  },
  subLevelIndex: 4,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-svo04",
      english: "I buy fruit.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "水果", 3) },
      ],
    },
    {
      id: "s2-svo04",
      english: "You buy clothes.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "衣服", pinyin: "yī fu", english: "clothes", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "衣服", 3) },
      ],
    },
    {
      id: "s3-svo04",
      english: "He buys a book.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "书", 3) },
      ],
    },
    {
      id: "s4-svo04",
      english: "She buys a gift.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "礼物", pinyin: "lǐ wù", english: "gift", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "礼物", 3) },
      ],
    },
    {
      id: "s5-svo04",
      english: "We buy groceries.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "菜", pinyin: "cài", english: "dish / vegetable", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "菜", 3) },
      ],
    },
    {
      id: "s6-svo04",
      english: "Everyone buys water.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "水", 3) },
      ],
    },
  ],
};
