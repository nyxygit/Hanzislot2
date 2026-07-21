import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject" as const },
  { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject" as const },
  { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb" as const },
  { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb" as const },
  { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "object" as const },
  { chinese: "医院", pinyin: "yī yuàn", english: "hospital", partOfSpeech: "object" as const },
  { chinese: "商店", pinyin: "shāng diàn", english: "store / shop", partOfSpeech: "object" as const },
  { chinese: "公园", pinyin: "gōng yuán", english: "park", partOfSpeech: "object" as const },
  { chinese: "中国", pinyin: "zhōng guó", english: "China", partOfSpeech: "object" as const },
  { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "object" as const },
];

export const xiang03Places: Level = {
  id: "xiang-03",
  name: "Would Like — Places",
  description: "Subject + 想 + Verb — Politely express where you'd like to go",
  pattern: {
    id: "s-xiang-v",
    name: "Subject + 想 + Verb",
    description: "Use 想 (xiǎng) to say what you would like — softer and more polite than 要.",
    structure: ["subject", "verb", "verb"],
    subLevels: 3,
  },
  subLevelIndex: 3,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-xiang03",
      english: "I would like to go to school.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "去", 3) },
      ],
    },
    {
      id: "s2-xiang03",
      english: "He would like to go to the hospital.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "去", 3) },
      ],
    },
    {
      id: "s3-xiang03",
      english: "She would like to go to the store.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "去", 3) },
      ],
    },
    {
      id: "s4-xiang03",
      english: "You would like to go to the park.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "去", 3) },
      ],
    },
    {
      id: "s5-xiang03",
      english: "We would like to go to China.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "去", 3) },
      ],
    },
    {
      id: "s6-xiang03",
      english: "Everyone would like to go to the library.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "去", 3) },
      ],
    },
  ],
};
