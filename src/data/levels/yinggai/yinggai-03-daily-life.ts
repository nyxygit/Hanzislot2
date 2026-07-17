import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject" as const },
  { chinese: "你们", pinyin: "nǐ men", english: "you (plural)", partOfSpeech: "subject" as const },
  { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject" as const },
  { chinese: "学生", pinyin: "xué shēng", english: "student", partOfSpeech: "subject" as const },
  { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle" as const },
  { chinese: "帮助", pinyin: "bāng zhù", english: "help", partOfSpeech: "verb" as const },
  { chinese: "说中文", pinyin: "shuō zhōng wén", english: "speak Chinese", partOfSpeech: "verb" as const },
  { chinese: "听", pinyin: "tīng", english: "listen", partOfSpeech: "verb" as const },
  { chinese: "来", pinyin: "lái", english: "come", partOfSpeech: "verb" as const },
  { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb" as const },
  { chinese: "等", pinyin: "děng", english: "wait", partOfSpeech: "verb" as const },
  { chinese: "做", pinyin: "zuò", english: "do / make", partOfSpeech: "verb" as const },
];

export const yinggai03DailyLife: Level = {
  id: "yinggai-03",
  name: "Should — Daily Life & Manners",
  description: "Subject + 应该 + Verb — Talk about what you should do in daily life and polite behavior",
  pattern: {
    id: "s-yinggai-v",
    name: "Subject + 应该 + Verb",
    description: "Use 应该 (yīnggāi) to say what someone should or ought to do.",
    structure: ["subject", "particle", "verb"],
    subLevels: 3,
  },
  subLevelIndex: 3,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-yinggai03",
      english: "You should help him.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "帮助", pinyin: "bāng zhù", english: "help", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "帮助", 3) },
      ],
    },
    {
      id: "s2-yinggai03",
      english: "We should speak Chinese.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "说中文", pinyin: "shuō zhōng wén", english: "speak Chinese", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "说中文", 3) },
      ],
    },
    {
      id: "s3-yinggai03",
      english: "Students should listen to the teacher.",
      parts: [
        { chinese: "学生", pinyin: "xué shēng", english: "student", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "学生", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "听", pinyin: "tīng", english: "listen", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "听", 3) },
      ],
    },
    {
      id: "s4-yinggai03",
      english: "You should come to my home.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "来", pinyin: "lái", english: "come", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "来", 3) },
      ],
    },
    {
      id: "s5-yinggai03",
      english: "Everyone should wait a bit.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "等", pinyin: "děng", english: "wait", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "等", 3) },
      ],
    },
    {
      id: "s6-yinggai03",
      english: "You all should go to the park.",
      parts: [
        { chinese: "你们", pinyin: "nǐ men", english: "you (plural)", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你们", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "去", pinyin: "qù", english: "go", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "去", 3) },
      ],
    },
  ],
};
