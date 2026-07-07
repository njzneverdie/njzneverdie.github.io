// ============================================================
// 網站渲染邏輯：讀取 data.js 的雙語資料並畫到頁面上。
// 所有文字英文為正面，hover 時像閃卡一樣翻面顯示中文。
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  setupStaticFlips();
  renderProfile();
  renderTimeline(experienceData, document.getElementById("experienceList"));
  renderTimeline(educationData, document.getElementById("educationList"));
  renderSkills();
  renderProjects(projectsData);
  setupFilterTabs();
  setupModal();
  setupStatusBar();
  runBootSequence();
  document.getElementById("year").textContent = new Date().getFullYear();
});

// ============== 翻卡元件 ==============
// field: { en, zh } 或字串（字串＝不翻面）
function normBi(field) {
  return typeof field === "string" ? { en: field, zh: field } : field;
}

// 把 el 的內容換成翻卡結構（en 正面 / zh 背面）。en === zh 就不做翻面。
// inline = true 時用 sizer 撐開寬度，容納兩種語言中較寬者。
function fillFlip(el, field, inline = false) {
  const t = normBi(field);
  el.textContent = "";
  if (t.en === t.zh) {
    el.textContent = t.en;
    return el;
  }
  el.classList.add("flip");
  if (inline) el.classList.add("flip-inline");

  const inner = document.createElement("span");
  inner.className = "flip-inner";

  const front = document.createElement("span");
  front.className = "flip-face flip-front";
  front.textContent = t.en;
  front.setAttribute("lang", "en");

  const back = document.createElement("span");
  back.className = "flip-face flip-back";
  back.textContent = t.zh;
  back.setAttribute("lang", "zh-Hant");

  inner.append(front, back);
  if (inline) {
    const sizer = document.createElement("span");
    sizer.className = "flip-sizer";
    sizer.textContent = t.zh.length > t.en.length ? t.zh : t.en;
    inner.append(sizer);
  }
  el.append(inner);
  return el;
}

// 建立一個新元素並套上翻卡內容
function flipEl(tag, className, field, inline = false) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  return fillFlip(el, field, inline);
}

// index.html 靜態文字：<x data-flip data-en="..." data-zh="..."> 自動變翻卡
function setupStaticFlips() {
  document.querySelectorAll("[data-flip]").forEach(el => {
    fillFlip(el, { en: el.dataset.en, zh: el.dataset.zh }, el.dataset.flip === "inline");
  });
}

// ============== 系統狀態列（時間 / 掃描狀態 / 電量） ==============
function setupStatusBar() {
  const timeEl = document.getElementById("statusTime");
  const scanEl = document.getElementById("statusScan");
  const powerFill = document.getElementById("powerFill");
  const powerPct = document.getElementById("powerPct");

  const updateTime = () => {
    const now = new Date();
    const pad = n => String(n).padStart(2, "0");
    timeEl.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  };
  updateTime();
  setInterval(updateTime, 1000);

  const scanStates = ["SCANNING", "SYSTEMS NOMINAL", "ENV: STABLE", "TARGET: VISITOR"];
  let scanIdx = 0;
  setInterval(() => {
    scanIdx = (scanIdx + 1) % scanStates.length;
    scanEl.innerHTML = `${scanStates[scanIdx]}<span class="dots"></span>`;
  }, 4000);

  // 電量在 96-100% 之間緩慢浮動，純粹是氛圍
  setInterval(() => {
    const pct = 96 + Math.floor(Math.random() * 5);
    powerFill.style.width = `${pct}%`;
    powerPct.textContent = `${pct}%`;
  }, 3000);
}

function renderProfile() {
  document.getElementById("avatarInitials").textContent = profileData.initials;
  document.getElementById("profileName").textContent = profileData.name;
  document.title = `${profileData.name} // Personal Interface`;

  document.getElementById("headlineZh").textContent = profileData.headline.zh;
  fillFlip(document.getElementById("aboutText"), profileData.about);

  const locationEl = document.getElementById("profileLocation");
  locationEl.innerHTML = "";
  locationEl.append("📍 ");
  locationEl.append(flipEl("span", "", profileData.location, true));
  locationEl.append(" · ");
  const emailLink = document.createElement("a");
  emailLink.href = `mailto:${profileData.email}`;
  emailLink.textContent = profileData.email;
  locationEl.append(emailLink);
}

// ============== 開機序列 (Boot Sequence) ==============
function runBootSequence() {
  const overlay = document.getElementById("bootOverlay");
  const linesEl = document.getElementById("bootLines");
  const prompt = document.getElementById("bootPrompt");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const bootLines = [
    "> MARK LXXXV INTERFACE v5.0",
    "> ARC REACTOR: ONLINE",
    "> SUIT INTEGRITY: 100%",
    `> LOADING PROFILE: ${profileData.name.toUpperCase()}`,
    "> ALL SYSTEMS GO."
  ];

  const alreadyBooted = sessionStorage.getItem("bootDone") === "1";

  const finish = () => {
    overlay.classList.add("hidden");
    sessionStorage.setItem("bootDone", "1");
    document.removeEventListener("keydown", finish);
    overlay.removeEventListener("click", finish);
    typeHeadline();
  };

  if (alreadyBooted || reduceMotion) {
    overlay.classList.add("hidden");
    typeHeadline();
    return;
  }

  let delay = 0;
  bootLines.forEach((line, i) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.textContent = line;
      linesEl.append(div);
      if (i === bootLines.length - 1) {
        prompt.style.display = "block";
      }
    }, delay);
    delay += 450;
  });

  document.addEventListener("keydown", finish);
  overlay.addEventListener("click", finish);
}

// ============== 標語打字機效果（打英文正面） ==============
function typeHeadline() {
  const target = document.getElementById("headlineText");
  const text = profileData.headline.en;
  let i = 0;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    target.textContent = text;
    return;
  }

  const tick = () => {
    target.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) {
      setTimeout(tick, 28);
    }
  };
  tick();
}

function renderTimeline(items, container) {
  container.innerHTML = "";
  items.forEach(item => {
    const el = document.createElement("div");
    el.className = "timeline-item";

    const icon = document.createElement("div");
    icon.className = "timeline-icon";
    icon.textContent = item.icon || "•";

    // 整塊內容是一張閃卡：正面英文、背面中文
    const content = document.createElement("div");
    content.className = "timeline-content flip";

    const inner = document.createElement("div");
    inner.className = "flip-inner";
    inner.append(buildTimelineFace(item, "en", "flip-front"), buildTimelineFace(item, "zh", "flip-back"));
    content.append(inner);

    el.append(icon, content);
    container.append(el);
  });
}

function buildTimelineFace(item, lang, faceCls) {
  const face = document.createElement("div");
  face.className = `flip-face ${faceCls}`;
  face.setAttribute("lang", lang === "en" ? "en" : "zh-Hant");

  const title = document.createElement("h4");
  title.textContent = normBi(item.title)[lang];

  const sub = document.createElement("p");
  sub.className = "timeline-sub";
  sub.textContent = normBi(item.org)[lang];

  const period = document.createElement("p");
  period.className = "timeline-period";
  period.textContent = normBi(item.period)[lang];

  const desc = document.createElement("p");
  desc.className = "timeline-desc";
  desc.textContent = normBi(item.desc)[lang];

  face.append(title, sub, period, desc);
  return face;
}

function renderSkills() {
  const container = document.getElementById("skillsList");
  container.innerHTML = "";
  skillsData.forEach(skill => {
    container.append(flipEl("span", "skill-pill", skill, true));
  });
}

function renderProjects(items) {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "project-card flip";
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.dataset.index = index;

    const inner = document.createElement("div");
    inner.className = "flip-inner";
    inner.append(buildCardFace(item, "en", "flip-front"), buildCardFace(item, "zh", "flip-back"));
    card.append(inner);

    const openHandler = () => openModal(item);
    card.addEventListener("click", openHandler);
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openHandler();
      }
    });

    grid.append(card);
  });
}

function buildCardFace(item, lang, faceCls) {
  const face = document.createElement("div");
  face.className = `flip-face card-face ${faceCls}`;
  face.setAttribute("lang", lang === "en" ? "en" : "zh-Hant");

  const tag = document.createElement("span");
  tag.className = `tag ${item.type === "plan" ? "plan" : ""}`;
  tag.textContent = item.type === "plan"
    ? (lang === "en" ? "PLAN" : "計畫")
    : (lang === "en" ? "PROJECT" : "專案");

  const title = document.createElement("h4");
  title.textContent = normBi(item.title)[lang];

  const period = document.createElement("p");
  period.className = "card-period";
  period.textContent = normBi(item.period)[lang];

  const summary = document.createElement("p");
  summary.className = "card-summary";
  summary.textContent = normBi(item.summary)[lang];

  const techWrap = document.createElement("div");
  techWrap.className = "card-tech";
  (item.tech || []).forEach(t => {
    const span = document.createElement("span");
    span.textContent = t;
    techWrap.append(span);
  });

  face.append(tag, title, period, summary, techWrap);
  return face;
}

function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.dataset.filter;
      const filtered = filter === "all"
        ? projectsData
        : projectsData.filter(p => p.type === filter);
      renderProjects(filtered);
    });
  });
}

function setupModal() {
  const overlay = document.getElementById("modalOverlay");
  const closeBtn = document.getElementById("modalClose");

  closeBtn.addEventListener("click", closeModal);
  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
  });
}

function openModal(item) {
  const overlay = document.getElementById("modalOverlay");
  const modal = overlay.querySelector(".modal");

  const tagEl = document.getElementById("modalTag");
  tagEl.className = `modal-tag ${item.type === "plan" ? "plan" : ""}`;
  fillFlip(tagEl, item.type === "plan"
    ? { en: "PLAN", zh: "計畫" }
    : { en: "PROJECT", zh: "專案" }, true);

  fillFlip(document.getElementById("modalTitle"), item.title);
  fillFlip(document.getElementById("modalPeriod"), item.period);
  fillFlip(document.getElementById("modalDescription"), item.description);

  // 內嵌內容（live app / 海報 / 簡報）
  const embedWrap = document.getElementById("modalEmbed");
  embedWrap.innerHTML = "";
  modal.classList.toggle("wide", Boolean(item.embed));
  if (item.embed) {
    const loading = document.createElement("p");
    loading.className = "embed-loading";
    loading.textContent = "> LOADING MODULE...";
    embedWrap.append(loading);

    let el;
    if (item.embed.kind === "image") {
      el = document.createElement("img");
      el.src = item.embed.src;
      el.alt = normBi(item.title).en;
    } else {
      // iframe 與 pdf 都用 iframe 呈現（瀏覽器原生 PDF 檢視器）
      el = document.createElement("iframe");
      el.src = item.embed.src;
      el.setAttribute("loading", "lazy");
      el.setAttribute("allowfullscreen", "");
    }
    el.className = "embed-content";
    el.addEventListener("load", () => loading.remove());
    el.addEventListener("error", () => {
      loading.textContent = "> MODULE UNAVAILABLE";
    });
    embedWrap.append(el);

    // 一律附上「全螢幕開啟」按鈕
    const openBtn = document.createElement("a");
    openBtn.className = "embed-open-btn";
    openBtn.href = item.embed.src;
    openBtn.target = "_blank";
    openBtn.rel = "noopener";
    openBtn.textContent = "⛶ FULLSCREEN";
    embedWrap.append(openBtn);
  }

  const techWrap = document.getElementById("modalTech");
  techWrap.innerHTML = "";
  (item.tech || []).forEach(t => {
    const span = document.createElement("span");
    span.textContent = t;
    techWrap.append(span);
  });

  const linksWrap = document.getElementById("modalLinks");
  linksWrap.innerHTML = "";
  (item.links || []).forEach(l => {
    const a = document.createElement("a");
    a.href = l.url;
    a.textContent = `${l.label} →`;
    a.target = "_blank";
    a.rel = "noopener";
    linksWrap.append(a);
  });

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  document.body.style.overflow = "";
}
