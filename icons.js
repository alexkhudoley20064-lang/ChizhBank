/**
 * Векторные SVG-иконки и официальный минималистичный логотип ChizhBank
 * Минималистичный геометрический логотип птицы Чиж (Siskin) и разноцветные иконки для каждого бизнеса.
 */

const SVG_ICONS = {
  // -------------------------------------------------------------------------
  // ОФИЦИАЛЬНЫЙ МИНИМАЛИСТИЧНЫЙ ВЕКТОРНЫЙ ЛОГОТИП CHIZHBANK (ПТИЦА ЧИЖ)
  // Чистый геометрический знак: золотое кольцо, узнаваемый силуэт самца чижа с черной шапочкой,
  // золотой грудкой, изумрудным пером и динамичным хвостом.
  // -------------------------------------------------------------------------
  chizhBirdColor: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="chizhGradBg" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#0f2b1d"/>
          <stop offset="100%" stop-color="#040e08"/>
        </radialGradient>
      </defs>
      <!-- Премиальный круг-эмблема ChizhBank -->
      <circle cx="50" cy="50" r="46" fill="url(#chizhGradBg)" stroke="#ffd700" stroke-width="3"/>

      <!-- Хвост чижа (черный с золотой каемкой) -->
      <polygon points="60,60 88,77 80,82 54,68" fill="#111827"/>
      <polygon points="60,62 82,76 76,79 56,68" fill="#ffd700"/>

      <!-- Тело и золотая грудка птицы -->
      <path d="M38 30 C28 36 24 48 24 60 C24 74 36 82 52 82 C68 82 78 74 78 62 C78 50 68 42 56 36 Z" fill="#ffd700"/>

      <!-- Аэродинамическое крыло -->
      <path d="M46 38 C56 42 66 50 66 66 C66 72 62 76 56 78 C70 76 78 66 78 54 C78 44 68 36 50 34 Z" fill="#111827"/>

      <!-- Изумрудно-зеленый и золотой штрихи на крыле чижа -->
      <path d="M48 46 C56 48 62 56 60 66 C63 60 64 52 60 46 Z" fill="#10b981"/>
      <path d="M52 52 C58 54 62 60 60 68 C63 64 64 58 61 52 Z" fill="#facc15"/>

      <!-- Голова птицы -->
      <circle cx="44" cy="27" r="15" fill="#ffd700"/>

      <!-- Черная шапочка самца чижа -->
      <path d="M32 23 C34 15 44 11 52 13 C58 15 60 19 60 27 C54 21 44 19 32 23 Z" fill="#111827"/>

      <!-- Острый геометрический клюв -->
      <polygon points="31,23 13,28 30,34" fill="#fef08a" stroke="#d97706" stroke-width="0.8"/>

      <!-- Глаз -->
      <circle cx="40" cy="24" r="3.2" fill="#111827"/>
      <circle cx="39" cy="23" r="1.1" fill="#ffffff"/>
    </svg>
  `,

  // Белая монохромная версия для световых вывесок
  chizhBirdWhite: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" stroke="#ffffff" stroke-width="3"/>
      <polygon points="60,60 88,77 80,82 54,68" fill="#ffffff"/>
      <path d="M38 30 C28 36 24 48 24 60 C24 74 36 82 52 82 C68 82 78 74 78 62 C78 50 68 42 56 36 Z" fill="#ffffff"/>
      <path d="M46 38 C56 42 66 50 66 66 C66 72 62 76 56 78 C70 76 78 66 78 54 C78 44 68 36 50 34 Z" fill="rgba(0,0,0,0.35)"/>
      <circle cx="44" cy="27" r="15" fill="#ffffff"/>
      <path d="M32 23 C34 15 44 11 52 13 C58 15 60 19 60 27 C54 21 44 19 32 23 Z" fill="rgba(0,0,0,0.6)"/>
      <polygon points="31,23 13,28 30,34" fill="#ffffff"/>
      <circle cx="40" cy="24" r="3" fill="#000000"/>
      <circle cx="39" cy="23" r="1" fill="#ffffff"/>
    </svg>
  `,

  // Золотая версия для VIP и Кибер-голограммы
  chizhBirdGold: `
    <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" stroke="#ffd700" stroke-width="3.5" fill="rgba(255, 215, 0, 0.12)"/>
      <polygon points="60,60 88,77 80,82 54,68" fill="#ffd700"/>
      <path d="M38 30 C28 36 24 48 24 60 C24 74 36 82 52 82 C68 82 78 74 78 62 C78 50 68 42 56 36 Z" fill="#ffd700"/>
      <path d="M46 38 C56 42 66 50 66 66 C66 72 62 76 56 78 C70 76 78 66 78 54 C78 44 68 36 50 34 Z" fill="#b45309"/>
      <circle cx="44" cy="27" r="15" fill="#ffd700"/>
      <path d="M32 23 C34 15 44 11 52 13 C58 15 60 19 60 27 C54 21 44 19 32 23 Z" fill="#78350f"/>
      <polygon points="31,23 13,28 30,34" fill="#fef08a"/>
      <circle cx="40" cy="24" r="3" fill="#000000"/>
      <circle cx="39" cy="23" r="1" fill="#ffffff"/>
    </svg>
  `,

  // -------------------------------------------------------------------------
  // ОБЩИЕ И НАВИГАЦИОННЫЕ ИКОНКИ
  // -------------------------------------------------------------------------
  atm: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="2" width="18" height="20" rx="3" fill="rgba(0, 242, 254, 0.1)"/>
      <rect x="6" y="5" width="12" height="6" rx="1" fill="#021a24" stroke="currentColor" stroke-width="1.5"/>
      <line x1="6" y1="14" x2="11" y2="14" stroke-width="2"/>
      <line x1="14" y1="14" x2="18" y2="14" stroke="#00ff88" stroke-width="2"/>
      <rect x="6" y="17" width="12" height="2" rx="1" fill="currentColor"/>
    </svg>
  `,
  upgrade: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="rgba(245, 158, 11, 0.2)"/>
    </svg>
  `,
  business: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 21h18M3 10h18M5 10v11M9 10v11M15 10v11M19 10v11M12 2l10 5H2l10-5z" fill="rgba(0, 242, 254, 0.08)"/>
    </svg>
  `,
  stats: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="statBarGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
        <linearGradient id="statBarGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#34d399"/>
          <stop offset="100%" stop-color="#059669"/>
        </linearGradient>
        <linearGradient id="statBarGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#a855f7"/>
          <stop offset="100%" stop-color="#7e22ce"/>
        </linearGradient>
      </defs>
      <line x1="3" y1="20" x2="21" y2="20" stroke="#64748b" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="4" y="13" width="3.5" height="7" rx="1" fill="url(#statBarGrad1)"/>
      <rect x="10.25" y="8" width="3.5" height="12" rx="1" fill="url(#statBarGrad2)"/>
      <rect x="16.5" y="4" width="3.5" height="16" rx="1" fill="url(#statBarGrad3)"/>
      <path d="M4 11L10.5 6L14 8.5L20 3M20 3H16M20 3V7" stroke="#22c55e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  user: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  `,
  edit: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </svg>
  `,
  soundOn: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
    </svg>
  `,
  soundOff: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor"/>
      <line x1="23" y1="9" x2="17" y2="15"/>
      <line x1="17" y1="9" x2="23" y2="15"/>
    </svg>
  `,
  flash: `
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  `,

  // -------------------------------------------------------------------------
  // ИКОНКИ УЛУЧШЕНИЙ
  // -------------------------------------------------------------------------
  tapPower: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#00f2fe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" fill="rgba(0, 242, 254, 0.15)"/>
      <circle cx="18" cy="4" r="3" fill="#00ff88" stroke="#00ff88"/>
    </svg>
  `,
  energyMax: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="1" y="6" width="18" height="12" rx="2" fill="rgba(245, 158, 11, 0.15)"/>
      <path d="M23 11v2"/>
      <polygon points="10 8 7 13 11 13 10 16 14 11 10 11 10 8" fill="#f59e0b" stroke="#f59e0b"/>
    </svg>
  `,
  recharge: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="9" fill="rgba(16, 185, 129, 0.15)"/>
      <polyline points="12 6 12 12 16 14"/>
      <path d="M21 12a9 9 0 0 0-9-9" stroke="#34d399" stroke-width="2.5"/>
    </svg>
  `,
  critLuck: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#ff3366" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="4" fill="rgba(255, 51, 102, 0.15)"/>
      <path d="M6 8h4l-2 8M11 8h4l-2 8M16 8h4l-2 8" stroke="#ff3366" stroke-width="2.5"/>
    </svg>
  `,
  crown: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#ffd700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 4l3 12h14l3-12-5 5-5-5-5 5-5-5z" fill="rgba(255, 215, 0, 0.3)" stroke="#ffd700"/>
      <line x1="2" y1="20" x2="22" y2="20" stroke="#ffd700" stroke-width="2"/>
    </svg>
  `,

  // -------------------------------------------------------------------------
  // РАЗНОЦВЕТНЫЕ ИКОНКИ БИЗНЕСОВ
  // -------------------------------------------------------------------------
  coffee: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" fill="rgba(245, 158, 11, 0.25)"/>
      <line x1="6" y1="1" x2="6" y2="4" stroke="#d97706"/>
      <line x1="10" y1="1" x2="10" y2="4" stroke="#d97706"/>
      <line x1="14" y1="1" x2="14" y2="4" stroke="#d97706"/>
    </svg>
  `,
  atmNetwork: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#00f2fe" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="3" width="9" height="13" rx="2" fill="rgba(0, 242, 254, 0.2)"/>
      <rect x="13" y="8" width="9" height="13" rx="2" fill="rgba(0, 242, 254, 0.3)"/>
      <line x1="4" y1="7" x2="9" y2="7"/>
      <line x1="15" y1="12" x2="20" y2="12"/>
      <line x1="11" y1="10" x2="13" y2="10" stroke="#38bdf8" stroke-width="2"/>
    </svg>
  `,
  truck: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="1" y="4" width="15" height="12" rx="1" fill="rgba(16, 185, 129, 0.25)"/>
      <path d="M16 8h4l3 3v5h-7V8z" fill="rgba(16, 185, 129, 0.25)"/>
      <circle cx="5.5" cy="18.5" r="2.5" fill="#047857" stroke="#10b981"/>
      <circle cx="18.5" cy="18.5" r="2.5" fill="#047857" stroke="#10b981"/>
      <line x1="6" y1="10" x2="10" y2="10" stroke="#34d399" stroke-width="2"/>
    </svg>
  `,
  mobileBank: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="3" fill="rgba(139, 92, 246, 0.25)"/>
      <line x1="12" y1="18" x2="12.01" y2="18" stroke="#c084fc" stroke-width="3"/>
      <rect x="8" y="6" width="8" height="5" rx="1" fill="#a855f7" stroke="none"/>
    </svg>
  `,
  branch: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" fill="rgba(59, 130, 246, 0.2)"/>
      <line x1="8" y1="7" x2="8" y2="17" stroke="#60a5fa"/>
      <line x1="12" y1="7" x2="12" y2="17" stroke="#60a5fa"/>
      <line x1="16" y1="7" x2="16" y2="17" stroke="#60a5fa"/>
      <line x1="3" y1="7" x2="21" y2="7"/>
      <line x1="3" y1="17" x2="21" y2="17"/>
    </svg>
  `,
  crypto: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10" fill="rgba(249, 115, 22, 0.25)" stroke="#fb923c"/>
      <path d="M10 7h4a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-4V7zm0 4h4.5a2 2 0 0 1 2 2 2 2 0 0 1-2 2H10v-4z" stroke="#fdba74"/>
      <line x1="12" y1="5" x2="12" y2="7" stroke="#f97316"/>
      <line x1="12" y1="17" x2="12" y2="19" stroke="#f97316"/>
    </svg>
  `,
  centralBank: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#ffd700" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polygon points="12 2 2 7 22 7 12 2" fill="rgba(255, 215, 0, 0.3)" stroke="#ffd700"/>
      <rect x="3" y="19" width="18" height="3" fill="#f59e0b"/>
      <line x1="5" y1="7" x2="5" y2="19" stroke="#ffd700"/>
      <line x1="9" y1="7" x2="9" y2="19" stroke="#ffd700"/>
      <line x1="15" y1="7" x2="15" y2="19" stroke="#ffd700"/>
      <line x1="19" y1="7" x2="19" y2="19" stroke="#ffd700"/>
      <circle cx="12" cy="13" r="2" fill="#ffd700"/>
    </svg>
  `,
  satellite: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#ec4899" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M13 7l4-4 4 4-4 4" stroke="#f472b6"/>
      <path d="M7 13l-4 4 4 4 4-4" stroke="#f472b6"/>
      <rect x="9" y="9" width="6" height="6" rx="1" fill="#ec4899" stroke="#f472b6"/>
      <line x1="12" y1="2" x2="12" y2="6"/>
      <line x1="18" y1="12" x2="22" y2="12"/>
      <line x1="2" y1="12" x2="6" y2="12"/>
      <line x1="12" y1="18" x2="12" y2="22"/>
    </svg>
  `,
  briefcase: `
    <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" fill="rgba(16, 185, 129, 0.2)"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  `,

  // -------------------------------------------------------------------------
  // АУТЕНТИЧНЫЕ ИКОНКИ В СТИЛЕ APPLE SF SYMBOLS
  // Точная геометрия, идеальные пропорции и безупречное выравнивание
  // -------------------------------------------------------------------------
  appleMuseum: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.5L2 7.8V9.5H22V7.8L12 2.5Z"/>
      <rect x="3.5" y="10.8" width="2.8" height="7.8" rx="0.8"/>
      <rect x="8.6" y="10.8" width="2.8" height="7.8" rx="0.8"/>
      <rect x="13.6" y="10.8" width="2.8" height="7.8" rx="0.8"/>
      <rect x="18.7" y="10.8" width="2.8" height="7.8" rx="0.8"/>
      <path d="M1.5 19.5H22.5V21.5H1.5V19.5Z"/>
    </svg>
  `,
  appleSync: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21.5 2v6h-6"/>
      <path d="M21.5 8A9 9 0 0 0 4.8 6.5L2.5 8.8"/>
      <path d="M2.5 22v-6h6"/>
      <path d="M2.5 16a9 9 0 0 0 16.7 1.5l2.3-2.3"/>
    </svg>
  `,
  appleTrophy: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="trophyGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="50%" stop-color="#eab308"/>
          <stop offset="100%" stop-color="#ca8a04"/>
        </linearGradient>
        <linearGradient id="trophyBaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#eab308"/>
          <stop offset="100%" stop-color="#854d0e"/>
        </linearGradient>
      </defs>
      <path d="M4 6C4 8.5 5.5 10.5 7.5 11" stroke="#facc15" stroke-width="2" stroke-linecap="round"/>
      <path d="M20 6C20 8.5 18.5 10.5 16.5 11" stroke="#facc15" stroke-width="2" stroke-linecap="round"/>
      <path d="M6 4H18V10C18 13.3137 15.3137 16 12 16C8.68629 16 6 13.3137 6 10V4Z" fill="url(#trophyGoldGrad)" stroke="#fef08a" stroke-width="1"/>
      <polygon points="12,7 13,9.5 15.5,9.5 13.5,11.2 14.2,13.5 12,12 9.8,13.5 10.5,11.2 8.5,9.5 11,9.5" fill="#ffffff" opacity="0.95"/>
      <path d="M10.5 16H13.5V18.5H10.5V16Z" fill="#b45309"/>
      <path d="M7 19H17C17.5523 19 18 19.4477 18 20V21H6V20C6 19.4477 6.44772 19 7 19Z" fill="url(#trophyBaseGrad)" stroke="#fef08a" stroke-width="0.8"/>
    </svg>
  `,
  appleLock: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 9V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V9H5.5C4.67157 9 4 9.67157 4 10.5V20.5C4 21.3284 4.67157 22 5.5 22H18.5C19.3284 22 20 21.3284 20 20.5V10.5C20 9.67157 19.3284 9 18.5 9H17ZM9.2 7C9.2 5.4536 10.4536 4.2 12 4.2C13.5464 4.2 14.8 5.4536 14.8 7V9H9.2V7ZM12 17C11.1716 17 10.5 16.3284 10.5 15.5C10.5 14.6716 11.1716 14 12 14C12.8284 14 13.5 14.6716 13.5 15.5C13.5 16.3284 12.8284 17 12 17Z"/>
    </svg>
  `,
  appleLockOpen: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17 9V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7H9.2C9.2 5.4536 10.4536 4.2 12 4.2C13.5464 4.2 14.8 5.4536 14.8 7V9H5.5C4.67157 9 4 9.67157 4 10.5V20.5C4 21.3284 4.67157 22 5.5 22H18.5C19.3284 22 20 21.3284 20 20.5V10.5C20 9.67157 19.3284 9 18.5 9H17ZM12 17C11.1716 17 10.5 16.3284 10.5 15.5C10.5 14.6716 11.1716 14 12 14C12.8284 14 13.5 14.6716 13.5 15.5C13.5 16.3284 12.8284 17 12 17Z"/>
    </svg>
  `,
  appleStar: `
    <svg viewBox="0 0 24 24" fill="#ffd700">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
    </svg>
  `,
  appleCheckCircle: `
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#10b981"/>
      <path d="M8 12.2L10.8 15L16.2 9.5" stroke="#ffffff" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `,
  appleBolt: `
    <svg viewBox="0 0 24 24" fill="#ffd700">
      <path d="M13.5 1.5L3.5 13.5H12L10.5 22.5L20.5 10.5H12L13.5 1.5Z"/>
    </svg>
  `,
  appleMedal1: `
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="linear-gradient(135deg, #ffd700 0%, #d97706 100%)" stroke="#fef08a" stroke-width="1.2"/>
      <text x="12" y="16" fill="#1e1b4b" font-size="12" font-weight="900" font-family="-apple-system, sans-serif" text-anchor="middle">1</text>
    </svg>
  `,
  appleMedal2: `
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="linear-gradient(135deg, #e2e8f0 0%, #94a3b8 100%)" stroke="#ffffff" stroke-width="1.2"/>
      <text x="12" y="16" fill="#0f172a" font-size="12" font-weight="900" font-family="-apple-system, sans-serif" text-anchor="middle">2</text>
    </svg>
  `,
  appleMedal3: `
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="linear-gradient(135deg, #f59e0b 0%, #b45309 100%)" stroke="#fde68a" stroke-width="1.2"/>
      <text x="12" y="16" fill="#451a03" font-size="12" font-weight="900" font-family="-apple-system, sans-serif" text-anchor="middle">3</text>
    </svg>
  `,

  // -------------------------------------------------------------------------
  // КАСТОМНЫЕ ВЕКТОРНЫЕ ИКОНКИ ДЛЯ ЭКРАНОВ БАНКОМАТОВ (НЕ СИСТЕМНЫЕ ЭМОДЗИ)
  // -------------------------------------------------------------------------
  servicePhone: `
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="5.5" y="2" width="13" height="20" rx="3.5" fill="#0284c7" stroke="#38bdf8" stroke-width="1.5"/>
      <rect x="7.5" y="5" width="9" height="13" rx="1.5" fill="#e0f2fe"/>
      <circle cx="12" cy="3.5" r="0.75" fill="#38bdf8"/>
      <line x1="10" y1="19.5" x2="14" y2="19.5" stroke="#38bdf8" stroke-width="1.2" stroke-linecap="round"/>
    </svg>
  `,
  serviceCar: `
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M4 14L6.5 7.5C6.8 6.6 7.6 6 8.6 6H15.4C16.4 6 17.2 6.6 17.5 7.5L20 14V18C20 18.6 19.6 19 19 19H18C17.4 19 17 18.6 17 18V17H7V18C7 18.6 6.6 19 6 19H5C4.4 19 4 18.6 4 18V14Z" fill="#ef4444" stroke="#dc2626" stroke-width="1.2"/>
      <path d="M6.8 11.5L8 8H16L17.2 11.5H6.8Z" fill="#fee2e2"/>
      <circle cx="7.5" cy="14.5" r="1.5" fill="#fef08a"/>
      <circle cx="16.5" cy="14.5" r="1.5" fill="#fef08a"/>
    </svg>
  `,
  serviceTv: `
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="2.5" y="4" width="19" height="13" rx="2" fill="#334155" stroke="#64748b" stroke-width="1.5"/>
      <rect x="4.5" y="6" width="15" height="9" rx="1" fill="#38bdf8"/>
      <path d="M9 20H15M12 17V20" stroke="#94a3b8" stroke-width="1.8" stroke-linecap="round"/>
      <circle cx="18" cy="15.5" r="0.6" fill="#00ff88"/>
    </svg>
  `,
  serviceDoc: `
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M5 4C5 2.89543 5.89543 2 7 2H14.5L19 6.5V20C19 21.1046 18.1046 22 17 22H7C5.89543 22 5 21.1046 5 20V4Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <path d="M14 2V7H19" fill="#e2e8f0"/>
      <line x1="8" y1="10" x2="16" y2="10" stroke="#0284c7" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="8" y1="13.5" x2="16" y2="13.5" stroke="#64748b" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="8" y1="17" x2="13" y2="17" stroke="#64748b" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  `,
  serviceCard: `
    <svg viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4.5" width="20" height="15" rx="2.5" fill="linear-gradient(135deg, #1e293b, #0f172a)" stroke="#475569" stroke-width="1.2"/>
      <rect x="2" y="8" width="20" height="3.5" fill="#f59e0b"/>
      <rect x="4.5" y="13.5" width="4.5" height="3" rx="0.5" fill="#ffd700"/>
      <circle cx="17.5" cy="15" r="2" fill="#ef4444" opacity="0.85"/>
      <circle cx="15.5" cy="15" r="2" fill="#f59e0b" opacity="0.85"/>
    </svg>
  `,
  serviceNfc: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
      <path d="M5 12.5C5 8.35786 8.35786 5 12.5 5"/>
      <path d="M8 12.5C8 10.0147 10.0147 8 12.5 8"/>
      <path d="M11 12.5C11 11.6716 11.6716 11 12.5 11"/>
    </svg>
  `,
  cashBill: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <rect x="2" y="5" width="20" height="14" rx="2" fill="#065f46" stroke="#10b981" stroke-width="1.4"/>
      <circle cx="12" cy="12" r="4" fill="#047857" stroke="#34d399" stroke-width="1"/>
      <text x="12" y="15" fill="#ecfdf5" font-size="9" font-weight="900" font-family="-apple-system, sans-serif" text-anchor="middle">$</text>
    </svg>
  `,

  // -------------------------------------------------------------------------
  // КАСТОМНАЯ АВТОРСКАЯ ИКОНКА КОМБО: ПЛАМЕННАЯ МОЛНИЯ ТУРБО-МНОЖИТЕЛЯ
  // -------------------------------------------------------------------------
  comboIcon: `
    <svg viewBox="0 0 32 32" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="comboFlameGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ef4444"/>
          <stop offset="45%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#ffd700"/>
        </linearGradient>
        <linearGradient id="comboBoltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="40%" stop-color="#38bdf8"/>
          <stop offset="100%" stop-color="#0284c7"/>
        </linearGradient>
        <filter id="comboGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feComposite in="SourceGraphic" in2="blur" operator="over"/>
        </filter>
      </defs>
      <!-- Заднее динамичное пламя турбо-комбо -->
      <path d="M16 1.5 C16 1.5 20.5 7.5 20.5 13 C20.5 14.8 19.8 16.2 18.8 17.2 C21.5 16.2 24.5 19.2 24.5 23.5 C24.5 28.5 19.8 31 15 31 C9.5 31 5.5 26.8 5.5 21.5 C5.5 15.5 10 10.5 12 7.5 C12 10.5 13.5 12.5 14 12.5 C14 9.5 16 1.5 16 1.5 Z" fill="url(#comboFlameGrad)"/>
      <!-- Скоростные импульсные дуги -->
      <path d="M4 13.5 C3 16 3 19.5 4.5 22.5" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/>
      <path d="M2.5 17.5 C2.2 19 2.5 21 3.2 23" stroke="#ffd700" stroke-width="1.5" stroke-linecap="round"/>
      <!-- Центральная электрическая молния множителя -->
      <path d="M17.5 4.5 L9.5 16.5 H16 L13.5 27.5 L23.5 14.5 H17 L19.5 4.5 Z" fill="url(#comboBoltGrad)" stroke="#ffffff" stroke-width="0.9" stroke-linejoin="round" filter="url(#comboGlow)"/>
      <!-- Искры энергии -->
      <circle cx="23.5" cy="8.5" r="1.5" fill="#ffd700"/>
      <circle cx="8.5" cy="11.5" r="1" fill="#38bdf8"/>
    </svg>
  `,

  // -------------------------------------------------------------------------
  // ЛЕТАЮЩИЕ БАНКОВСКИЕ КАРТЫ CHIZHBANK (ТОЧНО ПО ФОТО ПОЛЬЗОВАТЕЛЯ)
  // Бронзовая, Серебряная, Золотая и Алмазная карты с брендом packet
  // -------------------------------------------------------------------------
  cardBronze: `
    <svg viewBox="0 0 320 200" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bronzeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#b6733a"/>
          <stop offset="50%" stop-color="#9d5b28"/>
          <stop offset="100%" stop-color="#80451a"/>
        </linearGradient>
        <linearGradient id="glareGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.45)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.02)"/>
        </linearGradient>
      </defs>
      <!-- Основа карты с темным кантом -->
      <rect x="2" y="2" width="316" height="196" rx="14" fill="url(#bronzeGrad)" stroke="#5c3010" stroke-width="4"/>
      <rect x="6" y="6" width="308" height="188" rx="11" stroke="#cca175" stroke-width="1.5" opacity="0.6"/>

      <!-- Диагональные световые полосы блика -->
      <polygon points="120,2 180,2 90,198 30,198" fill="url(#glareGrad)" opacity="0.35"/>
      <polygon points="185,2 270,2 175,198 90,198" fill="url(#glareGrad)" opacity="0.5"/>
      <polygon points="275,2 310,2 215,198 180,198" fill="url(#glareGrad)" opacity="0.3"/>

      <!-- Контактный золотой EMV-чип -->
      <rect x="32" y="65" width="50" height="44" rx="6" fill="#eab308" stroke="#a16207" stroke-width="2"/>
      <path d="M48 65v44 M66 65v44 M32 87h50" stroke="#a16207" stroke-width="1.5"/>

      <!-- Центральная плашка уровня BRONZE -->
      <rect x="120" y="58" width="80" height="78" rx="12" fill="#c78c56" stroke="#5c3010" stroke-width="1.5"/>
      <circle cx="160" cy="85" r="18" fill="#0f2b1d" stroke="#facc15" stroke-width="2"/>
      <!-- Птица Чиж на эмблеме -->
      <path d="M152 79c-3 2-4 6-4 9 0 5 4 8 9 8 5 0 8-3 8-7 0-4-3-6-7-8z" fill="#ffd700"/>
      <polygon points="159,88 168,93 165,95 157,90" fill="#111827"/>
      <circle cx="155" cy="77" r="4.5" fill="#ffd700"/>
      <polygon points="152,76 146,78 152,80" fill="#fef08a"/>
      <circle cx="154" cy="77" r="1" fill="#000"/>
      <!-- Надпись BRONZE -->
      <text x="160" y="124" fill="#3b1f0c" font-size="12" font-weight="900" font-family="-apple-system, sans-serif" text-anchor="middle" letter-spacing="0.5">BRONZE</text>

      <!-- Бесконтактные дуги NFC ))) -->
      <path d="M280 72c5 4 8 10 8 16s-3 12-8 16 M288 66c7 6 12 14 12 22s-5 16-12 22 M296 60c9 7 15 18 15 28s-6 21-15 28" stroke="#4a260d" stroke-width="3" stroke-linecap="round"/>

      <!-- Логотип packet -->
      <text x="304" y="180" fill="#3b1f0c" font-size="28" font-style="italic" font-weight="900" font-family="-apple-system, sans-serif" text-anchor="end">packet</text>
    </svg>
  `,

  cardSilver: `
    <svg viewBox="0 0 320 200" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#e2e8f0"/>
          <stop offset="45%" stop-color="#cbd5e1"/>
          <stop offset="100%" stop-color="#94a3b8"/>
        </linearGradient>
        <linearGradient id="silverGlare" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.75)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.05)"/>
        </linearGradient>
      </defs>
      <!-- Основа карты с темным кантом -->
      <rect x="2" y="2" width="316" height="196" rx="14" fill="url(#silverGrad)" stroke="#475569" stroke-width="4"/>
      <rect x="6" y="6" width="308" height="188" rx="11" stroke="#ffffff" stroke-width="1.5" opacity="0.8"/>

      <!-- Диагональные световые полосы хрома -->
      <polygon points="120,2 180,2 90,198 30,198" fill="url(#silverGlare)" opacity="0.4"/>
      <polygon points="185,2 270,2 175,198 90,198" fill="url(#silverGlare)" opacity="0.6"/>
      <polygon points="275,2 310,2 215,198 180,198" fill="url(#silverGlare)" opacity="0.4"/>

      <!-- Контактный платиновый EMV-чип -->
      <rect x="32" y="65" width="50" height="44" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
      <path d="M48 65v44 M66 65v44 M32 87h50" stroke="#64748b" stroke-width="1.5"/>

      <!-- Центральная плашка SILVER -->
      <rect x="120" y="58" width="80" height="78" rx="12" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
      <circle cx="160" cy="85" r="18" fill="#0f2b1d" stroke="#facc15" stroke-width="2"/>
      <path d="M152 79c-3 2-4 6-4 9 0 5 4 8 9 8 5 0 8-3 8-7 0-4-3-6-7-8z" fill="#ffd700"/>
      <polygon points="159,88 168,93 165,95 157,90" fill="#111827"/>
      <circle cx="155" cy="77" r="4.5" fill="#ffd700"/>
      <polygon points="152,76 146,78 152,80" fill="#fef08a"/>
      <circle cx="154" cy="77" r="1" fill="#000"/>
      <text x="160" y="124" fill="#334155" font-size="12" font-weight="900" font-family="-apple-system, sans-serif" text-anchor="middle" letter-spacing="0.5">SILVER</text>

      <!-- Дуги NFC ))) -->
      <path d="M280 72c5 4 8 10 8 16s-3 12-8 16 M288 66c7 6 12 14 12 22s-5 16-12 22 M296 60c9 7 15 18 15 28s-6 21-15 28" stroke="#334155" stroke-width="3" stroke-linecap="round"/>

      <!-- Логотип packet -->
      <text x="304" y="180" fill="#1e293b" font-size="28" font-style="italic" font-weight="900" font-family="-apple-system, sans-serif" text-anchor="end">packet</text>
    </svg>
  `,

  cardGold: `
    <svg viewBox="0 0 320 200" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goldCardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="40%" stop-color="#eab308"/>
          <stop offset="100%" stop-color="#ca8a04"/>
        </linearGradient>
        <linearGradient id="goldGlare" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="rgba(255,255,255,0.7)"/>
          <stop offset="100%" stop-color="rgba(255,255,255,0.08)"/>
        </linearGradient>
      </defs>
      <!-- Основа карты с темным золотым кантом -->
      <rect x="2" y="2" width="316" height="196" rx="14" fill="url(#goldCardGrad)" stroke="#854d0e" stroke-width="4"/>
      <rect x="6" y="6" width="308" height="188" rx="11" stroke="#fef08a" stroke-width="1.5" opacity="0.9"/>

      <!-- Диагональные световые полосы золотого сияния -->
      <polygon points="120,2 180,2 90,198 30,198" fill="url(#goldGlare)" opacity="0.45"/>
      <polygon points="185,2 270,2 175,198 90,198" fill="url(#goldGlare)" opacity="0.65"/>
      <polygon points="275,2 310,2 215,198 180,198" fill="url(#goldGlare)" opacity="0.45"/>

      <!-- Золотой EMV-чип -->
      <rect x="32" y="65" width="50" height="44" rx="6" fill="#fef08a" stroke="#854d0e" stroke-width="2"/>
      <path d="M48 65v44 M66 65v44 M32 87h50" stroke="#854d0e" stroke-width="1.5"/>

      <!-- Центральная плашка GOLD -->
      <rect x="120" y="58" width="80" height="78" rx="12" fill="#fde68a" stroke="#854d0e" stroke-width="1.5"/>
      <circle cx="160" cy="85" r="18" fill="#0f2b1d" stroke="#fef08a" stroke-width="2"/>
      <path d="M152 79c-3 2-4 6-4 9 0 5 4 8 9 8 5 0 8-3 8-7 0-4-3-6-7-8z" fill="#ffd700"/>
      <polygon points="159,88 168,93 165,95 157,90" fill="#111827"/>
      <circle cx="155" cy="77" r="4.5" fill="#ffd700"/>
      <polygon points="152,76 146,78 152,80" fill="#fef08a"/>
      <circle cx="154" cy="77" r="1" fill="#000"/>
      <text x="160" y="124" fill="#713f12" font-size="13" font-weight="900" font-family="-apple-system, sans-serif" text-anchor="middle" letter-spacing="0.5">GOLD</text>

      <!-- Дуги NFC ))) -->
      <path d="M280 72c5 4 8 10 8 16s-3 12-8 16 M288 66c7 6 12 14 12 22s-5 16-12 22 M296 60c9 7 15 18 15 28s-6 21-15 28" stroke="#713f12" stroke-width="3" stroke-linecap="round"/>

      <!-- Логотип packet -->
      <text x="304" y="180" fill="#451a03" font-size="28" font-style="italic" font-weight="900" font-family="-apple-system, sans-serif" text-anchor="end">packet</text>
    </svg>
  `,

  cardDiamond: `
    <svg viewBox="0 0 320 200" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="diamondBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#eff6ff"/>
          <stop offset="35%" stop-color="#bfdbfe"/>
          <stop offset="70%" stop-color="#93c5fd"/>
          <stop offset="100%" stop-color="#60a5fa"/>
        </linearGradient>
      </defs>
      <!-- Основа карты -->
      <rect x="2" y="2" width="316" height="196" rx="14" fill="url(#diamondBg)" stroke="#1e3a8a" stroke-width="4"/>
      <rect x="6" y="6" width="308" height="188" rx="11" stroke="#ffffff" stroke-width="1.5" opacity="0.9"/>

      <!-- Кристаллические граненые полигоны алмаза -->
      <polygon points="10,10 90,40 40,110" fill="#ffffff" opacity="0.3"/>
      <polygon points="90,40 180,10 140,80" fill="#dbeafe" opacity="0.4"/>
      <polygon points="180,10 260,30 220,100" fill="#ffffff" opacity="0.35"/>
      <polygon points="260,30 310,10 290,90" fill="#bfdbfe" opacity="0.3"/>
      <polygon points="40,110 140,80 100,160" fill="#93c5fd" opacity="0.35"/>
      <polygon points="140,80 220,100 180,180" fill="#ffffff" opacity="0.45"/>
      <polygon points="220,100 290,90 270,170" fill="#60a5fa" opacity="0.3"/>
      <polygon points="100,160 180,180 140,195" fill="#3b82f6" opacity="0.25"/>

      <!-- Сверкающие 4-лучевые звезды-блики алмаза -->
      <g fill="#ffffff">
        <path d="M42 40 L44 32 L46 40 L54 42 L46 44 L44 52 L42 44 L34 42 Z"/>
        <path d="M260 55 L262 45 L264 55 L274 57 L264 59 L262 69 L260 59 L250 57 Z"/>
        <path d="M95 130 L97 122 L99 130 L107 132 L99 134 L97 142 L95 134 L87 132 Z"/>
        <path d="M240 140 L242 134 L244 140 L250 142 L244 144 L242 150 L240 144 L234 142 Z"/>
      </g>

      <!-- Диагональный стеклянный луч -->
      <polygon points="160,2 245,2 150,198 65,198" fill="rgba(255,255,255,0.55)"/>

      <!-- Серебристо-алмазный EMV-чип -->
      <rect x="32" y="65" width="50" height="44" rx="6" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <path d="M48 65v44 M66 65v44 M32 87h50" stroke="#334155" stroke-width="1.5"/>

      <!-- Центральная плашка DIAMOND -->
      <rect x="120" y="58" width="80" height="78" rx="12" fill="#dbeafe" stroke="#1e3a8a" stroke-width="1.5"/>
      <circle cx="160" cy="85" r="18" fill="#0f2b1d" stroke="#facc15" stroke-width="2"/>
      <path d="M152 79c-3 2-4 6-4 9 0 5 4 8 9 8 5 0 8-3 8-7 0-4-3-6-7-8z" fill="#ffd700"/>
      <polygon points="159,88 168,93 165,95 157,90" fill="#111827"/>
      <circle cx="155" cy="77" r="4.5" fill="#ffd700"/>
      <polygon points="152,76 146,78 152,80" fill="#fef08a"/>
      <circle cx="154" cy="77" r="1" fill="#000"/>
      <text x="160" y="124" fill="#0f172a" font-size="11" font-weight="900" font-family="-apple-system, sans-serif" text-anchor="middle" letter-spacing="0.5">DIAMOND</text>

      <!-- Дуги NFC ))) -->
      <path d="M280 72c5 4 8 10 8 16s-3 12-8 16 M288 66c7 6 12 14 12 22s-5 16-12 22 M296 60c9 7 15 18 15 28s-6 21-15 28" stroke="#0f172a" stroke-width="3" stroke-linecap="round"/>

      <!-- Логотип packet -->
      <text x="304" y="180" fill="#0f172a" font-size="28" font-style="italic" font-weight="900" font-family="-apple-system, sans-serif" text-anchor="end">packet</text>
    </svg>
  `,

  // Иконка переключения Дня (солнце)
  sunIcon: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="5" fill="#fef08a"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  `,

  // Иконка переключения Ночи (месяц)
  moonIcon: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="#38bdf8" stroke="#0284c7" stroke-width="1.5">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      <circle cx="17" cy="6" r="1" fill="#fff"/>
      <circle cx="20" cy="9" r="0.7" fill="#fff"/>
    </svg>
  `,

  // Иконка Биржи / IPO
  ipoIcon: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <path d="M3 20h18" stroke="#10b981" stroke-width="2" stroke-linecap="round"/>
      <path d="M5 16l5-5 4 4 6-7" stroke="#ffd700" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <polygon points="17 8 20 8 20 11" fill="#ffd700"/>
      <circle cx="10" cy="11" r="2" fill="#10b981"/>
    </svg>
  `,

  // Иконка чека
  receiptIcon: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z" fill="#f8fafc" stroke="#cbd5e1"/>
      <line x1="8" y1="7" x2="16" y2="7" stroke="#334155"/>
      <line x1="8" y1="11" x2="16" y2="11" stroke="#334155"/>
      <line x1="8" y1="15" x2="13" y2="15" stroke="#334155"/>
    </svg>
  `,

  // Иконка ножниц для отрыва чека
  appleScissors: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="6" cy="6" r="3"/>
      <circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/>
      <line x1="14.47" y1="14.48" x2="20" y2="20"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  `,

  // Стрелочка для аккордеона / раскрывающихся списков
  appleChevronDown: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  `,

  // Иконка галочки Apple
  appleCheck: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  `,

  // Иконка отмены для клавиатуры PIN
  keypadCancel: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `,

  // Иконка подтверждения для клавиатуры PIN
  keypadOk: `
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="#ffffff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  `
};

function getIconSvg(name, extraClass = "") {
  const svg = SVG_ICONS[name] || "";
  return `<span class="icon-svg-wrapper ${extraClass}">${svg}</span>`;
}

// ---------------------------------------------------------------------------
// 10 НЕОНОВЫХ КОЛЛЕКЦИОННЫХ АВАТАРОВ БАНКИРА CHIZHBANK
// Полное соответствие фирменному визуалу: неоновые кольца, стилизованный чиж
// ---------------------------------------------------------------------------
const CHIZH_AVATARS = [
  {
    id: "avatar_1",
    name: "Серебряный Титан",
    neonColor: "#ffffff",
    glowColor: "rgba(255, 255, 255, 0.95)",
    discColor: "#262626",
    innerRing: "#52525b",
    bodyColor: "#e4e4e7",
    wingColor: "#71717a",
    crestColor: "#ffffff",
    beakColor: "#d4d4d8",
    wingAccent: "#a1a1aa",
    eyeColor: "#18181b"
  },
  {
    id: "avatar_2",
    name: "Классический Чиж",
    neonColor: "#ef4444",
    glowColor: "rgba(239, 68, 68, 0.95)",
    discColor: "#172554",
    innerRing: "#1e3a8a",
    bodyColor: "#ffd000",
    wingColor: "#0284c7",
    crestColor: "#ffd000",
    beakColor: "#f97316",
    wingAccent: "#00f2fe",
    eyeColor: "#0f172a"
  },
  {
    id: "avatar_3",
    name: "Лаймовый Неон",
    neonColor: "#22c55e",
    glowColor: "rgba(34, 197, 94, 0.95)",
    discColor: "#1c1917",
    innerRing: "#3f2512",
    bodyColor: "#f97316",
    wingColor: "#c2410c",
    crestColor: "#f97316",
    beakColor: "#fde047",
    wingAccent: "#fb923c",
    eyeColor: "#18181b"
  },
  {
    id: "avatar_4",
    name: "Электрик Блю",
    neonColor: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.95)",
    discColor: "#2e1065",
    innerRing: "#581c87",
    bodyColor: "#84cc16",
    wingColor: "#4d7c0f",
    crestColor: "#84cc16",
    beakColor: "#a3e635",
    wingAccent: "#bef264",
    eyeColor: "#0f172a"
  },
  {
    id: "avatar_5",
    name: "Неоновый Розовый",
    neonColor: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.95)",
    discColor: "#042f2e",
    innerRing: "#115e59",
    bodyColor: "#14b8a6",
    wingColor: "#0f766e",
    crestColor: "#14b8a6",
    beakColor: "#5eead4",
    wingAccent: "#2dd4bf",
    eyeColor: "#0f172a"
  },
  {
    id: "avatar_6",
    name: "Кибер-Циан",
    neonColor: "#06b6d4",
    glowColor: "rgba(6, 182, 212, 0.95)",
    discColor: "#0c1b33",
    innerRing: "#1e3a5f",
    bodyColor: "#d946ef",
    wingColor: "#86198f",
    crestColor: "#d946ef",
    beakColor: "#f472b6",
    wingAccent: "#f0abfc",
    eyeColor: "#0f172a"
  },
  {
    id: "avatar_7",
    name: "Солнечное Золото",
    neonColor: "#facc15",
    glowColor: "rgba(250, 204, 21, 0.95)",
    discColor: "#3b0707",
    innerRing: "#7f1d1d",
    bodyColor: "#2563eb",
    wingColor: "#1e40af",
    crestColor: "#2563eb",
    beakColor: "#93c5fd",
    wingAccent: "#38bdf8",
    eyeColor: "#0f172a"
  },
  {
    id: "avatar_8",
    name: "Ультрафиолет",
    neonColor: "#a855f7",
    glowColor: "rgba(168, 85, 247, 0.95)",
    discColor: "#3b0764",
    innerRing: "#6b21a8",
    bodyColor: "#d97706",
    wingColor: "#92400e",
    crestColor: "#d97706",
    beakColor: "#fde047",
    wingAccent: "#fbbf24",
    eyeColor: "#0f172a"
  },
  {
    id: "avatar_9",
    name: "Янтарный Закат",
    neonColor: "#f97316",
    glowColor: "rgba(249, 115, 22, 0.95)",
    discColor: "#0f172a",
    innerRing: "#334155",
    bodyColor: "#7c3aed",
    wingColor: "#5b21b6",
    crestColor: "#7c3aed",
    beakColor: "#c084fc",
    wingAccent: "#a78bfa",
    eyeColor: "#0f172a"
  },
  {
    id: "avatar_10",
    name: "Рубиновый Титан",
    neonColor: "#d97706",
    glowColor: "rgba(217, 119, 6, 0.85)",
    discColor: "#18181b",
    innerRing: "#3f3f46",
    bodyColor: "#dc2626",
    wingColor: "#7f1d1d",
    crestColor: "#dc2626",
    beakColor: "#f87171",
    wingAccent: "#ef4444",
    eyeColor: "#18181b"
  }
];

function getChizhAvatarSvg(avatarId = "avatar_2", size = 48) {
  const av = CHIZH_AVATARS.find(a => a.id === avatarId) || CHIZH_AVATARS[1];
  return `
    <svg viewBox="0 0 100 100" width="${size}" height="${size}" fill="none" xmlns="http://www.w3.org/2000/svg" class="chizh-avatar-svg" style="display:block; overflow:visible;">
      <defs>
        <filter id="neonGlow_${av.id}_${size}" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- Внешнее неоновое кольцо с мягким ореолом -->
      <circle cx="50" cy="50" r="44" stroke="${av.neonColor}" stroke-width="4.5" filter="url(#neonGlow_${av.id}_${size})" opacity="0.95"/>
      <circle cx="50" cy="50" r="44" stroke="${av.neonColor}" stroke-width="2.5"/>

      <!-- Внутренний темный базовый диск -->
      <circle cx="50" cy="50" r="39" fill="${av.discColor}"/>
      <circle cx="50" cy="50" r="34" stroke="${av.innerRing}" stroke-width="1.8" fill="none"/>

      <!-- Хохолок птицы на макушке -->
      <path d="M46 22 C44 14 36 10 32 12 C38 12 43 16 46 22 Z" fill="${av.crestColor}"/>
      <path d="M48 24 C46 16 40 12 36 13 C41 14 45 18 48 24 Z" fill="${av.neonColor}" opacity="0.6"/>

      <!-- Тело чижа с хвостиком -->
      <path d="M40 24 C28 29 23 41 23 54 C23 68 35 77 50 77 C65 77 75 68 75 56 C75 44 65 37 54 31 Z" fill="${av.bodyColor}"/>
      <polygon points="62,68 76,78 70,81 56,74" fill="${av.bodyColor}"/>

      <!-- Крыло на боку -->
      <path d="M46 41 C55 45 64 53 64 65 C64 69 60 72 55 73 C65 71 72 63 72 52 C72 43 64 36 48 34 Z" fill="${av.wingColor}"/>
      <path d="M49 46 C56 48 61 55 59 64 C62 58 63 51 59 46 Z" fill="${av.wingAccent}"/>

      <!-- Острый клювик -->
      <polygon points="29,29 13,34 29,41" fill="${av.beakColor}"/>

      <!-- Глаз с белым бликом -->
      <circle cx="37" cy="30" r="3.2" fill="${av.eyeColor}"/>
      <circle cx="36" cy="29" r="1.1" fill="#ffffff"/>
    </svg>
  `;
}
