import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle" as const },
  { chinese: "中国人", pinyin: "zhōng guó rén", english: "Chinese person", partOfSpeech: "noun" as const },
  { chinese: "美国人", pinyin: "měi guó rén", english: "American person", partOfSpeech: "noun" as const },
  { chinese: "日本人", pinyin: "rì běn rén", english: "Japanese person", partOfSpeech: "noun" as const },
  { chinese: "英国人", pinyin: "yīng guó rén", english: "British person", partOfSpeech: "noun" as const },
  { chinese: "法国人", pinyin: "fǎ guó rén", english: "French person", partOfSpeech: "noun" as const },
  { chinese: "外国人", pinyin: "wài guó rén", english: "foreigner", partOfSpeech: "noun" as const },
];

export const shi03Identity: Level = {
  id: "shi-03",
  name: "Who You Are — Identity",
  description: "Subject + 是 + Noun — Talk about nationalities and identity",
  pattern: {
    id: "s-shi-n",
    name: "Subject + 是 + Noun",
    description: "Use 是 (shì) to say what someone or something is, like English 'is/am/are'.",
    structure: ["subject", "particle", "noun"],
    subLevels: 3,
  },
  subLevelIndex: 3,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-shi03",
      english: "I am Chinese.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "中国人", pinyin: "zhōng guó rén", english: "Chinese person", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "中国人", 3) },
      ],
    },
    {
      id: "s2-shi03",
      english: "He is American.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "美国人", pinyin: "měi guó rén", english: "American person", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "美国人", 3) },
      ],
    },
    {
      id: "s3-shi03",
      english: "She is Japanese.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "她", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "日本人", pinyin: "rì běn rén", english: "Japanese person", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "日本人", 3) },
      ],
    },
    {
      id: "s4-shi03",
      english: "You are British.",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "你", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "英国人", pinyin: "yīng guó rén", english: "British person", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "英国人", 3) },
      ],
    },
    {
      id: "s5-shi03",
      english: "He is French.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "他", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "法国人", pinyin: "fǎ guó rén", english: "French person", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "法国人", 3) },
      ],
    },
    {
      id: "s6-shi03",
      english: "I am a foreigner.",
      parts: [
        { chinese: "我", pinyin: "wǒ", english: "I / me", partOfSpeech: "subject", distractors: getVocabularyDistractors(vocabulary, "subject", "我", 3) },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "particle", distractors: ["很", "不", "要"] },
        { chinese: "外国人", pinyin: "wài guó rén", english: "foreigner", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "外国人", 3) },
      ],
    },
  ],
};
