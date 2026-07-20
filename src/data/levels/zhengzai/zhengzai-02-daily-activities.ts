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
  { chinese: "看书", pinyin: "kàn shū", english: "read a book", partOfSpeech: "verb" as const },
  { chinese: "做作业", pinyin: "zuò zuò yè", english: "do homework", partOfSpeech: "verb" as const },
  { chinese: "写字", pinyin: "xiě zì", english: "write characters", partOfSpeech: "verb" as const },
  { chinese: "看电视", pinyin: "kàn diàn shì", english: "watch TV", partOfSpeech: "verb" as const },
  { chinese: "听音乐", pinyin: "tīng yīn yuè", english: "listen to music", partOfSpeech: "verb" as const },
  { chinese: "学中文", pinyin: "xué zhōng wén", english: "learn Chinese", partOfSpeech: "verb" as const },
];

export const zhengzai02DailyActivities: Level = {
  id: "zhengzai-02",
  name: "正在...呢 — Daily Activities",
  description: "Subject + 正在 + Verb + 呢 — Talk about daily activities in progress",
  pattern: {
    id: "s-zhengzai-ne",
    name: "Subject + 正在 + Verb + 呢",
    description: "Use 正在...呢 (zhèngzài...ne) to describe an action in progress, like English '-ing'.",
    structure: ["subject", "particle", "verb", "particle"],
    subLevels: 3,
  },
  subLevelIndex: 2,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-zhengzai02",
      english: "I am reading a book.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "看书", pinyin: "kàn shū", english: "read a book", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "看书", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s2-zhengzai02",
      english: "He is doing homework.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "做作业", pinyin: "zuò zuò yè", english: "do homework", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "做作业", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s3-zhengzai02",
      english: "She is writing characters.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "写字", pinyin: "xiě zì", english: "write characters", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "写字", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s4-zhengzai02",
      english: "You are watching TV.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "看电视", pinyin: "kàn diàn shì", english: "watch TV", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "看电视", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s5-zhengzai02",
      english: "We are listening to music.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "听音乐", pinyin: "tīng yīn yuè", english: "listen to music", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "听音乐", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
    {
      id: "s6-zhengzai02",
      english: "Everyone is learning Chinese.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "正在", pinyin: "zhèng zài", english: "in the process of", partOfSpeech: "particle", distractors: ["在", "是", "要"] },
        { chinese: "学中文", pinyin: "xué zhōng wén", english: "learn Chinese", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "学中文", 3) },
        { chinese: "呢", pinyin: "ne", english: "(ongoing action particle)", partOfSpeech: "particle", distractors: ["吗", "吧", "了"] },
      ],
    },
  ],
};
