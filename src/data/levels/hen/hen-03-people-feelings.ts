import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "这个房间", pinyin: "zhè gè fáng jiān", english: "this room", partOfSpeech: "subject" as const },
  { chinese: "这本书", pinyin: "zhè běn shū", english: "this book", partOfSpeech: "subject" as const },
  { chinese: "学习中文", pinyin: "xué xí zhōng wén", english: "studying Chinese", partOfSpeech: "subject" as const },
  { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle" as const },
  { chinese: "友好", pinyin: "yǒu hǎo", english: "friendly", partOfSpeech: "adjective" as const },
  { chinese: "努力", pinyin: "nǔ lì", english: "hardworking", partOfSpeech: "adjective" as const },
  { chinese: "认真", pinyin: "rèn zhēn", english: "serious / conscientious", partOfSpeech: "adjective" as const },
  { chinese: "开心", pinyin: "kāi xīn", english: "happy", partOfSpeech: "adjective" as const },
  { chinese: "舒服", pinyin: "shū fu", english: "comfortable / well", partOfSpeech: "adjective" as const },
  { chinese: "干净", pinyin: "gān jìng", english: "clean", partOfSpeech: "adjective" as const },
  { chinese: "重要", pinyin: "zhòng yào", english: "important", partOfSpeech: "adjective" as const },
  { chinese: "有意思", pinyin: "yǒu yì si", english: "interesting", partOfSpeech: "adjective" as const },
];

export const hen03PeopleFeelings: Level = {
  id: "hen-03",
  name: "Describing Things — People & Feelings",
  description: "Subject + 很 + Adjective — Describe people, feelings, and qualities",
  pattern: {
    id: "s-hen-adj",
    name: "Subject + 很 + Adjective",
    description: "Use 很 (hěn) to connect a subject with an adjective. In Chinese, 很 is used even when 'very' isn't intended.",
    structure: ["subject", "particle", "adjective"],
    subLevels: 3,
  },
  subLevelIndex: 3,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-hen03",
      english: "He is friendly.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "友好", pinyin: "yǒu hǎo", english: "friendly", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "友好", 3) },
      ],
    },
    {
      id: "s2-hen03",
      english: "She is hardworking.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "努力", pinyin: "nǔ lì", english: "hardworking", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "努力", 3) },
      ],
    },
    {
      id: "s3-hen03",
      english: "I am happy.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "开心", pinyin: "kāi xīn", english: "happy", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "开心", 3) },
      ],
    },
    {
      id: "s4-hen03",
      english: "This room is clean.",
      parts: [
        { chinese: "这个房间", pinyin: "zhè gè fáng jiān", english: "this room", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "这个房间", 3) },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "干净", pinyin: "gān jìng", english: "clean", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "干净", 3) },
      ],
    },
    {
      id: "s5-hen03",
      english: "This book is interesting.",
      parts: [
        { chinese: "这本书", pinyin: "zhè běn shū", english: "this book", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "这本书", 3) },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "有意思", pinyin: "yǒu yì si", english: "interesting", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "有意思", 3) },
      ],
    },
    {
      id: "s6-hen03",
      english: "Studying Chinese is important.",
      parts: [
        { chinese: "学习中文", pinyin: "xué xí zhōng wén", english: "studying Chinese", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "学习中文", 3) },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "重要", pinyin: "zhòng yào", english: "important", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "重要", 3) },
      ],
    },
  ],
};
