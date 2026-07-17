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
  { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb" as const },
  // Objects (quizzed)
  { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "object" as const },
  { chinese: "医院", pinyin: "yī yuàn", english: "hospital", partOfSpeech: "object" as const },
  { chinese: "商店", pinyin: "shāng diàn", english: "store / shop", partOfSpeech: "object" as const },
  { chinese: "公园", pinyin: "gōng yuán", english: "park", partOfSpeech: "object" as const },
  { chinese: "中国", pinyin: "zhōng guó", english: "China", partOfSpeech: "object" as const },
  { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "object" as const },
];

export const svo06Go: Level = {
  id: "svo-06",
  name: "SVO — Go",
  description: "Subject + 去 + Object — Talk about going to places",
  pattern: {
    id: "s-v-o",
    name: "Subject + Verb + Object",
    description: "The basic Chinese sentence structure: who does what to what.",
    structure: ["subject", "verb", "object"],
    subLevels: 6,
  },
  subLevelIndex: 6,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-svo06",
      english: "I go to school.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "学校", 3) },
      ],
    },
    {
      id: "s2-svo06",
      english: "You go to the hospital.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "医院", pinyin: "yī yuàn", english: "hospital", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "医院", 3) },
      ],
    },
    {
      id: "s3-svo06",
      english: "He goes to the store.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "商店", pinyin: "shāng diàn", english: "store / shop", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "商店", 3) },
      ],
    },
    {
      id: "s4-svo06",
      english: "She goes to the park.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "公园", pinyin: "gōng yuán", english: "park", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "公园", 3) },
      ],
    },
    {
      id: "s5-svo06",
      english: "We go to China.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "中国", pinyin: "zhōng guó", english: "China", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "中国", 3) },
      ],
    },
    {
      id: "s6-svo06",
      english: "Everyone goes to the library.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: ["吃", "喝", "看"] },
        { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "图书馆", 3) },
      ],
    },
  ],
};
