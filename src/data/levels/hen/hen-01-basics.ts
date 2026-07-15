import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "它", pinyin: "tā", english: "it", partOfSpeech: "subject" as const },
  { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle" as const },
  { chinese: "大", pinyin: "dà", english: "big", partOfSpeech: "adjective" as const },
  { chinese: "小", pinyin: "xiǎo", english: "small", partOfSpeech: "adjective" as const },
  { chinese: "高", pinyin: "gāo", english: "tall", partOfSpeech: "adjective" as const },
  { chinese: "好", pinyin: "hǎo", english: "good", partOfSpeech: "adjective" as const },
  { chinese: "忙", pinyin: "máng", english: "busy", partOfSpeech: "adjective" as const },
  { chinese: "累", pinyin: "lèi", english: "tired", partOfSpeech: "adjective" as const },
  { chinese: "漂亮", pinyin: "piào liang", english: "beautiful", partOfSpeech: "adjective" as const },
  { chinese: "高兴", pinyin: "gāo xìng", english: "happy", partOfSpeech: "adjective" as const },
];

export const hen01Basics: Level = {
  id: "hen-01",
  name: "Describing Things — Basics",
  description: "Subject + 很 + Adjective — Learn to describe with basic adjectives",
  pattern: {
    id: "s-hen-adj",
    name: "Subject + 很 + Adjective",
    description: "Use 很 (hěn) to connect a subject with an adjective. In Chinese, 很 is used even when 'very' isn't intended.",
    structure: ["subject", "particle", "adjective"],
    subLevels: 3,
  },
  subLevelIndex: 1,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-hen01",
      english: "She is happy.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: ["我", "你", "他"] },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "高兴", pinyin: "gāo xìng", english: "happy", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "高兴", 3) },
      ],
    },
    {
      id: "s2-hen01",
      english: "He is busy.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: ["我", "你", "她"] },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "忙", pinyin: "máng", english: "busy", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "忙", 3) },
      ],
    },
    {
      id: "s3-hen01",
      english: "I am tired.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: ["你", "他", "她"] },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "累", pinyin: "lèi", english: "tired", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "累", 3) },
      ],
    },
    {
      id: "s4-hen01",
      english: "It is big.",
      parts: [
        { chinese: "它", pinyin: "tā", english: "it", partOfSpeech: "subject", distractors: ["我", "你", "他"] },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "大", pinyin: "dà", english: "big", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "大", 3) },
      ],
    },
    {
      id: "s5-hen01",
      english: "She is beautiful.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: ["我", "你", "他"] },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "漂亮", pinyin: "piào liang", english: "beautiful", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "漂亮", 3) },
      ],
    },
    {
      id: "s6-hen01",
      english: "He is tall.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: ["我", "你", "她"] },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "高", pinyin: "gāo", english: "tall", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "高", 3) },
      ],
    },
  ],
};
