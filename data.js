// ==========================================
// ⚙️ CONFIGURATION (Notice & PDF)
// ==========================================
const appConfig = {
    // जो लाइन ऊपर चलती है (Marquee)
    announcement: "📢 Welcome! New DSSSB MTS Mock Tests Added. Join Telegram for Daily PDF Notes! 🚀 Exam Date Announced.",
    
    // PDF Download Button का लिंक
    pdfLink: "https://t.me/YOUR_TELEGRAM_LINK_HERE" 
};

// ==========================================
// 📚 TEST DATABASE
// ==========================================
const testDatabase = [
  // --- MTS FULL MOCK TESTS ---
  {
    id: "mts_01",
    title: "DSSSB MTS Full Mock Test - 01",
    category: "mts-full",
    url: "https://forms.gle/EXAMPLE_LINK_1",
    attempts: 1250
  },
  {
    id: "mts_02",
    title: "DSSSB MTS Full Mock Test - 02",
    category: "mts-full",
    url: "https://forms.gle/EXAMPLE_LINK_2",
    attempts: 980
  },
  {
    id: "mts_03",
    title: "DSSSB MTS Full Mock Test - 03 (Live)",
    category: "mts-full",
    url: "https://forms.gle/EXAMPLE_LINK_3",
    attempts: 2100
  },

  // --- ASSISTANT SUPERINTENDENT ---
  {
    id: "as_01",
    title: "Asst. Supt. - Previous Year Paper 2019",
    category: "asst-supt",
    url: "https://forms.gle/EXAMPLE_LINK_4",
    attempts: 3400
  },
  {
    id: "as_02",
    title: "Asst. Supt. Mock - Jail Rules Special",
    category: "asst-supt",
    url: "https://forms.gle/EXAMPLE_LINK_5",
    attempts: 850
  },

  // --- HINDI ---
  {
    id: "hin_01",
    title: "Hindi Grammar: Sandhi & Samas",
    category: "hindi",
    url: "https://forms.gle/EXAMPLE_LINK_6",
    attempts: 560
  },
  {
    id: "hin_02",
    title: "Hindi Vocabulary (Vilom & Paryay)",
    category: "hindi",
    url: "https://forms.gle/EXAMPLE_LINK_7",
    attempts: 430
  },

  // --- ENGLISH ---
  {
    id: "eng_01",
    title: "English: Active/Passive Voice Masterclass",
    category: "english",
    url: "https://forms.gle/EXAMPLE_LINK_8",
    attempts: 1120
  },

  // --- GK / GS ---
  {
    id: "gk_01",
    title: "Current Affairs: Last 6 Months (Jan-June)",
    category: "gk",
    url: "https://forms.gle/EXAMPLE_LINK_9",
    attempts: 5600
  },
  {
    id: "gk_02",
    title: "Delhi GK Special for DSSSB",
    category: "gk",
    url: "https://forms.gle/EXAMPLE_LINK_10",
    attempts: 2300
  },
  {
    id: "gk_03",
    title: "Indian Polity: Top 100 Articles",
    category: "gk",
    url: "https://forms.gle/EXAMPLE_LINK_11",
    attempts: 1500
  },

  // --- MATHS ---
  {
    id: "math_01",
    title: "Maths: Percentage & Profit Loss",
    category: "maths",
    url: "https://forms.gle/EXAMPLE_LINK_12",
    attempts: 670
  },

  // --- REASONING ---
  {
    id: "reas_01",
    title: "Reasoning: Syllogism & Venn Diagram",
    category: "reasoning",
    url: "https://forms.gle/EXAMPLE_LINK_13",
    attempts: 1200
  }
];
