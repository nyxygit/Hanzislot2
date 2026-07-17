import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Subjects (quizzed)
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject" as const },
  { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject" as const },
  // Verb (fixed)
  { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb" as const },
  // Objects (quizzed) — activities as nouns
  { chinese: "工作", pinyin: "gōng zuò", english: "work", partOfSpeech: "object" as const },
  { chinese: "学习", pinyin: "xué xí", english: "study", partOfSpeech: "object" as const },
  { chinese: "吃饭", pinyin: "chī fàn", english: "eating / meal", partOfSpeech: "object" as const },
  { chinese: "睡觉", pinyin: "shuì jiào", english: "sleeping", partOfSpeech: "object" as const },
  { chinese: "运动", pinyin: "yùn dòng", english: "exercise", partOfSpeech: "object" as const },
  { chinese: "休息", pinyin: "xiū xi", english: "resting", partOfSpeech: "object" as const },
];

export const zai03Activities: Level = {
  id: "zai-03",
  name: "At — Activities & Events",
  description: "Subject + 在 + Activity — Talk about what activity someone is doing",
  pattern: {
    id: "s-zai-o",
    name: "Subject + 在 + Location",
    description: "Use 在 (zài) to say where someone or something is located.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 3,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-zai03",
      english: "He is at work.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "工作", pinyin: "gōng zuò", english: "work", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "工作", 3) },
      ],
    },
    {
      id: "s2-zai03",
      english: "She is studying.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "学习", pinyin: "xué xí", english: "study", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "学习", 3) },
      ],
    },
    {
      id: "s3-zai03",
      english: "We are eating.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "吃饭", pinyin: "chī fàn", english: "eating / meal", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "吃饭", 3) },
      ],
    },
    {
      id: "s4-zai03",
      english: "He is sleeping.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "睡觉", pinyin: "shuì jiào", english: "sleeping", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "睡觉", 3) },
      ],
    },
    {
      id: "s5-zai03",
      english: "She is exercising.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "运动", pinyin: "yùn dòng", english: "exercise", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "运动", 3) },
      ],
    },
    {
      id: "s6-zai03",
      english: "Everyone is resting.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "休息", pinyin: "xiū xi", english: "resting", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "休息", 3) },
      ],
    },
  ],
};
