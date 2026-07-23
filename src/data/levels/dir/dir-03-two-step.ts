import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Direction verbs (quizzed)
  { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb" as const },
  { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb" as const },
  { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb" as const },
  { chinese: "往前走", pinyin: "wǎng qián zǒu", english: "go forward", partOfSpeech: "verb" as const },
  { chinese: "一直走", pinyin: "yī zhí zǒu", english: "go straight ahead", partOfSpeech: "verb" as const },
  // Particle (fixed)
  { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle" as const },
];

export const dir03TwoStep: Level = {
  id: "dir-03",
  name: "Directions — Two-Step",
  description: "Combine two directions with 然后 (then)",
  pattern: {
    id: "s-dir",
    name: "Directions",
    description: "Learn to give and understand directions in Chinese.",
    structure: ["verb", "particle", "verb"],
    subLevels: 6,
  },
  subLevelIndex: 3,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-dir03",
      english: "Go straight, then turn left.",
      parts: [
        { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "直走", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "左转", 3) },
      ],
    },
    {
      id: "s2-dir03",
      english: "Go straight, then turn right.",
      parts: [
        { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "直走", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "右转", 3) },
      ],
    },
    {
      id: "s3-dir03",
      english: "Turn left, then go straight.",
      parts: [
        { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "左转", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "直走", 3) },
      ],
    },
    {
      id: "s4-dir03",
      english: "Turn right, then go straight.",
      parts: [
        { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "右转", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "直走", 3) },
      ],
    },
    {
      id: "s5-dir03",
      english: "Go forward, then turn left.",
      parts: [
        { chinese: "往前走", pinyin: "wǎng qián zǒu", english: "go forward", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "往前走", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "左转", 3) },
      ],
    },
    {
      id: "s6-dir03",
      english: "Go straight ahead, then turn right.",
      parts: [
        { chinese: "一直走", pinyin: "yī zhí zǒu", english: "go straight ahead", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "一直走", 3) },
        { chinese: "然后", pinyin: "rán hòu", english: "then / after that", partOfSpeech: "particle", distractors: ["还是", "或者", "可是"] },
        { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "右转", 3) },
      ],
    },
  ],
};
