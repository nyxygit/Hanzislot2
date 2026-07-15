import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  { chinese: "这个菜", pinyin: "zhè gè cài", english: "this dish", partOfSpeech: "subject" as const },
  { chinese: "这个水果", pinyin: "zhè gè shuǐ guǒ", english: "this fruit", partOfSpeech: "subject" as const },
  { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "subject" as const },
  { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "subject" as const },
  { chinese: "这个", pinyin: "zhè gè", english: "this one", partOfSpeech: "subject" as const },
  { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle" as const },
  { chinese: "好吃", pinyin: "hǎo chī", english: "delicious", partOfSpeech: "adjective" as const },
  { chinese: "辣", pinyin: "là", english: "spicy", partOfSpeech: "adjective" as const },
  { chinese: "甜", pinyin: "tián", english: "sweet", partOfSpeech: "adjective" as const },
  { chinese: "酸", pinyin: "suān", english: "sour", partOfSpeech: "adjective" as const },
  { chinese: "咸", pinyin: "xián", english: "salty", partOfSpeech: "adjective" as const },
  { chinese: "便宜", pinyin: "pián yi", english: "cheap", partOfSpeech: "adjective" as const },
  { chinese: "贵", pinyin: "guì", english: "expensive", partOfSpeech: "adjective" as const },
  { chinese: "热", pinyin: "rè", english: "hot", partOfSpeech: "adjective" as const },
  { chinese: "冷", pinyin: "lěng", english: "cold", partOfSpeech: "adjective" as const },
];

export const hen02FoodTaste: Level = {
  id: "hen-02",
  name: "Describing Things — Food & Taste",
  description: "Subject + 很 + Adjective — Describe food, flavors, and quality",
  pattern: {
    id: "s-hen-adj",
    name: "Subject + 很 + Adjective",
    description: "Use 很 (hěn) to connect a subject with an adjective. In Chinese, 很 is used even when 'very' isn't intended.",
    structure: ["subject", "particle", "adjective"],
    subLevels: 3,
  },
  subLevelIndex: 2,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-hen02",
      english: "This dish is delicious.",
      parts: [
        { chinese: "这个菜", pinyin: "zhè gè cài", english: "this dish", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "这个菜", 3) },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "好吃", pinyin: "hǎo chī", english: "delicious", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "好吃", 3) },
      ],
    },
    {
      id: "s2-hen02",
      english: "This dish is spicy.",
      parts: [
        { chinese: "这个菜", pinyin: "zhè gè cài", english: "this dish", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "这个菜", 3) },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "辣", pinyin: "là", english: "spicy", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "辣", 3) },
      ],
    },
    {
      id: "s3-hen02",
      english: "This fruit is sweet.",
      parts: [
        { chinese: "这个水果", pinyin: "zhè gè shuǐ guǒ", english: "this fruit", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "这个水果", 3) },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "甜", pinyin: "tián", english: "sweet", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "甜", 3) },
      ],
    },
    {
      id: "s4-hen02",
      english: "The coffee is hot.",
      parts: [
        { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "咖啡", 3) },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "热", pinyin: "rè", english: "hot", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "热", 3) },
      ],
    },
    {
      id: "s5-hen02",
      english: "The water is cold.",
      parts: [
        { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "水", 3) },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "冷", pinyin: "lěng", english: "cold", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "冷", 3) },
      ],
    },
    {
      id: "s6-hen02",
      english: "This is cheap.",
      parts: [
        { chinese: "这个", pinyin: "zhè gè", english: "this one", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "这个", 3) },
        { chinese: "很", pinyin: "hěn", english: "very (used before adj)", partOfSpeech: "particle", distractors: ["是", "不", "要"] },
        { chinese: "便宜", pinyin: "pián yi", english: "cheap", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "便宜", 3) },
      ],
    },
  ],
};
