/* ===== переводы интерфейса + тексты вкладок + новости ===== */
const I18N = {
  ru: {
    "doc.title": "TurboGrief — инструкция к проверке",
    "nav.home": "Главная",
    "nav.news": "Новости",
    "nav.programs": "Программы",
    "tab.programs": "Программы",
    "tab.teams": "Команды",
    "hero.title": "Инструкция к&nbsp;проверке через&nbsp;AnyDesk",
    "links.discord": "Наш Discord",
    "links.telegram": "Наш Telegram",
    "links.site": "Наш сайт",
    "links.soon": "Soon",
    "news.title": "Новости",
    "news.update": "Обновление",
    "news.announce": "Анонс",
    "news.rules": "Правила",
    "news.n1.title": "Отдельная вкладка «Новости»",
    "news.n1.body": "Новости больше не смешиваются с инструкцией и списком программ: выберите «Новости» в верхней панели, чтобы открыть их отдельно.",
    "news.n2.title": "Обновлён список разрешённых программ",
    "news.n2.body": "Администрация добавила новые утилиты для проверок и обновила описания. Список доступен на вкладке «Программы».",
    "news.n3.title": "Напоминание о безопасной проверке",
    "news.n3.body": "Во время проверки разрешено скачивать файлы только с void-ceo.github.io/checker и выдавать модератору лишь базовый доступ (мышь и клавиатура).",
    "prog.title": "Программы для проверок",
    "alert.title": "Важное предупреждение",
    "alert.body": "Администрация TurboGrief настоятельно рекомендует не предоставлять модераторам или проверяющим полный доступ в программах удалённого управления (AnyDesk, TeamViewer и аналогичных), включая права на удалённое копирование файлов, изменение системных настроек, доступ без подтверждения и другие расширенные разрешения. Модератору должен быть разрешён только базовый доступ для взаимодействия с компьютером (мышь и клавиатура). Игрок обязан лично контролировать все действия, выполняемые на его компьютере. Во время проверки скачивание любых программ, модов и файлов, а также копирование и выполнение команд для консоли / shell, разрешено только с сайта void-ceo.github.io/checker. Любые другие источники запрещены. Вся ответственность за любой возможный ущерб компьютеру, данным или программному обеспечению лежит на игроке и лице, получившем удалённый доступ. Руководство TurboGrief не может гарантировать полной безопасности при удалённом подключении и снимает с себя ответственность за последствия добровольно предоставленного доступа.",
    "prog.search": "Поиск программы…",
    "prog.empty": "Ничего не найдено — попробуйте другое название.",
    "card.download": "Скачать программу",
    "t1.title": "Поиск читов - Файлы (Everything)",
    "t1.desc": "Поиск файлов читов с расширениями .exe, .jar, .zip, .rar",
    "t2.title": "Поиск читов - Конфигурации (Everything)",
    "t2.desc": "Поиск конфигурационных файлов читов за последние 14 дней",
    "copy": "Скопировать",
    "copied": "Скопировано",
    "footer": "Список обновляется администрацией. Сомневаетесь в&nbsp;программе — спросите до&nbsp;начала проверки."
  },
  en: {
    "doc.title": "TurboGrief — AnyDesk Check Instructions",
    "nav.home": "Home",
    "nav.news": "News",
    "nav.programs": "Programs",
    "tab.programs": "Programs",
    "tab.teams": "Teams",
    "hero.title": "AnyDesk Check&nbsp;Instructions",
    "links.discord": "Our Discord",
    "links.telegram": "Our Telegram",
    "links.site": "Our website",
    "links.soon": "Soon",
    "news.title": "News",
    "news.update": "Update",
    "news.announce": "Announcement",
    "news.rules": "Rules",
    "news.n1.title": "A separate “News” tab",
    "news.n1.body": "News no longer mixes with the instructions and the program list: pick “News” in the top bar to open it on its own page.",
    "news.n2.title": "Allowed programs list refreshed",
    "news.n2.body": "The administration added new check utilities and updated descriptions. The list lives on the “Programs” tab.",
    "news.n3.title": "Safe check reminder",
    "news.n3.body": "During a check, download files only from void-ceo.github.io/checker and grant moderators basic access only (mouse and keyboard).",
    "prog.title": "Programs for checks",
    "alert.title": "Important warning",
    "alert.body": "The TurboGrief administration strongly advises not to grant moderators or inspectors full access in remote-control programs (AnyDesk, TeamViewer and similar), including remote file copying, changing system settings, unattended access and other advanced permissions. A moderator should be allowed only basic access to interact with the computer (mouse and keyboard). The player must personally supervise every action performed on their computer. During a check, downloading any programs, mods and files, as well as copying and running console / shell commands, is allowed only from void-ceo.github.io/checker. Any other sources are prohibited. Full responsibility for any possible damage to the computer, data or software lies with the player and the person granted remote access. TurboGrief management cannot guarantee complete safety during a remote connection and disclaims liability for the consequences of access granted voluntarily.",
    "prog.search": "Search a program…",
    "prog.empty": "Nothing found — try another name.",
    "card.download": "Download program",
    "t1.title": "Cheat search - Files (Everything)",
    "t1.desc": "Search for cheat files with .exe, .jar, .zip, .rar extensions",
    "t2.title": "Cheat search - Configs (Everything)",
    "t2.desc": "Search for cheat configuration files from the last 14 days",
    "copy": "Copy",
    "copied": "Copied",
    "footer": "The list is updated by the administration. Unsure about a program — ask before the check."
  }
};

/* ===== вкладка «Новости»: карточки (тексты берутся из I18N по ключам) ===== */
const NEWS_ITEMS = [
  { tag: "announce", titleKey: "news.n1.title", bodyKey: "news.n1.body", ruDate: "05.08.2025", enDate: "Aug 5, 2025" },
  { tag: "update", titleKey: "news.n2.title", bodyKey: "news.n2.body", ruDate: "28.07.2025", enDate: "Jul 28, 2025" },
  { tag: "rules", titleKey: "news.n3.title", bodyKey: "news.n3.body", ruDate: "15.07.2025", enDate: "Jul 15, 2025" }
];

/* ===== вкладки «Команды»: копируемые Everything-запросы ===== */
const TEAM_ITEMS = [
  {
    titleKey: "t1.title",
    descKey: "t1.desc",
    query: "ext:.exe;.jar;.zip;.rar regex:(impact|wurst|bleach[-_]?hack|aristois|huzuni|skill[-_]?client|nodus|inertia|ares|sigma|meteor|atomic|zamorozka|liquid[-_]?bounce|nurik|nursultan|celestial|calestial|celka|expensive|neverhook|excellent|wexside|wild|minced|deadcode|akrien|future|dreampool|vape|infinity|squad|no[-_]?rules|konas|zeus[-_]?client|rich[-_]?client|ghost[-_]?client|rusher[-_]?hack|thunder[-_]?hack|moon[-_]?hack|winner|nova|exire|doomsday|nightware|ricardo|extazyy|troxill|arbuz|dauntiblyat|rename[-_]?me[-_]?please|edit[-_]?me|takker|faker|xameleon|fuze[-_]?client|wise[-_]?folder|net[-_]?limiter|feather|delta|eclipse|venus|jex|hakari|hush|hach|rogalik|catlavan|haruka|wissend|fluger|sperma|vortex|newcode|astra|britva|bariton|bot|player|freecam|bedrock|hotbar|swap|chest|gumball|tweak|entity|crystal|lowdurabilityswitcher|optimizer|viabackwards|viaforge|viaproxy|hitbox|elytra|through|mob|auto|place|inventory|x[-_]?ray|clean[-_]?cut|smart[-_]?moving|save[-_]?searcher|world[-_]?downloader|trade[-_]?finder|chorus[-_]?find|inv[-_]?move|chunk[-_]?copy|seed[-_]?cracker|diamond[-_]?sim|forge[-_]?hax|step[-_]?up|client[-_]?commands|camera[-_]?utils|cheat[-_]?utils|universal[-_]?mod|swing[-_]?through[-_]?grass|luminex|wissend|nuclear)"
  },
  {
    titleKey: "t2.title",
    descKey: "t2.desc",
    query: "ext:.txt;.json;.toml;.yml;.cfg;.properties;.ini | folder: dm:last14days regex:(shellbag|bariton|bot|player|freecam|bedrock|hotbar|swap|chest|gumball|tweak|entity|crystal|optimizer|viabackwards|viaforge|viaproxy|hitbox|elytra|through|mob|auto|place|inventory|x[-_]?ray|clean[-_]?cut|smart[-_]?moving|save[-_]?searcher|world[-_]?downloader|trade[-_]?finder|chorus[-_]?find|inv[-_]?move|chunk[-_]?copy|seed[-_]?cracker|diamond[-_]?sim|forge[-_]?hax|step[-_]?up|client[-_]?commands|camera[-_]?utils|cheat[-_]?utils|universal[-_]?mod|swing[-_]?through[-_]?grass)"
  }
];
