/* ===== логика страницы: вкладки, поиск, копирование ===== */
let lang = localStorage.getItem("lang") || "ru";
let tab = localStorage.getItem("tab") === "teams" ? "teams" : "programs";

const grid = document.getElementById("grid");
const search = document.getElementById("search");
const emptyMsg = document.getElementById("empty");
const viewPrograms = document.getElementById("view-programs");
const viewTeams = document.getElementById("view-teams");
const teamsList = document.getElementById("teams-list");
const tabButtons = document.querySelectorAll(".tab-btn");
const navLinks = document.querySelectorAll(".site-nav a");

function esc(s) {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

/* ---------- вкладки ---------- */
function showTab(name, scroll) {
  tab = name === "teams" ? "teams" : "programs";
  localStorage.setItem("tab", tab);
  viewPrograms.hidden = tab !== "programs";
  viewTeams.hidden = tab !== "teams";
  tabButtons.forEach(b => {
    const on = b.dataset.tab === tab;
    b.classList.toggle("active", on);
    b.setAttribute("aria-selected", String(on));
  });
  if (scroll) {
    location.hash = "#content";
  }
}

tabButtons.forEach(btn =>
  btn.addEventListener("click", () => showTab(btn.dataset.tab, true)));

navLinks.forEach(a =>
  a.addEventListener("click", () => {
    if (a.dataset.goto) showTab(a.dataset.goto, false);
  }));

/* ---------- карточки программ: только название + описание ---------- */
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
    const soon = p.url ? "" : `<span class="soon-flag">Checker Soon</span>`;
    return `<${tag} class="card"${link}>
      <h3 class="card-name">${esc(p.name)}</h3>
      <p class="card-desc">${esc(lang === "ru" ? p.ru : p.en)}</p>
      ${soon}
    </${tag}>`;
  }).join("");

  emptyMsg.hidden = items.length > 0;
}

/* ---------- вкладки «Команды»: плашки с кнопкой копирования ---------- */
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
}

document.querySelectorAll(".lang-btn").forEach(btn =>
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    localStorage.setItem("lang", lang);
    applyLang();
  }));

search.addEventListener("input", render);

showTab(tab, false);
applyLang();
