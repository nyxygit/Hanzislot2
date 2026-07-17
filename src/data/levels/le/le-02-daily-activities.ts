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
  { chinese: "看了", pinyin: "kàn le", english: "watched / read", partOfSpeech: "verb" as const },
  // Objects (quizzed)
  { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object" as const },
  { chinese: "电影", pinyin: "diàn yǐng", english: "movie", partOfSpeech: "object" as const },
  { chinese: "电视", pinyin: "diàn shì", english: "TV", partOfSpeech: "object" as const },
  { chinese: "报纸", pinyin: "bào zhǐ", english: "newspaper", partOfSpeech: "object" as const },
  { chinese: "手机", pinyin: "shǒu jī", english: "mobile phone", partOfSpeech: "object" as const },
  { chinese: "风景", pinyin: "fēng jǐng", english: "scenery / landscape", partOfSpeech: "object" as const },
];

export const le02DailyActivities: Level = {
  id: "le-02",
  name: "Completed — Watching & Reading",
  description: "Subject + 看了 + Object — Talk about watching and reading that's been done",
  pattern: {
    id: "s-le-v-o",
    name: "Subject + Verb + 了 + Object",
    description: "Add 了 (le) after a verb to show an action has been completed.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 2,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-le02",
      english: "I read a book.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "看了", pinyin: "kàn le", english: "watched / read", partOfSpeech: "verb", distractors: ["看", "没看", "要看"] },
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "书", 3) },
      ],
    },
    {
      id: "s2-le02",
      english: "He watched a movie.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "看了", pinyin: "kàn le", english: "watched / read", partOfSpeech: "verb", distractors: ["看", "没看", "要看"] },
        { chinese: "电影", pinyin: "diàn yǐng", english: "movie", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "电影", 3) },
      ],
    },
    {
      id: "s3-le02",
      english: "She watched TV.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "看了", pinyin: "kàn le", english: "watched / read", partOfSpeech: "verb", distractors: ["看", "没看", "要看"] },
        { chinese: "电视", pinyin: "diàn shì", english: "TV", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "电视", 3) },
      ],
    },
    {
      id: "s4-le02",
      english: "You read the newspaper.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "看了", pinyin: "kàn le", english: "watched / read", partOfSpeech: "verb", distractors: ["看", "没看", "要看"] },
        { chinese: "报纸", pinyin: "bào zhǐ", english: "newspaper", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "报纸", 3) },
      ],
    },
    {
      id: "s5-le02",
      english: "We looked at our phones.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "看了", pinyin: "kàn le", english: "watched / read", partOfSpeech: "verb", distractors: ["看", "没看", "要看"] },
        { chinese: "手机", pinyin: "shǒu jī", english: "mobile phone", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "手机", 3) },
      ],
    },
    {
      id: "s6-le02",
      english: "Everyone looked at the scenery.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "看了", pinyin: "kàn le", english: "watched / read", partOfSpeech: "verb", distractors: ["看", "没看", "要看"] },
        { chinese: "风景", pinyin: "fēng jǐng", english: "scenery / landscape", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "风景", 3) },
      ],
    },
  ],
};
