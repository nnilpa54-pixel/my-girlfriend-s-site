/**
 * ♡ EVERYTHING EDITABLE LIVES HERE ♡
 * Change text, photos, songs and foods in this one file.
 * See MEDIA_GUIDE.md for how to add your own photos, videos and songs.
 */

export const names = {
  her: "Tulsi",
  nicknames: ["bachha", "taruuu", "Tulsi"],
  me: "Vansh",
  meAlt: "Vatsalya",
};

export const coreMessage =
  "Distance may separate us physically, and difficult situations may make communication harder, but I still love you. I want to keep choosing patience, understanding, honesty, and effort.";

/* ---------- Welcome letter ---------- */
export const welcomeLetter = [
  "Hi bachha ♡",
  "I made this little world just for you — taruuu, my Tulsi.",
  "There's no pressure here. Take it slowly, one page at a time. Whenever you feel like it.",
];

/* ---------- Timeline (edit dates & words to match your real story) ---------- */
export const memories = [
  {
    date: "Last month",
    title: "The first time I saw you for real",
    text: "After all the calls and messages, you were finally standing in front of me. I still replay that moment.",
    emoji: "🌸",
  },
  {
    date: "That same day",
    title: "The T-shirt",
    text: "I gave you that T-shirt hoping a little piece of me could stay with you when I couldn't.",
    emoji: "👕",
  },
  {
    date: "The day I asked",
    title: "My proposal",
    text: "My heart was racing. Asking you to be mine was the most certain thing I've ever done.",
    emoji: "💍",
  },
  {
    date: "Every ordinary day",
    title: "Our little moments",
    text: "Late-night talks, silly jokes, your voice when you're sleepy — the small things I hold onto the most.",
    emoji: "🌙",
  },
];

/* ---------- Gallery ---------- */
import photo1 from "@/assets/WhatsApp_Image_2026-10-10_at_2.54.12_PM_2.jpeg.asset.json";
import photo2 from "@/assets/WhatsApp_Image_2026-10-10_at_2.54.23_PM.jpeg.asset.json";
import video1 from "@/assets/WhatsApp_Video_2026-10-10_at_2.54.13_PM.mp4.asset.json";
import video2 from "@/assets/WhatsApp_Video_2026-10-10_at_2.54.14_PM_2.mp4.asset.json";
import video3 from "@/assets/WhatsApp_Video_2026-10-10_at_2.54.15_PM.mp4.asset.json";
import video4 from "@/assets/WhatsApp_Video_2026-10-10_at_2.54.16_PM_1.mp4.asset.json";
import video5 from "@/assets/WhatsApp_Video_2026-10-10_at_2.54.16_PM_2.mp4.asset.json";
import video6 from "@/assets/WhatsApp_Video_2026-10-10_at_2.54.22_PM_1.mp4.asset.json";
import video7 from "@/assets/WhatsApp_Video_2026-10-10_at_2.54.22_PM_3.mp4.asset.json";

export type GalleryItem = { src: string; type: "image" | "video"; caption: string };
export const gallery: GalleryItem[] = [
  { src: photo1.url, type: "image", caption: "Us ♡" },
  { src: photo2.url, type: "image", caption: "My cutie being silly 😌" },
  { src: video1.url, type: "video", caption: "A little moment of us" },
  { src: video2.url, type: "video", caption: "I could watch this forever" },
  { src: video3.url, type: "video", caption: "You, being you" },
  { src: video4.url, type: "video", caption: "My favourite kind of day" },
  { src: video5.url, type: "video", caption: "This smile of yours" },
  { src: video6.url, type: "video", caption: "One more for the heart" },
  { src: video7.url, type: "video", caption: "Always us ♡" },
];

/* ---------- Soundtrack ----------
 * One song per chapter. Changes automatically as she scrolls.
 * Use audio files you own or have the right to use, placed in /public/music/,
 * e.g. src: "/music/chapter1.mp3". Empty src = that chapter is silent.
 */
export type Chapter =
  | "welcome" | "memories" | "gallery" | "games" | "distance"
  | "food" | "openwhen" | "letter" | "final";

export const soundtrack: Record<Chapter, { title: string; artist: string; src: string }> = {
  welcome: { title: "Choose a soft opening song", artist: "—", src: "" },
  memories: { title: "e.g. Tu Jhoom", artist: "Coke Studio", src: "" },
  gallery: { title: "e.g. Pasoori", artist: "Ali Sethi & Shae Gill", src: "" },
  games: { title: "e.g. Kana Yaari", artist: "Coke Studio", src: "" },
  distance: { title: "e.g. Tera Woh Pyar", artist: "Momina & Asim", src: "" },
  food: { title: "e.g. Afreen Afreen", artist: "Rahat & Momina", src: "" },
  openwhen: { title: "e.g. Aadat", artist: "Atif Aslam", src: "" },
  letter: { title: "e.g. Tajdar-e-Haram", artist: "Atif Aslam", src: "" },
  final: { title: "e.g. Jal Pari", artist: "Atif Aslam", src: "" },
};

/* ---------- Love games ---------- */
export const quiz = [
  { q: "Where did we first meet in real life?", options: ["Edit me", "Edit me too", "The right answer"], answer: 2 },
  { q: "What did I give you that day?", options: ["Flowers", "A T-shirt", "Chocolates"], answer: 1 },
  { q: "What do I call you most?", options: ["bachha", "Madam ji", "Boss"], answer: 0 },
  { q: "Will I stop loving you after a fight?", options: ["Maybe", "Never", "Only on Mondays"], answer: 1 },
];

export const reasons = [
  "Your laugh fixes my worst days.", "You're honest with me, even when it's hard.",
  "The way you say my name.", "You're kind to people who don't deserve it.",
  "You make ordinary moments feel special.", "Your eyes when you're excited.",
  "You wore the T-shirt I gave you.", "You said yes.", "You care so deeply.",
  "You're strong, even when you feel you're not.", "Your sleepy voice.",
  "You teach me patience.", "Your stubbornness (yes, really).", "Your little dramatic moments.",
  "You're my favourite notification.", "You listen when I ramble.",
  "You make me want to be better.", "The way you get angry and still care.",
  "Your taste in food.", "How you light up talking about things you love.",
  "You're beautiful — always.", "You're my peace, even after chaos.",
  "You forgive.", "You make distance feel smaller.", "Your hugs (I miss them).",
  "You chose me.", "You're you — completely.", "You make me laugh at myself.",
  "You make the future feel exciting.", "Because I just do. Every day.",
];

export const wheel = [
  "A virtual forehead kiss 😚", "I owe you your favourite snack 🍫", "A 10-minute call, just us 📞",
  "I'll send a voice note singing 🎤", "One wish — anything 🌟", "A long hug next time 🤗",
  "I'll listen, no interrupting 👂", "Date night plan: your choice 🌹",
];

export const hiddenNotes = [
  "I think about you more than you know.",
  "Even when we're quiet, my heart is loud for you.",
  "You're my favourite person to make up with.",
  "I'm proud of you, bachha.",
  "I'm sorry for the times I didn't listen well.",
  "In this difficult time especially — I'm here. Not leaving.",
  "However heavy today gets, you're still the person I choose.",
];

export const questions = [
  "What's one small thing I do that makes you feel loved?",
  "What's something you wish I understood better?",
  "Where would you want our next date to be?",
  "What's a memory of us you replay often?",
  "How can I support you when you're having a hard day?",
  "What made you smile today?",
  "What does a perfect lazy day with me look like?",
];

/* ---------- Distance game ---------- */
export const distanceMessages = [
  "Right next to you — my favourite place in the world.",
  "A few streets apart, and I'm still thinking about you.",
  "Different cities, same heart.",
  "Even on quiet days, the thread doesn't break.",
  "After an argument, I still love you. Silence doesn't erase it.",
  "However far — physically or emotionally — I'm still choosing you.",
];

/* ---------- Favourite food (she can edit on the site too) ---------- */
export const foods = {
  snacks: ["Edit: her favourite snack", "Pani puri?"],
  meals: ["Edit: her favourite meal"],
  desserts: ["Edit: her favourite dessert"],
  drinks: ["Edit: her favourite drink"],
  futureDates: ["Street food walk together", "Cosy café date"],
};

/* ---------- Open when letters ---------- */
export const openWhen = [
  { when: "you miss me", emoji: "🥺", text: "Close your eyes and remember the day we met. I'm still that boy who couldn't stop smiling at you. I miss you too — always more than I say." },
  { when: "you feel sad", emoji: "🌧️", text: "It's okay to feel this. You don't have to be okay for me. I'm here, and whenever you want, I'll just sit with you in it." },
  { when: "you need reassurance", emoji: "🤍", text: "I love you. Not just on good days. Not only when things are easy. I'm staying, and I mean it." },
  { when: "you want to smile", emoji: "😊", text: "Remember: you are my favourite notification, my favourite argument partner and my favourite person. Now smile, taruuu 😌" },
  { when: "you need some space", emoji: "🍃", text: "Take it. Truly. I won't take it personally. I'll be right here when you're ready — no guilt, no pressure." },
];

/* ---------- Heartfelt letter ---------- */
export const letter = [
  "My dear Tulsi,",
  "I keep going back to the day I finally saw you in person. After so much waiting, you were just… there. Real. I remember trying to act calm while my heart was doing the opposite.",
  "I gave you that T-shirt hoping you'd feel a little closer to me when I couldn't be with you. And when I proposed, I wasn't nervous about my feelings — I've always been sure of those. I was only nervous because you matter so much.",
  "These last few months haven't been easy. We've argued, we've gone quiet, and I know some of that hurt you. I'm sorry for the times I talked when I should have listened, and for the times I made you feel unheard.",
  "I want to listen better. I want to respect your feelings even when I don't fully understand them yet. And I don't want to just say this — I want to show it, slowly, through what I do.",
  "I need you to hear this clearly, bachha: I love you. Not the small, easy kind — the kind that stays. You're the first person I think of when the day feels heavy and the last one before I sleep. Loving you isn't something I have to decide. It's just what my heart keeps doing.",
  "And I know this is a difficult time. Everything around us feels loud and uncertain right now, and I know it's been tiring for you too. So let me say it plainly — I'm here. Not only for the good days. For this one, and for whatever comes after it.",
  "You don't have to carry any of it by yourself. If you're scared, tell me. If you're tired, lean on me. If you don't have words, we can just be quiet together. You don't have to be strong around me — I can hold enough for both of us.",
  "Whatever is happening outside us, the answer inside me never changes, and that answer is you. I'm choosing you — calmly, on purpose, again today.",
  "I love you on the easy days and the difficult ones. Distance and hard moments don't change that.",
  "Take all the time you need. I'll be here.",
];

/* ---------- Final screen ----------
 * Optional: your WhatsApp number in international format (e.g. "919876543210")
 * so her choice can be sent to you. Leave empty to just show the message.
 */
export const contact = { whatsapp: "" };
