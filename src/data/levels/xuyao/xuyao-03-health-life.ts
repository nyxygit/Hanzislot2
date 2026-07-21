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
  { chinese: "看医生", pinyin: "kàn yī shēng", english: "see a doctor", partOfSpeech: "verb" as const },
  { chinese: "运动", pinyin: "yùn dòng", english: "exercise", partOfSpeech: "verb" as const },
  { chinese: "多喝水", pinyin: "duō hē shuǐ", english: "drink more water", partOfSpeech: "verb" as const },
  { chinese: "帮助", pinyin: "bāng zhù", english: "help", partOfSpeech: "verb" as const },
  { chinese: "钱", pinyin: "qián", english: "money", partOfSpeech: "object" as const },
  { chinese: "时间", pinyin: "shí jiān", english: "time", partOfSpeech: "object" as const },
];

export const xuyao03HealthLife: Level = {
  id: "xuyao-03",
  name: "Need — Health & Daily Life",
  description: "Subject + 需要 + Object — Express what you need for health and daily life",
  pattern: {
    id: "s-xuyao-o",
    name: "Subject + 需要 + Object",
    description: "Use 需要 (xū yào) to express necessity — what you need.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 3,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-xuyao03",
      english: "I need to see a doctor.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "看医生", pinyin: "kàn yī shēng", english: "see a doctor", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "看医生", 3) },
      ],
    },
    {
      id: "s2-xuyao03",
      english: "He needs to exercise.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "运动", pinyin: "yùn dòng", english: "exercise", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "运动", 3) },
      ],
    },
    {
      id: "s3-xuyao03",
      english: "She needs to drink more water.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "多喝水", pinyin: "duō hē shuǐ", english: "drink more water", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "多喝水", 3) },
      ],
    },
    {
      id: "s4-xuyao03",
      english: "You need help.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "帮助", pinyin: "bāng zhù", english: "help", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "帮助", 3) },
      ],
    },
    {
      id: "s5-xuyao03",
      english: "We need money.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "钱", pinyin: "qián", english: "money", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "钱", 3) },
      ],
    },
    {
      id: "s6-xuyao03",
      english: "Everyone needs time.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "需要", pinyin: "xū yào", english: "need", partOfSpeech: "verb", distractors: ["要", "想", "有"] },
        { chinese: "时间", pinyin: "shí jiān", english: "time", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "时间", 3) },
      ],
    },
  ],
};
