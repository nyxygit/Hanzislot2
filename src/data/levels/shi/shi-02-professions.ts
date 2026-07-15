import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle" as const },
  { chinese: "护士", pinyin: "hù shi", english: "nurse", partOfSpeech: "noun" as const },
  { chinese: "工程师", pinyin: "gōng chéng shī", english: "engineer", partOfSpeech: "noun" as const },
  { chinese: "厨师", pinyin: "chú shī", english: "cook / chef", partOfSpeech: "noun" as const },
  { chinese: "司机", pinyin: "sī jī", english: "driver", partOfSpeech: "noun" as const },
  { chinese: "警察", pinyin: "jǐng chá", english: "police officer", partOfSpeech: "noun" as const },
  { chinese: "经理", pinyin: "jīng lǐ", english: "manager", partOfSpeech: "noun" as const },
  { chinese: "服务员", pinyin: "fú wù yuán", english: "waiter / waitress", partOfSpeech: "noun" as const },
  { chinese: "售货员", pinyin: "shòu huò yuán", english: "shop assistant", partOfSpeech: "noun" as const },
];

export const shi02Professions: Level = {
  id: "shi-02",
  name: "Who You Are — Professions",
  description: "Subject + 是 + Noun — Identify professions and roles",
  pattern: {
    id: "s-shi-n",
    name: "Subject + 是 + Noun",
    description: "Use 是 (shì) to say what someone or something is, like English 'is/am/are'.",
    structure: ["subject", "particle", "noun"],
    subLevels: 3,
  },
  subLevelIndex: 2,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-shi02",
      english: "She is a nurse.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "护士", pinyin: "hù shi", english: "nurse", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "护士", 3) },
      ],
    },
    {
      id: "s2-shi02",
      english: "He is an engineer.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "工程师", pinyin: "gōng chéng shī", english: "engineer", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "工程师", 3) },
      ],
    },
    {
      id: "s3-shi02",
      english: "I am a cook.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "厨师", pinyin: "chú shī", english: "cook / chef", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "厨师", 3) },
      ],
    },
    {
      id: "s4-shi02",
      english: "He is a driver.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "司机", pinyin: "sī jī", english: "driver", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "司机", 3) },
      ],
    },
    {
      id: "s5-shi02",
      english: "She is a police officer.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "警察", pinyin: "jǐng chá", english: "police officer", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "警察", 3) },
      ],
    },
    {
      id: "s6-shi02",
      english: "I am a manager.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "经理", pinyin: "jīng lǐ", english: "manager", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "经理", 3) },
      ],
    },
  ],
};
