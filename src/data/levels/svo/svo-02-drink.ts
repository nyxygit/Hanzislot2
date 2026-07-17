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
  { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb" as const },
  // Objects (quizzed)
  { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "object" as const },
  { chinese: "茶", pinyin: "chá", english: "tea", partOfSpeech: "object" as const },
  { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "object" as const },
  { chinese: "牛奶", pinyin: "niú nǎi", english: "milk", partOfSpeech: "object" as const },
  { chinese: "果汁", pinyin: "guǒ zhī", english: "juice", partOfSpeech: "object" as const },
  { chinese: "汤", pinyin: "tāng", english: "soup", partOfSpeech: "object" as const },
];

export const svo02Drink: Level = {
  id: "svo-02",
  name: "SVO — Drink",
  description: "Subject + 喝 + Object — Talk about drinking different beverages",
  pattern: {
    id: "s-v-o",
    name: "Subject + Verb + Object",
    description: "The basic Chinese sentence structure: who does what to what.",
    structure: ["subject", "verb", "object"],
    subLevels: 6,
  },
  subLevelIndex: 2,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-svo02",
      english: "I drink water.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: ["吃", "看", "买"] },
        { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "水", 3) },
      ],
    },
    {
      id: "s2-svo02",
      english: "You drink tea.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: ["吃", "看", "买"] },
        { chinese: "茶", pinyin: "chá", english: "tea", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "茶", 3) },
      ],
    },
    {
      id: "s3-svo02",
      english: "He drinks coffee.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: ["吃", "看", "买"] },
        { chinese: "咖啡", pinyin: "kā fēi", english: "coffee", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "咖啡", 3) },
      ],
    },
    {
      id: "s4-svo02",
      english: "She drinks milk.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: ["吃", "看", "买"] },
        { chinese: "牛奶", pinyin: "niú nǎi", english: "milk", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "牛奶", 3) },
      ],
    },
    {
      id: "s5-svo02",
      english: "We drink juice.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: ["吃", "看", "买"] },
        { chinese: "果汁", pinyin: "guǒ zhī", english: "juice", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "果汁", 3) },
      ],
    },
    {
      id: "s6-svo02",
      english: "Everyone drinks soup.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb", distractors: ["吃", "看", "买"] },
        { chinese: "汤", pinyin: "tāng", english: "soup", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "汤", 3) },
      ],
    },
  ],
};
