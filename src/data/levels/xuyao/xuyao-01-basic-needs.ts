import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject" as const },
  { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject" as const },
  { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb" as const },
  { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "object" as const },
  { chinese: "帮助", pinyin: "bāng zhù", english: "help", partOfSpeech: "verb" as const },
  { chinese: "休息", pinyin: "xiū xi", english: "rest", partOfSpeech: "verb" as const },
  { chinese: "睡觉", pinyin: "shuì jiào", english: "sleep", partOfSpeech: "verb" as const },
  { chinese: "食物", pinyin: "shí wù", english: "food", partOfSpeech: "object" as const },
  { chinese: "朋友", pinyin: "péng yǒu", english: "friend", partOfSpeech: "object" as const },
];

export const xuyao01BasicNeeds: Level = {
  id: "xuyao-01",
  name: "Need — Basic Needs",
  description: "Subject + 需要 + Object — Express what you need for survival and well-being",
  pattern: {
    id: "s-xuyao-o",
    name: "Subject + 需要 + Object",
    description: "Use 需要 (xū yào) to express necessity — what you need.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 1,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-xuyao01",
      english: "I need water.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "水", 3) },
      ],
    },
    {
      id: "s2-xuyao01",
      english: "He needs help.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "帮助", pinyin: "bāng zhù", english: "help", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "帮助", 3) },
      ],
    },
    {
      id: "s3-xuyao01",
      english: "She needs to rest.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "休息", pinyin: "xiū xi", english: "rest", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "休息", 3) },
      ],
    },
    {
      id: "s4-xuyao01",
      english: "You need to sleep.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "睡觉", pinyin: "shuì jiào", english: "sleep", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "睡觉", 3) },
      ],
    },
    {
      id: "s5-xuyao01",
      english: "We need food.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "食物", pinyin: "shí wù", english: "food", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "食物", 3) },
      ],
    },
    {
      id: "s6-xuyao01",
      english: "Everyone needs friends.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "朋友", pinyin: "péng yǒu", english: "friend", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "朋友", 3) },
      ],
    },
  ],
};
