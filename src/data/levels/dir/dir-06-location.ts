import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Particle (fixed)
  { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle" as const },
  // Location nouns (quizzed)
  { chinese: "左边", pinyin: "zuǒ biān", english: "left side", partOfSpeech: "noun" as const },
  { chinese: "右边", pinyin: "yòu biān", english: "right side", partOfSpeech: "noun" as const },
  { chinese: "前面", pinyin: "qián miàn", english: "front", partOfSpeech: "noun" as const },
  { chinese: "后面", pinyin: "hòu miàn", english: "back / behind", partOfSpeech: "noun" as const },
  { chinese: "对面", pinyin: "duì miàn", english: "opposite side", partOfSpeech: "noun" as const },
  { chinese: "旁边", pinyin: "páng biān", english: "beside / nearby", partOfSpeech: "noun" as const },
];

export const dir06Location: Level = {
  id: "dir-06",
  name: "Directions — It's on the...",
  description: "Describe where something is located",
  pattern: {
    id: "s-dir",
    name: "Directions",
    description: "Learn to give and understand directions in Chinese.",
    structure: ["particle", "noun"],
    subLevels: 6,
  },
  subLevelIndex: 6,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-dir06",
      english: "It's on the left.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "左边", pinyin: "zuǒ biān", english: "left side", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "左边", 3) },
      ],
    },
    {
      id: "s2-dir06",
      english: "It's on the right.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "右边", pinyin: "yòu biān", english: "right side", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "右边", 3) },
      ],
    },
    {
      id: "s3-dir06",
      english: "It's in front.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "前面", pinyin: "qián miàn", english: "front", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "前面", 3) },
      ],
    },
    {
      id: "s4-dir06",
      english: "It's behind.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "后面", pinyin: "hòu miàn", english: "back / behind", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "后面", 3) },
      ],
    },
    {
      id: "s5-dir06",
      english: "It's opposite.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "对面", pinyin: "duì miàn", english: "opposite side", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "对面", 3) },
      ],
    },
    {
      id: "s6-dir06",
      english: "It's beside.",
      parts: [
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "particle", distractors: ["到", "从", "去"] },
        { chinese: "旁边", pinyin: "páng biān", english: "beside / nearby", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "旁边", 3) },
      ],
    },
  ],
};
