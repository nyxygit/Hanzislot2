import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject" as const },
  { chinese: "你们", pinyin: "nǐ men", english: "you (plural)", partOfSpeech: "subject" as const },
  { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject" as const },
  { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle" as const },
  { chinese: "学习", pinyin: "xué xí", english: "study / learn", partOfSpeech: "verb" as const },
  { chinese: "工作", pinyin: "gōng zuò", english: "work", partOfSpeech: "verb" as const },
  { chinese: "做作业", pinyin: "zuò zuò yè", english: "do homework", partOfSpeech: "verb" as const },
  { chinese: "学中文", pinyin: "xué zhōng wén", english: "learn Chinese", partOfSpeech: "verb" as const },
  { chinese: "看书", pinyin: "kàn shū", english: "read a book", partOfSpeech: "verb" as const },
  { chinese: "写", pinyin: "xiě", english: "write", partOfSpeech: "verb" as const },
  { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb" as const },
  { chinese: "来", pinyin: "lái", english: "come", partOfSpeech: "verb" as const },
];

export const yinggai01Basics: Level = {
  id: "yinggai-01",
  name: "Should — Study & Work",
  description: "Subject + 应该 + Verb — Talk about what you should do for study and work",
  pattern: {
    id: "s-yinggai-v",
    name: "Subject + 应该 + Verb",
    description: "Use 应该 (yīnggāi) to say what someone should or ought to do.",
    structure: ["subject", "particle", "verb"],
    subLevels: 3,
  },
  subLevelIndex: 1,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-yinggai01",
      english: "I should study.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "学习", pinyin: "xué xí", english: "study / learn", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "学习", 3) },
      ],
    },
    {
      id: "s2-yinggai01",
      english: "You should work.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "工作", pinyin: "gōng zuò", english: "work", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "工作", 3) },
      ],
    },
    {
      id: "s3-yinggai01",
      english: "He should do homework.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "做作业", pinyin: "zuò zuò yè", english: "do homework", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "做作业", 3) },
      ],
    },
    {
      id: "s4-yinggai01",
      english: "We should learn Chinese.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "学中文", pinyin: "xué zhōng wén", english: "learn Chinese", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "学中文", 3) },
      ],
    },
    {
      id: "s5-yinggai01",
      english: "You all should read books.",
      parts: [
        { chinese: "你们", pinyin: "nǐ men", english: "you (plural)", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你们", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "看书", pinyin: "kàn shū", english: "read a book", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "看书", 3) },
      ],
    },
    {
      id: "s6-yinggai01",
      english: "Everyone should go.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "去", 3) },
      ],
    },
  ],
};
