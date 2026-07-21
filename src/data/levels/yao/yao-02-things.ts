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
  { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object" as const },
  { chinese: "手机", pinyin: "shǒu jī", english: "mobile phone", partOfSpeech: "object" as const },
  { chinese: "衣服", pinyin: "yī fu", english: "clothes", partOfSpeech: "object" as const },
  { chinese: "礼物", pinyin: "lǐ wù", english: "gift", partOfSpeech: "object" as const },
  { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit", partOfSpeech: "object" as const },
  { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "object" as const },
];

export const yao02Things: Level = {
  id: "yao-02",
  name: "Want — Things & Items",
  description: "Subject + 要 + Object — Express what items you want",
  pattern: {
    id: "s-yao-o",
    name: "Subject + 要 + Object",
    description: "Use 要 (yào) to say what you want — direct and intentional.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 2,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-yao02",
      english: "I want a book.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "书", 3) },
      ],
    },
    {
      id: "s2-yao02",
      english: "He wants a phone.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "手机", pinyin: "shǒu jī", english: "mobile phone", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "手机", 3) },
      ],
    },
    {
      id: "s3-yao02",
      english: "She wants clothes.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "衣服", pinyin: "yī fu", english: "clothes", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "衣服", 3) },
      ],
    },
    {
      id: "s4-yao02",
      english: "You want a gift.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "礼物", pinyin: "lǐ wù", english: "gift", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "礼物", 3) },
      ],
    },
    {
      id: "s5-yao02",
      english: "We want fruit.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "水果", 3) },
      ],
    },
    {
      id: "s6-yao02",
      english: "Everyone wants water.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "水", 3) },
      ],
    },
  ],
};
