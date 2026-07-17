import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Subjects (quizzed)
  { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "subject" as const },
  { chinese: "手机", pinyin: "shǒu jī", english: "mobile phone", partOfSpeech: "subject" as const },
  { chinese: "猫", pinyin: "māo", english: "cat", partOfSpeech: "subject" as const },
  { chinese: "衣服", pinyin: "yī fu", english: "clothes", partOfSpeech: "subject" as const },
  { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit", partOfSpeech: "subject" as const },
  { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "subject" as const },
  // Verb (fixed)
  { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb" as const },
  // Objects (quizzed)
  { chinese: "桌子", pinyin: "zhuō zi", english: "table / desk", partOfSpeech: "object" as const },
  { chinese: "包", pinyin: "bāo", english: "bag", partOfSpeech: "object" as const },
  { chinese: "椅子", pinyin: "yǐ zi", english: "chair", partOfSpeech: "object" as const },
  { chinese: "房间", pinyin: "fáng jiān", english: "room", partOfSpeech: "object" as const },
  { chinese: "厨房", pinyin: "chú fáng", english: "kitchen", partOfSpeech: "object" as const },
  { chinese: "杯子", pinyin: "bēi zi", english: "cup / glass", partOfSpeech: "object" as const },
];

export const zai02ThingsLocations: Level = {
  id: "zai-02",
  name: "At — Things & Locations",
  description: "Subject + 在 + Location — Talk about where things are located",
  pattern: {
    id: "s-zai-o",
    name: "Subject + 在 + Location",
    description: "Use 在 (zài) to say where someone or something is located.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 2,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-zai02",
      english: "The book is on the table.",
      parts: [
        { chinese: "书", pinyin: "shū", english: "book", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "书", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "桌子", pinyin: "zhuō zi", english: "table / desk", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "桌子", 3) },
      ],
    },
    {
      id: "s2-zai02",
      english: "The phone is in the bag.",
      parts: [
        { chinese: "手机", pinyin: "shǒu jī", english: "mobile phone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "手机", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "包", pinyin: "bāo", english: "bag", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "包", 3) },
      ],
    },
    {
      id: "s3-zai02",
      english: "The cat is on the chair.",
      parts: [
        { chinese: "猫", pinyin: "māo", english: "cat", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "猫", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "椅子", pinyin: "yǐ zi", english: "chair", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "椅子", 3) },
      ],
    },
    {
      id: "s4-zai02",
      english: "The clothes are in the room.",
      parts: [
        { chinese: "衣服", pinyin: "yī fu", english: "clothes", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "衣服", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "房间", pinyin: "fáng jiān", english: "room", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "房间", 3) },
      ],
    },
    {
      id: "s5-zai02",
      english: "The fruit is in the kitchen.",
      parts: [
        { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "水果", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "厨房", pinyin: "chú fáng", english: "kitchen", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "厨房", 3) },
      ],
    },
    {
      id: "s6-zai02",
      english: "The water is in the cup.",
      parts: [
        { chinese: "水", pinyin: "shuǐ", english: "water", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "水", 3) },
        { chinese: "在", pinyin: "zài", english: "at / in / on", partOfSpeech: "verb", distractors: ["是", "有", "要"] },
        { chinese: "杯子", pinyin: "bēi zi", english: "cup / glass", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "杯子", 3) },
      ],
    },
  ],
};
