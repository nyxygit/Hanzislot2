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
  // Verb + 了 (fixed — same across all sentences)
  { chinese: "去了", pinyin: "qù le", english: "went", partOfSpeech: "verb" as const },
  // Objects (quizzed)
  { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "object" as const },
  { chinese: "家", pinyin: "jiā", english: "home / family", partOfSpeech: "object" as const },
  { chinese: "商店", pinyin: "shāng diàn", english: "store / shop", partOfSpeech: "object" as const },
  { chinese: "公园", pinyin: "gōng yuán", english: "park", partOfSpeech: "object" as const },
  { chinese: "医院", pinyin: "yī yuàn", english: "hospital", partOfSpeech: "object" as const },
  { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "object" as const },
];

export const le03GoingComing: Level = {
  id: "le-03",
  name: "Completed — Going",
  description: "Subject + 去了 + Object — Talk about going somewhere that's been done",
  pattern: {
    id: "s-le-v-o",
    name: "Subject + Verb + 了 + Object",
    description: "Add 了 (le) after a verb to show an action has been completed.",
    structure: ["subject", "verb", "object"],
    subLevels: 3,
  },
  subLevelIndex: 3,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-le03",
      english: "I went to school.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "去了", pinyin: "qù le", english: "went", partOfSpeech: "verb", distractors: ["去", "没去", "要去"] },
        { chinese: "学校", pinyin: "xué xiào", english: "school", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "学校", 3) },
      ],
    },
    {
      id: "s2-le03",
      english: "He went home.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "去了", pinyin: "qù le", english: "went", partOfSpeech: "verb", distractors: ["去", "没去", "要去"] },
        { chinese: "家", pinyin: "jiā", english: "home / family", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "家", 3) },
      ],
    },
    {
      id: "s3-le03",
      english: "She went to the store.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "去了", pinyin: "qù le", english: "went", partOfSpeech: "verb", distractors: ["去", "没去", "要去"] },
        { chinese: "商店", pinyin: "shāng diàn", english: "store / shop", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "商店", 3) },
      ],
    },
    {
      id: "s4-le03",
      english: "You went to the park.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "去了", pinyin: "qù le", english: "went", partOfSpeech: "verb", distractors: ["去", "没去", "要去"] },
        { chinese: "公园", pinyin: "gōng yuán", english: "park", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "公园", 3) },
      ],
    },
    {
      id: "s5-le03",
      english: "We went to the hospital.",
      parts: [
        { chinese: "我们", pinyin: "wǒ men", english: "we / us", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我们", 3) },
        { chinese: "去了", pinyin: "qù le", english: "went", partOfSpeech: "verb", distractors: ["去", "没去", "要去"] },
        { chinese: "医院", pinyin: "yī yuàn", english: "hospital", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "医院", 3) },
      ],
    },
    {
      id: "s6-le03",
      english: "Everyone went to the library.",
      parts: [
        { chinese: "大家", pinyin: "dà jiā", english: "everyone", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "大家", 3) },
        { chinese: "去了", pinyin: "qù le", english: "went", partOfSpeech: "verb", distractors: ["去", "没去", "要去"] },
        { chinese: "图书馆", pinyin: "tú shū guǎn", english: "library", partOfSpeech: "object", distractors: getVocabularyDistractors(vocabulary, "object", "图书馆", 3) },
      ],
    },
  ],
};
