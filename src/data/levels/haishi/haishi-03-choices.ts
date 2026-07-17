import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Subjects (used as static context)
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "这本书", pinyin: "zhè běn shū", english: "this book", partOfSpeech: "subject" as const },
  { chinese: "天气", pinyin: "tiān qì", english: "weather", partOfSpeech: "subject" as const },
  { chinese: "这个菜", pinyin: "zhè gè cài", english: "this dish", partOfSpeech: "subject" as const },
  { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "subject" as const },
  // Verbs (used as static context)
  { chinese: "喜欢", pinyin: "xǐ huān", english: "like", partOfSpeech: "verb" as const },
  { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb" as const },
  // Adjectives (used as static context for 是 sentences)
  { chinese: "大", pinyin: "dà", english: "big", partOfSpeech: "adjective" as const },
  { chinese: "小", pinyin: "xiǎo", english: "small", partOfSpeech: "adjective" as const },
  { chinese: "新", pinyin: "xīn", english: "new", partOfSpeech: "adjective" as const },
  { chinese: "旧", pinyin: "jiù", english: "old (worn)", partOfSpeech: "adjective" as const },
  { chinese: "热", pinyin: "rè", english: "hot", partOfSpeech: "adjective" as const },
  { chinese: "冷", pinyin: "lěng", english: "cold", partOfSpeech: "adjective" as const },
  { chinese: "辣", pinyin: "là", english: "spicy", partOfSpeech: "adjective" as const },
  { chinese: "甜", pinyin: "tián", english: "sweet", partOfSpeech: "adjective" as const },
  { chinese: "高", pinyin: "gāo", english: "tall", partOfSpeech: "adjective" as const },
  { chinese: "矮", pinyin: "ǎi", english: "short (height)", partOfSpeech: "adjective" as const },
  // Particle
  { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle" as const },
];

export const haishi03Choices: Level = {
  id: "haishi-03",
  name: "A or B? — Choices & Preferences",
  description: "Noun + 还是 + Noun — Ask questions about preferences and descriptions",
  pattern: {
    id: "s-haishi-n",
    name: "Noun + 还是 + Noun",
    description: "Use 还是 (háishì) to ask 'or' questions offering alternatives.",
    structure: ["noun", "particle", "noun"],
    subLevels: 3,
  },
  subLevelIndex: 3,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-haishi03",
      english: "Do you like big or small?",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "喜欢", pinyin: "xǐ huān", english: "like", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "大", pinyin: "dà", english: "big", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "大", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "小", pinyin: "xiǎo", english: "small", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "小", 3) },
      ],
    },
    {
      id: "s2-haishi03",
      english: "Is this book new or old?",
      parts: [
        { chinese: "这本书", pinyin: "zhè běn shū", english: "this book", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "新", pinyin: "xīn", english: "new", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "新", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "旧", pinyin: "jiù", english: "old (worn)", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "旧", 3) },
      ],
    },
    {
      id: "s3-haishi03",
      english: "Is the weather hot or cold?",
      parts: [
        { chinese: "天气", pinyin: "tiān qì", english: "weather", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "热", pinyin: "rè", english: "hot", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "热", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "冷", pinyin: "lěng", english: "cold", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "冷", 3) },
      ],
    },
    {
      id: "s4-haishi03",
      english: "Is this dish spicy or sweet?",
      parts: [
        { chinese: "这个菜", pinyin: "zhè gè cài", english: "this dish", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "辣", pinyin: "là", english: "spicy", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "辣", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "甜", pinyin: "tián", english: "sweet", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "甜", 3) },
      ],
    },
    {
      id: "s5-haishi03",
      english: "Is he tall or short?",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "高", pinyin: "gāo", english: "tall", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "高", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "矮", pinyin: "ǎi", english: "short (height)", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "矮", 3) },
      ],
    },
    {
      id: "s6-haishi03",
      english: "Is the coffee hot or cold?",
      parts: [
        { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "热", pinyin: "rè", english: "hot", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "热", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "冷", pinyin: "lěng", english: "cold", partOfSpeech: "adjective", distractors: getVocabularyDistractors(vocabulary, "adjective", "冷", 3) },
      ],
    },
  ],
};
