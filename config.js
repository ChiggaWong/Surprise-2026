// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
  valentineName: "Zizi",
  pageTitle: "Gaming Valentine? 💝",

  floatingEmojis: {
    hearts: ["❤️", "💖", "💝", "💗", "💓"],
    bears: ["🧸", "🐻"]
  },

  // Questions and answers (made more playful + low-pressure)
  questions: {
    first: {
      text: "Wanna be my gaming Valentine? 🎮💝",
      yesBtn: "Yes 😳👉👈",
      noBtn: "Not today 😭",
      secretAnswer: "HELL YEAH! ur still my favourite person to play with 🫶🏼"
    },
    second: {
      text: "How hype are you for us to hang out? 😄",
      startText: "This hype!",
      nextBtn: "Next ❤️"
    },
    third: {
      // Updated year + toned down pressure
      text: "Valentine’s hangout on February 14th, 2026? 🌹",
      yesBtn: "Yes! 💖",
      noBtn: "Maybe later 🫶🏼"
    }
  },

  // Love meter messages (reframed as “hype”)
  loveMessages: {
    extreme: "WOOOOW okay calm down gamer 😭🚀💝",
    high: "MAXIMUM HYPE!! 🚀💝",
    normal: "Perfect vibes 😄🫶🏼"
  },

  // Celebration (kept cute, less intense)
  celebration: {
    title: "Yay!! Valentine’s hangout secured 🎉💝",
    message: "i LOVE YOU 💖",
    emojis: "🎁💖🤗💝❤️💕"
  },

  colors: {
    backgroundStart: "#ffafbd",
    backgroundEnd: "#ffc3a0",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    textColor: "#ff4757"
  },

  animations: {
    floatDuration: "15s",
    floatDistance: "50px",
    bounceSpeed: "0.5s",
    heartExplosionSize: 1.5
  },

  // Music: keep optional + not autoplay (less intense)
  music: {
    enabled: true,
    autoplay: false,
    musicUrl:
      "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.35
  }
};

window.VALENTINE_CONFIG = CONFIG;
