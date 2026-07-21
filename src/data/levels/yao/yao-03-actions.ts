import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject" as const },
  { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject" as const },
  { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb" as const },
  { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb" as const },
  { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb" as const },
  { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb" as const },
  { chinese: "看书", pinyin: "kàn shū", english: "read a book", partOfSpeech: "verb" as const },
  { chinese: "学中文", pinyin: "xué zhōng wén", english: "learn Chinese", partOfSpeech: "verb" as const },
  { chinese: "休息", pinyin: "xiū xi", english: "rest", partOfSpeech: "verb" as const },
];

export const yao03Actions: Level = {
  id: "yao-03",
  name: "Want — Actions",
  description: "Subject + 要 + Verb — Express what actions you want to take",
  pattern: {
    id: "s-yao-o",
    name: "Subject + 要 + Object",
    description: "Use 要 (yào) to say what you want — direct and intentional.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 3,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-yao03",
      english: "I want to go to school.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "去", 3) },
      ],
    },
    {
      id: "s2-yao03",
      english: "He wants to eat an apple.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "吃", 3) },
      ],
    },
    {
      id: "s3-yao03",
      english: "She wants to drink water.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "喝", 3) },
      ],
    },
    {
      id: "s4-yao03",
      english: "You want to read a book.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "看书", pinyin: "kàn shū", english: "read a book", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "看书", 3) },
      ],
    },
    {
      id: "s5-yao03",
      english: "We want to learn Chinese.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "学中文", pinyin: "xué zhōng wén", english: "learn Chinese", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "学中文", 3) },
      ],
    },
    {
      id: "s6-yao03",
      english: "Everyone wants to rest.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "休息", pinyin: "xiū xi", english: "rest", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "休息", 3) },
      ],
    },
  ],
};
