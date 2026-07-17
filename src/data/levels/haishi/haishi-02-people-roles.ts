import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Subjects (used as static context)
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject" as const },
  // Verbs (used as static context)
  { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb" as const },
  // Nouns (quizzed slots)
  { chinese: "学生", pinyin: "xué shēng", english: "student", partOfSpeech: "noun" as const },
  { chinese: "老师", pinyin: "lǎo shī", english: "teacher", partOfSpeech: "noun" as const },
  { chinese: "护士", pinyin: "hù shi", english: "nurse", partOfSpeech: "noun" as const },
  { chinese: "医生", pinyin: "yī shēng", english: "doctor", partOfSpeech: "noun" as const },
  { chinese: "中国人", pinyin: "zhōng guó rén", english: "Chinese person", partOfSpeech: "noun" as const },
  { chinese: "美国人", pinyin: "měi guó rén", english: "American person", partOfSpeech: "noun" as const },
  { chinese: "司机", pinyin: "sī jī", english: "driver", partOfSpeech: "noun" as const },
  { chinese: "厨师", pinyin: "chú shī", english: "cook / chef", partOfSpeech: "noun" as const },
  { chinese: "姐姐", pinyin: "jiě jie", english: "older sister", partOfSpeech: "noun" as const },
  { chinese: "妹妹", pinyin: "mèi mei", english: "younger sister", partOfSpeech: "noun" as const },
  { chinese: "朋友", pinyin: "péng yǒu", english: "friend", partOfSpeech: "noun" as const },
  { chinese: "同学", pinyin: "tóng xué", english: "classmate", partOfSpeech: "noun" as const },
  // Particle
  { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle" as const },
];

export const haishi02PeopleRoles: Level = {
  id: "haishi-02",
  name: "A or B? — People & Roles",
  description: "Noun + 还是 + Noun — Ask questions about identity and roles",
  pattern: {
    id: "s-haishi-n",
    name: "Noun + 还是 + Noun",
    description: "Use 还是 (háishì) to ask 'or' questions offering alternatives.",
    structure: ["noun", "particle", "noun"],
    subLevels: 3,
  },
  subLevelIndex: 2,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-haishi02",
      english: "Is he a student or a teacher?",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "学生", pinyin: "xué shēng", english: "student", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "学生", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "老师", pinyin: "lǎo shī", english: "teacher", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "老师", 3) },
      ],
    },
    {
      id: "s2-haishi02",
      english: "Is she a nurse or a doctor?",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "护士", pinyin: "hù shi", english: "nurse", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "护士", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "医生", pinyin: "yī shēng", english: "doctor", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "医生", 3) },
      ],
    },
    {
      id: "s3-haishi02",
      english: "Are you Chinese or American?",
      parts: [
        { chinese: "你", pinyin: "nǐ", english: "you", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "中国人", pinyin: "zhōng guó rén", english: "Chinese person", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "中国人", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "美国人", pinyin: "měi guó rén", english: "American person", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "美国人", 3) },
      ],
    },
    {
      id: "s4-haishi02",
      english: "Is he a driver or a chef?",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "司机", pinyin: "sī jī", english: "driver", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "司机", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "厨师", pinyin: "chú shī", english: "cook / chef", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "厨师", 3) },
      ],
    },
    {
      id: "s5-haishi02",
      english: "Is she an older sister or younger sister?",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "姐姐", pinyin: "jiě jie", english: "older sister", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "姐姐", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "妹妹", pinyin: "mèi mei", english: "younger sister", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "妹妹", 3) },
      ],
    },
    {
      id: "s6-haishi02",
      english: "Is he your friend or classmate?",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "朋友", pinyin: "péng yǒu", english: "friend", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "朋友", 3) },
        { chinese: "还是", pinyin: "hái shì", english: "or (in questions)", partOfSpeech: "particle", distractors: ["或者", "是", "很"] },
        { chinese: "同学", pinyin: "tóng xué", english: "classmate", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "同学", 3) },
      ],
    },
  ],
};
