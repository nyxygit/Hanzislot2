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
  { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object" as const },
  { chinese: "笔", pinyin: "bǐ", english: "pen", partOfSpeech: "object" as const },
  { chinese: "学习", pinyin: "xué xí", english: "study", partOfSpeech: "verb" as const },
  { chinese: "工作", pinyin: "gōng zuò", english: "work", partOfSpeech: "verb" as const },
  { chinese: "做作业", pinyin: "zuò zuò yè", english: "do homework", partOfSpeech: "verb" as const },
  { chinese: "老师", pinyin: "lǎo shī", english: "teacher", partOfSpeech: "object" as const },
];

export const xuyao02WorkStudy: Level = {
  id: "xuyao-02",
  name: "Need — Work & Study",
  description: "Subject + 需要 + Object — Express what you need for work and study",
  pattern: {
    id: "s-xuyao-o",
    name: "Subject + 需要 + Object",
    description: "Use 需要 (xū yào) to express necessity — what you need.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 2,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-xuyao02",
      english: "I need a book.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "书", 3) },
      ],
    },
    {
      id: "s2-xuyao02",
      english: "He needs a pen.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "笔", pinyin: "bǐ", english: "pen", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "笔", 3) },
      ],
    },
    {
      id: "s3-xuyao02",
      english: "She needs to study.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "学习", pinyin: "xué xí", english: "study", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "学习", 3) },
      ],
    },
    {
      id: "s4-xuyao02",
      english: "You need to work.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "工作", pinyin: "gōng zuò", english: "work", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "工作", 3) },
      ],
    },
    {
      id: "s5-xuyao02",
      english: "We need to do homework.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "做作业", pinyin: "zuò zuò yè", english: "do homework", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "做作业", 3) },
      ],
    },
    {
      id: "s6-xuyao02",
      english: "Everyone needs a teacher.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "老师", pinyin: "lǎo shī", english: "teacher", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "老师", 3) },
      ],
    },
  ],
};
