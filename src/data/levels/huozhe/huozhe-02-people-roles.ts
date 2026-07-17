import { Level } from "@/types";
import { getVocabularyDistractors } from "@/data/wordBank";

const vocabulary = [
  // Subjects (used as static context)
  { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject" as const },
  { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject" as const },
  // Verbs (used as static context)
  { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb" as const },
  // Nouns (quizzed slots)
  { chinese: "学生", pinyin: "xué shēng", english: "student", partOfSpeech: "noun" as const },
  { chinese: "老师", pinyin: "lǎo shī", english: "teacher", partOfSpeech: "noun" as const },
  { chinese: "护士", pinyin: "hù shi", english: "nurse", partOfSpeech: "noun" as const },
  { chinese: "医生", pinyin: "yī shēng", english: "doctor", partOfSpeech: "noun" as const },
  { chinese: "中国人", pinyin: "zhōng guó rén", english: "Chinese person", partOfSpeech: "noun" as const },
  { chinese: "日本人", pinyin: "rì běn rén", english: "Japanese person", partOfSpeech: "noun" as const },
  { chinese: "姐姐", pinyin: "jiě jie", english: "older sister", partOfSpeech: "noun" as const },
  { chinese: "妹妹", pinyin: "mèi mei", english: "younger sister", partOfSpeech: "noun" as const },
  { chinese: "朋友", pinyin: "péng yǒu", english: "friend", partOfSpeech: "noun" as const },
  { chinese: "同学", pinyin: "tóng xué", english: "classmate", partOfSpeech: "noun" as const },
  { chinese: "英国人", pinyin: "yīng guó rén", english: "British person", partOfSpeech: "noun" as const },
  { chinese: "美国人", pinyin: "měi guó rén", english: "American person", partOfSpeech: "noun" as const },
  // Particle
  { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle" as const },
];

export const huozhe02PeopleRoles: Level = {
  id: "huozhe-02",
  name: "A or B — People & Roles",
  description: "Noun + 或者 + Noun — Talk about identity and roles",
  pattern: {
    id: "s-huozhe-n",
    name: "Noun + 或者 + Noun",
    description: "Use 或者 (huòzhě) to say 'or' in statements presenting options.",
    structure: ["noun", "particle", "noun"],
    subLevels: 3,
  },
  subLevelIndex: 2,
  starThresholds: [15, 10, 5],
  vocabulary,
  sentences: [
    {
      id: "s1-huozhe02",
      english: "He is a student or a teacher.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "学生", pinyin: "xué shēng", english: "student", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "学生", 3) },
        { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle", distractors: ["还是", "是", "很"] },
        { chinese: "老师", pinyin: "lǎo shī", english: "teacher", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "老师", 3) },
      ],
    },
    {
      id: "s2-huozhe02",
      english: "She is a nurse or a doctor.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "护士", pinyin: "hù shi", english: "nurse", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "护士", 3) },
        { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle", distractors: ["还是", "是", "很"] },
        { chinese: "医生", pinyin: "yī shēng", english: "doctor", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "医生", 3) },
      ],
    },
    {
      id: "s3-huozhe02",
      english: "He is Chinese or Japanese.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "中国人", pinyin: "zhōng guó rén", english: "Chinese person", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "中国人", 3) },
        { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle", distractors: ["还是", "是", "很"] },
        { chinese: "日本人", pinyin: "rì běn rén", english: "Japanese person", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "日本人", 3) },
      ],
    },
    {
      id: "s4-huozhe02",
      english: "She is an older sister or younger sister.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "姐姐", pinyin: "jiě jie", english: "older sister", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "姐姐", 3) },
        { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle", distractors: ["还是", "是", "很"] },
        { chinese: "妹妹", pinyin: "mèi mei", english: "younger sister", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "妹妹", 3) },
      ],
    },
    {
      id: "s5-huozhe02",
      english: "He is your friend or classmate.",
      parts: [
        { chinese: "他", pinyin: "tā", english: "he / him", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "朋友", pinyin: "péng yǒu", english: "friend", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "朋友", 3) },
        { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle", distractors: ["还是", "是", "很"] },
        { chinese: "同学", pinyin: "tóng xué", english: "classmate", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "同学", 3) },
      ],
    },
    {
      id: "s6-huozhe02",
      english: "She is British or American.",
      parts: [
        { chinese: "她", pinyin: "tā", english: "she / her", partOfSpeech: "subject", distractors: [], static: true },
        { chinese: "是", pinyin: "shì", english: "is / am / are", partOfSpeech: "verb", distractors: [], static: true },
        { chinese: "英国人", pinyin: "yīng guó rén", english: "British person", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "英国人", 3) },
        { chinese: "或者", pinyin: "huò zhě", english: "or (in statements)", partOfSpeech: "particle", distractors: ["还是", "是", "很"] },
        { chinese: "美国人", pinyin: "měi guó rén", english: "American person", partOfSpeech: "noun", distractors: getVocabularyDistractors(vocabulary, "noun", "美国人", 3) },
      ],
    },
  ],
};
