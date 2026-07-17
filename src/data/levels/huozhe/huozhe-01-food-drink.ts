import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Subjects (used as static context)
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  // Verbs (used as static context)
  { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb" as const },
  { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb" as const },
  { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb" as const },
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
  { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle" as const },
];

export const huozhe01FoodDrink: Level = {
  id: "huozhe-01",
  name: "A or B — Food & Drink",
  description: "Noun + 或者 + Noun — Talk about food and drink options",
  pattern: {
    id: "s-huozhe-n",
    name: "Noun + 或者 + Noun",
    description: "Use 或者 (huòzhě) to say 'or' in statements presenting options.",
    structure: ["noun", "particle", "noun"],
    subLevels: 3,
  },
  subLevelIndex: 1,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-huozhe01",
      english: "I drink tea or coffee.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "茶", pinyin: "chá", english: "tea", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "茶", 3) },
        { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle", distractors: ["还是", "是", "很"] },
        { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "咖啡", 3) },
      ],
    },
    {
      id: "s2-huozhe01",
      english: "He can eat rice or noodles.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "米饭", pinyin: "mǐ fàn", english: "rice", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "米饭", 3) },
        { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle", distractors: ["还是", "是", "很"] },
        { chinese: "面条", pinyin: "miàn tiáo", english: "noodles", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "面条", 3) },
      ],
    },
    {
      id: "s3-huozhe01",
      english: "We want fruit or vegetables.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "要", pinyin: "yào", english: "want", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "水果", 3) },
        { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle", distractors: ["还是", "是", "很"] },
        { chinese: "菜", pinyin: "cài", english: "dish / vegetable", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "菜", 3) },
      ],
    },
    {
      id: "s4-huozhe01",
      english: "She drinks coffee or water.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "咖啡", 3) },
        { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle", distractors: ["还是", "是", "很"] },
        { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "水", 3) },
      ],
    },
    {
      id: "s5-huozhe01",
      english: "Everyone eats meat or fish.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "肉", pinyin: "ròu", english: "meat", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "肉", 3) },
        { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle", distractors: ["还是", "是", "很"] },
        { chinese: "鱼", pinyin: "yú", english: "fish", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "鱼", 3) },
      ],
    },
    {
      id: "s6-huozhe01",
      english: "You buy apples or bananas.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "买", pinyin: "mǎi", english: "buy", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "苹果", 3) },
        { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle", distractors: ["还是", "是", "很"] },
        { chinese: "香蕉", pinyin: "xiāng jiāo", english: "banana", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "香蕉", 3) },
      ],
    },
  ],
};
