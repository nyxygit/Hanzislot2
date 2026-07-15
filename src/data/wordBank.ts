import { PartOfSpeech } from "@/types";
import { shuffle } from "@/engine/shuffle";

// Distractor words organized by part of speech
// These are used as wrong options in slot columns
// Each word includes pinyin and English meaning for display

interface DistractorEntry {
  chinese: string;
  pinyin: string;
  english: string;
}

export const wordBank: Record<PartOfSpeech, DistractorEntry[]> = {
  subject: [
    { chinese: "我", pinyin: "wǒ", english: "I / me" },
    { chinese: "你", pinyin: "nǐ", english: "you" },
    { chinese: "他", pinyin: "tā", english: "he / him" },
    { chinese: "她", pinyin: "tā", english: "she / her" },
    { chinese: "它", pinyin: "tā", english: "it" },
    { chinese: "我们", pinyin: "wǒ men", english: "we / us" },
    { chinese: "你们", pinyin: "nǐ men", english: "you (plural)" },
    { chinese: "他们", pinyin: "tā men", english: "they" },
    { chinese: "这个", pinyin: "zhè gè", english: "this one" },
    { chinese: "那个", pinyin: "nà gè", english: "that one" },
    { chinese: "什么", pinyin: "shén me", english: "what" },
    { chinese: "大家", pinyin: "dà jiā", english: "everyone" },
    { chinese: "我妈妈", pinyin: "wǒ mā ma", english: "my mother" },
    { chinese: "我爸爸", pinyin: "wǒ bà ba", english: "my father" },
    { chinese: "我朋友", pinyin: "wǒ péng yǒu", english: "my friend" },
    { chinese: "我老师", pinyin: "wǒ lǎo shī", english: "my teacher" },
    { chinese: "我同学", pinyin: "wǒ tóng xué", english: "my classmate" },
    { chinese: "这本书", pinyin: "zhè běn shū", english: "this book" },
    { chinese: "这个菜", pinyin: "zhè gè cài", english: "this dish" },
    { chinese: "这个水果", pinyin: "zhè gè shuǐ guǒ", english: "this fruit" },
    { chinese: "这个房间", pinyin: "zhè gè fáng jiān", english: "this room" },
    { chinese: "学习中文", pinyin: "xué xí zhōng wén", english: "studying Chinese" },
    { chinese: "咖啡", pinyin: "kā fēi", english: "coffee" },
    { chinese: "水", pinyin: "shuǐ", english: "water" },
  ],
  verb: [
    { chinese: "吃", pinyin: "chī", english: "eat" },
    { chinese: "喝", pinyin: "hē", english: "drink" },
    { chinese: "看", pinyin: "kàn", english: "read / watch" },
    { chinese: "买", pinyin: "mǎi", english: "buy" },
    { chinese: "去", pinyin: "qù", english: "go" },
    { chinese: "做", pinyin: "zuò", english: "do / make" },
    { chinese: "学", pinyin: "xué", english: "study / learn" },
    { chinese: "写", pinyin: "xiě", english: "write" },
    { chinese: "说", pinyin: "shuō", english: "speak" },
    { chinese: "听", pinyin: "tīng", english: "listen" },
    { chinese: "喜欢", pinyin: "xǐ huān", english: "like / enjoy" },
    { chinese: "爱", pinyin: "ài", english: "love" },
    { chinese: "叫", pinyin: "jiào", english: "to be called / to call" },
    { chinese: "住", pinyin: "zhù", english: "live" },
    { chinese: "来", pinyin: "lái", english: "come" },
    { chinese: "有", pinyin: "yǒu", english: "there is / have" },
    { chinese: "认识", pinyin: "rèn shi", english: "meet / know someone" },
    { chinese: "学习", pinyin: "xué xí", english: "study / learn" },
    { chinese: "工作", pinyin: "gōng zuò", english: "work" },
    { chinese: "教", pinyin: "jiāo", english: "teach" },
  ],
  object: [
    { chinese: "苹果", pinyin: "píng guǒ", english: "apple" },
    { chinese: "书", pinyin: "shū", english: "book" },
    { chinese: "水", pinyin: "shuǐ", english: "water" },
    { chinese: "米饭", pinyin: "mǐ fàn", english: "rice" },
    { chinese: "茶", pinyin: "chá", english: "tea" },
    { chinese: "咖啡", pinyin: "kā fēi", english: "coffee" },
    { chinese: "电影", pinyin: "diàn yǐng", english: "movie" },
    { chinese: "报纸", pinyin: "bào zhǐ", english: "newspaper" },
    { chinese: "作业", pinyin: "zuò yè", english: "homework" },
    { chinese: "衣服", pinyin: "yī fu", english: "clothes" },
    { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit" },
    { chinese: "菜", pinyin: "cài", english: "dish / vegetable" },
    { chinese: "钱", pinyin: "qián", english: "money" },
    { chinese: "东西", pinyin: "dōng xi", english: "thing / stuff" },
    { chinese: "中文", pinyin: "zhōng wén", english: "Chinese (language)" },
    { chinese: "英文", pinyin: "yīng wén", english: "English (language)" },
    { chinese: "音乐", pinyin: "yīn yuè", english: "music" },
    { chinese: "饭", pinyin: "fàn", english: "rice / meal" },
    { chinese: "面", pinyin: "miàn", english: "noodles" },
    { chinese: "肉", pinyin: "ròu", english: "meat" },
  ],
  adjective: [
    { chinese: "大", pinyin: "dà", english: "big" },
    { chinese: "小", pinyin: "xiǎo", english: "small" },
    { chinese: "高", pinyin: "gāo", english: "tall" },
    { chinese: "好", pinyin: "hǎo", english: "good" },
    { chinese: "忙", pinyin: "máng", english: "busy" },
    { chinese: "累", pinyin: "lèi", english: "tired" },
    { chinese: "漂亮", pinyin: "piào liang", english: "beautiful" },
    { chinese: "高兴", pinyin: "gāo xìng", english: "happy" },
    { chinese: "好吃", pinyin: "hǎo chī", english: "delicious" },
    { chinese: "辣", pinyin: "là", english: "spicy" },
    { chinese: "甜", pinyin: "tián", english: "sweet" },
    { chinese: "酸", pinyin: "suān", english: "sour" },
    { chinese: "咸", pinyin: "xián", english: "salty" },
    { chinese: "便宜", pinyin: "pián yi", english: "cheap" },
    { chinese: "贵", pinyin: "guì", english: "expensive" },
    { chinese: "热", pinyin: "rè", english: "hot" },
    { chinese: "冷", pinyin: "lěng", english: "cold" },
    { chinese: "友好", pinyin: "yǒu hǎo", english: "friendly" },
    { chinese: "努力", pinyin: "nǔ lì", english: "hardworking" },
    { chinese: "认真", pinyin: "rèn zhēn", english: "serious / conscientious" },
    { chinese: "开心", pinyin: "kāi xīn", english: "happy" },
    { chinese: "舒服", pinyin: "shū fu", english: "comfortable / well" },
    { chinese: "干净", pinyin: "gān jìng", english: "clean" },
    { chinese: "重要", pinyin: "zhòng yào", english: "important" },
    { chinese: "有意思", pinyin: "yǒu yì si", english: "interesting" },
    { chinese: "新", pinyin: "xīn", english: "new" },
    { chinese: "旧", pinyin: "jiù", english: "old (worn)" },
    { chinese: "快", pinyin: "kuài", english: "fast" },
    { chinese: "慢", pinyin: "màn", english: "slow" },
    { chinese: "多", pinyin: "duō", english: "many / much" },
    { chinese: "少", pinyin: "shǎo", english: "few / little" },
    { chinese: "暖", pinyin: "nuǎn", english: "warm" },
    { chinese: "凉快", pinyin: "liáng kuai", english: "cool (weather)" },
    { chinese: "好玩", pinyin: "hǎo wán", english: "fun" },
    { chinese: "方便", pinyin: "fāng biàn", english: "convenient" },
    { chinese: "特别", pinyin: "tè bié", english: "special" },
    { chinese: "热情", pinyin: "rè qíng", english: "enthusiastic" },
    { chinese: "幸运", pinyin: "xìng yùn", english: "lucky" },
    { chinese: "热闹", pinyin: "rè nao", english: "lively" },
    { chinese: "瘦", pinyin: "shòu", english: "thin" },
    { chinese: "矮", pinyin: "ǎi", english: "short (height)" },
    { chinese: "胖", pinyin: "pàng", english: "fat" },
  ],
  noun: [
    { chinese: "学生", pinyin: "xué shēng", english: "student" },
    { chinese: "老师", pinyin: "lǎo shī", english: "teacher" },
    { chinese: "医生", pinyin: "yī shēng", english: "doctor" },
    { chinese: "朋友", pinyin: "péng yǒu", english: "friend" },
    { chinese: "同学", pinyin: "tóng xué", english: "classmate" },
    { chinese: "护士", pinyin: "hù shi", english: "nurse" },
    { chinese: "工程师", pinyin: "gōng chéng shī", english: "engineer" },
    { chinese: "厨师", pinyin: "chú shī", english: "cook / chef" },
    { chinese: "司机", pinyin: "sī jī", english: "driver" },
    { chinese: "警察", pinyin: "jǐng chá", english: "police officer" },
    { chinese: "经理", pinyin: "jīng lǐ", english: "manager" },
    { chinese: "中国人", pinyin: "zhōng guó rén", english: "Chinese person" },
    { chinese: "美国人", pinyin: "měi guó rén", english: "American person" },
    { chinese: "日本人", pinyin: "rì běn rén", english: "Japanese person" },
    { chinese: "英国人", pinyin: "yīng guó rén", english: "British person" },
    { chinese: "法国人", pinyin: "fǎ guó rén", english: "French person" },
    { chinese: "外国人", pinyin: "wài guó rén", english: "foreigner" },
    { chinese: "名字", pinyin: "míng zi", english: "name" },
    { chinese: "专业", pinyin: "zhuān yè", english: "major / specialty" },
    { chinese: "爱好", pinyin: "ài hào", english: "hobby" },
    { chinese: "书", pinyin: "shū", english: "book" },
    { chinese: "房间", pinyin: "fáng jiān", english: "room" },
    { chinese: "人", pinyin: "rén", english: "person / people" },
    { chinese: "爸爸", pinyin: "bà ba", english: "father" },
    { chinese: "妈妈", pinyin: "mā ma", english: "mother" },
    { chinese: "哥哥", pinyin: "gē ge", english: "older brother" },
    { chinese: "姐姐", pinyin: "jiě jie", english: "older sister" },
    { chinese: "弟弟", pinyin: "dì di", english: "younger brother" },
    { chinese: "妹妹", pinyin: "mèi mei", english: "younger sister" },
    { chinese: "家人", pinyin: "jiā rén", english: "family member" },
    { chinese: "小孩", pinyin: "xiǎo hái", english: "child" },
    { chinese: "大人", pinyin: "dà rén", english: "adult" },
    { chinese: "老人", pinyin: "lǎo rén", english: "old person" },
    { chinese: "售货员", pinyin: "shòu huò yuán", english: "shop assistant" },
    { chinese: "服务员", pinyin: "fú wù yuán", english: "waiter / waitress" },
    { chinese: "水果", pinyin: "shuǐ guǒ", english: "fruit" },
    { chinese: "菜", pinyin: "cài", english: "dish / vegetable" },
    { chinese: "味道", pinyin: "wèi dào", english: "flavor / taste" },
    { chinese: "天气", pinyin: "tiān qì", english: "weather" },
  ],
  particle: [
    { chinese: "是", pinyin: "shì", english: "is / am / are" },
    { chinese: "很", pinyin: "hěn", english: "very (used before adj)" },
    { chinese: "不", pinyin: "bù", english: "not" },
    { chinese: "要", pinyin: "yào", english: "want to / will" },
    { chinese: "了", pinyin: "le", english: "(perfective particle)" },
    { chinese: "的", pinyin: "de", english: "(nominalizer / possessive)" },
    { chinese: "吗", pinyin: "ma", english: "(question particle)" },
    { chinese: "呢", pinyin: "ne", english: "(follow-up question particle)" },
    { chinese: "吧", pinyin: "ba", english: "(suggestion particle)" },
    { chinese: "也", pinyin: "yě", english: "also / too" },
    { chinese: "都", pinyin: "dōu", english: "all / both" },
    { chinese: "还", pinyin: "hái", english: "still / also" },
  ],
};

export function getDistractors(
  partOfSpeech: PartOfSpeech,
  excludeChinese: string,
  count: number = 3
): string[] {
  const pool = wordBank[partOfSpeech] || [];
  const filtered = pool
    .filter((entry) => entry.chinese !== excludeChinese)
    .map((entry) => entry.chinese);

  // Shuffle (Fisher-Yates) and take requested count
  const shuffled = shuffle(filtered);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Get distractors from a limited vocabulary list (e.g., a level's own vocabulary).
 * This ensures distractors are words the user has been exposed to.
 * Falls back to the global word bank if the vocabulary list doesn't have enough options.
 */
export function getVocabularyDistractors(
  vocabulary: { chinese: string; partOfSpeech: PartOfSpeech }[],
  partOfSpeech: PartOfSpeech,
  excludeChinese: string,
  count: number = 3
): string[] {
  // First, try to get distractors from the vocabulary list
  const vocabPool = vocabulary
    .filter((entry) => entry.partOfSpeech === partOfSpeech && entry.chinese !== excludeChinese)
    .map((entry) => entry.chinese);

  const shuffled = shuffle(vocabPool);

  if (shuffled.length >= count) {
    return shuffled.slice(0, count);
  }

  // Not enough options in vocabulary — supplement from global word bank
  const globalPool = (wordBank[partOfSpeech] || [])
    .filter((entry) => entry.chinese !== excludeChinese && !vocabPool.includes(entry.chinese))
    .map((entry) => entry.chinese);

  const supplemented = shuffle([...shuffled, ...globalPool]);
  return supplemented.slice(0, Math.min(count, supplemented.length));
}

// Reverse lookup: Chinese character → { pinyin, english }
// Built once from all word bank entries
const chineseLookup: Record<string, { pinyin: string; english: string }> = {};
for (const entries of Object.values(wordBank)) {
  for (const entry of entries) {
    chineseLookup[entry.chinese] = { pinyin: entry.pinyin, english: entry.english };
  }
}

/**
 * Get pinyin and English meaning for any Chinese word in the word bank.
 * Returns undefined if the word is not found.
 */
export function lookupChinese(chinese: string): { pinyin: string; english: string } | undefined {
  return chineseLookup[chinese];
}

export function getDistractorEntries(
  partOfSpeech: PartOfSpeech,
  excludeChinese: string,
  count: number = 3
): { chinese: string; pinyin: string; english: string }[] {
  const pool = wordBank[partOfSpeech] || [];
  const filtered = pool.filter((entry) => entry.chinese !== excludeChinese);
  const shuffled = shuffle(filtered);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}
