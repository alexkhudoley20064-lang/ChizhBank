/* ====================================================
   БАНКОМАТ: КЭШ-МАГНАТ — ОСНОВНОЙ ДВИЖОК CHIZHBANK
   Сбалансированная долгосрочная экономика Idle Tycoon
   ==================================================== */

// --- Инициализация Telegram WebApp SDK ---
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
  // Отключаем навязчивое окно подтверждения при выходе
  if (tg.disableClosingConfirmation) tg.disableClosingConfirmation();
}

// --- Звуковой синтезатор (Web Audio API) ---
class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTap() {
    if (!this.enabled || !this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(560, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(160, this.ctx.currentTime + 0.05);

    gain.gain.setValueAtTime(0.14, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playCrit() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    [523.25, 659.25, 783.99, 1046.50].forEach((freq, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + i * 0.04);
      gain.gain.setValueAtTime(0.12, now + i * 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.04 + 0.2);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.04);
      osc.stop(now + i * 0.04 + 0.2);
    });
  }

  playCashout() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    for (let i = 0; i < 4; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180 + Math.random() * 80, now + i * 0.03);
      gain.gain.setValueAtTime(0.08, now + i * 0.03);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.03 + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.03);
      osc.stop(now + i * 0.03 + 0.04);
    }
  }

  playUpgrade() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.06);
      gain.gain.setValueAtTime(0.18, now + idx * 0.06);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.06 + 0.25);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + idx * 0.06);
      osc.stop(now + idx * 0.06 + 0.25);
    });
  }

  playJackpot() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const chord = [392, 523.25, 659.25, 783.99, 1046.5];
    chord.forEach((freq) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.8);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.8);
    });
  }

  // Звук тактильного щелчка кнопки PIN-пада
  playKeyClick() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.04);
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
  }

  // Звук открытия сейфа с кушем
  playSafeOpen() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const gain1 = this.ctx.createGain();
    osc1.type = 'square';
    osc1.frequency.setValueAtTime(120, now);
    osc1.frequency.exponentialRampToValueAtTime(45, now + 0.16);
    gain1.gain.setValueAtTime(0.18, now);
    gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.16);
    osc1.connect(gain1);
    gain1.connect(this.ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.16);

    [659, 880, 1174, 1760].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + 0.1 + idx * 0.05);
      gain.gain.setValueAtTime(0.14, now + 0.1 + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1 + idx * 0.05 + 0.28);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + 0.1 + idx * 0.05);
      osc.stop(now + 0.1 + idx * 0.05 + 0.28);
    });
  }

  // Звук термопринтера чеков (вжжж-тррр)
  playPrinter() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    for (let i = 0; i < 7; i++) {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(1600 + (i % 2) * 800, now + i * 0.055);
      gain.gain.setValueAtTime(0.07, now + i * 0.055);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.055 + 0.04);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now + i * 0.055);
      osc.stop(now + i * 0.055 + 0.04);
    }
  }

  // Звук отрыва чека
  playPaperTear() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    try {
      const bufferSize = Math.floor(this.ctx.sampleRate * 0.1);
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.Q.setValueAtTime(1.5, now);
      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.16, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);
      noise.start(now);
    } catch (e) {}
  }

  // Шелест и хруст банкнот
  playCashRustle() {
    if (!this.enabled || !this.ctx) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320 + Math.random() * 60, now);
    osc.frequency.exponentialRampToValueAtTime(160, now + 0.04);
    gain.gain.setValueAtTime(0.07, now);
    gain.gain.exponentialRampToValueAtTime(0.005, now + 0.04);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.04);
  }
}

// --- Карьерные ранги банкира ---
const CAREER_RANKS = [
  { id: "student", name: "Студент с картой", minEarned: 0, bonusMult: 1.0, badgeColor: "#94a3b8" },
  { id: "intern", name: "Стажёр-операционист", minEarned: 1000, bonusMult: 1.02, badgeColor: "#38bdf8" },
  { id: "cashier", name: "Старший кассир", minEarned: 50000, bonusMult: 1.05, badgeColor: "#00ff88" },
  { id: "collector", name: "Инкассатор", minEarned: 1000000, bonusMult: 1.08, badgeColor: "#f59e0b" },
  { id: "manager", name: "Управляющий отделением", minEarned: 25000000, bonusMult: 1.12, badgeColor: "#818cf8" },
  { id: "vp", name: "Вице-президент ChizhBank", minEarned: 250000000, bonusMult: 1.18, badgeColor: "#ec4899" },
  { id: "tycoon", name: "Магнат ChizhBank", minEarned: 1000000000, bonusMult: 1.25, badgeColor: "#ffd700" }
];

// --- Конфигурация достижений: 1 ачивка = 1 уникальный скин банкнот! ---
const ACHIEVEMENTS_CONFIG = [
  {
    id: "user_5k",
    name: "Уверенный пользователь",
    desc: "Сделать 5 000 кликов по банкомату",
    rewardSkinId: "ruby",
    check: (game) => game.state.totalClicks >= 5000
  },
  {
    id: "sysadmin_10k",
    name: "Сисадмин банкомата",
    desc: "Сделать 10 000 кликов",
    rewardSkinId: "cyber",
    check: (game) => game.state.totalClicks >= 10000
  },
  {
    id: "it_50k",
    name: "Айтишник банкомата",
    desc: "Сделать 50 000 кликов",
    rewardSkinId: "quantum",
    check: (game) => game.state.totalClicks >= 50000
  },
  {
    id: "night_watch",
    name: "Ночной дозор",
    desc: "Зайти в игру ночью (после 22:00)",
    rewardSkinId: "sapphire",
    check: (game) => {
      const h = new Date().getHours();
      return h >= 22 || h < 6;
    }
  },
  {
    id: "combo_timing",
    name: "Безупречный тайминг",
    desc: "Набрать комбо x3.0",
    rewardSkinId: "flame",
    check: (game) => game.getComboMultiplier() >= 3.0
  },
  {
    id: "part_empire",
    name: "Часть империи",
    desc: "Открыть 5-й банкомат (Солнечный Тотем)",
    rewardSkinId: "gold",
    check: (game) => (game.state.maxUnlockedTier || 0) >= 4
  },
  {
    id: "owner_empire",
    name: "Владелец империи",
    desc: "Открыть 9-й банкомат (Квантовый Кибер-Банк)",
    rewardSkinId: "diamond",
    check: (game) => (game.state.maxUnlockedTier || 0) >= 8
  }
];

// --- 8 высокодетализированных скинов вылетающих банкнот ---
const BILL_SKINS = {
  green: {
    id: "green",
    name: "Классический зеленый",
    achievementId: null,
    unlockedByDefault: true,
    color: "#10b981",
    innerColor: "#059669",
    border: "#047857",
    text: "#ecfdf5",
    accent: "#34d399",
    serial: "CB 100"
  },
  ruby: {
    id: "ruby",
    name: "Рубиновый кэш",
    achievementId: "user_5k",
    color: "#ef4444",
    innerColor: "#dc2626",
    border: "#991b1b",
    text: "#fef2f2",
    accent: "#f87171",
    serial: "CB 500"
  },
  cyber: {
    id: "cyber",
    name: "Киберпанк Неон",
    achievementId: "sysadmin_10k",
    color: "#8b5cf6",
    innerColor: "#7c3aed",
    border: "#5b21b6",
    text: "#f5f3ff",
    accent: "#a78bfa",
    serial: "CB 777"
  },
  quantum: {
    id: "quantum",
    name: "Квантовая плазма",
    achievementId: "it_50k",
    color: "#06b6d4",
    innerColor: "#0891b2",
    border: "#0e7490",
    text: "#ecfeff",
    accent: "#22d3ee",
    serial: "CB 999"
  },
  sapphire: {
    id: "sapphire",
    name: "Ночной сапфир",
    achievementId: "night_watch",
    color: "#0284c7",
    innerColor: "#0369a1",
    border: "#075985",
    text: "#f0f9ff",
    accent: "#38bdf8",
    serial: "CB 024"
  },
  flame: {
    id: "flame",
    name: "Огненный комбо",
    achievementId: "combo_timing",
    color: "#f97316",
    innerColor: "#ea580c",
    border: "#c2410c",
    text: "#fff7ed",
    accent: "#fb923c",
    serial: "CB 300"
  },
  gold: {
    id: "gold",
    name: "Золотой VIP",
    achievementId: "part_empire",
    color: "#eab308",
    innerColor: "#ca8a04",
    border: "#854d0e",
    text: "#422006",
    accent: "#fde047",
    serial: "CB 777"
  },
  diamond: {
    id: "diamond",
    name: "Алмазный лед",
    achievementId: "owner_empire",
    color: "#38bdf8",
    innerColor: "#0284c7",
    border: "#0369a1",
    text: "#082f49",
    accent: "#e0f2fe",
    serial: "CB 999"
  }
};

// --- 4 типа летающих банковских карт ChizhBank packet ---
const BONUS_CARDS = [
  {
    id: "bronze",
    name: "Бронзовая Карта packet",
    weight: 50,
    svg: SVG_ICONS.cardBronze,
    glow: "0 0 20px rgba(182, 115, 58, 0.8)",
    rewardText: (val) => `+$${val}`
  },
  {
    id: "silver",
    name: "Серебряная Карта packet",
    weight: 30,
    svg: SVG_ICONS.cardSilver,
    glow: "0 0 20px rgba(203, 213, 225, 0.9)",
    rewardText: (val) => `+$${val} + 100% Энергии!`
  },
  {
    id: "gold",
    name: "Золотая Карта packet",
    weight: 15,
    svg: SVG_ICONS.cardGold,
    glow: "0 0 25px rgba(250, 204, 21, 1)",
    rewardText: (val) => `+$${val} + x3 ТУРБО (20 сек)!`
  },
  {
    id: "diamond",
    name: "Алмазная Карта packet",
    weight: 5,
    svg: SVG_ICONS.cardDiamond,
    glow: "0 0 35px rgba(96, 165, 250, 1), 0 0 15px #fff",
    rewardText: (val) => `МЕГА-ДЖЕКПОТ +$${val} + СУПЕР-СБОЙ x5!`
  }
];

const sounds = new SoundEngine();

let lastHapticTime = 0;
function triggerHaptic(type = 'light') {
  const now = performance.now();
  if (type === 'light' && now - lastHapticTime < 45) return;
  lastHapticTime = now;

  if (tg?.HapticFeedback) {
    if (type === 'light') tg.HapticFeedback.impactOccurred('light');
    else if (type === 'medium') tg.HapticFeedback.impactOccurred('medium');
    else if (type === 'heavy') tg.HapticFeedback.impactOccurred('heavy');
    else if (type === 'success') tg.HapticFeedback.notificationOccurred('success');
  } else if (navigator.vibrate) {
    navigator.vibrate(type === 'heavy' ? 40 : 15);
  }
}

// --- Список 9 поколений банкоматов ChizhBank ---
const ATM_TIERS = [
  ATM_MODELS.tier1,
  ATM_MODELS.tier2,
  ATM_MODELS.tier3,
  ATM_MODELS.tier4,
  ATM_MODELS.tier5,
  ATM_MODELS.tier6,
  ATM_MODELS.tier7,
  ATM_MODELS.tier8,
  ATM_MODELS.tier9
];

// --- Конфигурация улучшений тапа (Экспоненциальная кривая стоимости) ---
const UPGRADE_CONFIGS = [
  {
    id: "tap_power",
    iconName: "tapPower",
    name: "Сила нажатия",
    desc: "+1 кэш за каждый клик",
    baseCost: 25,
    costMultiplier: 1.45,
    effectPerLevel: 1
  },
  {
    id: "max_energy",
    iconName: "energyMax",
    name: "Резерв банкомата",
    desc: "+100 макс. энергии",
    baseCost: 60,
    costMultiplier: 1.40,
    effectPerLevel: 100
  },
  {
    id: "recharge_speed",
    iconName: "recharge",
    name: "Скорость инкассации",
    desc: "+0.50 энергии в сек.",
    baseCost: 100,
    costMultiplier: 1.50,
    effectPerLevel: 0.50
  },
  {
    id: "crit_luck",
    iconName: "critLuck",
    name: "Удача джекпота",
    desc: "+1.5% шанс сорвать x5 куш",
    baseCost: 200,
    costMultiplier: 1.65,
    effectPerLevel: 0.015
  }
];

// --- Конфигурация бизнесов (Пассивный доход с удвоениями на 25, 50, 100 уровнях) ---
const BUSINESS_CONFIGS = [
  {
    id: "coffee_stand",
    iconName: "coffee",
    name: "Кофейня у терминала",
    desc: "Люди пьют кофе и снимают наличные",
    baseCost: 75,
    costMultiplier: 1.15,
    baseIncome: 1
  },
  {
    id: "second_atm",
    iconName: "atmNetwork",
    name: "Второй банкомат в ТЦ",
    desc: "Поток покупателей на фудкорте",
    baseCost: 450,
    costMultiplier: 1.15,
    baseIncome: 5
  },
  {
    id: "cash_transit",
    iconName: "truck",
    name: "Служба инкассации",
    desc: "Броневики развозят миллионы по городу",
    baseCost: 2800,
    costMultiplier: 1.15,
    baseIncome: 24
  },
  {
    id: "mobile_banking",
    iconName: "mobileBank",
    name: "Мобильный онлайн-банк",
    desc: "Переводы и кэшбек прямо в смартфоне",
    baseCost: 16000,
    costMultiplier: 1.15,
    baseIncome: 110
  },
  {
    id: "bank_branch",
    iconName: "branch",
    name: "Отделение в Сити",
    desc: "Кредиты, депозиты и сейфовые ячейки",
    baseCost: 95000,
    costMultiplier: 1.15,
    baseIncome: 520
  },
  {
    id: "crypto_staking",
    iconName: "crypto",
    name: "Крипто-терминалы",
    desc: "Покупка Bitcoin и стейблкоинов за нал",
    baseCost: 600000,
    costMultiplier: 1.15,
    baseIncome: 2600
  },
  {
    id: "central_vault",
    iconName: "centralBank",
    name: "Федеральный Резервный Банк",
    desc: "Эмиссия валюты и управление ставками",
    baseCost: 4200000,
    costMultiplier: 1.15,
    baseIncome: 14000
  },
  {
    id: "orbital_reserve",
    iconName: "satellite",
    name: "Орбитальное хранилище",
    desc: "Спутниковый банк вне земных юрисдикций",
    baseCost: 35000000,
    costMultiplier: 1.15,
    baseIncome: 85000
  }
];

class AtmGame {
  constructor() {
    this.state = {
      nickname: "",
      isFirstVisit: true,
      balance: 0,
      totalEarned: 0,
      totalClicks: 0,
      cardsCaught: 0,
      frenziesTriggered: 0,
      energy: 500,
      maxEnergy: 500,
      energyRechargeRate: 1.70, // +20% дополнительное ускорение (было 1.41)
      baseTapPower: 1,
      critChance: 0.03,
      atmTierIndex: 0,
      maxUnlockedTier: 0,
      tierProgress: {},
      upgrades: {},
      businesses: {},
      soundEnabled: true,
      lastSaveTime: Date.now(),
      theme: (new Date().getHours() >= 21 || new Date().getHours() < 7) ? "night" : "day",
      chizhShares: 0,
      ipoCount: 0,
      unlockedSkins: { green: true },
      activeBillSkin: "green",
      selectedAvatar: "avatar_2",
      achievements: {}
    };

    this.cloudLeaderboard = null;
    this.lastLeaderboardFetch = 0;

    this.pinChallenge = { active: false, code: "", input: "" };
    this.pinPromptTimer = null;
    this.lastPinChallengeTime = Date.now();

    this.comboCount = 0;
    this.comboTimer = null;
    this.frenzyActive = false;
    this.frenzyTimer = null;

    this.canvas = document.getElementById("particleCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];

    this.loadState();
    this.loadFromCloud();
    this.initCanvas();
    this.initTelegramProfile();
    this.initDOM();
    this.checkOfflineProgress();
    this.startLoops();
    this.scheduleGoldenBonus();
    this.schedulePinChallenge();
  }

  loadState() {
    try {
      const saved = localStorage.getItem("chizhbank_tycoon_save_v2");
      if (saved) {
        const parsed = JSON.parse(saved);
        this.state = Object.assign(this.state, parsed);

        if (!this.state.theme) {
          const h = new Date().getHours();
          this.state.theme = (h >= 21 || h < 7) ? "night" : "day";
        }
        if (this.state.chizhShares === undefined) this.state.chizhShares = 0;
        if (this.state.ipoCount === undefined) this.state.ipoCount = Math.max(0, Math.floor(this.state.chizhShares || 0));
        if (!this.state.activeBillSkin) this.state.activeBillSkin = "green";
        if (!this.state.achievements) this.state.achievements = {};
        if (!this.state.unlockedSkins) this.state.unlockedSkins = { green: true };
        // Автоматически открываем скины за уже выполненные ачивки
        for (const ach of ACHIEVEMENTS_CONFIG) {
          if (this.state.achievements && this.state.achievements[ach.id]) {
            this.state.unlockedSkins[ach.rewardSkinId] = true;
          }
        }

        if (!this.state.selectedAvatar) this.state.selectedAvatar = "avatar_2";

        if (!this.state.energyRechargeRate || this.state.energyRechargeRate < 1.70) {
          this.state.energyRechargeRate = 1.70;
        }

        // Автоматическое восстановление энергии в офлайне (даже когда игрока нет в игре)
        const now = Date.now();
        const last = this.state.lastSaveTime || now;
        const diffSec = Math.max(0, Math.floor((now - last) / 1000));
        if (diffSec > 0) {
          const maxE = this.getMaxEnergy();
          const rechargeRate = this.getRechargeRate();
          this.state.energy = Math.min(maxE, (this.state.energy !== undefined ? this.state.energy : maxE) + diffSec * rechargeRate);
        }

        if (!this.state.tierProgress || typeof this.state.tierProgress !== "object") {
          this.state.tierProgress = {};
        }

        if (this.state.maxUnlockedTier === undefined) {
          this.state.maxUnlockedTier = this.state.atmTierIndex || 0;
        }

        // Защита от выхода за пределы списка тиров
        if (this.state.maxUnlockedTier >= ATM_TIERS.length) {
          this.state.maxUnlockedTier = ATM_TIERS.length - 1;
        }
        if (this.state.atmTierIndex >= ATM_TIERS.length) {
          this.state.atmTierIndex = this.state.maxUnlockedTier;
        }

        // Миграция старых сохранений в структуру tierProgress
        const activeTier = this.state.atmTierIndex || 0;
        if (!this.state.tierProgress[activeTier]) {
          this.state.tierProgress[activeTier] = {
            upgrades: Object.assign({}, this.state.upgrades || {}),
            businesses: Object.assign({}, this.state.businesses || {})
          };
        }
      } else {
        this.state.tierProgress = {
          0: { upgrades: {}, businesses: {} }
        };
      }
    } catch (e) {
      console.warn("Ошибка загрузки:", e);
    }
    sounds.enabled = this.state.soundEnabled;
  }

  saveState() {
    this.state.lastSaveTime = Date.now();
    try {
      localStorage.setItem("chizhbank_tycoon_save_v2", JSON.stringify(this.state));
    } catch (e) {
      console.warn("Ошибка сохранения:", e);
    }
    this.syncWithCloud();
  }

  getUserId() {
    if (tg?.initDataUnsafe?.user?.id) {
      return String(tg.initDataUnsafe.user.id);
    }
    let localId = localStorage.getItem("chizhbank_device_user_id");
    if (!localId) {
      localId = "u_" + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
      localStorage.setItem("chizhbank_device_user_id", localId);
    }
    return localId;
  }

  async syncWithCloud(force = false) {
    const cloudUrl = (window.CHIZHBANK_CLOUD_URL || "").replace(/\/+$/, "");
    const userId = this.getUserId();
    if (!cloudUrl || !userId) return;

    const now = Date.now();
    // Оптимизация батареи: сохранение в облако не чаще раз в 30 секунд (фоновое),
    // если только не передан force = true (при выходе, IPO, покупке банкомата)
    if (!force && this.lastCloudSyncTime && (now - this.lastCloudSyncTime < 30000)) {
      return;
    }
    this.lastCloudSyncTime = now;

    try {
      const payload = {
        userId: String(userId),
        nickname: this.state.nickname || (tg?.initDataUnsafe?.user?.first_name) || "Банкир",
        avatarId: this.state.selectedAvatar || "avatar_2",
        fortune: Math.floor(this.state.totalEarned || 0),
        atmTier: this.state.atmTierIndex || 0,
        state: this.state
      };

      await fetch(`${cloudUrl}/api/save`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
    } catch (e) {}
  }

  async loadFromCloud() {
    const cloudUrl = (window.CHIZHBANK_CLOUD_URL || "").replace(/\/+$/, "");
    const userId = this.getUserId();
    if (!cloudUrl || !userId) return;

    try {
      const res = await fetch(`${cloudUrl}/api/load?userId=${userId}`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.state && (data.state.lastSaveTime || 0) > (this.state.lastSaveTime || 0)) {
          this.state = Object.assign(this.state, data.state);
          this.renderUI();
          this.renderLists();
          this.updateAtmAppearance();
          this.updateNicknameUI();
        } else {
          // Если на сервере еще нет этого игрока или локальный прогресс новее — немедленно выгружаем в базу!
          await this.syncWithCloud();
        }
      } else {
        await this.syncWithCloud();
      }
    } catch (e) {}

    // Сразу запрашиваем реальный лидерборд
    this.fetchCloudLeaderboard();
  }

  async fetchCloudLeaderboard() {
    const cloudUrl = (window.CHIZHBANK_CLOUD_URL || "").replace(/\/+$/, "");
    const userId = this.getUserId();
    if (!cloudUrl) return;

    try {
      const res = await fetch(`${cloudUrl}/api/leaderboard?userId=${userId}`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.success) {
          this.cloudLeaderboard = data;
          this.renderLeaderboard();
        }
      }
    } catch (e) {}
  }

  resetProgress() {
    if (confirm("Вы уверены, что хотите сбросить весь прогресс ChizhBank?")) {
      localStorage.removeItem("chizhbank_tycoon_save_v2");
      window.location.reload();
    }
  }

  shareProgress() {
    sounds.init();
    sounds.playJackpot();
    triggerHaptic("success");

    const fortune = this.formatMoney(this.state.totalEarned);
    const tier = ATM_TIERS[this.state.atmTierIndex]?.name || "Ветеран 90-х";
    const rank = this.getCareerRank()?.name || "Банкир";

    const text = `🔥 Я заработал $${fortune} в ChizhBank!\n🏦 Ранг: ${rank} (${tier})\n👑 Попробуй побить мой рекорд в @lekkzhubBot !`;
    const shareUrl = `https://t.me/share/url?url=https://t.me/lekkzhubBot&text=${encodeURIComponent(text)}`;

    if (tg?.openTelegramLink) {
      tg.openTelegramLink(shareUrl);
    } else {
      window.open(shareUrl, "_blank");
    }
  }

  addMoney(amount = 1000000000000) {
    this.state.balance += amount;
    this.state.totalEarned += amount;
    this.saveState();
    this.renderUI();
    this.renderLists();
    sounds.playJackpot();
    triggerHaptic("success");
    this.spawnConfetti();
    this.flashScreenMsg(`+$${this.formatMoney(amount)}!`, "#ffd700");
    console.log(`%c[ChizhBank] 💰 Начислено: +$${amount.toLocaleString()}! Новый баланс: $${this.state.balance.toLocaleString()}`, "color: #10b981; font-weight: bold; font-size: 14px;");
    return `+$${amount.toLocaleString()}`;
  }

  initTelegramProfile() {
    this.updateNicknameUI();
  }

  updateNicknameUI() {
    const name = this.state.nickname || (tg?.initDataUnsafe?.user?.first_name) || "Банкир";
    const userNameEl = document.getElementById("userName");
    if (userNameEl) userNameEl.textContent = name;

    const currentNickEl = document.getElementById("currentNicknameDisplay");
    if (currentNickEl) currentNickEl.textContent = name;

    const changeInput = document.getElementById("changeNicknameInput");
    if (changeInput) changeInput.placeholder = name;

    const avatarId = this.state.selectedAvatar || "avatar_2";

    const userAvatarEl = document.getElementById("userAvatar");
    if (userAvatarEl) {
      userAvatarEl.innerHTML = getChizhAvatarSvg(avatarId, 38);
      userAvatarEl.classList.add("user-avatar-btn");
    }

    const profileStatsAvatar = document.getElementById("profileStatsAvatar");
    if (profileStatsAvatar) {
      profileStatsAvatar.innerHTML = getChizhAvatarSvg(avatarId, 48);
    }

    this.renderAvatarPickers();
    this.renderLeaderboard();
  }

  renderAvatarPickers() {
    const currentAv = this.state.selectedAvatar || "avatar_2";
    ["initialAvatarGrid", "profileAvatarGrid"].forEach(gridId => {
      const grid = document.getElementById(gridId);
      if (!grid) return;
      let html = "";
      CHIZH_AVATARS.forEach(av => {
        const isSel = av.id === currentAv;
        html += `
          <button class="avatar-item-btn ${isSel ? 'selected' : ''}" data-avatar="${av.id}" title="${av.name}" type="button">
            ${getChizhAvatarSvg(av.id, 44)}
          </button>
        `;
      });
      grid.innerHTML = html;

      grid.querySelectorAll(".avatar-item-btn").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const avId = btn.dataset.avatar;
          this.selectAvatar(avId);
        });
      });
    });
  }

  selectAvatar(avId) {
    if (!avId || this.state.selectedAvatar === avId) return;
    this.state.selectedAvatar = avId;
    sounds.init();
    sounds.playTap();
    triggerHaptic("medium");
    this.saveState();
    this.updateNicknameUI();
  }

  getTierProgress(tierIndex = this.state.atmTierIndex) {
    if (!this.state.tierProgress) this.state.tierProgress = {};
    if (!this.state.tierProgress[tierIndex]) {
      this.state.tierProgress[tierIndex] = {
        upgrades: {},
        businesses: {}
      };
    }
    return this.state.tierProgress[tierIndex];
  }

  getUpgradeLevel(id, tierIndex = this.state.atmTierIndex) {
    return this.getTierProgress(tierIndex).upgrades[id] || 0;
  }

  getBusinessCount(id, tierIndex = this.state.atmTierIndex) {
    return this.getTierProgress(tierIndex).businesses[id] || 0;
  }

  getIpoMultiplier() {
    return 1 + (this.state.chizhShares || 0) * 1.0;
  }

  // Расчет стоимости банкомата: с каждым кругом IPO пропорционально доходу + на 20% сложнее
  getTierCost(tierIndex) {
    const tier = ATM_TIERS[tierIndex];
    if (!tier || tierIndex === 0) return 0;
    const ipoMult = this.getIpoMultiplier();
    const ipoCount = this.state.ipoCount || 0;
    const difficultyMult = Math.pow(1.20, ipoCount);
    return Math.round(tier.cost * ipoMult * difficultyMult);
  }

  // Расчет порога для следующего IPO: дойти снова на 20% сложнее в относительном прогрессе
  getIpoTarget() {
    const baseTarget = 1000000000; // Базовый $1 млрд
    const ipoCount = this.state.ipoCount || 0;
    const ipoMult = this.getIpoMultiplier();
    const difficultyMult = Math.pow(1.20, ipoCount);
    return Math.round(baseTarget * ipoMult * difficultyMult);
  }

  getCareerRank() {
    const earned = this.state.totalEarned || 0;
    for (let i = CAREER_RANKS.length - 1; i >= 0; i--) {
      if (earned >= CAREER_RANKS[i].minEarned) {
        return CAREER_RANKS[i];
      }
    }
    return CAREER_RANKS[0];
  }

  getCareerBonusMultiplier() {
    return this.getCareerRank().bonusMult;
  }

  getTapPower() {
    const upgradeLevel = this.getUpgradeLevel("tap_power");
    const base = this.state.baseTapPower + upgradeLevel * UPGRADE_CONFIGS[0].effectPerLevel;
    const tierMultiplier = ATM_TIERS[this.state.atmTierIndex].multiplier;
    const comboMultiplier = this.getComboMultiplier();
    const frenzyMultiplier = this.frenzyActive ? 3 : 1;
    const ipoMult = this.getIpoMultiplier();
    const careerMult = this.getCareerBonusMultiplier();

    return Math.floor(base * tierMultiplier * comboMultiplier * frenzyMultiplier * ipoMult * careerMult);
  }

  getMaxEnergy() {
    const upgradeLevel = this.getUpgradeLevel("max_energy");
    return this.state.maxEnergy + upgradeLevel * UPGRADE_CONFIGS[1].effectPerLevel;
  }

  getRechargeRate() {
    const upgradeLevel = this.getUpgradeLevel("recharge_speed");
    const base = Math.max(1.70, (this.state.energyRechargeRate || 1.70));
    return base + upgradeLevel * UPGRADE_CONFIGS[2].effectPerLevel;
  }

  getCritChance() {
    const upgradeLevel = this.getUpgradeLevel("crit_luck");
    return Math.min(0.40, this.state.critChance + upgradeLevel * UPGRADE_CONFIGS[3].effectPerLevel);
  }

  // Расчет дохода конкретного бизнеса с учетом майлстоунов, множителя поколения, IPO и карьеры
  getSingleBusinessIncome(business, tierIndex = this.state.atmTierIndex) {
    const count = this.getBusinessCount(business.id, tierIndex);
    if (count === 0) return 0;
    const milestoneBonus = Math.pow(2, Math.floor(count / 25));
    const tierMultiplier = ATM_TIERS[tierIndex].multiplier;
    const ipoMult = this.getIpoMultiplier();
    const careerMult = this.getCareerBonusMultiplier();
    return count * business.baseIncome * milestoneBonus * tierMultiplier * ipoMult * careerMult;
  }

  getPassiveIncome(tierIndex = this.state.atmTierIndex) {
    let total = 0;
    for (const b of BUSINESS_CONFIGS) {
      total += this.getSingleBusinessIncome(b, tierIndex);
    }
    return total;
  }

  getComboMultiplier() {
    if (this.comboCount < 5) return 1;
    if (this.comboCount < 15) return 1.5;
    if (this.comboCount < 30) return 2.0;
    return 3.0;
  }

  getUpgradeCost(upgrade, tierIndex = this.state.atmTierIndex) {
    const level = this.getUpgradeLevel(upgrade.id, tierIndex);
    // С каждым новым банкоматом базовая цена бустеров масштабируется (новый уровень игры)
    const tierCostScale = Math.pow(2.8, tierIndex);
    return Math.floor(upgrade.baseCost * tierCostScale * Math.pow(upgrade.costMultiplier, level));
  }

  getBusinessCost(business, tierIndex = this.state.atmTierIndex) {
    const count = this.getBusinessCount(business.id, tierIndex);
    // С каждым новым банкоматом стоимость филиалов масштабируется
    const tierCostScale = Math.pow(2.6, tierIndex);
    return Math.floor(business.baseCost * tierCostScale * Math.pow(business.costMultiplier, count));
  }

  formatMoney(num) {
    if (num < 1000) return "$" + Math.floor(num).toLocaleString();
    if (num < 1000000) return "$" + (num / 1000).toFixed(1) + "K";
    if (num < 1000000000) return "$" + (num / 1000000).toFixed(2) + "M";
    if (num < 1000000000000) return "$" + (num / 1000000000).toFixed(2) + "B";
    return "$" + (num / 1000000000000).toFixed(2) + "T";
  }

  initDOM() {
    const openGalleryBtn = document.getElementById("openGalleryBtn");
    const galleryModal = document.getElementById("galleryModal");
    const closeGalleryModalBtn = document.getElementById("closeGalleryModalBtn");
    const closeGalleryModalBottomBtn = document.getElementById("closeGalleryModalBottomBtn");

    const openGallery = () => {
      sounds.init();
      sounds.playTap();
      triggerHaptic("light");
      this.renderModalGallery();
      galleryModal?.classList.remove("hidden");
    };

    const closeGallery = () => {
      sounds.init();
      sounds.playTap();
      galleryModal?.classList.add("hidden");
    };

    openGalleryBtn?.addEventListener("click", openGallery);
    closeGalleryModalBtn?.addEventListener("click", closeGallery);
    closeGalleryModalBottomBtn?.addEventListener("click", closeGallery);
    galleryModal?.addEventListener("click", (e) => {
      if (e.target === galleryModal) closeGallery();
    });

    document.getElementById("rateIcon").innerHTML = getIconSvg("flash");
    document.getElementById("energyIcon").innerHTML = getIconSvg("flash");
    document.getElementById("modalIcon").innerHTML = getIconSvg("briefcase");

    // Аутентичные иконки Apple SF Symbols в шапке, музее и рейтинге
    const galleryPillIco = document.getElementById("galleryPillIco");
    if (galleryPillIco) galleryPillIco.innerHTML = SVG_ICONS.appleMuseum;

    const modalGalleryTitleIco = document.getElementById("modalGalleryTitleIco");
    if (modalGalleryTitleIco) modalGalleryTitleIco.innerHTML = SVG_ICONS.appleMuseum;

    const hangarIco = document.getElementById("hangarIco");
    if (hangarIco) hangarIco.innerHTML = SVG_ICONS.appleSync;

    const lbTrophyIco = document.getElementById("lbTrophyIco");
    if (lbTrophyIco) lbTrophyIco.innerHTML = SVG_ICONS.appleTrophy;

    const comboIconSlot = document.getElementById("comboIconSlot");
    if (comboIconSlot) comboIconSlot.innerHTML = SVG_ICONS.comboIcon;

    document.getElementById("tabIconAtm").innerHTML = getIconSvg("atm");
    document.getElementById("tabIconUpgrade").innerHTML = getIconSvg("upgrade");
    document.getElementById("tabIconBusiness").innerHTML = getIconSvg("business");
    document.getElementById("tabIconStats").innerHTML = getIconSvg("stats");

    // Иконки Чижа в профиле и модальном окне
    const modalChizhHero = document.getElementById("modalChizhHero");
    if (modalChizhHero) modalChizhHero.innerHTML = SVG_ICONS.chizhBirdColor;

    // Клик по аватару в шапке переносит в настройки профиля
    document.getElementById("userAvatar")?.addEventListener("click", () => {
      sounds.init();
      sounds.playTap();
      triggerHaptic("light");
      document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      document.querySelector('[data-tab="statsScreen"]')?.classList.add("active");
      document.getElementById("statsScreen")?.classList.add("active");
      this.renderLists();
      this.fetchCloudLeaderboard();
      const avatarSec = document.querySelector(".avatar-selection-card");
      if (avatarSec) avatarSec.scrollIntoView({ behavior: "smooth" });
    });

    // Инициализация окна первого входа / ввода ника
    const nicknameModal = document.getElementById("nicknameModal");
    const initialInput = document.getElementById("initialNicknameInput");

    if (!this.state.nickname && this.state.isFirstVisit) {
      if (initialInput && tg?.initDataUnsafe?.user?.first_name) {
        initialInput.value = tg.initDataUnsafe.user.first_name;
      }
      nicknameModal?.classList.remove("hidden");
    }

    document.getElementById("saveInitialNicknameBtn")?.addEventListener("click", () => {
      const val = initialInput?.value.trim() || (tg?.initDataUnsafe?.user?.first_name) || "Банкир";
      this.state.nickname = val;
      this.state.isFirstVisit = false;
      this.saveState();
      this.updateNicknameUI();
      nicknameModal?.classList.add("hidden");
      sounds.playUpgrade();
      triggerHaptic("success");
    });

    // Смена ника в разделе "Профиль и Инфо"
    const saveNewNickBtn = document.getElementById("saveNewNicknameBtn");
    const changeNickInput = document.getElementById("changeNicknameInput");
    saveNewNickBtn?.addEventListener("click", () => {
      const newNick = changeNickInput?.value.trim();
      if (newNick) {
        this.state.nickname = newNick;
        changeNickInput.value = "";
        this.saveState();
        this.updateNicknameUI();
        const successTag = document.getElementById("nickChangeSuccessMsg");
        if (successTag) {
          successTag.classList.remove("hidden");
          setTimeout(() => successTag.classList.add("hidden"), 3000);
        }
        sounds.playTap();
        triggerHaptic("success");
      }
    });

    const tabs = document.querySelectorAll(".nav-tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        sounds.init();
        const targetId = tab.dataset.tab;
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        document.querySelectorAll(".tab-content").forEach(content => {
          content.classList.remove("active");
        });
        document.getElementById(targetId)?.classList.add("active");

        triggerHaptic("light");
        this.renderLists();
        if (targetId === "statsScreen") {
          this.fetchCloudLeaderboard();
        }
      });
    });

    this.updateSoundButton();
    const soundBtn = document.getElementById("soundToggleBtn");
    soundBtn?.addEventListener("click", () => {
      sounds.init();
      this.state.soundEnabled = !this.state.soundEnabled;
      sounds.enabled = this.state.soundEnabled;
      this.updateSoundButton();
      this.saveState();
    });

    // Переключение День / Ночь (Фонарь над банкоматом)
    const themeBtn = document.getElementById("themeToggleBtn");
    themeBtn?.addEventListener("click", () => {
      sounds.init();
      this.toggleTheme();
    });

    // Кнопка и модалка выхода на IPO с мгновенным откликом
    const openIpoBtn = document.getElementById("openIpoModalBtn");
    if (openIpoBtn) {
      const handleIpo = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.openIpoModal();
      };
      openIpoBtn.addEventListener("pointerdown", handleIpo);
      openIpoBtn.addEventListener("click", handleIpo);
    }

    document.getElementById("cancelIpoBtn")?.addEventListener("click", () => {
      document.getElementById("ipoModal")?.classList.add("hidden");
    });
    document.getElementById("confirmIpoBtn")?.addEventListener("click", () => this.confirmIpo());

    const ipoModalIcon = document.getElementById("ipoModalIcon");
    if (ipoModalIcon) ipoModalIcon.innerHTML = SVG_ICONS.ipoIcon;

    const ipoTitleIco = document.getElementById("ipoTitleIco");
    if (ipoTitleIco) ipoTitleIco.innerHTML = SVG_ICONS.ipoIcon;

    // Стрелочки для аккордеонов
    ["chevronSkins", "chevronAchievements", "chevronStats", "chevronHangar", "chevronLeaderboard"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = SVG_ICONS.appleChevronDown;
    });

    // Иконки в заголовках карточек
    const skinsHeaderIco = document.getElementById("skinsHeaderIco");
    if (skinsHeaderIco) skinsHeaderIco.innerHTML = SVG_ICONS.cashBill;

    const achieveHeaderIco = document.getElementById("achieveHeaderIco");
    if (achieveHeaderIco) achieveHeaderIco.innerHTML = SVG_ICONS.appleTrophy;

    const statsHeaderIco = document.getElementById("statsHeaderIco");
    if (statsHeaderIco) statsHeaderIco.innerHTML = SVG_ICONS.stats;

    // Интерактивное открытие и сворачивание вкладок-аккордеонов на мобильных и ПК
    document.querySelectorAll(".accordion-card").forEach((card) => {
      const header = card.querySelector(".accordion-header") || card;
      let startY = 0;
      let isScrolling = false;

      header.addEventListener("touchstart", (e) => {
        if (e.touches && e.touches[0]) {
          startY = e.touches[0].clientY;
          isScrolling = false;
        }
      }, { passive: true });

      header.addEventListener("touchmove", (e) => {
        if (e.touches && e.touches[0]) {
          if (Math.abs(e.touches[0].clientY - startY) > 8) {
            isScrolling = true;
          }
        }
      }, { passive: true });

      header.addEventListener("touchend", (e) => {
        if (!isScrolling) {
          e.preventDefault();
          e.stopPropagation();
          this.toggleAccordion(card.id);
        }
      });

      header.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleAccordion(card.id);
      });
    });

    // Клавиатура выносного PIN-пада
    const sheetKeys = document.querySelectorAll(".sheet-key");
    sheetKeys.forEach((keyBtn) => {
      const handleSheetPress = (e) => {
        e.preventDefault();
        e.stopPropagation();
        sounds.init();
        sounds.playKeyClick();
        triggerHaptic("medium");

        keyBtn.classList.remove("key-pressed");
        void keyBtn.offsetWidth;
        keyBtn.classList.add("key-pressed");
        setTimeout(() => keyBtn.classList.remove("key-pressed"), 100);

        const keyVal = keyBtn.dataset.key;
        this.handlePinKey(keyVal);
      };
      keyBtn.addEventListener("pointerdown", handleSheetPress);
    });

    const sheetKeyCancelIco = document.getElementById("sheetKeyCancelIco");
    if (sheetKeyCancelIco) sheetKeyCancelIco.innerHTML = SVG_ICONS.keypadCancel;

    const sheetKeyOkIco = document.getElementById("sheetKeyOkIco");
    if (sheetKeyOkIco) sheetKeyOkIco.innerHTML = SVG_ICONS.keypadOk;

    const pinShieldIco = document.getElementById("pinShieldIco");
    if (pinShieldIco) pinShieldIco.innerHTML = SVG_ICONS.appleLock;

    // Векторные молнии в бегущей строке
    document.querySelectorAll(".frenzy-flash-slot").forEach(slot => {
      slot.innerHTML = SVG_ICONS.flash;
    });

    document.getElementById("resetDataBtn")?.addEventListener("click", () => this.resetProgress());

    const handleShare = (e) => {
      e?.preventDefault();
      this.shareProgress();
    };
    document.getElementById("shareResultBtn")?.addEventListener("click", handleShare);
    document.getElementById("shareResultBottomBtn")?.addEventListener("click", handleShare);

    let balanceClicks = 0;
    let balanceTimer = null;
    document.getElementById("balanceDisplay")?.addEventListener("click", () => {
      balanceClicks++;
      clearTimeout(balanceTimer);
      balanceTimer = setTimeout(() => { balanceClicks = 0; }, 1500);
      if (balanceClicks >= 5) {
        balanceClicks = 0;
        this.addMoney(1000000000000);
        this.spawnBanknotes(window.innerWidth / 2, 120, 10);
      }
    });

    document.getElementById("claimOfflineBtn")?.addEventListener("click", () => {
      sounds.playJackpot();
      triggerHaptic("success");
      document.getElementById("offlineModal").classList.add("hidden");
    });

    const atmWrapper = document.getElementById("atmWrapper");
    const handleTap = (e) => {
      e.preventDefault();
      sounds.init();
      const touches = e.changedTouches ? e.changedTouches : [e];
      for (let i = 0; i < touches.length; i++) {
        const touch = touches[i];
        this.onTapATM(touch.clientX, touch.clientY);
      }
    };

    // Перехват физического нажатия клавиш клавиатуры банкомата
    atmWrapper.addEventListener("pointerdown", (e) => {
      const keyEl = e.target.closest(".pm-key, .ep-key, .rk, .mini-keys-grid span, .cpp-grid span, .t-key, .g-fdk-btn, .e-circle-btn");
      if (keyEl) {
        e.preventDefault();
        e.stopPropagation();
        this.onKeyPress(keyEl);
        return;
      }
      handleTap(e);
    });

    this.updateThemeUI();
    this.updateAtmAppearance();
    this.renderSkinsUI();
    this.renderAchievementsUI();
    this.renderCareerUI();
    this.renderIpoUI();
    this.renderUI();
  }

  updateSoundButton() {
    const soundBtn = document.getElementById("soundToggleBtn");
    soundBtn.innerHTML = getIconSvg(this.state.soundEnabled ? "soundOn" : "soundOff");
  }

  onTapATM(clientX, clientY) {
    if (!this.frenzyActive && this.state.energy < 1) {
      triggerHaptic("heavy");
      sounds.playKeyClick();
      this.flashScreenMsg("НЕТ ЭНЕРГИИ!", "#ff3366");
      const energyWrap = document.querySelector(".energy-wrapper");
      if (energyWrap) {
        energyWrap.classList.add("shake-energy");
        clearTimeout(this.energyShakeTimer);
        this.energyShakeTimer = setTimeout(() => energyWrap.classList.remove("shake-energy"), 350);
      }
      return;
    }

    if (!this.frenzyActive) {
      // Энергия тратится по 2 ед. за тап
      this.state.energy = Math.max(0, this.state.energy - 2);
    }

    this.comboCount++;
    clearTimeout(this.comboTimer);
    this.comboTimer = setTimeout(() => {
      this.comboCount = 0;
      this.updateComboUI();
    }, 1200);

    // Сбои банкомата происходят реже (кулдаун 75 сек, комбо от 35, шанс 3.5%)
    const now = Date.now();
    const cooldownPassed = (now - (this.lastFrenzyEndTime || 0)) > 75000;
    if (!this.frenzyActive && cooldownPassed && this.comboCount >= 35 && Math.random() < 0.035) {
      this.triggerFrenzy();
    }

    let earned = this.getTapPower();
    const isCrit = Math.random() < this.getCritChance();

    if (isCrit) {
      earned *= 5;
      triggerHaptic("heavy");
      sounds.playCrit();
      this.flashScreenMsg("ДЖЕКПОТ x5!", "#ffd700");
    } else {
      triggerHaptic("light");
      sounds.playTap();
      if (Math.random() < 0.25) sounds.playCashout();
    }

    this.state.balance += earned;
    this.state.totalEarned += earned;
    this.state.totalClicks++;

    // Высокооптимизированная тактильная анимация банкомата (без принудительного reflow offsetWidth)
    const atmWrapper = document.getElementById("atmWrapper");
    if (atmWrapper) {
      atmWrapper.classList.add("atm-punch");
      clearTimeout(this.tapPunchTimer);
      this.tapPunchTimer = setTimeout(() => atmWrapper.classList.remove("atm-punch"), 60);
    }
    sounds.playCashRustle();

    // Кэшированные координаты лотка (избегает getBoundingClientRect на каждый тап)
    if (!this.cachedDispenserPos || now - (this.lastDispenserCheck || 0) > 4000) {
      const dispenserEl = document.getElementById("cashDispenser") || atmWrapper;
      if (dispenserEl) {
        const rect = dispenserEl.getBoundingClientRect();
        this.cachedDispenserPos = {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2
        };
        this.lastDispenserCheck = now;
      }
    }
    const spawnX = (this.cachedDispenserPos && this.cachedDispenserPos.x) || (window.innerWidth / 2);
    const spawnY = (this.cachedDispenserPos && this.cachedDispenserPos.y) || (window.innerHeight / 2);
    this.spawnBanknotes(spawnX, spawnY, isCrit ? 3 : 1);

    const tapX = clientX || spawnX;
    const tapY = clientY || (spawnY - 30);
    this.spawnFloatingText(tapX, tapY, `+${this.formatMoney(earned)}`, isCrit);

    this.updateComboUI();
    this.renderUI();
  }

  triggerFrenzy() {
    this.frenzyActive = true;
    this.state.frenziesTriggered++;
    sounds.playJackpot();
    triggerHaptic("success");

    const tier = ATM_TIERS[this.state.atmTierIndex] || ATM_TIERS[0];
    const theme = tier.frenzyTheme || {
      accent: "#00ff88",
      glow: "rgba(0, 255, 136, 0.7)",
      bg: "linear-gradient(90deg, #047857, #10b981, #065f46)"
    };

    const banner = document.getElementById("frenzyBanner");
    if (banner) {
      banner.style.setProperty("--frenzy-accent", theme.accent);
      banner.style.setProperty("--frenzy-glow", theme.glow);
      banner.style.setProperty("--frenzy-bg", theme.bg);
      banner.classList.remove("hidden");
    }

    this.flashScreenMsg("⚡ СБОЙ СИСТЕМЫ! ⚡", theme.accent || "#ff0055");

    clearTimeout(this.frenzyTimer);
    this.frenzyTimer = setTimeout(() => {
      this.frenzyActive = false;
      this.lastFrenzyEndTime = Date.now();
      banner?.classList.add("hidden");
      this.flashScreenMsg("СИСТЕМА В НОРМЕ", "#00ff88");
      this.renderUI();
    }, 10000);
  }

  flashScreenMsg(text, color) {
    const screenMsg = document.getElementById("screenMsg");
    if (!screenMsg) return;
    screenMsg.textContent = text;
    if (color) screenMsg.style.color = color;
    screenMsg.style.transform = "scale(1.15)";
    setTimeout(() => {
      screenMsg.style.transform = "scale(1)";
    }, 200);
  }

  updateComboUI() {
    const badge = document.getElementById("comboBadge");
    if (!badge) return;
    const textEl = document.getElementById("comboDisplayText") || badge;
    const mult = this.getComboMultiplier();
    if (this.comboCount >= 5) {
      textEl.textContent = `x${mult.toFixed(1)} КОМБО`;
      badge.classList.add("active");
    } else {
      badge.classList.remove("active");
    }
  }

  buyUpgrade(upgradeId) {
    sounds.init();
    const config = UPGRADE_CONFIGS.find(u => u.id === upgradeId);
    if (!config) return;

    const cost = this.getUpgradeCost(config);
    if (this.state.balance >= cost) {
      this.state.balance -= cost;
      const progress = this.getTierProgress();
      progress.upgrades[upgradeId] = (progress.upgrades[upgradeId] || 0) + 1;

      // При покупке увеличения батареи — мгновенно восстанавливаем 100% энергии!
      if (upgradeId === "max_energy") {
        this.state.energy = this.getMaxEnergy();
        this.flashScreenMsg("БАТАРЕЯ 100%!", "#00ff88");
      }

      sounds.playUpgrade();
      triggerHaptic("medium");
      this.saveState();
      this.renderLists();
      this.renderUI();
    }
  }

  buyBusiness(bizId) {
    sounds.init();
    const config = BUSINESS_CONFIGS.find(b => b.id === bizId);
    if (!config) return;

    const cost = this.getBusinessCost(config);
    if (this.state.balance >= cost) {
      this.state.balance -= cost;
      const progress = this.getTierProgress();
      const prevCount = progress.businesses[bizId] || 0;
      const newCount = prevCount + 1;
      progress.businesses[bizId] = newCount;

      sounds.playUpgrade();
      triggerHaptic("medium");

      // Праздничный салют при достижении круглых чисел (майлстоунов)
      if (newCount === 25 || newCount === 50 || newCount === 100) {
        sounds.playJackpot();
        this.spawnConfetti();
        this.flashScreenMsg(`МАЙЛСТОУН ${newCount}! ДОХОД x2!`, "#ffd700");
      }

      this.saveState();
      this.renderLists();
      this.renderUI();
    }
  }

  upgradeAtmTier() {
    sounds.init();
    const currentMax = this.state.maxUnlockedTier !== undefined ? this.state.maxUnlockedTier : this.state.atmTierIndex;
    const nextTierIndex = currentMax + 1;
    const nextTier = ATM_TIERS[nextTierIndex];
    if (!nextTier) return;

    const cost = this.getTierCost(nextTierIndex);
    if (this.state.balance >= cost) {
      this.state.balance -= cost;
      this.state.maxUnlockedTier = nextTierIndex;
      this.state.atmTierIndex = nextTierIndex;
      // Инициализируем новую ветку бустеров на новом банкомате
      this.getTierProgress(nextTierIndex);

      // Полное восстановление энергии при переходе на новый банкомат!
      this.state.energy = this.getMaxEnergy();
      this.cachedDispenserPos = null;

      sounds.playJackpot();
      triggerHaptic("success");
      this.updateAtmAppearance();
      this.saveState();
      this.syncWithCloud(true);
      this.renderLists();
      this.renderUI();
      this.spawnConfetti();
      this.flashScreenMsg("НОВОЕ ПОКОЛЕНИЕ!", "#ffd700");
      this.printReceipt(nextTier.name, cost);
    }
  }

  selectTier(index) {
    const maxUnlocked = this.state.maxUnlockedTier !== undefined ? this.state.maxUnlockedTier : this.state.atmTierIndex;
    if (index >= 0 && index <= maxUnlocked && index < ATM_TIERS.length) {
      this.state.atmTierIndex = index;
      // Полное восстановление энергии при выборе банкомата
      this.state.energy = this.getMaxEnergy();
      this.cachedDispenserPos = null;
      sounds.playTap();
      triggerHaptic("medium");
      this.updateAtmAppearance();
      this.saveState();
      this.syncWithCloud(true);
      this.renderLists();
      this.renderUI();
      this.flashScreenMsg(ATM_TIERS[index].name, "#00f2fe");
    }
  }

  setTier(index) {
    this.selectTier(index);
  }

  updateAtmAppearance() {
    const atmWrapper = document.getElementById("atmWrapper");
    const tier = ATM_TIERS[this.state.atmTierIndex];

    atmWrapper.innerHTML = tier.render(this.state);

    document.getElementById("userTier").textContent = tier.name;
    document.getElementById("statAtmTier").textContent = tier.name;

    const screenTapVal = document.getElementById("screenTapVal");
    if (screenTapVal) {
      screenTapVal.textContent = `+${this.formatMoney(this.getTapPower())}`;
    }

    if (this.pinChallenge && this.pinChallenge.active) {
      this.renderPinChallengeUI();
    }
  }

  checkOfflineProgress() {
    const now = Date.now();
    const last = this.state.lastSaveTime || now;
    const diffSec = Math.floor((now - last) / 1000);

    // Восстановление энергии в офлайне (даже когда игрока нет в игре)
    if (diffSec > 0) {
      const maxE = this.getMaxEnergy();
      const recovered = diffSec * this.getRechargeRate();
      this.state.energy = Math.min(maxE, (this.state.energy !== undefined ? this.state.energy : maxE) + recovered);
    }

    const passive = this.getPassiveIncome();
    // Офлайн доход начисляется при отсутствии от 30 секунд.
    // Сбалансированный лимит: максимум 2 часа (7200 сек), эффективность 20%
    if (diffSec > 30 && passive > 0) {
      const cappedSec = Math.min(diffSec, 7200);
      const offlineEfficiency = 0.20;
      const earned = Math.floor(cappedSec * passive * offlineEfficiency);

      if (earned > 0) {
        this.state.balance += earned;
        this.state.totalEarned += earned;

        document.getElementById("offlinePayoutAmount").textContent = `+${this.formatMoney(earned)}`;
        document.getElementById("offlineModal").classList.remove("hidden");
      }
    }
  }

  // --- ДЕНЬ И НОЧЬ (ДИНАМИЧЕСКИЙ ФОН И ФОНАРЬ) ---
  toggleTheme() {
    this.state.theme = (this.state.theme === "night") ? "day" : "night";
    this.updateThemeUI();
    this.saveState();
    sounds.playTap();
    triggerHaptic("light");
  }

  updateThemeUI() {
    const isNight = this.state.theme === "night";
    document.body.classList.toggle("theme-day", !isNight);
    const themeBtn = document.getElementById("themeToggleBtn");
    const lantern = document.getElementById("nightLantern");

    if (themeBtn) {
      themeBtn.innerHTML = isNight ? SVG_ICONS.sunIcon : SVG_ICONS.moonIcon;
      themeBtn.title = isNight ? "Переключить на Дневной свет холла" : "Переключить на Ночной фонарь";
    }

    if (lantern) {
      if (isNight) lantern.classList.remove("hidden");
      else lantern.classList.add("hidden");
    }
  }

  // --- ИНТЕРАКТИВНЫЙ ВВОД ПИН-КОДА С ВЫНОСОМ КЛАВИАТУРЫ ВПЕРЕД (7 СЕКУНД) ---
  schedulePinChallenge() {
    clearTimeout(this.pinPromptTimer);
    const delay = 40000 + Math.random() * 45000;
    this.pinPromptTimer = setTimeout(() => {
      this.triggerPinChallenge();
    }, delay);
  }

  triggerPinChallenge() {
    const codes = ["7777", "1234", "9999", "5555", "3333", "8888"];
    const code = codes[Math.floor(Math.random() * codes.length)];
    this.pinChallenge = {
      active: true,
      code: code,
      input: "",
      totalDuration: 7000,
      startTime: Date.now()
    };

    sounds.playUpgrade();
    triggerHaptic("medium");

    // Открываем тактильный всплывающий PIN-пад вперед экрана для телефонов
    const modal = document.getElementById("pinPadModal");
    const codeEl = document.getElementById("pinTargetCode");
    if (codeEl) codeEl.textContent = code.split("").join("-");

    this.renderPinDots();
    if (modal) modal.classList.remove("hidden");

    // Запускаем 7-секундный таймер
    clearInterval(this.pinTimerInterval);
    this.pinTimerInterval = setInterval(() => {
      if (!this.pinChallenge.active) {
        clearInterval(this.pinTimerInterval);
        return;
      }

      const elapsed = Date.now() - this.pinChallenge.startTime;
      const remaining = Math.max(0, this.pinChallenge.totalDuration - elapsed);
      const remainingSec = (remaining / 1000).toFixed(1);

      const timerDisplay = document.getElementById("pinTimerDisplay");
      const progressFill = document.getElementById("pinTimerProgress");

      if (timerDisplay) timerDisplay.textContent = `${remainingSec}с`;
      if (progressFill) progressFill.style.width = `${(remaining / this.pinChallenge.totalDuration) * 100}%`;

      if (remaining <= 0) {
        clearInterval(this.pinTimerInterval);
        this.pinTimeExpired();
      }
    }, 50);
  }

  renderPinDots() {
    const dotsContainer = document.getElementById("pinSheetDots");
    if (!dotsContainer) return;
    const code = this.pinChallenge.code;
    const input = this.pinChallenge.input;

    let html = "";
    for (let i = 0; i < code.length; i++) {
      const isFilled = i < input.length;
      html += `<span class="pin-sheet-dot ${isFilled ? 'filled' : ''}"></span>`;
    }
    dotsContainer.innerHTML = html;
  }

  pinTimeExpired() {
    if (!this.pinChallenge.active) return;
    triggerHaptic("heavy");
    sounds.playTap();
    this.flashScreenMsg("ВРЕМЯ ВЫШЛО!", "#ff3366");

    this.pinChallenge.active = false;
    this.pinChallenge.input = "";
    const modal = document.getElementById("pinPadModal");
    if (modal) modal.classList.add("hidden");
    this.schedulePinChallenge();
  }

  handlePinKey(keyVal) {
    if (!this.pinChallenge.active) return;

    if (keyVal === "cancel" || keyVal === "✕" || keyVal.toLowerCase() === "c") {
      this.pinChallenge.input = "";
      sounds.playTap();
      triggerHaptic("light");
      this.renderPinDots();
    } else if (keyVal === "ok" || keyVal === "✓" || keyVal.toLowerCase() === "enter") {
      this.submitPin();
    } else if (/^[0-9]$/.test(keyVal)) {
      if (this.pinChallenge.input.length < this.pinChallenge.code.length) {
        this.pinChallenge.input += keyVal;
        this.renderPinDots();

        // Автопроверка при заполнении 4 цифр
        if (this.pinChallenge.input.length === this.pinChallenge.code.length) {
          setTimeout(() => {
            if (this.pinChallenge.active) this.submitPin();
          }, 180);
        }
      }
    }
  }

  submitPin() {
    if (!this.pinChallenge.active) return;
    clearInterval(this.pinTimerInterval);

    if (this.pinChallenge.input === this.pinChallenge.code) {
      // Сейф открыт! Начисляем джекпот
      sounds.playSafeOpen();
      triggerHaptic("success");
      this.spawnConfetti();

      const jackpot = Math.max(1500, Math.floor(this.getTapPower() * 120 + this.getPassiveIncome() * 45));
      this.state.balance += jackpot;
      this.state.totalEarned += jackpot;

      this.spawnFloatingText(window.innerWidth / 2, window.innerHeight / 2 - 30, `СЕЙФ ОТКРЫТ! +${this.formatMoney(jackpot)}`, true);
      this.flashScreenMsg("ДЖЕКПОТ СЕЙФА!", "#ffd700");

      this.pinChallenge.active = false;
      this.pinChallenge.input = "";

      const modal = document.getElementById("pinPadModal");
      if (modal) modal.classList.add("hidden");

      this.renderUI();
      this.schedulePinChallenge();
    } else {
      triggerHaptic("heavy");
      sounds.playTap();
      this.pinChallenge.input = "";
      this.renderPinDots();
      this.flashScreenMsg("НЕВЕРНЫЙ КОД!", "#ff3366");
    }
  }

  onKeyPress(keyEl) {
    sounds.init();
    sounds.playKeyClick();
    triggerHaptic("medium");

    keyEl.classList.remove("key-pressed");
    void keyEl.offsetWidth;
    keyEl.classList.add("key-pressed");
    setTimeout(() => keyEl.classList.remove("key-pressed"), 120);

    const val = (keyEl.dataset.key || keyEl.textContent || "").trim();
    if (this.pinChallenge.active) {
      this.handlePinKey(val);
    }
  }

  // --- ЛАКОНИЧНЫЙ ТЕРМОПРИНТЕР ЧЕКОВ (ТОЛЬКО НОВЫЙ БАНКОМАТ — ОДИН ЧЕК) ---
  printReceipt(tierName, amount) {
    if (this.isReceiptActive) return;
    this.isReceiptActive = true;
    this.isReceiptTearing = false;

    sounds.playPrinter();
    triggerHaptic("medium");

    const container = document.getElementById("receiptContainer");
    if (!container) return;

    const dateStr = new Date().toLocaleTimeString("ru-RU", { hour: "2-digit", minute: "2-digit" });
    const atmNumber = this.state.atmTierIndex + 1;
    const cashback = Math.max(50, Math.floor(amount * 0.05));

    container.innerHTML = `
      <div class="receipt-ticket" id="activeReceiptTicket">
        <div class="receipt-header-row">
          <div class="receipt-bird-ico">${SVG_ICONS.chizhBirdColor}</div>
          <div class="receipt-bank-title">CHIZHBANK</div>
        </div>
        <div class="receipt-body-content">
          <div class="receipt-meta-line">
            <span>ТЕРМИНАЛ #${atmNumber}</span>
            <span>${dateStr}</span>
          </div>
          <div class="receipt-divider"></div>
          <div class="receipt-small-header">МОДЕРНИЗАЦИЯ СЕТИ</div>
          <div class="receipt-tier-bold">${tierName}</div>
          <div class="receipt-total-row">
            <span>СТОИМОСТЬ:</span>
            <b style="color: #059669;">${this.formatMoney(amount)}</b>
          </div>
          <div class="receipt-stamp-paid">✓ ОПЛАЧЕНО</div>
        </div>
        <div class="receipt-tear-pill">
          <span class="tear-ico">${SVG_ICONS.appleScissors}</span>
          <span>Тапните, чтобы оторвать (+5% кэшбэк)</span>
        </div>
      </div>
    `;

    container.classList.remove("hidden");
    container.classList.remove("tearing");

    const tearOff = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      if (this.isReceiptTearing) return;
      this.isReceiptTearing = true;

      sounds.playPaperTear();
      triggerHaptic("success");

      this.state.balance += cashback;
      this.state.totalEarned += cashback;

      const rect = container.getBoundingClientRect();
      this.spawnFloatingText(rect.left + rect.width / 2, rect.top + 30, `+5% КЭШБЭК +${this.formatMoney(cashback)}!`, true);
      this.spawnConfetti();
      this.renderUI();

      container.classList.add("tearing");
      setTimeout(() => {
        container.classList.add("hidden");
        container.classList.remove("tearing");
        container.innerHTML = "";
        this.isReceiptActive = false;
        this.isReceiptTearing = false;
      }, 450);
    };

    container.onclick = tearOff;
  }
  // --- 4 ЛЕТАЮЩИЕ БАНКОВСКИЕ КАРТЫ packet (BRONZE, SILVER, GOLD, DIAMOND) ---
  scheduleGoldenBonus() {
    const delay = 45000 + Math.random() * 45000;
    setTimeout(() => {
      this.spawnBonusCard();
      this.scheduleGoldenBonus();
    }, delay);
  }

  spawnBonusCard() {
    const oldCard = document.getElementById("flyingCardWrapper");
    if (oldCard) oldCard.remove();

    // Взвешенный рандом редкости карт
    const totalWeight = BONUS_CARDS.reduce((sum, c) => sum + c.weight, 0);
    let rand = Math.random() * totalWeight;
    let selectedCard = BONUS_CARDS[0];
    for (const card of BONUS_CARDS) {
      if (rand < card.weight) {
        selectedCard = card;
        break;
      }
      rand -= card.weight;
    }

    const cardEl = document.createElement("div");
    cardEl.id = "flyingCardWrapper";
    cardEl.className = "flying-card-wrapper";
    cardEl.innerHTML = selectedCard.svg;

    const startLeft = Math.random() > 0.5;
    const startX = startLeft ? -130 : window.innerWidth + 20;
    const targetX = startLeft ? window.innerWidth + 20 : -130;
    const startY = 140 + Math.random() * (window.innerHeight - 340);

    cardEl.style.left = "0px";
    cardEl.style.top = "0px";
    cardEl.style.willChange = "transform";
    cardEl.style.transform = `translate3d(${startX}px, ${startY}px, 0)`;
    document.body.appendChild(cardEl);

    let progress = 0;
    const duration = 11500;
    const startTime = performance.now();

    const animCard = (currentTime) => {
      if (!cardEl.parentNode) return;
      progress = (currentTime - startTime) / duration;
      if (progress >= 1) {
        cardEl.remove();
        return;
      }

      const curX = startX + (targetX - startX) * progress;
      const curY = startY + Math.sin(progress * Math.PI * 2) * 20;
      const tilt = (startLeft ? 1 : -1) * (3 + Math.sin(progress * Math.PI * 3) * 2.5);
      cardEl.style.transform = `translate3d(${curX}px, ${curY}px, 0) rotate(${tilt}deg)`;

      requestAnimationFrame(animCard);
    };

    requestAnimationFrame(animCard);

    cardEl.onpointerdown = (e) => {
      e.stopPropagation();
      e.preventDefault();
      cardEl.remove();

      sounds.playJackpot();
      triggerHaptic("success");

      let bonusReward = 0;
      let toastDesc = "";

      if (selectedCard.id === "bronze") {
        bonusReward = Math.max(250, Math.floor(this.getPassiveIncome() * 30 + this.getTapPower() * 40));
        toastDesc = `+$${this.formatMoney(bonusReward)} кэша!`;
      } else if (selectedCard.id === "silver") {
        bonusReward = Math.max(600, Math.floor(this.getPassiveIncome() * 60 + this.getTapPower() * 80));
        this.state.energy = this.getMaxEnergy();
        toastDesc = `+$${this.formatMoney(bonusReward)} + 100% Энергии!`;
      } else if (selectedCard.id === "gold") {
        bonusReward = Math.max(1500, Math.floor(this.getPassiveIncome() * 120 + this.getTapPower() * 150));
        this.triggerFrenzy();
        toastDesc = `+$${this.formatMoney(bonusReward)} + СБОЙ ТАП x3!`;
      } else if (selectedCard.id === "diamond") {
        bonusReward = Math.max(5000, Math.floor(this.getPassiveIncome() * 300 + this.getTapPower() * 400));
        this.state.energy = this.getMaxEnergy();
        this.triggerFrenzy();
        toastDesc = `ДЖЕКПОТ +$${this.formatMoney(bonusReward)} + x5 ТУРБО!`;
      }

      this.state.balance += bonusReward;
      this.state.totalEarned += bonusReward;
      this.state.cardsCaught++;

      this.showCardToast(selectedCard, toastDesc);
      this.spawnFloatingText(e.clientX, e.clientY, `+${this.formatMoney(bonusReward)}!`, true);
      this.spawnConfetti();
      this.flashScreenMsg(selectedCard.name.toUpperCase(), "#ffd700");
      this.renderUI();
    };
  }

  showCardToast(card, desc) {
    const container = document.getElementById("cardToastContainer");
    if (!container) return;

    container.innerHTML = `
      <div class="card-caught-toast">
        <div class="toast-card-thumb">${card.svg}</div>
        <div class="toast-info-col">
          <h4>${card.name}</h4>
          <p>${desc}</p>
        </div>
      </div>
    `;

    setTimeout(() => {
      container.innerHTML = "";
    }, 3800);
  }

  // --- АККОРДЕОН: СВОРАЧИВАНИЕ/РАЗВОРАЧИВАНИЕ ВКЛАДОК ---
  toggleAccordion(cardId) {
    const card = document.getElementById(cardId);
    if (!card) return;
    sounds.init();
    sounds.playTap();
    triggerHaptic("light");
    card.classList.toggle("open");
    // Если игрок открыл лидерборд — моментально подтягиваем свежие данные из облака
    if (cardId === "cardLeaderboard" && card.classList.contains("open")) {
      this.fetchCloudLeaderboard();
    }
  }

  // --- СИСТЕМА АЧИВОК: 1 АЧИВКА = 1 СКИН КУПЮР ---
  checkAchievements() {
    let newlyUnlocked = false;
    for (const ach of ACHIEVEMENTS_CONFIG) {
      if (!this.state.achievements[ach.id]) {
        if (ach.check(this)) {
          this.state.achievements[ach.id] = true;
          this.state.unlockedSkins[ach.rewardSkinId] = true;
          newlyUnlocked = true;
          sounds.playUpgrade();
          const skin = BILL_SKINS[ach.rewardSkinId];
          this.flashScreenMsg(`СКИH: ${skin.name}!`, "#00ff88");
        }
      }
    }
    if (newlyUnlocked) {
      this.saveState();
      this.renderAchievementsUI();
      this.renderSkinsUI();
      this.renderCareerUI();
    }
  }

  renderAchievementsUI() {
    const list = document.getElementById("achievementsList");
    const countBadge = document.getElementById("achieveUnlockedCount");
    if (!list) return;

    let unlockedCount = 0;
    let html = "";
    for (const ach of ACHIEVEMENTS_CONFIG) {
      const isDone = !!this.state.achievements[ach.id];
      if (isDone) unlockedCount++;
      const skin = BILL_SKINS[ach.rewardSkinId];

      html += `
        <div class="achieve-row ${isDone ? 'unlocked' : ''}">
          <div class="achieve-left">
            <div class="achieve-icon-badge" style="background: ${isDone ? 'rgba(0, 255, 136, 0.2)' : 'rgba(255, 255, 255, 0.05)'}; color: ${isDone ? '#00ff88' : '#64748b'}; width: 26px; height: 26px;">
              ${isDone ? SVG_ICONS.appleCheckCircle : SVG_ICONS.appleLock}
            </div>
            <div>
              <div class="achieve-name" style="color: ${isDone ? '#00ff88' : '#fff'};">${ach.name}</div>
              <div class="achieve-desc">${ach.desc}</div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <div style="width: 28px; height: 16px; border-radius: 2px; background: ${skin.color}; border: 1px solid ${skin.border}; display: flex; align-items: center; justify-content: center; font-size: 8px; font-weight: 900; color: ${skin.text};">$</div>
            <span style="font-size: 10px; font-weight: 800; color: ${isDone ? '#00ff88' : '#94a3b8'};">${isDone ? '✓ Открыт' : skin.name}</span>
          </div>
        </div>
      `;
    }
    list.innerHTML = html;
    if (countBadge) countBadge.textContent = `${unlockedCount} из ${ACHIEVEMENTS_CONFIG.length} открыто`;
  }

  // --- КАСТОМИЗАЦИЯ СКИНОВ БАНКНОТ ---
  renderSkinsUI() {
    const grid = document.getElementById("billSkinsGrid");
    const label = document.getElementById("activeSkinLabel");
    if (!grid) return;

    const currentSkin = this.state.activeBillSkin || "green";
    if (label && BILL_SKINS[currentSkin]) {
      label.textContent = BILL_SKINS[currentSkin].name;
      label.style.color = BILL_SKINS[currentSkin].color;
    }

    let html = "";
    for (const key of Object.keys(BILL_SKINS)) {
      const skin = BILL_SKINS[key];
      const isUnlocked = !!(this.state.unlockedSkins && this.state.unlockedSkins[skin.id]);
      const isActive = skin.id === currentSkin;

      html += `
        <div class="skin-btn ${isActive ? 'active' : ''} ${!isUnlocked ? 'locked' : ''}" style="${!isUnlocked ? 'opacity: 0.65;' : ''}" onclick="window.game.selectBillSkin('${skin.id}')">
          <div class="skin-sample-rect" style="background: ${skin.color}; border-color: ${skin.border}; color: ${skin.text}; position: relative;">
            $
            ${!isUnlocked ? `<div style="position: absolute; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; width: 14px; height: 14px; margin: auto;">${SVG_ICONS.appleLock}</div>` : ''}
          </div>
          <span class="skin-label" style="color: ${isActive ? '#00ff88' : isUnlocked ? '#cbd5e1' : '#64748b'};">${skin.name}</span>
        </div>
      `;
    }
    grid.innerHTML = html;
  }

  selectBillSkin(skinId) {
    const skin = BILL_SKINS[skinId];
    if (!skin) return;

    if (!this.state.unlockedSkins || !this.state.unlockedSkins[skinId]) {
      const ach = ACHIEVEMENTS_CONFIG.find(a => a.rewardSkinId === skinId);
      sounds.playTap();
      triggerHaptic("heavy");
      if (ach) {
        this.flashScreenMsg(`АЧИВКА: ${ach.name}!`, "#ff3366");
      }
      return;
    }

    this.state.activeBillSkin = skinId;
    sounds.playTap();
    triggerHaptic("light");
    this.saveState();
    this.renderSkinsUI();
  }

  // --- КАРЬЕРА И РАНГИ БАНКИРА ---
  renderCareerUI() {
    const rank = this.getCareerRank();
    const rankBadge = document.getElementById("currentRankBadge");
    const rankBonus = document.getElementById("currentRankBonus");
    const fill = document.getElementById("careerProgressFill");
    const curVal = document.getElementById("careerProgressCurrent");
    const nextVal = document.getElementById("careerProgressNext");

    if (rankBadge) {
      rankBadge.textContent = rank.name;
      rankBadge.style.color = rank.badgeColor;
      rankBadge.style.borderColor = rank.badgeColor;
    }

    if (rankBonus) {
      const bonusPct = Math.round((rank.bonusMult - 1) * 100);
      rankBonus.textContent = `Бонус ко всем доходам: +${bonusPct}%`;
    }

    const curIndex = CAREER_RANKS.findIndex(r => r.id === rank.id);
    const nextRank = CAREER_RANKS[curIndex + 1];
    const earned = this.state.totalEarned || 0;

    if (curVal) curVal.textContent = this.formatMoney(earned);

    if (nextRank) {
      if (nextVal) nextVal.textContent = `Следующий: ${nextRank.name} (${this.formatMoney(nextRank.minEarned)})`;
      const range = nextRank.minEarned - rank.minEarned;
      const progress = Math.min(100, Math.max(0, ((earned - rank.minEarned) / range) * 100));
      if (fill) fill.style.width = `${progress}%`;
    } else {
      if (nextVal) nextVal.textContent = "Максимальный ранг!";
      if (fill) fill.style.width = "100%";
    }
  }

  // --- ВЫХОД НА БИРЖУ (IPO / ПРЕСТИЖ) С МГНОВЕННЫМ ОТКЛИКОМ ---
  renderIpoUI() {
    const activeBadge = document.getElementById("activeSharesBadge");
    const triggerBtn = document.getElementById("openIpoModalBtn");
    const shares = this.state.chizhShares || 0;
    const mult = this.getIpoMultiplier();
    const target = this.getIpoTarget();

    if (activeBadge) {
      const badgeText = `Золотые Акции: ${shares} шт (x${mult.toFixed(1)} глобально)`;
      if (activeBadge.textContent !== badgeText) activeBadge.textContent = badgeText;
    }

    if (triggerBtn) {
      const canIpo = this.state.balance >= target;
      const targetText = canIpo
        ? `Выйти на IPO (+${Math.floor(this.state.balance / target)} Акций)`
        : `Выйти на IPO (нужен $${this.formatMoney(target)})`;

      if (triggerBtn.textContent !== targetText) triggerBtn.textContent = targetText;
      triggerBtn.classList.toggle("can-ipo-ready", canIpo);
    }
  }

  openIpoModal() {
    sounds.init();
    sounds.playTap();
    triggerHaptic("medium");

    const modal = document.getElementById("ipoModal");
    if (!modal) return;

    const target = this.getIpoTarget();
    const canIpo = this.state.balance >= target;
    const gain = Math.max(1, Math.floor(this.state.balance / target));
    const nextShares = (this.state.chizhShares || 0) + (canIpo ? gain : 1);
    const nextMult = 1 + nextShares * 1.0;

    const sharesGain = document.getElementById("ipoSharesGain");
    const newMult = document.getElementById("ipoNewMultiplier");
    const confirmBtn = document.getElementById("confirmIpoBtn");

    if (canIpo) {
      if (sharesGain) sharesGain.textContent = `Вы получите: +${gain} Золотых Акций Чижа`;
      if (newMult) newMult.textContent = `Новый вечный множитель: x${nextMult.toFixed(1)} ко всему доходу`;
      if (confirmBtn) {
        confirmBtn.disabled = false;
        confirmBtn.textContent = "Провести IPO";
        confirmBtn.style.opacity = "1";
        confirmBtn.style.cursor = "pointer";
      }
    } else {
      const pct = Math.min(100, (this.state.balance / target) * 100).toFixed(1);
      if (sharesGain) sharesGain.textContent = `Капитал: ${this.formatMoney(this.state.balance)} из $${this.formatMoney(target)} (${pct}%)`;
      if (newMult) newMult.textContent = `При достижении цели: множитель x${nextMult.toFixed(1)}`;
      if (confirmBtn) {
        confirmBtn.disabled = true;
        confirmBtn.textContent = `Требуется $${this.formatMoney(target)} (${pct}%)`;
        confirmBtn.style.opacity = "0.5";
        confirmBtn.style.cursor = "not-allowed";
      }
    }

    modal.classList.remove("hidden");
  }

  confirmIpo() {
    const target = this.getIpoTarget();
    if (this.state.balance < target) {
      this.flashScreenMsg(`НУЖЕН $${this.formatMoney(target)} ДЛЯ IPO!`, "#ef4444");
      return;
    }

    const gain = Math.max(1, Math.floor(this.state.balance / target));
    this.state.chizhShares = (this.state.chizhShares || 0) + gain;
    this.state.ipoCount = (this.state.ipoCount || 0) + 1;

    // Мягкий сброс уровней для реинкарнации
    this.state.balance = 0;
    this.state.atmTierIndex = 0;
    this.state.maxUnlockedTier = 0;
    this.state.tierProgress = { 0: { upgrades: {}, businesses: {} } };
    this.state.energy = this.getMaxEnergy();

    sounds.playJackpot();
    triggerHaptic("success");
    this.spawnConfetti();

    const modal = document.getElementById("ipoModal");
    if (modal) modal.classList.add("hidden");

    this.saveState();
    this.syncWithCloud(true);
    this.updateAtmAppearance();
    this.renderLists();
    this.renderUI();
    this.renderIpoUI();
    this.flashScreenMsg(`УСПЕШНОЕ IPO #${this.state.ipoCount}! x${this.getIpoMultiplier().toFixed(1)} МНОЖИТЕЛЬ!`, "#ffd700");
  }

  renderLists() {
    const upgradesList = document.getElementById("upgradesList");
    if (upgradesList) {
      let html = "";

      const currentMax = this.state.maxUnlockedTier !== undefined ? this.state.maxUnlockedTier : this.state.atmTierIndex;
      const nextTier = ATM_TIERS[currentMax + 1];
      if (nextTier) {
        const cost = this.getTierCost(currentMax + 1);
        const canAfford = this.state.balance >= cost;
        html += `
          <div class="upgrade-card" style="border: 1px solid #ffd700; background: rgba(255, 215, 0, 0.08);">
            <div class="card-left">
              <div class="card-icon" style="background: rgba(255, 215, 0, 0.2); color: #ffd700;">
                ${getIconSvg('crown')}
              </div>
              <div class="card-info">
                <div class="card-name">Открыть: ${nextTier.name}</div>
                <div class="card-desc">${nextTier.description}</div>
                <div class="card-level">Множитель дохода: x${nextTier.multiplier} • Новый уровень!</div>
              </div>
            </div>
            <button class="card-buy-btn" style="background: linear-gradient(135deg, #f59e0b, #d97706);" ${canAfford ? "" : "disabled"} onclick="window.game.upgradeAtmTier()">
              <span>${this.formatMoney(cost)}</span>
              <small>Купить</small>
            </button>
          </div>
        `;
      }

      UPGRADE_CONFIGS.forEach(u => {
        const level = this.getUpgradeLevel(u.id);
        const cost = this.getUpgradeCost(u);
        const canAfford = this.state.balance >= cost;

        html += `
          <div class="upgrade-card">
            <div class="card-left">
              <div class="card-icon">${getIconSvg(u.iconName)}</div>
              <div class="card-info">
                <div class="card-name">${u.name}</div>
                <div class="card-desc">${u.desc}</div>
                <div class="card-level">Уровень ${level} (Банкомат #${this.state.atmTierIndex + 1})</div>
              </div>
            </div>
            <button class="card-buy-btn" ${canAfford ? "" : "disabled"} onclick="window.game.buyUpgrade('${u.id}')">
              <span>${this.formatMoney(cost)}</span>
              <small>Улучшить</small>
            </button>
          </div>
        `;
      });
      upgradesList.innerHTML = html;
    }

    const businessList = document.getElementById("businessList");
    if (businessList) {
      let html = "";
      BUSINESS_CONFIGS.forEach(b => {
        const count = this.getBusinessCount(b.id);
        const cost = this.getBusinessCost(b);
        const canAfford = this.state.balance >= cost;
        const currentIncome = this.getSingleBusinessIncome(b);
        const nextMilestone = count < 25 ? 25 : count < 50 ? 50 : 100;

        html += `
          <div class="upgrade-card">
            <div class="card-left">
              <div class="card-icon biz-icon-${b.id}">${getIconSvg(b.iconName)}</div>
              <div class="card-info">
                <div class="card-name">${b.name}</div>
                <div class="card-desc">${b.desc}</div>
                <div class="card-level">Куплено: ${count} (${this.formatMoney(currentIncome)}/сек) • Цель: ${nextMilestone}</div>
              </div>
            </div>
            <button class="card-buy-btn" ${canAfford ? "" : "disabled"} onclick="window.game.buyBusiness('${b.id}')">
              <span>${this.formatMoney(cost)}</span>
              <small>Купить</small>
            </button>
          </div>
        `;
      });
      businessList.innerHTML = html;
    }

    document.getElementById("statTotalEarned").textContent = this.formatMoney(this.state.totalEarned);
    document.getElementById("statTotalClicks").textContent = this.state.totalClicks.toLocaleString();
    document.getElementById("statCardsCaught").textContent = this.state.cardsCaught.toLocaleString();
    document.getElementById("statFrenzies").textContent = this.state.frenziesTriggered.toLocaleString();
    const statTierEl = document.getElementById("statAtmTier");
    if (statTierEl && ATM_TIERS[this.state.atmTierIndex]) {
      statTierEl.textContent = `${ATM_TIERS[this.state.atmTierIndex].name} (Множитель: x${ATM_TIERS[this.state.atmTierIndex].multiplier})`;
    }

    this.renderHangarTiers();
    this.renderLeaderboard();
  }

  renderHangarTiers() {
    const listEl = document.getElementById("hangarTiersList");
    if (!listEl) return;

    const maxUnlocked = this.state.maxUnlockedTier !== undefined ? this.state.maxUnlockedTier : this.state.atmTierIndex;
    let html = "";

    ATM_TIERS.forEach((tier, index) => {
      const isUnlocked = index <= maxUnlocked;
      const isActive = index === this.state.atmTierIndex;

      if (isUnlocked) {
        html += `
          <div class="hangar-tier-row ${isActive ? 'active' : ''}">
            <div class="hangar-row-left">
              <span class="hangar-tier-num">#${index + 1}</span>
              <div class="hangar-tier-info">
                <span class="hangar-tier-name">${tier.name}</span>
                <span class="hangar-tier-desc">Множитель дохода: x${tier.multiplier} • ${tier.badge}</span>
              </div>
            </div>
            <div class="hangar-row-right">
              ${isActive
                ? `<span class="badge-active-tier">АКТИВЕН</span>`
                : `<button class="btn-select-tier" onclick="window.game.selectTier(${index})">Включить</button>`
              }
            </div>
          </div>
        `;
      } else {
        html += `
          <div class="hangar-tier-row locked" style="opacity: 0.5;">
            <div class="hangar-row-left">
              <span class="hangar-tier-num"><span class="apple-svg-inline" style="color: #94a3b8;">${SVG_ICONS.appleLock}</span> #${index + 1}</span>
              <div class="hangar-tier-info">
                <span class="hangar-tier-name">${tier.name}</span>
                <span class="hangar-tier-desc" style="color: #94a3b8;">Открывается за ${this.formatMoney(this.getTierCost(index))}</span>
              </div>
            </div>
            <div class="hangar-row-right">
              <span style="font-size: 11px; font-weight: 800; color: #64748b;">ЗАКРЫТ</span>
            </div>
          </div>
        `;
      }
    });

    listEl.innerHTML = html;
  }

  renderModalGallery() {
    const grid = document.getElementById("modalGalleryGrid");
    if (!grid) return;

    const tiers = [
      { key: "tier1", photoRef: "Поколение 1 • Уличный терминал 90-х", cost: 0 },
      { key: "tier2", photoRef: "Поколение 2 • Графитовый Ритейл ChizhBank", cost: 5000 },
      { key: "tier3", photoRef: "Поколение 3 • Изумрудный Металлик", cost: 45000 },
      { key: "tier4", photoRef: "Поколение 4 • Сапфировый Киоск", cost: 350000 },
      { key: "tier5", photoRef: "Поколение 5 • Солнечный Тотем", cost: 2500000 },
      { key: "tier6", photoRef: "Поколение 6 • Маджента Неон Киоск", cost: 16000000 },
      { key: "tier7", photoRef: "Поколение 7 • Алый Киоск со Светодиодной Строкой", cost: 95000000 },
      { key: "tier8", photoRef: "Поколение 8 • Двухэкранный Кокпит OLED", cost: 650000000 },
      { key: "tier9", photoRef: "Поколение 9 • Квантовый Кибер-Банк 2077", cost: 4000000000 }
    ];

    const maxUnlocked = this.state.maxUnlockedTier !== undefined ? this.state.maxUnlockedTier : this.state.atmTierIndex;

    let html = "";
    tiers.forEach((item, index) => {
      const model = ATM_MODELS[item.key];
      const isCurrent = index === this.state.atmTierIndex;
      const isUnlocked = index <= maxUnlocked;

      let statusHtml = "";
      if (isCurrent) {
        statusHtml = `<span class="modal-status-badge status-current"><span class="apple-svg-inline">${SVG_ICONS.appleStar}</span> ТЕКУЩИЙ БАНКОМАТ</span>`;
      } else if (isUnlocked) {
        statusHtml = `<span class="modal-status-badge status-unlocked"><span class="apple-svg-inline">${SVG_ICONS.appleCheckCircle}</span> РАЗБЛОКИРОВАН</span>`;
      } else {
        statusHtml = `<span class="modal-status-badge status-locked"><span class="apple-svg-inline" style="color: #94a3b8;">${SVG_ICONS.appleLock}</span> Открывается за ${this.formatMoney(this.getTierCost(index))} (Прокачка)</span>`;
      }

      html += `
        <div class="modal-gallery-item ${isCurrent ? 'is-current' : ''}">
          <div class="modal-card-meta">
            <span class="meta-name">${model.name}</span>
            <span class="meta-badge">${model.badge}</span>
          </div>

          <div class="modal-atm-preview-box">
            <div class="atm-interactive-wrapper" id="modalAtm_${index}">
              ${model.render(this.state)}
            </div>
          </div>

          <div class="modal-card-info-box">
            <b style="color: #fff;">${item.photoRef}</b><br>
            <span>${model.description}</span><br>
            <div style="margin-top: 4px; font-weight: 800; color: #00ff88;"><span class="apple-svg-inline" style="color: #ffd700;">${SVG_ICONS.appleBolt}</span> Множитель дохода: x${model.multiplier}</div>
            ${statusHtml}
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;

    // Добавляем тактильный отклик на нажатия по банкоматам в музее
    tiers.forEach((_, index) => {
      const wrapper = document.getElementById(`modalAtm_${index}`);
      if (wrapper) {
        wrapper.addEventListener("pointerdown", () => {
          sounds.init();
          sounds.playTap();
          triggerHaptic("light");
          wrapper.classList.remove("tapped");
          void wrapper.offsetWidth;
          wrapper.classList.add("tapped");
        });
      }
    });
  }

  renderLeaderboard() {
    const listEl = document.getElementById("leaderboardList");
    if (!listEl) return;

    const myUserId = this.getUserId();
    const myFortune = Math.floor(this.state.totalEarned || 0);
    const myName = this.state.nickname || (tg?.initDataUnsafe?.user?.first_name) || "Банкир";
    const myAvatar = this.state.selectedAvatar || "avatar_2";
    const myTierName = ATM_TIERS[this.state.atmTierIndex]?.name || "Ветеран 90-х";

    let players = [];
    let userRank = 1;
    let totalPlayers = 1;

    // ТОЛЬКО РЕАЛЬНЫЕ ИГРОКИ ИЗ БАЗЫ CLOUDFLARE D1 (БЕЗ БОТОВ)
    if (this.cloudLeaderboard && Array.isArray(this.cloudLeaderboard.top10) && this.cloudLeaderboard.top10.length > 0) {
      players = this.cloudLeaderboard.top10.map(p => ({
        userId: String(p.user_id || p.userId),
        name: p.nickname || "Банкир",
        avatar: p.avatar_id || p.avatarId || "avatar_2",
        fortune: Number(p.fortune || 0),
        tier: ATM_TIERS[p.atm_tier || p.atmTier || 0]?.name || "Ветеран 90-х",
        isUser: String(p.user_id || p.userId) === String(myUserId)
      }));

      // Если текущий игрок есть в списке, подставляем его актуальные локальные данные
      const myIdx = players.findIndex(p => p.isUser);
      if (myIdx !== -1) {
        players[myIdx].fortune = Math.max(players[myIdx].fortune, myFortune);
        players[myIdx].name = myName;
        players[myIdx].avatar = myAvatar;
        players[myIdx].tier = myTierName;
      } else {
        // Если игрока еще нет в полученном топе
        if (players.length < 10) {
          players.push({
            userId: myUserId,
            name: myName,
            avatar: myAvatar,
            fortune: myFortune,
            tier: myTierName,
            isUser: true
          });
        }
      }

      players.sort((a, b) => b.fortune - a.fortune);
      totalPlayers = Math.max(players.length, this.cloudLeaderboard.totalPlayers || 1);
      userRank = this.cloudLeaderboard.userRank || (players.findIndex(p => p.isUser) + 1 || 1);
    } else {
      // Автономный режим до синхронизации: отображается только сам игрок (Никаких ботов!)
      players = [{
        userId: myUserId,
        name: myName,
        avatar: myAvatar,
        fortune: myFortune,
        tier: myTierName,
        isUser: true
      }];
      userRank = 1;
      totalPlayers = 1;
    }

    const top10 = players.slice(0, 10);
    const userInTop10 = top10.some(p => p.isUser);

    let html = "";
    top10.forEach((item, idx) => {
      const rank = idx + 1;
      let rankClass = "lb-rank-badge";
      let rankContent = `#${rank}`;
      if (rank === 1) { rankClass += " lb-rank-1"; rankContent = `<span class="apple-svg-inline" style="width: 18px; height: 18px;">${SVG_ICONS.appleMedal1}</span>`; }
      else if (rank === 2) { rankClass += " lb-rank-2"; rankContent = `<span class="apple-svg-inline" style="width: 18px; height: 18px;">${SVG_ICONS.appleMedal2}</span>`; }
      else if (rank === 3) { rankClass += " lb-rank-3"; rankContent = `<span class="apple-svg-inline" style="width: 18px; height: 18px;">${SVG_ICONS.appleMedal3}</span>`; }

      html += `
        <div class="leaderboard-row ${item.isUser ? 'is-current-user' : ''}">
          <div class="lb-col-left">
            <div class="${rankClass}">${rankContent}</div>
            <div class="lb-avatar-mini">${getChizhAvatarSvg(item.avatar, 34)}</div>
            <div class="lb-player-details">
              <div class="lb-player-name">
                <span>${item.name}</span>
                ${item.isUser ? '<span class="lb-you-tag">ВЫ</span>' : ''}
              </div>
              <span class="lb-player-tier">${item.tier}</span>
            </div>
          </div>
          <div class="lb-fortune">${this.formatMoney(item.fortune)}</div>
        </div>
      `;
    });

    // Если реальных игроков в базе больше 10, и текущий игрок на 11+ месте — прикрепляем его плашку внизу
    if (!userInTop10 && userRank > 10) {
      const tenthPlaceFortune = top10[top10.length - 1]?.fortune || 0;
      const gapToTop10 = Math.max(0, tenthPlaceFortune - myFortune);

      html += `
        <div class="leaderboard-row is-current-user pinned-user-row" style="margin-top: 8px; border: 1.5px solid #00f2fe; background: rgba(0, 242, 254, 0.12);">
          <div class="lb-col-left">
            <div class="lb-rank-badge">#${userRank}</div>
            <div class="lb-avatar-mini">${getChizhAvatarSvg(myAvatar, 34)}</div>
            <div class="lb-player-details">
              <div class="lb-player-name">
                <span>${myName}</span>
                <span class="lb-you-tag">ВЫ</span>
              </div>
              <span class="lb-player-tier">${myTierName}</span>
            </div>
          </div>
          <div class="lb-fortune">${this.formatMoney(myFortune)}</div>
        </div>
        <div class="lb-gap-note">До Топ-10 осталось заработать: ${this.formatMoney(gapToTop10)}</div>
      `;
    }

    if (totalPlayers < 10) {
      html += `
        <div style="text-align: center; font-size: 10px; color: #64748b; padding: 10px 4px 4px 4px;">
          🌐 Реальных игроков в сети ChizhBank: ${totalPlayers} чел.
        </div>
      `;
    }

    listEl.innerHTML = html;
  }

  renderUI() {
    if (!this.cachedUIEls) {
      this.cachedUIEls = {
        balance: document.getElementById("balanceDisplay"),
        income: document.getElementById("incomeRateDisplay"),
        screenTap: document.getElementById("screenTapVal"),
        curEnergy: document.getElementById("currentEnergy"),
        maxEnergy: document.getElementById("maxEnergy"),
        energyFill: document.getElementById("energyBarFill")
      };
    }
    const els = this.cachedUIEls;
    if (els.balance) els.balance.textContent = this.formatMoney(this.state.balance);
    if (els.income) els.income.textContent = `+${this.formatMoney(this.getPassiveIncome())}/сек`;
    if (els.screenTap) els.screenTap.textContent = `+${this.formatMoney(this.getTapPower())}`;

    const maxE = this.getMaxEnergy();
    if (els.curEnergy) els.curEnergy.textContent = Math.floor(this.state.energy);
    if (els.maxEnergy) els.maxEnergy.textContent = maxE;
    const energyPct = Math.max(0, Math.min(100, (this.state.energy / maxE) * 100));
    if (els.energyFill) els.energyFill.style.width = `${energyPct}%`;
  }

  startLoops() {
    let lastTick = performance.now();
    let slowTickCounter = 0;

    // Реакция на сворачивание мини-приложения / блокировку экрана (Page Visibility API)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        // При уходе в фон мгновенно сохраняем прогресс локально и в облако
        this.saveState();
        this.syncWithCloud(true);
      } else {
        lastTick = performance.now();
        // При возвращении на экран начисляем офлайн-доход
        this.checkOfflineProgress();
      }
    });

    window.addEventListener("pagehide", () => {
      this.saveState();
      this.syncWithCloud(true);
    });

    setInterval(() => {
      // Когда экран выключен или вкладка скрыта — не тратим ресурсы процессора и батарею
      if (document.hidden) return;

      const now = performance.now();
      const dt = Math.min((now - lastTick) / 1000, 2.0);
      lastTick = now;

      const passive = this.getPassiveIncome();
      if (passive > 0) {
        const inc = passive * dt;
        this.state.balance += inc;
        this.state.totalEarned += inc;
      }

      const maxE = this.getMaxEnergy();
      if (this.state.energy < maxE) {
        this.state.energy = Math.min(maxE, this.state.energy + this.getRechargeRate() * dt);
      }

      this.renderUI();

      // Оптимизация: проверки рангов, IPO и ачивок раз в секунду
      slowTickCounter += dt;
      if (slowTickCounter >= 1.0) {
        slowTickCounter = 0;
        this.checkAchievements();
        this.renderCareerUI();
        this.renderIpoUI();

        // Фоновый опрос лидерборда: раз в 60 сек только если аккордеон топа реально открыт
        const nowMs = Date.now();
        const lbCard = document.getElementById("cardLeaderboard");
        const isLbOpen = lbCard && lbCard.classList.contains("open");
        if (isLbOpen && nowMs - (this.lastLeaderboardFetch || 0) > 60000) {
          this.lastLeaderboardFetch = nowMs;
          this.fetchCloudLeaderboard();
        }
      }
    }, 100);

    // Локальное сохранение каждые 4 сек (0 сетевого трафика и 0 затрат радиомодуля)
    setInterval(() => this.saveState(), 4000);
  }

  // Запуск цикла частиц только по требованию (когда есть активные частицы)
  startParticleLoop() {
    if (this.isParticleLoopRunning) return;
    this.isParticleLoopRunning = true;

    const render = () => {
      if (!this.particles || this.particles.length === 0) {
        if (this.ctx && this.canvas) {
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
        this.isParticleLoopRunning = false;
        return;
      }
      this.updateParticles();
      requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
  }

  initCanvas() {
    const resize = () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.cachedDispenserPos = null;
    };
    window.addEventListener("resize", resize);
    resize();
  }

  spawnBanknotes(originX, originY, count = 1) {
    const skinKey = this.state.activeBillSkin || "green";
    const skin = BILL_SKINS[skinKey] || BILL_SKINS.green;

    // Ограничиваем количество активных частиц для идеальных 60 FPS
    if (this.particles.length > 25) {
      this.particles.splice(0, this.particles.length - 25);
    }

    for (let i = 0; i < count; i++) {
      const angle = (Math.random() * 70 - 35) * (Math.PI / 180);
      const speed = 7 + Math.random() * 7;
      this.particles.push({
        type: "cash",
        x: originX + (Math.random() - 0.5) * 30,
        y: originY,
        vx: Math.sin(angle) * speed,
        vy: -Math.cos(angle) * speed,
        gravity: 0.38,
        rotation: (Math.random() - 0.5) * 0.4,
        vRot: (Math.random() - 0.5) * 0.14,
        rotY: Math.random() * Math.PI,
        vRotY: 0.12 + Math.random() * 0.12,
        width: 38,
        height: 20,
        life: 1.0,
        decay: 0.022 + Math.random() * 0.01,
        skin: skin
      });
    }

    this.startParticleLoop();
  }

  spawnFloatingText(x, y, text, isCrit = false) {
    if (this.particles.length > 25) {
      this.particles.splice(0, this.particles.length - 25);
    }
    this.particles.push({
      type: "text",
      text: text,
      x: x + (Math.random() - 0.5) * 20,
      y: y - 20,
      vx: (Math.random() - 0.5) * 1.5,
      vy: -(3.5 + Math.random() * 1.5),
      isCrit: isCrit,
      life: 1.0,
      decay: 0.028
    });

    this.startParticleLoop();
  }

  spawnConfetti() {
    const colors = ["#ffd700", "#00f2fe", "#00ff88", "#ff3366", "#ffffff"];
    for (let i = 0; i < 40; i++) {
      this.particles.push({
        type: "confetti",
        color: colors[Math.floor(Math.random() * colors.length)],
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        vx: (Math.random() - 0.5) * 14,
        vy: (Math.random() - 0.5) * 14 - 4,
        gravity: 0.25,
        size: 5 + Math.random() * 5,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.3,
        life: 1.0,
        decay: 0.015
      });
    }

    this.startParticleLoop();
  }

  updateParticles() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life -= p.decay;

      if (p.life <= 0) {
        this.particles.splice(i, 1);
        continue;
      }

      this.ctx.save();
      this.ctx.globalAlpha = Math.max(0, p.life);

      if (p.type === "cash") {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.vRot;
        p.rotY = (p.rotY || 0) + (p.vRotY || 0.12);
        const scaleX = Math.cos(p.rotY);

        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation);
        this.ctx.scale(scaleX, 1);

        const skin = p.skin || BILL_SKINS[this.state.activeBillSkin] || BILL_SKINS.green;
        const w = 44;
        const h = 23;
        const hw = w / 2;
        const hh = h / 2;

        // Основное тело банкноты (без тормозящего shadowBlur)
        this.ctx.fillStyle = skin.color;
        this.ctx.fillRect(-hw, -hh, w, h);

        // Двойной защитный гильош-кант
        this.ctx.strokeStyle = skin.border;
        this.ctx.lineWidth = 1.2;
        this.ctx.strokeRect(-hw + 1.5, -hh + 1.5, w - 3, h - 3);

        // Голографическая защитная нить
        this.ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
        this.ctx.fillRect(-hw + 7, -hh + 2, 2.5, h - 4);

        // Центральный медальон
        this.ctx.beginPath();
        this.ctx.ellipse(0, 0, 7, 6, 0, 0, Math.PI * 2);
        this.ctx.fillStyle = skin.innerColor || skin.border;
        this.ctx.fill();
        this.ctx.strokeStyle = skin.accent || "#ffffff";
        this.ctx.stroke();

        // Центральный знак $
        this.ctx.fillStyle = skin.text;
        this.ctx.font = "900 8.5px -apple-system, sans-serif";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillText("$", 0, 0.5);

      } else if (p.type === "text") {
        p.x += p.vx;
        p.y += p.vy;

        this.ctx.font = p.isCrit ? "900 22px -apple-system, sans-serif" : "800 16px -apple-system, sans-serif";
        this.ctx.textAlign = "center";
        this.ctx.fillStyle = p.isCrit ? "#ffd700" : "#ffffff";
        this.ctx.fillText(p.text, p.x, p.y);

      } else if (p.type === "confetti") {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.rotation += p.vRot;

        this.ctx.translate(p.x, p.y);
        this.ctx.rotate(p.rotation);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
      }

      this.ctx.restore();
    }
  }
}

window.addEventListener("DOMContentLoaded", () => {
  window.game = new AtmGame();
});
