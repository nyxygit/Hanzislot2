import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Subjects (quizzed)
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject" as const },
  { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject" as const },
  // Verb + 了 (fixed — same across all sentences)
  { chinese: "吃了", pinyin: "chī le", english: "ate", partOfSpeech: "verb" as const },
  // Objects (quizzed)
  { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "object" as const },
  { chinese: "米饭", pinyin: "mǐ fàn", english: "rice", partOfSpeech: "object" as const },
  { chinese: "面包", pinyin: "miàn bāo", english: "bread", partOfSpeech: "object" as const },
  { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit", partOfSpeech: "object" as const },
  { chinese: "肉", pinyin: "ròu", english: "meat", partOfSpeech: "object" as const },
  { chinese: "菜", pinyin: "cài", english: "dish / vegetable", partOfSpeech: "object" as const },
];

export const le01EatingDrinking: Level = {
  id: "le-01",
  name: "Completed — Eating",
  description: "Subject + 吃了 + Object — Talk about eating that's been done",
  pattern: {
    id: "s-le-v-o",
    name: "Subject + Verb + 了 + Object",
    description: "Add 了 (le) after a verb to show an action has been completed.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 1,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-le01",
      english: "I ate an apple.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "吃了", pinyin: "chī le", english: "ate", partOfSpeech: "verb", distractors: ["吃", "没吃", "要吃"] },
        { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "苹果", 3) },
      ],
    },
    {
      id: "s2-le01",
      english: "He ate rice.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "吃了", pinyin: "chī le", english: "ate", partOfSpeech: "verb", distractors: ["吃", "没吃", "要吃"] },
        { chinese: "米饭", pinyin: "mǐ fàn", english: "rice", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "米饭", 3) },
      ],
    },
    {
      id: "s3-le01",
      english: "She ate bread.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "吃了", pinyin: "chī le", english: "ate", partOfSpeech: "verb", distractors: ["吃", "没吃", "要吃"] },
        { chinese: "面包", pinyin: "miàn bāo", english: "bread", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "面包", 3) },
      ],
    },
    {
      id: "s4-le01",
      english: "You ate fruit.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "吃了", pinyin: "chī le", english: "ate", partOfSpeech: "verb", distractors: ["吃", "没吃", "要吃"] },
        { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "水果", 3) },
      ],
    },
    {
      id: "s5-le01",
      english: "We ate meat.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "吃了", pinyin: "chī le", english: "ate", partOfSpeech: "verb", distractors: ["吃", "没吃", "要吃"] },
        { chinese: "肉", pinyin: "ròu", english: "meat", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "肉", 3) },
      ],
    },
    {
      id: "s6-le01",
      english: "Everyone ate vegetables.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "吃了", pinyin: "chī le", english: "ate", partOfSpeech: "verb", distractors: ["吃", "没吃", "要吃"] },
        { chinese: "菜", pinyin: "cài", english: "dish / vegetable", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "菜", 3) },
      ],
    },
  ],
};
