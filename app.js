/* ===== логика страницы: страницы, вкладки, поиск, копирование, пасхалка ===== */
let lang = localStorage.getItem("lang") || "ru";
let tab = localStorage.getItem("tab") === "teams" ? "teams" : "programs";
let page = ["home", "news", "programs", "rules"].includes(localStorage.getItem("page"))
  ? localStorage.getItem("page") : "home";

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const emptyMsg = document.getElementById("empty");
const viewPrograms = document.getElementById("view-programs");
const viewTeams = document.getElementById("view-teams");
const teamsList = document.getElementById("teams-list");
const newsList = document.getElementById("news-list");
const tabButtons = document.querySelectorAll(".tab-btn");
const navLinks = document.querySelectorAll(".site-nav [data-page]");
const pageLinks = document.querySelectorAll("a[data-page]");
const eggOverlay = document.getElementById("egg-overlay");
const pages = {
  home: document.getElementById("home"),
  news: document.getElementById("news"),
  programs: document.getElementById("content"),
  rules: document.getElementById("rules")
};

function esc(s) {
  return s.replace(/[&<>\"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]));
}

/* ---------- анимация появления: перезапуск класса на элементе ---------- */
function animateIn(el) {
  if (!el) return;
  el.classList.remove("anim-in");
  void el.offsetWidth; /* принудительный reflow, чтобы анимация стартовала заново */
  el.classList.add("anim-in");
}

/* ---------- страницы: Главная / Новости / Программы / Правила (скрытая) ---------- */
function showPage(name, scroll) {
  page = pages[name] ? name : "home";
  localStorage.setItem("page", page);
  Object.entries(pages).forEach(([key, el]) => { el.hidden = key !== page; });
  navLinks.forEach(a => {
    const on = a.dataset.page === page;
    a.classList.toggle("active", on);
    if (on) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  animateIn(pages[page]);
  if (scroll) {
    history.replaceState(null, "", "#" + (page === "programs" ? "content" : page));
    const se = document.documentElement.style;
    se.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    se.scrollBehavior = "";
  }
}

/* любая ссылка с data-page (плавучка, «Инструкция…», кнопка «назад») ведёт на страницу */
pageLinks.forEach(a =>
  a.addEventListener("click", e => {
    e.preventDefault();
    showPage(a.dataset.page, true);
  }));

/* ---------- вкладки внутри страницы «Программы» ---------- */
function showTab(name, scroll) {
  tab = name === "teams" ? "teams" : "programs";
  localStorage.setItem("tab", tab);
  viewPrograms.hidden = tab !== "programs";
  viewTeams.hidden = tab !== "teams";
  animateIn(tab === "teams" ? viewTeams : viewPrograms);
  tabButtons.forEach(b => {
    const on = b.dataset.tab === tab;
    b.classList.toggle("active", on);
    b.setAttribute("aria-selected", String(on));
  });
  if (scroll) {
    showPage("programs", false);
  }
}

tabButtons.forEach(btn =>
  btn.addEventListener("click", () => showTab(btn.dataset.tab, true)));

/* ---------- страница «Новости»: карточки из NEWS_ITEMS ---------- */
function renderNews() {
  const t = I18N[lang];
  newsList.innerHTML = NEWS_ITEMS.map(n => `
    <article class="news-card glass">
      <div class="news-top">
        <span class="news-tag">${esc(t["news." + n.tag] || n.tag)}</span>
        <time class="news-date">${esc(n[lang + "Date"])}</time>
      </div>
      <h3 class="news-title">${esc(t[n.titleKey])}</h3>
      <p class="news-text">${esc(t[n.bodyKey])}</p>
    </article>`).join("");
}

/* ---------- карточки программ: название + описание + hover-оверлей ---------- */
function render() {
  const t = I18N[lang];
  const q = search.value.trim().toLowerCase();
  const items = PROGRAMS.filter(p => p.name.toLowerCase().includes(q));

  grid.innerHTML = items.map(p => {
    const href = p.url ? esc(p.url) : "";
    const tag = p.url ? "a" : "div";
    const link = p.url
      ? ` href="${href}" target="_blank" rel="noopener noreferrer"`
      : "";
    const soon = p.soon ? `<span class="soon-badge">SOON</span>` : "";
    const hover = `<span class="card-hover" aria-hidden="true">
        <span class="material-symbols-rounded dl-ic">download</span>
        <span class="dl-label">${esc(t["card.download"])}</span>
      </span>`;
    return `<${tag} class="card"${link}>
      <div class="card-body">
        <h3 class="card-name">${esc(p.name)}</h3>
        <p class="card-desc">${esc(lang === "ru" ? p.ru : p.en)}</p>
        ${soon}
      </div>
      ${hover}
    </${tag}>`;
  }).join("");

  emptyMsg.hidden = items.length > 0;
}

/* ---------- вкладка «Команды»: плашки с кнопкой копирования ---------- */
function renderTeams() {
  const t = I18N[lang];
  teamsList.innerHTML = TEAM_ITEMS.map((item, i) => `
    <article class="team-card">
      <div class="team-head">
        <div>
          <h3 class="team-title">${esc(t[item.titleKey])}</h3>
          <p class="team-desc">${esc(t[item.descKey])}</p>
        </div>
        <button type="button" class="copy-btn" data-team="${i}">
          <span class="material-symbols-rounded copy-ic">content_copy</span>
          <span class="copy-label">${esc(t.copy)}</span>
        </button>
      </div>
      <pre class="team-query">${esc(item.query)}</pre>
    </article>`).join("");
}

teamsList.addEventListener("click", async e => {
  const btn = e.target.closest(".copy-btn");
  if (!btn) return;
  const text = TEAM_ITEMS[Number(btn.dataset.team)].query;
  let ok = false;
  try {
    await navigator.clipboard.writeText(text);
    ok = true;
  } catch (_) {
    /* fallback для file:// и старых браузеров */
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.cssText = "position:fixed;opacity:0;pointer-events:none";
    document.body.appendChild(ta);
    ta.select();
    try { ok = document.execCommand("copy"); } catch (_e) { ok = false; }
    ta.remove();
  }
  btn.classList.toggle("done", ok);
  btn.querySelector(".copy-ic").textContent = ok ? "check" : "error";
  btn.querySelector(".copy-label").textContent = ok ? I18N[lang].copied : "×";
  setTimeout(() => {
    btn.classList.remove("done");
    btn.querySelector(".copy-ic").textContent = "content_copy";
    btn.querySelector(".copy-label").textContent = I18N[lang].copy;
  }, 1800);
});

/* ---------- пасхалка: клик по иконке TurboGrief -> ERROR 404 ---------- */
function openEgg() {
  if (!eggOverlay || !eggOverlay.hidden) return;
  eggOverlay.hidden = false;
  document.body.classList.add("egg-open");
  requestAnimationFrame(() => eggOverlay.classList.add("open"));
}

function closeEgg() {
  if (!eggOverlay || eggOverlay.hidden) return;
  eggOverlay.classList.remove("open");
  document.body.classList.remove("egg-open");
  setTimeout(() => { eggOverlay.hidden = true; }, 350);
}

if (eggOverlay) {
  eggOverlay.addEventListener("click", closeEgg);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeEgg();
  });
}

document.querySelectorAll(".brand-logo").forEach(logo =>
  logo.addEventListener("click", e => {
    e.preventDefault();
    e.stopPropagation();
    if (eggOverlay && eggOverlay.hidden) openEgg();
    else closeEgg();
  }));

/* ---------- язык ---------- */
function applyLang() {
  const t = I18N[lang];
  document.documentElement.lang = lang;
  document.title = t["doc.title"];
  document.querySelectorAll("[data-i18]").forEach(el => {
    const key = el.getAttribute("data-i18");
    if (t[key] != null) el.innerHTML = t[key];
  });
  search.placeholder = t["prog.search"];
  document.querySelectorAll(".lang-btn").forEach(b =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
  render();
  renderTeams();
  renderNews();
}

document.querySelectorAll(".lang-btn").forEach(btn =>
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    localStorage.setItem("lang", lang);
    applyLang();
  }));

search.addEventListener("input", render);

showTab(tab, false);
showPage(page, false);
applyLang();
