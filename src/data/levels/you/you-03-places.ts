import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Subjects (quizzed)
  { chinese: "这里", pinyin: "zhè lǐ", english: "here", partOfSpeech: "subject" as const },
  { chinese: "那里", pinyin: "nà lǐ", english: "there", partOfSpeech: "subject" as const },
  // Verb (fixed)
  { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb" as const },
  // Objects (quizzed)
  { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "object" as const },
  { chinese: "医院", pinyin: "yī yuàn", english: "hospital", partOfSpeech: "object" as const },
  { chinese: "公园", pinyin: "gōng yuán", english: "park", partOfSpeech: "object" as const },
  { chinese: "商店", pinyin: "shāng diàn", english: "store / shop", partOfSpeech: "object" as const },
  { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "object" as const },
  { chinese: "咖啡店", pinyin: "kā fēi diàn", english: "coffee shop", partOfSpeech: "object" as const },
];

export const you03Places: Level = {
  id: "you-03",
  name: "Have — Places & Things",
  description: "Subject + 有 + Object — Talk about what exists in a place",
  pattern: {
    id: "s-you-o",
    name: "Subject + 有 + Object",
    description: "Use 有 (yǒu) to express possession, like English 'have' or 'has'.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 3,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-you03",
      english: "There is a school here.",
      parts: [
        { chinese: "这里", pinyin: "zhè lǐ", english: "here", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "这里", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "学校", 3) },
      ],
    },
    {
      id: "s2-you03",
      english: "There is a hospital there.",
      parts: [
        { chinese: "那里", pinyin: "nà lǐ", english: "there", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "那里", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "医院", pinyin: "yī yuàn", english: "hospital", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "医院", 3) },
      ],
    },
    {
      id: "s3-you03",
      english: "There is a park here.",
      parts: [
        { chinese: "这里", pinyin: "zhè lǐ", english: "here", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "这里", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "公园", pinyin: "gōng yuán", english: "park", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "公园", 3) },
      ],
    },
    {
      id: "s4-you03",
      english: "There is a store there.",
      parts: [
        { chinese: "那里", pinyin: "nà lǐ", english: "there", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "那里", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "商店", pinyin: "shāng diàn", english: "store / shop", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "商店", 3) },
      ],
    },
    {
      id: "s5-you03",
      english: "There is a library here.",
      parts: [
        { chinese: "这里", pinyin: "zhè lǐ", english: "here", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "这里", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "图书馆", 3) },
      ],
    },
    {
      id: "s6-you03",
      english: "There is a coffee shop there.",
      parts: [
        { chinese: "那里", pinyin: "nà lǐ", english: "there", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "那里", 3) },
        { chinese: "有", pinyin: "yǒu", english: "have / there is", partOfSpeech: "verb", distractors: ["是", "在", "要"] },
        { chinese: "咖啡店", pinyin: "kā fēi diàn", english: "coffee shop", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "咖啡店", 3) },
      ],
    },
  ],
};
