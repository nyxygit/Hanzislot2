import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Particles (fixed)
  { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle" as const },
  { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle" as const },
  // Landmark nouns (quizzed)
  { chinese: "医院", pinyin: "yī yuàn", english: "hospital", partOfSpeech: "noun" as const },
  { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "noun" as const },
  { chinese: "商店", pinyin: "shāng diàn", english: "store / shop", partOfSpeech: "noun" as const },
  { chinese: "公园", pinyin: "gōng yuán", english: "park", partOfSpeech: "noun" as const },
  { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "noun" as const },
  // Direction verbs (quizzed)
  { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb" as const },
  { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb" as const },
  { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb" as const },
];

export const dir05Landmarks: Level = {
  id: "dir-05",
  name: "Directions — Landmarks",
  description: "Give directions using buildings and landmarks",
  pattern: {
    id: "s-dir",
    name: "Directions",
    description: "Learn to give and understand directions in Chinese.",
    structure: ["particle", "noun", "verb", "particle", "verb"],
    subLevels: 6,
  },
  subLevelIndex: 5,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-dir05",
      english: "Turn left at the hospital.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "医院", pinyin: "yī yuàn", english: "hospital", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "医院", 3) },
        { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "左转", 3) },
      ],
    },
    {
      id: "s2-dir05",
      english: "Turn right at the school.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "学校", 3) },
        { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "右转", 3) },
      ],
    },
    {
      id: "s3-dir05",
      english: "Go straight at the store.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "商店", pinyin: "shāng diàn", english: "store / shop", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "商店", 3) },
        { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "直走", 3) },
      ],
    },
    {
      id: "s4-dir05",
      english: "Turn left at the park, then go straight.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "公园", pinyin: "gōng yuán", english: "park", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "公园", 3) },
        { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "左转", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "直走", 3) },
      ],
    },
    {
      id: "s5-dir05",
      english: "Turn right at the library, then go straight.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "图书馆", 3) },
        { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "右转", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "直走", 3) },
      ],
    },
    {
      id: "s6-dir05",
      english: "Turn right at the hospital, then turn left.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "医院", pinyin: "yī yuàn", english: "hospital", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "医院", 3) },
        { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "右转", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "左转", 3) },
      ],
    },
  ],
};
