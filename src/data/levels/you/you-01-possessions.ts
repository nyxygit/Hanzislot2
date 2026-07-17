import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Subjects (quizzed)
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject" as const },
  // Verb (fixed)
  { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb" as const },
  // Objects (quizzed)
  { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object" as const },
  { chinese: "笔", pinyin: "bǐ", english: "pen", partOfSpeech: "object" as const },
  { chinese: "朋友", pinyin: "péng yǒu", english: "friend", partOfSpeech: "object" as const },
  { chinese: "手机", pinyin: "shǒu jī", english: "mobile phone", partOfSpeech: "object" as const },
  { chinese: "家", pinyin: "jiā", english: "home / family", partOfSpeech: "object" as const },
  { chinese: "妹妹", pinyin: "mèi mei", english: "younger sister", partOfSpeech: "object" as const },
];

export const you01Possessions: Level = {
  id: "you-01",
  name: "Have — Personal Belongings",
  description: "Subject + 有 + Object — Talk about what people have",
  pattern: {
    id: "s-you-o",
    name: "Subject + 有 + Object",
    description: "Use 有 (yǒu) to express possession, like English 'have' or 'has'.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 1,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-you01",
      english: "I have a book.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "书", 3) },
      ],
    },
    {
      id: "s2-you01",
      english: "He has a pen.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "笔", pinyin: "bǐ", english: "pen", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "笔", 3) },
      ],
    },
    {
      id: "s3-you01",
      english: "She has a friend.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "朋友", pinyin: "péng yǒu", english: "friend", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "朋友", 3) },
      ],
    },
    {
      id: "s4-you01",
      english: "You have a phone.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "手机", pinyin: "shǒu jī", english: "mobile phone", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "手机", 3) },
      ],
    },
    {
      id: "s5-you01",
      english: "We have a home.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "家", pinyin: "jiā", english: "home / family", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "家", 3) },
      ],
    },
    {
      id: "s6-you01",
      english: "He has a younger sister.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "妹妹", pinyin: "mèi mei", english: "younger sister", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "妹妹", 3) },
      ],
    },
  ],
};
