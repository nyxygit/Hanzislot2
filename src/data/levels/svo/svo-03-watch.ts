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
  { chinese: "看", pinyin: "kàn", english: "read / watch", partOfSpeech: "verb" as const },
  // Objects (quizzed)
  { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object" as const },
  { chinese: "电影", pinyin: "diàn yǐng", english: "movie", partOfSpeech: "object" as const },
  { chinese: "电视", pinyin: "diàn shì", english: "TV", partOfSpeech: "object" as const },
  { chinese: "报纸", pinyin: "bào zhǐ", english: "newspaper", partOfSpeech: "object" as const },
  { chinese: "手机", pinyin: "shǒu jī", english: "mobile phone", partOfSpeech: "object" as const },
  { chinese: "风景", pinyin: "fēng jǐng", english: "scenery / landscape", partOfSpeech: "object" as const },
];

export const svo03Watch: Level = {
  id: "svo-03",
  name: "SVO — Watch / Read",
  description: "Subject + 看 + Object — Talk about watching, reading, and looking",
  pattern: {
    id: "s-v-o",
    name: "Subject + Verb + Object",
    description: "The basic Chinese sentence structure: who does what to what.",
    structure: ["subject", "verb", "object"],
    subLevels: 6,
  },
  subLevelIndex: 3,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-svo03",
      english: "I read a book.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "看", pinyin: "kàn", english: "read / watch", partOfSpeech: "verb", distractors: ["吃", "喝", "买"] },
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "书", 3) },
      ],
    },
    {
      id: "s2-svo03",
      english: "You watch a movie.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "看", pinyin: "kàn", english: "read / watch", partOfSpeech: "verb", distractors: ["吃", "喝", "买"] },
        { chinese: "电影", pinyin: "diàn yǐng", english: "movie", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "电影", 3) },
      ],
    },
    {
      id: "s3-svo03",
      english: "He watches TV.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "看", pinyin: "kàn", english: "read / watch", partOfSpeech: "verb", distractors: ["吃", "喝", "买"] },
        { chinese: "电视", pinyin: "diàn shì", english: "TV", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "电视", 3) },
      ],
    },
    {
      id: "s4-svo03",
      english: "She reads the newspaper.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "看", pinyin: "kàn", english: "read / watch", partOfSpeech: "verb", distractors: ["吃", "喝", "买"] },
        { chinese: "报纸", pinyin: "bào zhǐ", english: "newspaper", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "报纸", 3) },
      ],
    },
    {
      id: "s5-svo03",
      english: "We look at our phones.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "看", pinyin: "kàn", english: "read / watch", partOfSpeech: "verb", distractors: ["吃", "喝", "买"] },
        { chinese: "手机", pinyin: "shǒu jī", english: "mobile phone", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "手机", 3) },
      ],
    },
    {
      id: "s6-svo03",
      english: "Everyone looks at the scenery.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "看", pinyin: "kàn", english: "read / watch", partOfSpeech: "verb", distractors: ["吃", "喝", "买"] },
        { chinese: "风景", pinyin: "fēng jǐng", english: "scenery / landscape", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "风景", 3) },
      ],
    },
  ],
};
