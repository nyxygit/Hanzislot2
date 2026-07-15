"use client";

let cachedVoices: SpeechSynthesisVoice[] | null = null;

function getVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (cachedVoices && cachedVoices.length > 0) {
      resolve(cachedVoices);
      return;
    }
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      cachedVoices = voices;
      resolve(voices);
      return;
    }
    window.speechSynthesis.onvoiceschanged = () => {
      cachedVoices = window.speechSynthesis.getVoices();
      resolve(cachedVoices);
    };
  });
}

/**
 * Speak Chinese text using the Web Speech API.
 * Tries to find a Chinese voice; falls back to the default voice.
 */
export async function speakChinese(text: string): Promise<void> {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = 0.85; // Slightly slower for learners
  utterance.pitch = 1.0;

  const voices = await getVoices();
  const chineseVoice = voices.find(
    (v) => v.lang.startsWith("zh") || v.lang.startsWith("cmn")
  );
  if (chineseVoice) {
    utterance.voice = chineseVoice;
  }

  window.speechSynthesis.speak(utterance);
}
