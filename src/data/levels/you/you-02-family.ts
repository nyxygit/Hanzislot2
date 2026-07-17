import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Subjects (quizzed)
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  // Verb (fixed)
  { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb" as const },
  // Objects (quizzed)
  { chinese: "哥哥", pinyin: "gē ge", english: "older brother", partOfSpeech: "object" as const },
  { chinese: "姐姐", pinyin: "jiě jie", english: "older sister", partOfSpeech: "object" as const },
  { chinese: "弟弟", pinyin: "dì di", english: "younger brother", partOfSpeech: "object" as const },
  { chinese: "老师", pinyin: "lǎo shī", english: "teacher", partOfSpeech: "object" as const },
  { chinese: "好朋友", pinyin: "hǎo péng yǒu", english: "good friend", partOfSpeech: "object" as const },
  { chinese: "妈妈", pinyin: "mā ma", english: "mother", partOfSpeech: "object" as const },
];

export const you02Family: Level = {
  id: "you-02",
  name: "Have — Family & People",
  description: "Subject + 有 + Object — Talk about family members and people you have",
  pattern: {
    id: "s-you-o",
    name: "Subject + 有 + Object",
    description: "Use 有 (yǒu) to express possession, like English 'have' or 'has'.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 2,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-you02",
      english: "I have an older brother.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "哥哥", pinyin: "gē ge", english: "older brother", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "哥哥", 3) },
      ],
    },
    {
      id: "s2-you02",
      english: "She has an older sister.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "姐姐", pinyin: "jiě jie", english: "older sister", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "姐姐", 3) },
      ],
    },
    {
      id: "s3-you02",
      english: "He has a younger brother.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "弟弟", pinyin: "dì di", english: "younger brother", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "弟弟", 3) },
      ],
    },
    {
      id: "s4-you02",
      english: "I have a good teacher.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "老师", pinyin: "lǎo shī", english: "teacher", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "老师", 3) },
      ],
    },
    {
      id: "s5-you02",
      english: "She has a good friend.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "好朋友", pinyin: "hǎo péng yǒu", english: "good friend", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "好朋友", 3) },
      ],
    },
    {
      id: "s6-you02",
      english: "I have a mother.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "妈妈", pinyin: "mā ma", english: "mother", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "妈妈", 3) },
      ],
    },
  ],
};
