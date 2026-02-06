// ==========================================
// 🚀 DSSSB SMART NOTES - DATA CONFIGURATION
// ==========================================

// 1. App Settings (Announcement & PDF)
const appConfig = {
    // Ye line upar chalti hui dikhegi (Marquee)
    announcement: "📢 Welcome to DSSSB SMART NOTES! | 🔥 MTS Admit Card Update | 📝 Download Free PDF Notes Now!",
    
    // 'Free PDF' button dabane par ye link khulega (Google Drive ya Telegram link dalein)
    pdfLink: "https://t.me/Dsssbsmartnotes/25" 
};

// 2. Test Database (Saare Tests yahan add karein)
// Categories available: 'mts-full', 'asst-supt', 'english', 'reasoning', 'gk', 'maths', 'hindi'

const testDatabase = [
    
    // --- 🎯 MTS MOCK TESTS ---
    {
        id: "mts_01", 
        category: "mts-full",
        title: "MTS Full Length Mock Test - 01",
        url: "https://forms.gle/YOUR_GOOGLE_FORM_LINK_HERE", // Apna test link yahan dalein
        attempts: "15.2k"
    },
    {
        id: "mts_02",
        category: "mts-full",
        title: "MTS Full Length Mock Test - 02 (Hard)",
        url: "https://google.com",
        attempts: "8.5k"
    },

    // --- 👮 ASST. SUPERINTENDENT ---
    {
        id: "as_01",
        category: "asst-supt",
        title: "Asst. Supt. Previous Year Paper (2019)",
        url: "https://google.com",
        attempts: "10.1k"
    },
    {
        id: "as_02",
        category: "asst-supt",
        title: "Prison Rule & Act - Special Quiz",
        url: "https://google.com",
        attempts: "4.2k"
    },

    // --- 🇬🇧 ENGLISH ---
    {
        id: "eng_01",
        category: "english",
        title: "English Grammar: Noun & Pronoun",
        url: "https://google.com",
        attempts: "5.5k"
    },
    {
        id: "eng_02",
        category: "english",
        title: "Vocab Booster: Synonyms & Antonyms",
        url: "https://google.com",
        attempts: "3.2k"
    },

    // --- 🧠 REASONING ---
    {
        id: "reas_01",
        category: "reasoning",
        title: "Reasoning: Coding-Decoding Test",
        url: "https://google.com",
        attempts: "6.7k"
    },

    // --- 🌍 GK / GENERAL AWARENESS ---
    {
        id: "gk_01",
        category: "gk",
        title: "History: 1857 Revolt & Freedom Struggle",
        url: "https://google.com",
        attempts: "9.1k"
    },
    {
        id: "gk_02",
        category: "gk",
        title: "Polity: Fundamental Rights (Mull Adhikar)",
        url: "https://google.com",
        attempts: "7.4k"
    },

    // --- 📐 MATHS ---
    {
        id: "math_01",
        category: "maths",
        title: "Maths: Percentage (Pratishat) Class 1",
        url: "https://google.com",
        attempts: "4.8k"
    },
    {
        id: "math_02",
        category: "maths",
        title: "Maths: Profit & Loss Practice",
        url: "https://google.com",
        attempts: "3.9k"
    },

    // --- 🇮🇳 HINDI ---
    {
        id: "hin_01",
        category: "hindi",
        title: "Hindi: Sandhi & Samas Test",
        url: "https://google.com",
        attempts: "6.2k"
    }
];
