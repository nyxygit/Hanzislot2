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
  { chinese: "做", pinyin: "zuò", english: "do / make", partOfSpeech: "verb" as const },
  // Objects (quizzed)
  { chinese: "作业", pinyin: "zuò yè", english: "homework", partOfSpeech: "object" as const },
  { chinese: "饭", pinyin: "fàn", english: "rice / meal", partOfSpeech: "object" as const },
  { chinese: "蛋糕", pinyin: "dàn gāo", english: "cake", partOfSpeech: "object" as const },
  { chinese: "衣服", pinyin: "yī fu", english: "clothes", partOfSpeech: "object" as const },
  { chinese: "运动", pinyin: "yùn dòng", english: "exercise", partOfSpeech: "object" as const },
  { chinese: "工作", pinyin: "gōng zuò", english: "work", partOfSpeech: "object" as const },
];

export const svo05Make: Level = {
  id: "svo-05",
  name: "SVO — Do / Make",
  description: "Subject + 做 + Object — Talk about doing and making things",
  pattern: {
    id: "s-v-o",
    name: "Subject + Verb + Object",
    description: "The basic Chinese sentence structure: who does what to what.",
    structure: ["subject", "verb", "object"],
    subLevels: 6,
  },
  subLevelIndex: 5,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-svo05",
      english: "I do homework.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "做", pinyin: "zuò", english: "do / make", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "作业", pinyin: "zuò yè", english: "homework", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "作业", 3) },
      ],
    },
    {
      id: "s2-svo05",
      english: "You cook / make food.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "做", pinyin: "zuò", english: "do / make", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "饭", pinyin: "fàn", english: "rice / meal", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "饭", 3) },
      ],
    },
    {
      id: "s3-svo05",
      english: "He makes a cake.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "做", pinyin: "zuò", english: "do / make", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "蛋糕", pinyin: "dàn gāo", english: "cake", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "蛋糕", 3) },
      ],
    },
    {
      id: "s4-svo05",
      english: "She makes clothes.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "做", pinyin: "zuò", english: "do / make", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "衣服", pinyin: "yī fu", english: "clothes", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "衣服", 3) },
      ],
    },
    {
      id: "s5-svo05",
      english: "We do exercise.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "做", pinyin: "zuò", english: "do / make", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "运动", pinyin: "yùn dòng", english: "exercise", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "运动", 3) },
      ],
    },
    {
      id: "s6-svo05",
      english: "Everyone does work.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "做", pinyin: "zuò", english: "do / make", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "工作", pinyin: "gōng zuò", english: "work", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "工作", 3) },
      ],
    },
  ],
};
