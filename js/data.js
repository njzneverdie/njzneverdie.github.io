// ============================================================
// 網站所有內容的資料來源（雙語版）。
// 每個文字欄位都是 { en, zh }：英文是正面（預設顯示），
// 滑鼠移上去會像閃卡一樣翻面顯示中文。
// 要更新內容只需要改這個檔案，不需要動 index.html 或 script.js。
// （資料來源：LinkedIn 個人檔案，2026-07 更新）
// ============================================================

const profileData = {
  name: "Chia Yu (Daniel) Liang",
  initials: "DL",
  headline: {
    en: "BS MSE @ NCKU | MS ECE @ USC | BlendEd | Coffee Enthusiast",
    zh: "成大材料學士 ｜ 南加大電機碩士 ｜ BlendEd ｜ 咖啡成癮者"
  },
  location: {
    en: "Base: Kaohsiung, Taiwan & California, USA",
    zh: "常住：台灣高雄、美國加州"
  },
  email: "e54111213@gs.ncku.edu.tw",
  about: {
    en: `Materials Science & Engineering undergraduate at National Cheng Kung University, heading to USC for an MS in Electrical & Computer Engineering. My background bridges materials electrochemistry and machine learning: I researched Ni-based alloy catalysts at NCKU MINA Lab (accepted at 2026 RiSER, Sustainable Energy), and completed multiple hands-on AI projects at MIT xPRO spanning computer vision, robotics, and data visualization. I love turning ideas into products fast — I once designed and deployed a group-decision web app, Eatogether, in a single day. Currently a Campus Business Developer intern at BlendED. Coffee enthusiast.`,
    zh: `成功大學材料科學及工程學系學士，即將前往南加州大學（USC）攻讀電機與計算機工程碩士（MS ECE）。研究背景橫跨材料電化學與機器學習：曾在 NCKU MINA Lab 進行鎳基合金催化劑研究（成果已被 2026 RiSER 永續能源會議接受），也在 MIT xPRO 完成多項 AI 專案實作（電腦視覺、機器人、資料視覺化）。熱衷把想法快速做成產品 — 曾用一天時間設計並部署群體決策 Web App「Eatogether」。目前同時擔任 BlendED 校園商務開發實習生。咖啡成癮者。`
  }
};

const experienceData = [
  {
    icon: "💼",
    title: { en: "Campus Business Developer", zh: "校園商務開發" },
    org: { en: "BlendED · Internship", zh: "BlendED · 實習" },
    period: { en: "2025.10 - Present · Taiwan (Remote)", zh: "2025.10 - 至今 · 台灣（遠距）" },
    desc: {
      en: "Driving campus-side business development and outreach, connecting student communities with BlendED's project-based learning (PBL) resources.",
      zh: "負責校園端的商務開發與推廣，連結學生社群與 BlendED 的專案式學習（PBL）資源。"
    }
  },
  {
    icon: "🤖",
    title: { en: "PBL Trainee", zh: "專案式學習培訓生" },
    org: { en: "MIT xPRO · Full-time Training", zh: "MIT xPRO · 全職培訓" },
    period: { en: "2025.08 · USA (On-site)", zh: "2025.08 · 美國（現場）" },
    desc: {
      en: "Completed four industry-partnered projects in one month: Boston Dynamics (AI & robotics — handwritten character recognition with CNNs), Novo Nordisk (computer vision in biotech — retinal vessel segmentation with MAE), Tableau (visual data science — racial bias analysis of COMPAS recidivism predictions), and Headspace (applied psychology with human data — how feedback shapes stress and working memory).",
      zh: "一個月內完成四項業界合作專案：Boston Dynamics（AI 與機器人／手寫字元辨識 CNN）、Novo Nordisk（生技電腦視覺／MAE 視網膜血管分割）、Tableau（COMPAS 再犯預測的種族偏差視覺化分析）、Headspace（應用心理學與人類資料／回饋對壓力與工作記憶的影響）。"
    }
  },
  {
    icon: "🧪",
    title: { en: "Undergraduate Researcher", zh: "大學部研究員" },
    org: { en: "National Cheng Kung University · MINA Lab (Part-time)", zh: "國立成功大學 · MINA Lab（兼職）" },
    period: { en: "2024.08 - 2025.06 · Tainan", zh: "2024.08 - 2025.06 · 台南" },
    desc: {
      en: "Advisor: Prof. Chih-Ming Ting. Systematically synthesized and electrochemically characterized binary/ternary Ni-based alloy catalysts (Ni–Co, Ni–Cu, Ni–Mn and ternary combinations) on nickel foam electrodes for ethylene glycol oxidation reactions (EGOR). The optimized ternary NiCuMn catalyst achieved the lowest onset potential (≈1.30 V vs. RHE) with ~24% lower charge-transfer resistance and ~35% higher catalytic current density. Accepted at 2026 RiSER Conference (Sustainable Energy).",
      zh: "指導教授：Prof. Chih-Ming Ting。系統性合成並電化學表徵二元／三元鎳基合金催化劑（Ni–Co、Ni–Cu、Ni–Mn 及三元組合）用於乙二醇氧化反應（EGOR）。三元 NiCuMn 催化劑達到最低起始電位（≈1.30 V vs. RHE），電荷轉移阻抗降低約 24%、催化電流密度提升約 35%。成果已被 2026 RiSER Conference（Sustainable Energy）接受。"
    }
  }
];

const educationData = [
  {
    icon: "🎓",
    title: { en: "University of Southern California (USC)", zh: "南加州大學" },
    org: { en: "MS in Electrical & Computer Engineering", zh: "電機與計算機工程 碩士（MS ECE）" },
    period: { en: "2026 - (Incoming)", zh: "2026 -（預計入學）" },
    desc: {
      en: "Diving deeper into the intersection of machine learning and engineering applications.",
      zh: "將深入探索機器學習與工程應用的交叉領域。"
    }
  },
  {
    icon: "🎓",
    title: { en: "National Cheng Kung University (NCKU)", zh: "國立成功大學" },
    org: { en: "BS in Materials Science & Engineering", zh: "材料科學及工程學系 學士（BS MSE）" },
    period: { en: "2022 - 2026", zh: "2022 - 2026" },
    desc: {
      en: "Undergraduate researcher at MINA Lab focusing on electrocatalytic materials. Completed machine learning coursework and multiple online certifications.",
      zh: "MINA Lab 大學部研究員，研究方向為電催化材料。修習機器學習相關課程並完成多項線上認證。"
    }
  },
  {
    icon: "📜",
    title: { en: "Online Certifications", zh: "線上課程認證" },
    org: { en: "Coursera / DeepLearning.AI / IBM / CU Boulder / LearnQuest", zh: "Coursera / DeepLearning.AI / IBM / CU Boulder / LearnQuest" },
    period: { en: "2025", zh: "2025" },
    desc: {
      en: "Convolutional Neural Networks (DeepLearning.AI), Unsupervised Algorithms in Machine Learning (University of Colorado Boulder), Python for Data Science, AI & Development (IBM), Introduction to Data Science and scikit-learn in Python (LearnQuest).",
      zh: "卷積神經網路（DeepLearning.AI）、機器學習非監督演算法（科羅拉多大學博爾德分校）、Python 資料科學與 AI 開發（IBM）、Python 資料科學與 scikit-learn 入門（LearnQuest）。"
    }
  }
];

// 技能：en 是正面，zh 是翻面；兩者相同就不翻面
const skillsData = [
  { en: "Python", zh: "Python" },
  { en: "Applied Machine Learning", zh: "應用機器學習" },
  { en: "CNN", zh: "卷積神經網路" },
  { en: "MAE / Computer Vision", zh: "MAE ／ 電腦視覺" },
  { en: "scikit-learn", zh: "scikit-learn" },
  { en: "Tableau", zh: "Tableau" },
  { en: "Next.js", zh: "Next.js" },
  { en: "TypeScript", zh: "TypeScript" },
  { en: "Supabase", zh: "Supabase" },
  { en: "Electrochemistry (EIS / LSV)", zh: "電化學分析（EIS ／ LSV）" },
  { en: "SEM", zh: "掃描式電子顯微鏡" },
  { en: "Origin", zh: "Origin" },
  { en: "NOVA", zh: "NOVA" }
];

// type: "project" 或 "plan"
// embed（選填）: 點擊卡片時彈窗內嵌的內容
//   { kind: "iframe", src: "網址" }        → 內嵌網頁（例如 live app）
//   { kind: "pdf",    src: "assets/x.pdf" } → 內嵌 PDF（海報、簡報匯出）
//   { kind: "image",  src: "assets/x.png" } → 內嵌圖片（海報圖檔）
const projectsData = [
  {
    type: "project",
    title: { en: "Chef Jarvis — Personalized AI Cooking Companion", zh: "Chef Jarvis — 個人化 AI 料理助手" },
    period: { en: "2026.07", zh: "2026.07" },
    summary: {
      en: "A profile-aware AI cooking app: it turns a meal idea into a personalized recipe, grocery checklist, healthy swaps, and guided Chef Mode. Click to open the live app.",
      zh: "會讀懂你的 AI 料理 App：把一個菜色想法變成個人化食譜、購物清單、健康替換與 Chef Mode 引導料理。點擊開啟線上 App。"
    },
    description: {
      en: "A personalized AI cooking companion that starts with the person, not a generic recipe. During onboarding, users set body data, calorie/macro targets, body-composition goal, allergies, dietary needs, dislikes, and available kitchen equipment; every plan is then designed around that profile. Its core principle is personalized healthy swaps — leaner high-protein alternatives for fat-loss/recomposition, protein-forward portions for muscle-gain, and allergy/dietary-safe replacements (lactose-free, gluten-free, nut-safe, shellfish-safe) carried into every meal. A Gemini-powered planner returns ingredients, realistic portions, macros, cooking steps, equipment alternatives, and reuse ideas; USDA FoodData Central reference values load in the background so the recipe is usable immediately. Chef Mode guides cooking step by step with spoken instructions and multiple independent countdowns and stopwatches. Auth, profiles, pantry, saved meal cards, and grocery lists run on Supabase (RLS-protected) with Deno edge functions guarding the AI and nutrition APIs. Built end-to-end with Claude Code.",
      zh: "一款從「煮的人」而非「通用食譜」出發的個人化 AI 料理助手。使用者在 onboarding 設定身體數據、熱量／三大營養素目標、體態目標、過敏原、飲食需求、不喜歡的食物與現有廚房設備，之後每份計畫都圍繞這份 profile 設計。核心理念是個人化健康替換 — 減脂／增肌減脂者得到更精瘦高蛋白的替代、增肌者得到高蛋白份量建議，並把過敏與飲食安全（無乳糖、無麩質、無堅果、無甲殼類）帶進每一餐。由 Gemini 驅動的規劃器產出食材、實際份量、營養、烹飪步驟、設備替代方案與剩食再利用點子；USDA FoodData Central 參考營養值在背景載入，食譜可立即使用。Chef Mode 以語音指示與多個獨立倒數／碼表逐步引導料理。登入、個人檔案、食材庫、收藏餐點與購物清單皆建於 Supabase（RLS 保護），並以 Deno edge function 保護 AI 與營養 API。全程以 Claude Code 端到端打造。"
    },
    tech: ["Supabase", "Gemini API", "Deno Edge Functions", "USDA FoodData Central", "JavaScript"],
    embed: { kind: "iframe", src: "https://chef-jarvis.pages.dev" },
    links: [
      { label: "Live App", url: "https://chef-jarvis.pages.dev" }
    ]
  },
  {
    type: "project",
    title: { en: "GuanWei — AI BaZi Astrology Platform", zh: "觀微 — AI 八字命盤平台" },
    period: { en: "2026.07", zh: "2026.07" },
    summary: {
      en: "A full-stack AI astrology platform: a deterministic BaZi engine computes the chart, the AI only translates it into plain language. Click to open the live app.",
      zh: "全端 AI 命理平台：確定性八字引擎負責排盤，AI 只把結果翻成白話。點擊開啟線上 App。"
    },
    description: {
      en: "A \"classical Eastern meets modern SaaS\" platform for BaZi (Four Pillars) astrology, built on a strict layered architecture with a hard red line: every astrological conclusion comes from the deterministic rule engine (calendar + BaZi), and the AI layer only turns the structured JSON into readable language — it never invents results, and photos never touch any AI model. The pure-function engine (solar-term timing, true solar time, Four Pillars with Li-Chun / solar-term boundaries, Ten Gods, Five Elements strength, luck cycles) is covered by 81 unit tests and differentially validated against a reference library. Features a 6-step wizard, an interactive dashboard (four pillars, five-elements chart, luck timeline, personality radar, wealth gauges), photo timeline anchors + client-side k-means palette extraction, AI reading + Q&A (swappable between Anthropic and free OpenAI-compatible providers), Supabase auth/storage protected by RLS, and PDF export. Every reading ships with an \"evidence\" block separating rule-derived facts from AI phrasing. Built end-to-end with Claude Code and deployed on Netlify.",
      zh: "一個「古典東方 × 現代 SaaS」的八字命盤平台，採嚴格分層架構並設下硬性紅線：命理結論只能來自確定性規則引擎（曆法＋八字），AI 只負責把結構化 JSON 翻成白話、不得發明結果，且照片永不進入任何 AI 模型。純函式引擎（節氣時刻、真太陽時、以立春／節為界的四柱、十神、五行強弱、大運流年）有 81 個單元測試，並與參考套件做差異驗證。功能包含 6 步驟 Wizard、互動式 Dashboard（四柱、五行圖、大運時間軸、人格雷達、財運儀表）、照片時間軸錨點＋瀏覽器端 k-means 抽色主題、AI 解讀與問答（可在 Anthropic 與免費 OpenAI 相容供應商間切換）、Supabase 登入／儲存（RLS 保護）、PDF 匯出。每份解讀都附「推演依據」，清楚區分規則推導與 AI 文字整理。全程以 Claude Code 端到端打造，部署於 Netlify。"
    },
    tech: ["Next.js", "TypeScript", "Anthropic API", "Supabase", "Netlify"],
    embed: { kind: "iframe", src: "https://ilovehanni.netlify.app" },
    links: [
      { label: "Live App", url: "https://ilovehanni.netlify.app" }
    ]
  },
  {
    type: "project",
    title: { en: "Eatogether", zh: "一起吃 Eatogether" },
    period: { en: "2026.06", zh: "2026.06" },
    summary: {
      en: "A group-decision web app for \"what should we eat?\" — designed and deployed in a single day.",
      zh: "為「跟朋友決定要吃什麼」而生的群體決策 Web App，一天內完成設計與部署。"
    },
    description: {
      en: "Born from my own indecisiveness, a tool built for group restaurant decisions. It starts with a spinning wheel to pick today's cuisine, then moves into one of three collaborative modes: dating-app mode (swipe left/right on restaurants — a match only happens when everyone likes the same one), midpoint mode (pulls everyone's location and finds the geometric midpoint so no one travels farther than the rest), and voting mode (anonymous weighted Top-3 voting, by passing one phone around or joining a room online). This was my first time using Claude Code to design a web app end-to-end — from architecture planning and database schema to real-time collaboration design and the frontend skeleton — turning an idea into a running product in one day.",
      zh: "從個人的選擇困難出發，做出解決群體聚餐決策的工具。先用轉盤決定今天吃哪種菜系，再進入三種協作模式：交友軟體模式（左右滑餐廳，全員都喜歡才配對成功）、中點模式（取得所有人位置並計算幾何中點，沒有人需要跑最遠）、投票模式（匿名加權 Top-3 投票，可傳手機輪流投或線上開房間）。這是我第一次用 Claude Code 端到端設計 Web App — 從架構規劃、資料庫 schema、即時協作設計到前端骨架，一天內從想法變成可運行的產品。"
    },
    tech: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    embed: { kind: "iframe", src: "https://eatogether.vercel.app" },
    links: [
      { label: "Live App", url: "https://eatogether.vercel.app" }
    ]
  },
  {
    type: "project",
    title: { en: "Ni-Alloy EGOR Electrocatalysis", zh: "鎳基合金 EGOR 電催化研究" },
    period: { en: "2024.08 - 2025.06", zh: "2024.08 - 2025.06" },
    summary: {
      en: "Evaluating catalytic activity of Ni-based alloys in ethylene glycol oxidation — accepted at 2026 RiSER. Click to view the poster.",
      zh: "評估鎳基合金在乙二醇氧化反應（EGOR）中的催化活性，成果被 2026 RiSER 會議接受。點擊查看論文海報。"
    },
    description: {
      en: "At NCKU MINA Lab, systematically synthesized and characterized Ni–Co, Ni–Cu, Ni–Mn and ternary alloy catalysts on nickel foam electrodes. The optimized ternary NiCuMn catalyst achieved the lowest onset potential (≈1.30 V vs. RHE) and the highest electron transfer efficiency; compared to binary systems, charge-transfer resistance (EIS) dropped ~24% and catalytic current density (LSV) rose ~35%. SEM revealed NiCuMn's hybrid nanoparticle/nanosheet morphology providing high surface area and efficient mass transport. Accepted at 2026 RiSER Conference (Sustainable Energy).",
      zh: "在 NCKU MINA Lab 以鎳發泡電極系統性合成並表徵 Ni–Co、Ni–Cu、Ni–Mn 與三元合金催化劑。最佳化的三元 NiCuMn 催化劑達到最低起始電位（≈1.30 V vs. RHE）與最高電子轉移效率；相較二元系統，電荷轉移阻抗（EIS）降低約 24%、催化電流密度（LSV）提升約 35%。透過 SEM 建立奈米結構與效能的關聯，發現 NiCuMn 的奈米顆粒／奈米片混合形貌提供高比表面積與高效質傳。成果已被 2026 RiSER Conference（Sustainable Energy）接受。"
    },
    tech: ["Electrochemistry (EIS/LSV)", "SEM", "Origin", "NOVA"],
    embed: { kind: "pdf", src: "assets/egor-poster.pdf" },
    links: []
  },
  {
    type: "project",
    title: { en: "Unsupervised SEM Defect Detection", zh: "非監督式學習 SEM 缺陷偵測" },
    period: { en: "2026.06", zh: "2026.06" },
    summary: {
      en: "Detecting defects in SEM grain images without labels, using PCA + K-means and a CNN Autoencoder. Click to view slides.",
      zh: "不需標註資料，用 PCA + K-means 與 CNN Autoencoder 自動偵測 SEM 晶粒顯微影像中的缺陷。點擊查看簡報。"
    },
    description: {
      en: "Applies unsupervised machine learning to SEM grain microstructure images to detect defects and patterns without labeled training data. Two complementary techniques: (1) PCA + K-means clustering identifies distinct microstructure patterns by reducing dimensionality and grouping similar 64×64 patches; (2) a CNN Autoencoder flags anomalies through reconstruction error, generating heatmaps that highlight potential defect regions. Dataset: Grain Size SEM images from Kaggle.",
      zh: "對 SEM 晶粒顯微結構影像應用非監督式機器學習，在沒有標註訓練資料的情況下偵測缺陷與圖樣。採用兩種互補方法：(1) PCA 降維 + K-means 分群，對 64×64 影像切塊分群以識別不同的顯微結構圖樣；(2) CNN Autoencoder 以重建誤差標記異常，生成突顯潛在缺陷區域的熱力圖。資料集使用 Kaggle 的 Grain Size SEM 顯微影像。"
    },
    tech: ["TensorFlow", "scikit-learn", "OpenCV", "PCA / K-means", "Autoencoder"],
    embed: { kind: "pdf", src: "assets/ml-mse-project-1.pdf" },
    links: [
      { label: "GitHub", url: "https://github.com/njzneverdie/Unsupervised-Learning-Defect-Detector" }
    ]
  },
  {
    type: "project",
    title: { en: "CNN SEM Image Classification", zh: "CNN SEM 影像分類" },
    period: { en: "2026.06", zh: "2026.06" },
    summary: {
      en: "Classifying 18,577 SEM images into 10 material categories with InceptionV3 transfer learning — 82.2% test accuracy. Click to view slides.",
      zh: "以 InceptionV3 遷移學習分類 18,577 張 SEM 影像至 10 個材料類別，測試準確率 82.2%。點擊查看簡報。"
    },
    description: {
      en: "A complete deep learning pipeline that classifies 18,577 scanning electron microscope (SEM) images into 10 material classes (MEMS devices, nanowires, particles, biological samples, etc.). Uses transfer learning with an ImageNet-pretrained InceptionV3 backbone, combined with class weighting and imbalanced-data handling (imbalanced-learn), achieving 82.2% test accuracy.",
      zh: "建立完整的深度學習 pipeline，將 18,577 張掃描式電子顯微鏡（SEM）影像自動分類至 10 個材料類別（MEMS 元件、奈米線、顆粒、生物樣本等）。以 ImageNet 預訓練的 InceptionV3 為骨幹進行遷移學習，搭配類別權重與不平衡資料處理（imbalanced-learn），達到 82.2% 測試準確率。"
    },
    tech: ["TensorFlow", "InceptionV3", "Transfer Learning", "imbalanced-learn"],
    embed: { kind: "pdf", src: "assets/ml-mse-project-2.pdf" },
    links: [
      { label: "GitHub", url: "https://github.com/njzneverdie/CNN-Project-SEM-Image-Classification" }
    ]
  },
  {
    type: "project",
    title: { en: "Retinal Vessel Segmentation (MAE)", zh: "視網膜血管分割（MAE）" },
    period: { en: "2025.08", zh: "2025.08" },
    summary: {
      en: "MIT xPRO × Novo Nordisk: retinal vessel segmentation on biomedical images with Masked Auto-Encoders.",
      zh: "MIT xPRO × Novo Nordisk 專案：用 Masked Auto-Encoders 進行生醫影像的視網膜血管分割。"
    },
    description: {
      en: "In MIT xPRO's AI and Computer Vision in BioTech project (in partnership with Novo Nordisk), applied Masked Auto-Encoders (MAE) — a self-supervised learning approach — to retinal vessel segmentation, exploring practical applications of computer vision in biotech and healthcare.",
      zh: "在 MIT xPRO 的 AI and Computer Vision in BioTech 專案（與 Novo Nordisk 合作）中，應用 Masked Auto-Encoders（MAE）自監督學習方法處理視網膜影像的血管分割任務，探索電腦視覺在生技醫療領域的實際應用。"
    },
    tech: ["MAE", "Computer Vision", "Applied ML"],
    links: [
      { label: "Project Report", url: "https://gtc.blendedlearn.org/aix-on-campus-experience/post/retinal-vessel-segmentation-with-masked-auto-encoders-9A2GjnNXLcg0xrz" }
    ]
  },
  {
    type: "project",
    title: { en: "Handwritten Character Recognition (CNN)", zh: "手寫字元辨識（CNN）" },
    period: { en: "2025.08", zh: "2025.08" },
    summary: {
      en: "MIT xPRO × Boston Dynamics: a deep learning model for handwritten character recognition in mobile robot manipulation.",
      zh: "MIT xPRO × Boston Dynamics 專案：機器人移動操作情境下的手寫字元辨識深度學習模型。"
    },
    description: {
      en: "In MIT xPRO's AI and Robotics for Mobile Robot Manipulation project (in partnership with Boston Dynamics), dove deep into core CNN concepts and built a handwritten character recognition model, understanding the role of machine learning in robotic perception systems.",
      zh: "在 MIT xPRO 的 AI and Robotics for Mobile Robot Manipulation 專案（與 Boston Dynamics 合作）中，深入卷積神經網路（CNN）核心概念，實作手寫字元辨識模型，理解機器學習在機器人感知系統中的角色。"
    },
    tech: ["CNN", "Applied ML", "Python"],
    links: [
      { label: "Project Report", url: "https://gtc.blendedlearn.org/aix-on-campus-experience/post/ml-core-concepts-a-deep-dive-into-handwritten-character-recognition-VAgQAkT6A97UKA4" }
    ]
  },
  {
    type: "project",
    title: { en: "COMPAS Recidivism Bias Analysis", zh: "COMPAS 再犯預測偏差分析" },
    period: { en: "2025.08", zh: "2025.08" },
    summary: {
      en: "MIT xPRO Tableau project: are COMPAS recidivism predictions equally fair and accurate across racial groups?",
      zh: "MIT xPRO Tableau 專案：探討 COMPAS 再犯風險預測在不同種族間是否同樣公平準確。"
    },
    description: {
      en: "In MIT xPRO's Visual Data Science project, used Tableau to visually analyze the COMPAS recidivism risk assessment system, examining fairness and accuracy differences of its predictions across racial groups and exploring the social impact of algorithmic bias.",
      zh: "在 MIT xPRO 的 Visual Data Science 專案中，以 Tableau 對 COMPAS 再犯風險評估系統進行視覺化資料分析，檢驗其預測在不同種族群體間的公平性與準確度差異，探討演算法偏差的社會影響。"
    },
    tech: ["Tableau", "Data Visualization"],
    links: []
  },
  {
    type: "plan",
    title: { en: "MS ECE @ USC", zh: "USC 電機碩士深造" },
    period: { en: "2026 -", zh: "2026 -" },
    summary: {
      en: "Heading to USC for an MS in Electrical & Computer Engineering, focused on machine learning and its engineering applications.",
      zh: "前往南加州大學攻讀電機與計算機工程碩士，聚焦機器學習與其工程應用。"
    },
    description: {
      en: "Combining my NCKU materials science background with hands-on machine learning experience, I'm heading to USC to deepen both the theory and engineering practice of AI/ML. Long-term goal: interdisciplinary research and applications at the intersection of materials science and AI.",
      zh: "以 NCKU 材料科學背景結合機器學習實作經驗，前往 USC 深化 AI/ML 領域的理論與工程能力，長期目標是結合材料科學與 AI 的跨領域研究與應用。"
    },
    tech: ["Machine Learning", "ECE"],
    links: []
  },
  {
    type: "plan",
    title: { en: "Eatogether: What's Next", zh: "Eatogether 功能擴充" },
    period: { en: "Ongoing", zh: "進行中" },
    summary: {
      en: "More collaborative modes and polish for Eatogether, iterating fast with AI-assisted development.",
      zh: "持續為 Eatogether 增加更多協作模式與細節打磨。"
    },
    description: {
      en: "Eatogether is still a prototype. Next up: more group-decision modes, a smoother real-time collaboration experience, and continued rapid iteration through AI-assisted development.",
      zh: "Eatogether 目前仍是原型階段，接下來計畫增加更多群體決策模式、優化即時協作體驗，並持續以 AI 輔助開發的方式快速迭代。"
    },
    tech: ["Next.js", "Supabase"],
    links: [
      { label: "Live App", url: "https://eatogether.vercel.app" }
    ]
  }
];
