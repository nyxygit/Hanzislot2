import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject" as const },
  { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject" as const },
  { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb" as const },
  { chinese: "看书", pinyin: "kàn shū", english: "read a book", partOfSpeech: "verb" as const },
  { chinese: "看电影", pinyin: "kàn diàn yǐng", english: "watch a movie", partOfSpeech: "verb" as const },
  { chinese: "听音乐", pinyin: "tīng yīn yuè", english: "listen to music", partOfSpeech: "verb" as const },
  { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb" as const },
  { chinese: "学中文", pinyin: "xué zhōng wén", english: "learn Chinese", partOfSpeech: "verb" as const },
  { chinese: "玩游戏", pinyin: "wán yóu xì", english: "play a game", partOfSpeech: "verb" as const },
];

export const xiang02Activities: Level = {
  id: "xiang-02",
  name: "Would Like — Activities",
  description: "Subject + 想 + Verb — Politely express what activities you'd like to do",
  pattern: {
    id: "s-xiang-v",
    name: "Subject + 想 + Verb",
    description: "Use 想 (xiǎng) to say what you would like — softer and more polite than 要.",
    structure: ["subject", "verb", "verb"],
    subLevels: 3,
  },
  subLevelIndex: 2,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-xiang02",
      english: "I would like to read a book.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "看书", pinyin: "kàn shū", english: "read a book", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "看书", 3) },
      ],
    },
    {
      id: "s2-xiang02",
      english: "He would like to watch a movie.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "看电影", pinyin: "kàn diàn yǐng", english: "watch a movie", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "看电影", 3) },
      ],
    },
    {
      id: "s3-xiang02",
      english: "She would like to listen to music.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "听音乐", pinyin: "tīng yīn yuè", english: "listen to music", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "听音乐", 3) },
      ],
    },
    {
      id: "s4-xiang02",
      english: "You would like to go to the park.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "去", 3) },
      ],
    },
    {
      id: "s5-xiang02",
      english: "We would like to learn Chinese.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "学中文", pinyin: "xué zhōng wén", english: "learn Chinese", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "学中文", 3) },
      ],
    },
    {
      id: "s6-xiang02",
      english: "Everyone would like to play games.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "想", pinyin: "xiǎng", english: "would like", partOfSpeech: "verb", distractors: ["要", "需要", "可以"] },
        { chinese: "玩游戏", pinyin: "wán yóu xì", english: "play a game", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "玩游戏", 3) },
      ],
    },
  ],
};
