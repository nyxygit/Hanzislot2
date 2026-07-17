import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Subjects (quizzed)
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject" as const },
  { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject" as const },
  // Verb (fixed)
  { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb" as const },
  // Objects (quizzed)
  { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "object" as const },
  { chinese: "家", pinyin: "jiā", english: "home / family", partOfSpeech: "object" as const },
  { chinese: "医院", pinyin: "yī yuàn", english: "hospital", partOfSpeech: "object" as const },
  { chinese: "公园", pinyin: "gōng yuán", english: "park", partOfSpeech: "object" as const },
  { chinese: "商店", pinyin: "shāng diàn", english: "store / shop", partOfSpeech: "object" as const },
  { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "object" as const },
];

export const zai01PeoplePlaces: Level = {
  id: "zai-01",
  name: "At — People & Places",
  description: "Subject + 在 + Location — Talk about where people are",
  pattern: {
    id: "s-zai-o",
    name: "Subject + 在 + Location",
    description: "Use 在 (zài) to say where someone or something is located.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 1,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-zai01",
      english: "I am at school.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "学校", 3) },
      ],
    },
    {
      id: "s2-zai01",
      english: "You are at home.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "家", pinyin: "jiā", english: "home / family", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "家", 3) },
      ],
    },
    {
      id: "s3-zai01",
      english: "He is at the hospital.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "医院", pinyin: "yī yuàn", english: "hospital", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "医院", 3) },
      ],
    },
    {
      id: "s4-zai01",
      english: "She is at the park.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "公园", pinyin: "gōng yuán", english: "park", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "公园", 3) },
      ],
    },
    {
      id: "s5-zai01",
      english: "We are at the store.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "商店", pinyin: "shāng diàn", english: "store / shop", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "商店", 3) },
      ],
    },
    {
      id: "s6-zai01",
      english: "Everyone is at the library.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "图书馆", 3) },
      ],
    },
  ],
};
