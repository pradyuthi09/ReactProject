// All tricky words with hints
export const words = [
  { word: "echo", hint: "I reply but never speak first." },
  { word: "flame", hint: "I dance without feet and eat without a mouth." },
  { word: "gravity", hint: "You can’t see me, but I pull everything down." },
  { word: "illusion", hint: "What fools your eyes but not your brain." },
  { word: "oxygen", hint: "I’m in the air but invisible and essential." },
  { word: "mirror", hint: "I reflect everything but cannot see myself." },
  { word: "shadow", hint: "I follow you everywhere but disappear in the dark." },
  { word: "whisper", hint: "You hear me when I’m quietest." },
  { word: "puzzle", hint: "I confuse you so you can solve me." },
  { word: "riddle", hint: "I ask questions but never answer." },
  { word: "clock", hint: "I have hands but cannot clap." },
  { word: "dream", hint: "I exist only when you’re not awake." },
  { word: "memory", hint: "I hold moments you can’t touch." },
  { word: "logic", hint: "I make sense when emotions don’t." },
  { word: "maze", hint: "You get lost in me to find the end." },
  { word: "ghost", hint: "I’m there but not really there." },
  { word: "storm", hint: "I arrive loud, leave calm." },
  { word: "signal", hint: "I speak without words through waves." },
  { word: "phantom", hint: "I exist between reality and imagination." },
  { word: "mirage", hint: "I look real but fade as you near me." },
];

// Split into difficulty levels
export const wordData = {
  easy: words.slice(0, 7),    // first 7 words
  medium: words.slice(7, 14), // next 7 words
  hard: words.slice(14)       // last 6 words
};
