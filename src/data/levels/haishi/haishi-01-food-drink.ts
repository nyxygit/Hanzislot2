import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Subjects (used as static context)
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  // Verbs (used as static context)
  { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb" as const },
  { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb" as const },
  { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb" as const },
  { chinese: "喜欢", pinyin: "xǐ huān", english: "like", partOfSpeech: "verb" as const },
  { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb" as const },
  // Nouns (quizzed slots)
  { chinese: "茶", pinyin: "chá", english: "tea", partOfSpeech: "noun" as const },
  { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "noun" as const },
  { chinese: "米饭", pinyin: "mǐ fàn", english: "rice", partOfSpeech: "noun" as const },
  { chinese: "面条", pinyin: "miàn tiáo", english: "noodles", partOfSpeech: "noun" as const },
  { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit", partOfSpeech: "noun" as const },
  { chinese: "菜", pinyin: "cài", english: "dish / vegetable", partOfSpeech: "noun" as const },
  { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "noun" as const },
  { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "noun" as const },
  { chinese: "香蕉", pinyin: "xiāng jiāo", english: "banana", partOfSpeech: "noun" as const },
  { chinese: "肉", pinyin: "ròu", english: "meat", partOfSpeech: "noun" as const },
  { chinese: "鱼", pinyin: "yú", english: "fish", partOfSpeech: "noun" as const },
  // Particle
  { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle" as const },
];

export const haishi01FoodDrink: Level = {
  id: "haishi-01",
  name: "A or B? — Food & Drink",
  description: "Noun + 还是 + Noun — Ask questions about food and drink choices",
  pattern: {
    id: "s-haishi-n",
    name: "Noun + 还是 + Noun",
    description: "Use 还是 (háishì) to ask 'or' questions offering alternatives.",
    structure: ["noun", "particle", "noun"],
    subLevels: 3,
  },
  subLevelIndex: 1,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-haishi01",
      english: "Do you drink tea or coffee?",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "茶", pinyin: "chá", english: "tea", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "茶", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "咖啡", 3) },
      ],
    },
    {
      id: "s2-haishi01",
      english: "Do you eat rice or noodles?",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "米饭", pinyin: "mǐ fàn", english: "rice", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "米饭", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "面条", pinyin: "miàn tiáo", english: "noodles", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "面条", 3) },
      ],
    },
    {
      id: "s3-haishi01",
      english: "Do you want fruit or vegetables?",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "水果", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "菜", pinyin: "cài", english: "dish / vegetable", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "菜", 3) },
      ],
    },
    {
      id: "s4-haishi01",
      english: "Do you drink coffee or water?",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "咖啡", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "水", 3) },
      ],
    },
    {
      id: "s5-haishi01",
      english: "Do you like apples or bananas?",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "喜欢", pinyin: "xǐ huān", english: "like", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "苹果", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "香蕉", pinyin: "xiāng jiāo", english: "banana", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "香蕉", 3) },
      ],
    },
    {
      id: "s6-haishi01",
      english: "Do you eat meat or fish?",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "肉", pinyin: "ròu", english: "meat", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "肉", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "鱼", pinyin: "yú", english: "fish", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "鱼", 3) },
      ],
    },
  ],
};
