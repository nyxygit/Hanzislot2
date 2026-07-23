import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Direction verbs (quizzed)
  { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb" as const },
  { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb" as const },
  { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb" as const },
  { chinese: "往前走", pinyin: "wǎng qián zǒu", english: "go forward", partOfSpeech: "verb" as const },
  { chinese: "往回走", pinyin: "wǎng huí zǒu", english: "go back", partOfSpeech: "verb" as const },
  { chinese: "一直走", pinyin: "yī zhí zǒu", english: "go straight ahead", partOfSpeech: "verb" as const },
];

export const dir01Basic: Level = {
  id: "dir-01",
  name: "Directions — Basic",
  description: "Learn simple direction commands",
  pattern: {
    id: "s-dir",
    name: "Directions",
    description: "Learn to give and understand directions in Chinese.",
    structure: ["verb"],
    subLevels: 6,
  },
  subLevelIndex: 1,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-dir01",
      english: "Go straight.",
      parts: [
        { chinese: "直走", pinyin: "zhí zǒu", english: "go straight", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "直走", 3) },
      ],
    },
    {
      id: "s2-dir01",
      english: "Turn left.",
      parts: [
        { chinese: "左转", pinyin: "zuǒ zhuǎn", english: "turn left", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "左转", 3) },
      ],
    },
    {
      id: "s3-dir01",
      english: "Turn right.",
      parts: [
        { chinese: "右转", pinyin: "yòu zhuǎn", english: "turn right", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "右转", 3) },
      ],
    },
    {
      id: "s4-dir01",
      english: "Go forward.",
      parts: [
        { chinese: "往前走", pinyin: "wǎng qián zǒu", english: "go forward", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "往前走", 3) },
      ],
    },
    {
      id: "s5-dir01",
      english: "Go back.",
      parts: [
        { chinese: "往回走", pinyin: "wǎng huí zǒu", english: "go back", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "往回走", 3) },
      ],
    },
    {
      id: "s6-dir01",
      english: "Go straight ahead.",
      parts: [
        { chinese: "一直走", pinyin: "yī zhí zǒu", english: "go straight ahead", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "一直走", 3) },
      ],
    },
  ],
};
