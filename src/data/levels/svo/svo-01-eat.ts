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
  // Verb (fixed)
  { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb" as const },
  // Objects (quizzed)
  { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "object" as const },
  { chinese: "米饭", pinyin: "mǐ fàn", english: "rice", partOfSpeech: "object" as const },
  { chinese: "面包", pinyin: "miàn bāo", english: "bread", partOfSpeech: "object" as const },
  { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit", partOfSpeech: "object" as const },
  { chinese: "肉", pinyin: "ròu", english: "meat", partOfSpeech: "object" as const },
  { chinese: "菜", pinyin: "cài", english: "dish / vegetable", partOfSpeech: "object" as const },
];

export const svo01Eat: Level = {
  id: "svo-01",
  name: "SVO — Eat",
  description: "Subject + 吃 + Object — Talk about eating different foods",
  pattern: {
    id: "s-v-o",
    name: "Subject + Verb + Object",
    description: "The basic Chinese sentence structure: who does what to what.",
    structure: ["subject", "verb", "object"],
    subLevels: 6,
  },
  subLevelIndex: 1,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-svo01",
      english: "I eat apples.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: ["喝", "看", "买"] },
        { chinese: "苹果", pinyin: "píng guǒ", english: "apple", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "苹果", 3) },
      ],
    },
    {
      id: "s2-svo01",
      english: "He eats rice.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: ["喝", "看", "买"] },
        { chinese: "米饭", pinyin: "mǐ fàn", english: "rice", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "米饭", 3) },
      ],
    },
    {
      id: "s3-svo01",
      english: "She eats bread.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: ["喝", "看", "买"] },
        { chinese: "面包", pinyin: "miàn bāo", english: "bread", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "面包", 3) },
      ],
    },
    {
      id: "s4-svo01",
      english: "You eat fruit.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: ["喝", "看", "买"] },
        { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "水果", 3) },
      ],
    },
    {
      id: "s5-svo01",
      english: "We eat meat.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: ["喝", "看", "买"] },
        { chinese: "肉", pinyin: "ròu", english: "meat", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "肉", 3) },
      ],
    },
    {
      id: "s6-svo01",
      english: "Everyone eats vegetables.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: ["喝", "看", "买"] },
        { chinese: "菜", pinyin: "cài", english: "dish / vegetable", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "菜", 3) },
      ],
    },
  ],
};
