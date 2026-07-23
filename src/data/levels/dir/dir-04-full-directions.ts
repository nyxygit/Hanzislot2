import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Particles (fixed)
  { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle" as const },
  { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle" as const },
  // Location nouns (quizzed)
  { chinese: "第一个路口", pinyin: "dì yī gè lù kǒu", english: "first intersection", partOfSpeech: "noun" as const },
  { chinese: "第二个路口", pinyin: "dì èr gè lù kǒu", english: "second intersection", partOfSpeech: "noun" as const },
  { chinese: "第三个路口", pinyin: "dì sān gè lù kǒu", english: "third intersection", partOfSpeech: "noun" as const },
  { chinese: "红绿灯", pinyin: "hóng lǜ dēng", english: "traffic light", partOfSpeech: "noun" as const },
  // Direction verbs (quizzed)
  { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb" as const },
  { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb" as const },
  { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb" as const },
];

export const dir04FullDirections: Level = {
  id: "dir-04",
  name: "Directions — Full Directions",
  description: "Combine location, direction, and sequencing",
  pattern: {
    id: "s-dir",
    name: "Directions",
    description: "Learn to give and understand directions in Chinese.",
    structure: ["particle", "noun", "verb", "particle", "verb"],
    subLevels: 6,
  },
  subLevelIndex: 4,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-dir04",
      english: "Turn left at the first intersection, then go straight.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "第一个路口", pinyin: "dì yī gè lù kǒu", english: "first intersection", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "第一个路口", 3) },
        { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "左转", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "直走", 3) },
      ],
    },
    {
      id: "s2-dir04",
      english: "Turn right at the second intersection, then go straight.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "第二个路口", pinyin: "dì èr gè lù kǒu", english: "second intersection", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "第二个路口", 3) },
        { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "右转", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "直走", 3) },
      ],
    },
    {
      id: "s3-dir04",
      english: "Turn right at the first intersection, then turn left.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "第一个路口", pinyin: "dì yī gè lù kǒu", english: "first intersection", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "第一个路口", 3) },
        { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "右转", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "左转", 3) },
      ],
    },
    {
      id: "s4-dir04",
      english: "Turn left at the traffic light, then go straight.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "红绿灯", pinyin: "hóng lǜ dēng", english: "traffic light", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "红绿灯", 3) },
        { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "左转", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "直走", 3) },
      ],
    },
    {
      id: "s5-dir04",
      english: "Turn left at the second intersection, then turn right.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "第二个路口", pinyin: "dì èr gè lù kǒu", english: "second intersection", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "第二个路口", 3) },
        { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "左转", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "右转", 3) },
      ],
    },
    {
      id: "s6-dir04",
      english: "Turn right at the third intersection, then go straight.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "第三个路口", pinyin: "dì sān gè lù kǒu", english: "third intersection", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "第三个路口", 3) },
        { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "右转", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "直走", 3) },
      ],
    },
  ],
};
