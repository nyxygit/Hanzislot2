import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject" as const },
  { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject" as const },
  { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle" as const },
  { chinese: "休息", pinyin: "xiū xi", english: "rest", partOfSpeech: "verb" as const },
  { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb" as const },
  { chinese: "喝", pinyin: "hē", english: "drink", partOfSpeech: "verb" as const },
  { chinese: "运动", pinyin: "yùn dòng", english: "exercise", partOfSpeech: "verb" as const },
  { chinese: "睡觉", pinyin: "shuì jiào", english: "sleep", partOfSpeech: "verb" as const },
  { chinese: "看医生", pinyin: "kàn yī shēng", english: "see a doctor", partOfSpeech: "verb" as const },
  { chinese: "多喝水", pinyin: "duō hē shuǐ", english: "drink more water", partOfSpeech: "verb" as const },
];

export const yinggai02Health: Level = {
  id: "yinggai-02",
  name: "Should — Health & Rest",
  description: "Subject + 应该 + Verb — Talk about what you should do for health and well-being",
  pattern: {
    id: "s-yinggai-v",
    name: "Subject + 应该 + Verb",
    description: "Use 应该 (yīnggāi) to say what someone should or ought to do.",
    structure: ["subject", "particle", "verb"],
    subLevels: 3,
  },
  subLevelIndex: 2,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-yinggai02",
      english: "You should rest.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "休息", pinyin: "xiū xi", english: "rest", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "休息", 3) },
      ],
    },
    {
      id: "s2-yinggai02",
      english: "I should drink more water.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "多喝水", pinyin: "duō hē shuǐ", english: "drink more water", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "多喝水", 3) },
      ],
    },
    {
      id: "s3-yinggai02",
      english: "He should exercise.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "运动", pinyin: "yùn dòng", english: "exercise", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "运动", 3) },
      ],
    },
    {
      id: "s4-yinggai02",
      english: "She should sleep.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "睡觉", pinyin: "shuì jiào", english: "sleep", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "睡觉", 3) },
      ],
    },
    {
      id: "s5-yinggai02",
      english: "You should see a doctor.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "看医生", pinyin: "kàn yī shēng", english: "see a doctor", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "看医生", 3) },
      ],
    },
    {
      id: "s6-yinggai02",
      english: "Everyone should eat well.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "应该", pinyin: "yīng gāi", english: "should / ought to", partOfSpeech: "particle", distractors: ["是", "很", "要"] },
        { chinese: "吃", pinyin: "chī", english: "eat", partOfSpeech: "verb", distractors: getVocabularyDistractors(vocabulary, "verb", "吃", 3) },
      ],
    },
  ],
};
