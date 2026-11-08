/* ===== данные: 35 разрешённых программ (названия не переводятся) ===== */
const PROGRAMS = [
  { name: "AlternateStreamView", icon: "🗂️", url: "https://www.nirsoft.net/utils/alternate_data_streams.html",
    ru: "Просмотр альтернативных потоков данных NTFS", en: "View NTFS alternate data streams" },
  { name: "BAMParser", icon: "📈", url: "https://release-assets.githubusercontent.com/github-production-release-asset/890129826/43223953-f0eb-4544-9ba2-bd0a4181d38b?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-11-08T02%3A03%3A55Z&rscd=attachment%3B+filename%3DBAMParser.exe&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-11-08T01%3A03%3A41Z&ske=2026-11-08T02%3A03%3A55Z&sks=b&skv=2018-11-09&sig=mEhOirzz6WmAWdVbDAA6Tuj0Bw2e6G7ZHx2NTHzqxSc%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc5NDEwMTQzOCwibmJmIjoxNzk0MTAxMTM4LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.KDsQOoBzxW6y1V7ILli3a39tUuHE-2aBMCggiAdJ5Kw&response-content-disposition=attachment%3B%20filename%3DBAMParser.exe&response-content-type=application%2Foctet-stream",
    ru: "Парсер журналов Background Activity Moderator", en: "Parser for BAM activity logs" },
  { name: "BrowserDownloadViewer", icon: "⬇️", url: "https://www.nirsoft.net/utils/browserdownloadsview.zip",
    ru: "Список загрузок из браузеров", en: "List of browser downloads" },
  { name: "BrowsingHistoryView", icon: "🌐", url: "https://www.softportal.com/software-26175-browsinghistoryview.html",
    ru: "История посещений во всех браузерах", en: "Browsing history across browsers" },
  { name: "Detect Tools", icon: "🔎", url: "https://detect.ac/tools",
    ru: "Набор детектных инструментов", en: "Set of detection tools" },
  { name: "Eric Zimmerman Tools", icon: "🧰", url: "https://ericzimmerman.github.io/#forensic-tools",
    ru: "Криминалистические утилиты E. Zimmerman", en: "Digital forensics utilities by E. Zimmerman" },
  { name: "Everything", icon: "🔍", url: "https://www.voidtools.com/Everything-1.5.0.1404a.x64.zip",
    ru: "Мгновенный поиск файлов по диску", en: "Instant file search on disk" },
  { name: "ExecutedProgramsList", icon: "📜", url: "https://www.nirsoft.net/utils/executedprogramslist.zip",
    ru: "Список когда-либо запущенных программ", en: "List of previously executed programs" },
  { name: "FTK Imager", icon: "💽", url: "https://go.exterro.com/l/43312/2023-05-03/fc4b78",
    ru: "Образы дисков и анализ памяти", en: "Disk imaging and memory analysis" },
  { name: "Checker Soon", icon: "⏳", url: null,
    ru: "Инструмент проверки — скоро доступен", en: "Verification tool — coming soon" },
  { name: "JournalTrace", icon: "🧾", url: "https://release-assets.githubusercontent.com/github-production-release-asset/899349770/ab6a048b-1554-4866-86ee-9c5cee36bc24?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-11-08T02%3A30%3A31Z&rscd=attachment%3B+filename%3DJournalTrace.exe&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-11-08T01%3A29%3A35Z&ske=2026-11-08T02%3A30%3A31Z&sks=b&skv=2018-11-09&sig=uix%2BR6AC6CuP5zTrZqmexkcMkRvBsDAK1hLF2o744RE%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc5NDEwMTY3NSwibmJmIjoxNzk0MTAxMzc1LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.3jtvuah5jzl-7mcglQuZSU1evsZCeL4hVxP9RBLMvMw&response-content-disposition=attachment%3B%20filename%3DJournalTrace.exe&response-content-type=application%2Foctet-stream",
    ru: "Чтение NTFS-журналов ($UsnJrnl)", en: "Reads NTFS change journals ($UsnJrnl)" },
  { name: "KernelLiveDumpTool", icon: "🧠", url: "https://github.com/spokwn/KernelLiveDumpTool",
    ru: "Дамп ядра системы на лету", en: "Live kernel dump tool" },
  { name: "LastActivityView", icon: "🕘", url: "https://www.nirsoft.net/utils/lastactivityview.zip",
    ru: "Хронология действий в системе", en: "Timeline of system activity" },
  { name: "Magnet RAM Capture", icon: "🧲", url: "https://www.magnetforensics.com/resources/magnet-ram-capture/",
    ru: "Съём дампа оперативной памяти", en: "Capture of physical memory (RAM)" },
  { name: "Ocean", icon: "🌊", url: "https://anticheat.ac/downloads",
    ru: "Загрузочный клиент античита Ocean", en: "Ocean anti-cheat client download" },
  { name: "PathsParser", icon: "🛤️", url: "https://release-assets.githubusercontent.com/github-production-release-asset/906709854/87b2d1aa-7b2d-4f76-bbbc-a2a0592f6bcf?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-11-08T02%3A07%3A45Z&rscd=attachment%3B+filename%3DPathsParser.exe&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-11-08T01%3A07%3A33Z&ske=2026-11-08T02%3A07%3A45Z&sks=b&skv=2018-11-09&sig=Tzbgp5DxoMKFedTFGYpbE7lhaMs6Bvep7T79IF0s%2Bk0%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc5NDEwMTgwNywibmJmIjoxNzk0MTAxNTA3LCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.Zk1RRRg4GNezFf_JXRbG8SawjDF4NOUXAGQq1Yld24A&response-content-disposition=attachment%3B%20filename%3DPathsParser.exe&response-content-type=application%2Foctet-stream",
    ru: "Анализ записок пути (AppCompat)", en: "AppCompat shims database analysis" },
  { name: "PrefetchView++", icon: "⚡", url: "https://github.com/Orbdiff/PrefetchView/releases/tag/v1.5.3",
    ru: "Просмотр файлов Prefetch", en: "Views Prefetch files" },
  { name: "Process Hacker 2", icon: "🥷", url: "https://release-assets.githubusercontent.com/github-production-release-asset/50824485/5fbb5444-f5ab-11e5-88d3-bf7e5f987c4b?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-11-08T02%3A26%3A36Z&rscd=attachment%3B+filename%3Dprocesshacker-2.39-setup.exe&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-11-08T01%3A25%3A41Z&ske=2026-11-08T02%3A26%3A36Z&sks=b&skv=2018-11-09&sig=8HRK43Qr4gD3frL0QS%2FZurWcpJVJIf5w%2BLAjnACDGC0%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc5NDEwMTg2MywibmJmIjoxNzk0MTAxNTYzLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.-nWL87_7KGiWv8Nejemv1qdsHAaL5zdprAtBtinjziw&response-content-disposition=attachment%3B%20filename%3Dprocesshacker-2.39-setup.exe&response-content-type=application%2Foctet-stream",
    ru: "Диспетчер процессов и мониторинг системы", en: "Process manager and system monitor" },
  { name: "Recaf", icon: "☕", url: "https://release-assets.githubusercontent.com/github-production-release-asset/696482446/03ad570e-b04d-4a8e-8273-778ee819a564?sp=r&sv=2018-11-09&sr=b&spr=https&se=2026-11-08T02%3A30%3A32Z&rscd=attachment%3B+filename%3Drecaf-cli-0.8.8.jar&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2026-11-08T01%3A29%3A45Z&ske=2026-11-08T02%3A30%3A32Z&sks=b&skv=2018-11-09&sig=wVVgHM4TujX4bYTdEMTxRTeFOrubVPtB1jQfDyf8qtA%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc5NDEwMTg4MCwibmJmIjoxNzk0MTAxNTgwLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.yPy36pAGJWpsgBnGiChuLvr5JXay9rDtoemwCTyTNTA&response-content-disposition=attachment%3B%20filename%3Drecaf-cli-0.8.8.jar&response-content-type=application%2Foctet-stream",
    ru: "Редактор и декомпилятор JAR", en: "JAR editor and decompiler" },
  { name: "RecentFilesView", icon: "📄", url: "https://www.nirsoft.net/utils/recentfilesview.zip",
    ru: "Список недавно открытых файлов", en: "Recently opened files list" },
  { name: "Recuva", icon: "♻️", url: "https://www.softportal.com/software-5667-recuva.html",
    ru: "Восстановление удалённых файлов", en: "Recovery of deleted files" },
  { name: "RegistryExplorer", icon: "🗄️", url: "https://download.ericzimmermanstools.com/net/RegistryExplorer.zip",
    ru: "Просмотр кустов реестра и роя", en: "Registry hives and roaming profile viewer" },
  { name: "RegScanner", icon: "🧿", url: "https://www.nirsoft.net/utils/regscanner.zip",
    ru: "Быстрый поиск по реестру", en: "Fast search inside the registry" },
  { name: "ShellBag", icon: "🐚", url: "https://privazer.com/ru/shellbag_analyzer_cleaner.exe",
    ru: "Анализ и очистка ShellBag-записей", en: "ShellBag entries analyzer and cleaner" },
  { name: "SimpleUnlocker", icon: "🔓", url: "https://simpleunlocker.ds1nc.ru/release/simpleunlocker_release.zip",
    ru: "Разблокировка занятых файлов", en: "Unlocks locked files" },
  { name: "System Informer", icon: "📊", url: "https://sourceforge.net/projects/systeminformer/files/systeminformer-3.2.25011-release-setup.exe/download",
    ru: "Продвинутый монитор системы", en: "Advanced system monitoring tool" },
  { name: "USBdeview", icon: "🔌", url: "https://usbdeview.com/wp-content/uploads/2025/02/usbdeview-x64.zip",
    ru: "История подключений USB-устройств", en: "USB device connection history" },
  { name: "USBDriveLog", icon: "💾", url: "https://www.nirsoft.net/utils/usbdrivelog.zip",
    ru: "Журнал съёмных дисков", en: "Log of removable drive usage" },
  { name: "UserAssistView", icon: "👁️", url: "https://www.nirsoft.net/utils/userassistview.zip",
    ru: "Данные UserAssist о запусках программ", en: "UserAssist program-run data" },
  { name: "Velociraptor", icon: "🦖", url: "https://github.com/Velocidex/velociraptor/releases",
    ru: "Платформа сбора триаж-данных", en: "Digital forensics triage platform" },
  { name: "VersionChecker", icon: "🏷️", url: "https://github.com/HolyWorldWEB/VersionChecker/releases/tag/v1.0.2",
    ru: "Проверка версий файлов и компонентов", en: "Checks file and component versions" },
  { name: "Volatility Workbench", icon: "🧪", url: "https://www.osforensics.com/tools/volatility-workbench.html",
    ru: "Графическая оболочка Volatility", en: "GUI for the Volatility framework" },
  { name: "Windows Defender Log Viewer", icon: "🛡️", url: "https://www.nirsoft.net/utils/windows_defender_log_viewer.html",
    ru: "Просмотр журнала Windows Defender", en: "View Windows Defender event logs" },
  { name: "WinPrefetchView", icon: "🗃️", url: "https://www.nirsoft.net/utils/winprefetchview.zip",
    ru: "Prefetch-файлы: запуск и даты", en: "Prefetch files: runs and timestamps" },
  { name: "WinRar", icon: "🗜️", url: "https://www.win-rar.com/start.html?&L=4",
    ru: "Архиватор", en: "Archiver" }
];

/* ===== переводы интерфейса ===== */
const I18N = {
  ru: {
    "doc.title": "Инструкция к проверке через AnyDesk",
    "nav.rules": "Правила",
    "nav.programs": "Программы",
    "hero.title": "Инструкция к&nbsp;проверке через&nbsp;AnyDesk",
    "hero.sub": "Пожалуйста, ознакомьтесь с&nbsp;правилами перед началом проверки",
    "r1.title": "Не трогайте мышь",
    "r1.body": "Во время проверки вы&nbsp;не должны трогать мышь и&nbsp;двигать ею.",
    "r2.title": "Разрешённые программы",
    "r2.body": "Разрешённые и&nbsp;безопасные программы на&nbsp;проверке на&nbsp;читы:",
    "r2.btn": "посмотреть весь список",
    "r3.title": "Итоги проверки",
    "r3.body": "Если найдут читы&nbsp;— бан. Признание&nbsp;— бан с&nbsp;уменьшенным сроком, а&nbsp;если вы&nbsp;чисты, вам могут дать подарок.",
    "prog.title": "Разрешённые программы",
    "prog.search": "Поиск программы…",
    "prog.empty": "Ничего не найдено — попробуйте другое название.",
    "prog.download": "Скачать программу",
    "prog.soon": "Checker Soon",
    "footer": "Список обновляется администрацией. Сомневаетесь в&nbsp;программе — спросите до&nbsp;начала проверки."
  },
  en: {
    "doc.title": "AnyDesk Check Instructions",
    "nav.rules": "Rules",
    "nav.programs": "Programs",
    "hero.title": "AnyDesk Check&nbsp;Instructions",
    "hero.sub": "Please read the rules before the check starts",
    "r1.title": "Do not touch the mouse",
    "r1.body": "During the check you must not touch or move the mouse.",
    "r2.title": "Allowed programs",
    "r2.body": "Allowed and safe programs for the cheat check:",
    "r2.btn": "view the full list",
    "r3.title": "Check outcome",
    "r3.body": "Cheat found — ban. Confession — ban with a reduced term; if you are clean you may get a gift.",
    "prog.title": "Allowed programs",
    "prog.search": "Search a program…",
    "prog.empty": "Nothing found — try another name.",
    "prog.download": "Download program",
    "prog.soon": "Checker Soon",
    "footer": "The list is updated by the administration. Unsure about a program — ask before the check."
  }
};

const DL_ICON = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12m0 0 4.5-4.5M12 15l-4.5-4.5M4 21h16"/></svg>';

let lang = localStorage.getItem("lang") || "ru";
const grid = document.getElementById("grid");
const search = document.getElementById("search");
const emptyMsg = document.getElementById("empty");

function esc(s) {
  return s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

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
}

function render() {
  const t = I18N[lang];
  const q = search.value.trim().toLowerCase();
  const items = PROGRAMS.filter(p => p.name.toLowerCase().includes(q));

  grid.innerHTML = items.map(p => {
    const foot = p.url
      ? `<a class="dl" href="${esc(p.url)}" target="_blank" rel="noopener noreferrer" tabindex="0">${DL_ICON}${t["prog.download"]}</a>`
      : `<span class="soon">${t["prog.soon"]}</span>`;
    return `<article class="card">
      <span class="card-icon">${p.icon}</span>
      <h3 class="card-name">${esc(p.name)}</h3>
      <p class="card-desc">${esc(lang === "ru" ? p.ru : p.en)}</p>
      ${foot}
    </article>`;
  }).join("");

  emptyMsg.hidden = items.length > 0;
}

document.querySelectorAll(".lang-btn").forEach(btn =>
  btn.addEventListener("click", () => {
    lang = btn.dataset.lang;
    localStorage.setItem("lang", lang);
    applyLang();
  }));

search.addEventListener("input", render);
applyLang();
