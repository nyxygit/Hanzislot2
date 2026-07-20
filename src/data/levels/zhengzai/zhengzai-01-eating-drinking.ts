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
  // Particles (fixed)
  { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle" as const },
  { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle" as const },
  // Verbs (quizzed)
  { chinese: "吃饭", pinyin: "chī fàn", english: "eat a meal", partOfSpeech: "verb" as const },
  { chinese: "喝水", pinyin: "hē shuǐ", english: "drink water", partOfSpeech: "verb" as const },
  { chinese: "喝茶", pinyin: "hē chá", english: "drink tea", partOfSpeech: "verb" as const },
  { chinese: "吃苹果", pinyin: "chī píng guǒ", english: "eat an apple", partOfSpeech: "verb" as const },
  { chinese: "喝咖啡", pinyin: "hē kā fēi", english: "drink coffee", partOfSpeech: "verb" as const },
  { chinese: "吃面包", pinyin: "chī miàn bāo", english: "eat bread", partOfSpeech: "verb" as const },
];

export const zhengzai01EatingDrinking: Level = {
  id: "zhengzai-01",
  name: "正在...呢 — Eating & Drinking",
  description: "Subject + 正在 + Verb + 呢 — Talk about eating and drinking in progress",
  pattern: {
    id: "s-zhengzai-ne",
    name: "Subject + 正在 + Verb + 呢",
    description: "Use 正在...呢 (zhèngzài...ne) to describe an action in progress, like English '-ing'.",
    structure: ["subject", "particle", "verb", "particle"],
    subLevels: 3,
  },
  subLevelIndex: 1,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-zhengzai01",
      english: "I am eating.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "吃饭", pinyin: "chī fàn", english: "eat a meal", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "吃饭", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s2-zhengzai01",
      english: "He is drinking water.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "喝水", pinyin: "hē shuǐ", english: "drink water", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "喝水", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s3-zhengzai01",
      english: "She is drinking tea.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "喝茶", pinyin: "hē chá", english: "drink tea", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "喝茶", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s4-zhengzai01",
      english: "You are eating an apple.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "吃苹果", pinyin: "chī píng guǒ", english: "eat an apple", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "吃苹果", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s5-zhengzai01",
      english: "We are drinking coffee.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "喝咖啡", pinyin: "hē kā fēi", english: "drink coffee", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "喝咖啡", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s6-zhengzai01",
      english: "Everyone is eating bread.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "吃面包", pinyin: "chī miàn bāo", english: "eat bread", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "吃面包", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
  ],
};
