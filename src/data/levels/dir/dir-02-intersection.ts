import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Particle (fixed)
  { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle" as const },
  // Location nouns (quizzed)
  { chinese: "第一个路口", pinyin: "dì yī gè lù kǒu", english: "first intersection", partOfSpeech: "noun" as const },
  { chinese: "第二个路口", pinyin: "dì èr gè lù kǒu", english: "second intersection", partOfSpeech: "noun" as const },
  { chinese: "第三个路口", pinyin: "dì sān gè lù kǒu", english: "third intersection", partOfSpeech: "noun" as const },
  { chinese: "红绿灯", pinyin: "hóng lǜ dēng", english: "traffic light", partOfSpeech: "noun" as const },
  // Direction verbs (quizzed)
  { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb" as const },
  { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb" as const },
  { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb" as const },
  { chinese: "往前走", pinyin: "wǎng qián zǒu", english: "go forward", partOfSpeech: "verb" as const },
];

export const dir02Intersection: Level = {
  id: "dir-02",
  name: "Directions — At the Intersection",
  description: "Learn to give directions at intersections and landmarks",
  pattern: {
    id: "s-dir",
    name: "Directions",
    description: "Learn to give and understand directions in Chinese.",
    structure: ["particle", "noun", "verb"],
    subLevels: 6,
  },
  subLevelIndex: 2,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-dir02",
      english: "Turn left at the first intersection.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "第一个路口", pinyin: "dì yī gè lù kǒu", english: "first intersection", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "第一个路口", 3) },
        { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "左转", 3) },
      ],
    },
    {
      id: "s2-dir02",
      english: "Turn right at the second intersection.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "第二个路口", pinyin: "dì èr gè lù kǒu", english: "second intersection", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "第二个路口", 3) },
        { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "右转", 3) },
      ],
    },
    {
      id: "s3-dir02",
      english: "Go straight at the third intersection.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "第三个路口", pinyin: "dì sān gè lù kǒu", english: "third intersection", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "第三个路口", 3) },
        { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "直走", 3) },
      ],
    },
    {
      id: "s4-dir02",
      english: "Turn right at the first intersection.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "第一个路口", pinyin: "dì yī gè lù kǒu", english: "first intersection", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "第一个路口", 3) },
        { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "右转", 3) },
      ],
    },
    {
      id: "s5-dir02",
      english: "Turn left at the second intersection.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "第二个路口", pinyin: "dì èr gè lù kǒu", english: "second intersection", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "第二个路口", 3) },
        { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "左转", 3) },
      ],
    },
    {
      id: "s6-dir02",
      english: "Go forward at the traffic light.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "红绿灯", pinyin: "hóng lǜ dēng", english: "traffic light", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "红绿灯", 3) },
        { chinese: "往前走", pinyin: "wǎng qián zǒu", english: "go forward", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "往前走", 3) },
      ],
    },
  ],
};
