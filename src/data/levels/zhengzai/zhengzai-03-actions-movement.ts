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
  { chinese: "跑步", pinyin: "pǎo bù", english: "run / jog", partOfSpeech: "verb" as const },
  { chinese: "睡觉", pinyin: "shuì jiào", english: "sleep", partOfSpeech: "verb" as const },
  { chinese: "休息", pinyin: "xiū xi", english: "rest", partOfSpeech: "verb" as const },
  { chinese: "运动", pinyin: "yùn dòng", english: "exercise", partOfSpeech: "verb" as const },
  { chinese: "工作", pinyin: "gōng zuò", english: "work", partOfSpeech: "verb" as const },
  { chinese: "玩游戏", pinyin: "wán yóu xì", english: "play a game", partOfSpeech: "verb" as const },
];

export const zhengzai03ActionsMovement: Level = {
  id: "zhengzai-03",
  name: "正在...呢 — Actions & Movement",
  description: "Subject + 正在 + Verb + 呢 — Talk about actions and movement in progress",
  pattern: {
    id: "s-zhengzai-ne",
    name: "Subject + 正在 + Verb + 呢",
    description: "Use 正在...呢 (zhèngzài...ne) to describe an action in progress, like English '-ing'.",
    structure: ["subject", "particle", "verb", "particle"],
    subLevels: 3,
  },
  subLevelIndex: 3,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-zhengzai03",
      english: "I am running.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "跑步", pinyin: "pǎo bù", english: "run / jog", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "跑步", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s2-zhengzai03",
      english: "He is sleeping.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "睡觉", pinyin: "shuì jiào", english: "sleep", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "睡觉", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s3-zhengzai03",
      english: "She is resting.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "休息", pinyin: "xiū xi", english: "rest", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "休息", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s4-zhengzai03",
      english: "You are exercising.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "运动", pinyin: "yùn dòng", english: "exercise", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "运动", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s5-zhengzai03",
      english: "We are working.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "工作", pinyin: "gōng zuò", english: "work", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "工作", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s6-zhengzai03",
      english: "Everyone is playing a game.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "玩游戏", pinyin: "wán yóu xì", english: "play a game", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "玩游戏", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
  ],
};
