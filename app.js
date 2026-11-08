/* Данные: разрешённые программы на проверку.
   category — ключ, icon — эмодзи (можно заменить на ссылки на картинки). */
const PROGRAMS = [
  // Браузеры
  { name: "Google Chrome", cat: "browser", icon: "🌐" },
  { name: "Mozilla Firefox", cat: "browser", icon: "🦊" },
  { name: "Opera", cat: "browser", icon: "🎭" },
  { name: "Microsoft Edge", cat: "browser", icon: "🌀" },
  { name: "Yandex Browser", cat: "browser", icon: "🟡" },

  // Общение
  { name: "Discord", cat: "social", icon: "💬" },
  { name: "Telegram Desktop", cat: "social", icon: "✈️" },
  { name: "VK Messenger", cat: "social", icon: "🔵" },
  { name: "Skype", cat: "social", icon: "📞" },

  // Игры / платформы
  { name: "Steam", cat: "game", icon: "🎮" },
  { name: "Epic Games Launcher", cat: "game", icon: "🕹️" },
  { name: "Battle.net", cat: "game", icon: "⚔️" },
  { name: "Riot Client (Valorant, LoL)", cat: "game", icon: "🛡️" },
  { name: "Minecraft Launcher", cat: "game", icon: "⛏️" },
  { name: "Roblox", cat: "game", icon: "🧱" },
  { name: "CS2 / Counter-Strike", cat: "game", icon: "🔫" },
  { name: "Dota 2", cat: "game", icon: "🗡️" },
  { name: "GTA V / FiveM", cat: "game", icon: "🚗" },

  // Утилиты
  { name: "7-Zip", cat: "utility", icon: "🗜️" },
  { name: "Notepad++", cat: "utility", icon: "📝" },
  { name: "Visual Studio Code", cat: "utility", icon: "💻" },
  { name: "Java (JRE/JDK)", cat: "utility", icon: "☕" },
  { name: ".NET Runtime", cat: "utility", icon: "🧩" },
  { name: "Visual C++ Redistributable", cat: "utility", icon: "🔧" },
  { name: "DirectX", cat: "utility", icon: "🎬" },
  { name: "GeForce Experience", cat: "utility", icon: "🟢" },
  { name: "AMD Software", cat: "utility", icon: "🔴" },

  // Медиа
  { name: "VLC Media Player", cat: "media", icon: "🚚" },
  { name: "Spotify", cat: "media", icon: "🎵" },
  { name: "YouTube Music", cat: "media", icon: "🎧" },
  { name: "OBS Studio", cat: "media", icon: "📹" },
  { name: "Photoshop", cat: "media", icon: "🎨" },

  // Антивирусы / системное
  { name: "Kaspersky", cat: "system", icon: "🛂" },
  { name: "Windows Defender", cat: "system", icon: "🪟" },
  { name: "Malwarebytes", cat: "system", icon: "🐛" },
  { name: "TeamViewer", cat: "system", icon: "🖥️" },
  { name: "AnyDesk", cat: "system", icon: "🖱️" },
];

const CATEGORIES = [
  { key: "all", label: "Все" },
  { key: "browser", label: "Браузеры" },
  { key: "social", label: "Общение" },
  { key: "game", label: "Игры и платформы" },
  { key: "utility", label: "Утилиты" },
  { key: "media", label: "Медиа" },
  { key: "system", label: "Системные" },
];

const grid = document.getElementById("grid");
const filtersBox = document.getElementById("filters");
const search = document.getElementById("search");
const emptyMsg = document.getElementById("empty");

let activeCat = "all";
let query = "";

/* --- фильтры-чипы --- */
CATEGORIES.forEach(({ key, label }) => {
  const btn = document.createElement("button");
  btn.className = "chip" + (key === "all" ? " active" : "");
  btn.type = "button";
  btn.textContent = label;
  btn.addEventListener("click", () => {
    activeCat = key;
    filtersBox.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    render();
  });
  filtersBox.appendChild(btn);
});

/* --- поиск --- */
search.addEventListener("input", () => {
  query = search.value.trim().toLowerCase();
  render();
});

/* --- рендер списка --- */
function normalize(s) {
  return s.toLowerCase().replace(/ё/g, "е");
}

function render() {
  grid.innerHTML = "";
  const catLabel = (k) => CATEGORIES.find((c) => c.key === k)?.label ?? k;

  const items = PROGRAMS.filter(
    (p) =>
      (activeCat === "all" || p.cat === activeCat) &&
      (!query || normalize(p.name).includes(normalize(query)))
  );

  items.sort((a, b) => a.name.localeCompare(b.name, "ru"));

  items.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <span class="card-icon" aria-hidden="true">${p.icon}</span>
      <div class="card-body">
        <div class="card-name"></div>
        <div class="card-cat"></div>
      </div>
      <span class="badge">ОК</span>`;
    card.querySelector(".card-name").textContent = p.name;
    card.querySelector(".card-cat").textContent = catLabel(p.cat);
    grid.appendChild(card);
  });

  emptyMsg.hidden = items.length > 0;
}

render();
