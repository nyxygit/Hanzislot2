import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle" as const },
  { chinese: "学生", pinyin: "xué shēng", english: "student", partOfSpeech: "noun" as const },
  { chinese: "老师", pinyin: "lǎo shī", english: "teacher", partOfSpeech: "noun" as const },
  { chinese: "医生", pinyin: "yī shēng", english: "doctor", partOfSpeech: "noun" as const },
  { chinese: "朋友", pinyin: "péng yǒu", english: "friend", partOfSpeech: "noun" as const },
  { chinese: "同学", pinyin: "tóng xué", english: "classmate", partOfSpeech: "noun" as const },
];

export const shi01Basics: Level = {
  id: "shi-01",
  name: "Who You Are — Basics",
  description: "Subject + 是 + Noun — Learn to identify people and things",
  pattern: {
    id: "s-shi-n",
    name: "Subject + 是 + Noun",
    description: "Use 是 (shì) to say what someone or something is, like English 'is/am/are'.",
    structure: ["subject", "particle", "noun"],
    subLevels: 3,
  },
  subLevelIndex: 1,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-shi01",
      english: "I am a student.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "学生", pinyin: "xué shēng", english: "student", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "学生", 3) },
      ],
    },
    {
      id: "s2-shi01",
      english: "He is a teacher.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "老师", pinyin: "lǎo shī", english: "teacher", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "老师", 3) },
      ],
    },
    {
      id: "s3-shi01",
      english: "She is a doctor.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "医生", pinyin: "yī shēng", english: "doctor", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "医生", 3) },
      ],
    },
    {
      id: "s4-shi01",
      english: "You are a friend.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "朋友", pinyin: "péng yǒu", english: "friend", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "朋友", 3) },
      ],
    },
    {
      id: "s5-shi01",
      english: "I am a classmate.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "同学", pinyin: "tóng xué", english: "classmate", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "同学", 3) },
      ],
    },
    {
      id: "s6-shi01",
      english: "He is a student.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "学生", pinyin: "xué shēng", english: "student", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "学生", 3) },
      ],
    },
  ],
};
