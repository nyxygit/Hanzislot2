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
  { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "object" as const },
  { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "object" as const },
  { chinese: "茶", pinyin: "chá", english: "tea", partOfSpeech: "object" as const },
  { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "object" as const },
  { chinese: "米饭", pinyin: "mǐ fàn", english: "rice", partOfSpeech: "object" as const },
  { chinese: "面包", pinyin: "miàn bāo", english: "bread", partOfSpeech: "object" as const },
];

export const yao01FoodDrink: Level = {
  id: "yao-01",
  name: "Want — Food & Drink",
  description: "Subject + 要 + Object — Express what you want to eat or drink",
  pattern: {
    id: "s-yao-o",
    name: "Subject + 要 + Object",
    description: "Use 要 (yào) to say what you want — direct and intentional.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 1,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-yao01",
      english: "I want water.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "水", 3) },
      ],
    },
    {
      id: "s2-yao01",
      english: "He wants coffee.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "咖啡", 3) },
      ],
    },
    {
      id: "s3-yao01",
      english: "She wants tea.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "茶", pinyin: "chá", english: "tea", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "茶", 3) },
      ],
    },
    {
      id: "s4-yao01",
      english: "You want an apple.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "苹果", 3) },
      ],
    },
    {
      id: "s5-yao01",
      english: "We want rice.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "米饭", pinyin: "mǐ fàn", english: "rice", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "米饭", 3) },
      ],
    },
    {
      id: "s6-yao01",
      english: "Everyone wants bread.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: ["想", "需要", "有"] },
        { chinese: "面包", pinyin: "miàn bāo", english: "bread", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "面包", 3) },
      ],
    },
  ],
};
