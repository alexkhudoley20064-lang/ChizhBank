/**
 * Детализированные модели банкоматов ChizhBank
 * 9 поколений эволюции: от уличных терминалов 90-х до двухэкранных концептов и квантового кибер-банка.
 */

const ATM_MODELS = {
  // -------------------------------------------------------------------------
  // ТИР 1: Олдскульный уличный терминал 90-х из бежевого металла
  // -------------------------------------------------------------------------
  tier1: {
    id: "tier1",
    name: "Ур. 1 • Ветеран 90-х",
    badge: "Сталь 90-х",
    description: "Массивный бежевый стальной шкаф 90-х с синей вывеской ChizhBank, ЭЛТ-экраном и кнопками FDK",
    multiplier: 1,
    cost: 0,
    frenzyTheme: {
      accent: "#38bdf8",
      glow: "rgba(56, 189, 248, 0.7)",
      bg: "linear-gradient(90deg, #0369a1, #0284c7)"
    },
    render(state) {
      return `
        <div class="atm-face-chassis chassis-tier-1">
          <div class="retro-sign-lightbox">
            <div class="sign-chizh-logo">
              ${SVG_ICONS.chizhBirdWhite}
            </div>
            <div class="sign-text-container">
              <span class="sign-main-title">ChizhBank ATM</span>
              <span class="sign-sub-title">24 hour banking • cirrus • plus</span>
            </div>
          </div>

          <div class="retro-console-bay">
            <div class="retro-control-cluster">
              <div class="retro-keypad-side-module">
                <div class="pin-shield-header">PIN</div>
                <div class="retro-tactile-keys">
                  <button class="t-key" type="button">1</button>
                  <button class="t-key" type="button">2</button>
                  <button class="t-key" type="button">3</button>
                  <button class="t-key" type="button">4</button>
                  <button class="t-key" type="button">5</button>
                  <button class="t-key" type="button">6</button>
                  <button class="t-key" type="button">7</button>
                  <button class="t-key" type="button">8</button>
                  <button class="t-key" type="button">9</button>
                  <button class="t-key cancel" type="button">C</button>
                  <button class="t-key" type="button">0</button>
                  <button class="t-key ok" type="button">OK</button>
                </div>
              </div>

              <div class="retro-crt-system">
                <div class="crt-fdk-stack left">
                  <span class="fdk-physical-btn"></span>
                  <span class="fdk-physical-btn"></span>
                  <span class="fdk-physical-btn"></span>
                  <span class="fdk-physical-btn"></span>
                </div>

                <div class="crt-display-housing" id="atmScreen">
                  <div class="crt-phosphor-glow"></div>
                  <div class="crt-scanline-mesh"></div>
                  <div class="crt-ui-layer">
                    <div class="crt-ui-top">
                      <span>CHIZHBANK OS 1994</span>
                      <span class="crt-blinker">● ОНЛАЙН</span>
                    </div>
                    <div class="crt-ui-headline" id="screenMsg">ВСТАВЬТЕ КАРТУ</div>
                    <div class="crt-ui-bottom">
                      <span>КЛИК: <b id="screenTapVal">+$1</b></span>
                      <span class="crt-arrow-tag">СНЯТЬ ▶</span>
                    </div>
                  </div>
                </div>

                <div class="crt-fdk-stack right">
                  <span class="fdk-physical-btn"></span>
                  <span class="fdk-physical-btn"></span>
                  <span class="fdk-physical-btn"></span>
                  <span class="fdk-physical-btn"></span>
                </div>
              </div>
            </div>

            <div class="retro-slots-shelf">
              <div class="card-receipt-column">
                <div class="card-entry-bezel">
                  <span class="bezel-led-green"></span>
                  <span class="bezel-label">КАРТА</span>
                </div>
                <div class="receipt-cutout-bezel">
                  <span class="bezel-label">ЧЕК</span>
                </div>
              </div>

              <div class="retro-cash-tray-unit" id="cashDispenser">
                <div class="cash-shutter-metal">
                  <div class="shutter-metal-grooves"></div>
                </div>
                <span class="cash-tray-title">ВЫДАЧА НАЛИЧНЫХ</span>
              </div>
            </div>
          </div>

          <div class="retro-safe-chassis">
            <div class="safe-door-frame">
              <div class="safe-crest-badge">
                <div class="badge-bird-icon">${SVG_ICONS.chizhBirdColor}</div>
                <div class="badge-text">ChizhBank Heavy Vault</div>
              </div>
              <div class="safe-key-cylinder"></div>
            </div>
          </div>

          <div class="retro-diamond-pedestal">
            <div class="diamond-plate-pattern"></div>
          </div>
        </div>
      `;
    }
  },

  // -------------------------------------------------------------------------
  // ТИР 2: Американский ритейл-банкомат Genmega
  // -------------------------------------------------------------------------
  tier2: {
    id: "tier2",
    name: "Ур. 2 • Genmega Ритейл",
    badge: "Графит & Неон",
    description: "Американский графитовый терминал со светящимся акриловым колпаком, клавиатурой и GPS-защитой",
    multiplier: 2,
    cost: 5000,
    frenzyTheme: {
      accent: "#10b981",
      glow: "rgba(16, 185, 129, 0.7)",
      bg: "linear-gradient(90deg, #059669, #10b981)"
    },
    render(state) {
      return `
        <div class="atm-face-chassis chassis-tier-2">
          <!-- Верхний акриловый световой короб (Topper) -->
          <div class="genmega-acrylic-topper">
            <div class="topper-glow-panel">
              <div class="topper-bird-crest">${SVG_ICONS.chizhBirdColor}</div>
              <span class="topper-bank-title">ChizhBank ATM</span>
            </div>
          </div>

          <!-- Основная консоль управления -->
          <div class="genmega-cockpit">
            <!-- Дисплей с боковыми кнопками FDK -->
            <div class="genmega-screen-deck">
              <div class="genmega-fdk-column left">
                <span class="g-fdk-btn"></span>
                <span class="g-fdk-btn"></span>
                <span class="g-fdk-btn"></span>
                <span class="g-fdk-btn"></span>
              </div>

              <div class="genmega-color-screen" id="atmScreen">
                <div class="screen-brand-strip">
                  <div class="mini-chizh-white">${SVG_ICONS.chizhBirdWhite}</div>
                  <span>ChizhBank 24/7</span>
                  <span class="screen-live-tag">● ОНЛАЙН</span>
                </div>

                <div class="screen-money-center">
                  <div class="genmega-card-art">
                    <span class="chip-gold"></span>
                    <span class="card-dots">•••• 8822</span>
                  </div>
                  <div class="cash-screen-prompt" id="screenMsg">НАЖМИТЕ ДЛЯ СНЯТИЯ</div>
                </div>

                <div class="screen-footer-meta">
                  <span>ТАП: <b id="screenTapVal">+$2</b></span>
                  <span class="gps-active-badge">GPS CHIZH</span>
                </div>
              </div>

              <div class="genmega-fdk-column right">
                <span class="g-fdk-btn"></span>
                <span class="g-fdk-btn"></span>
                <span class="g-fdk-btn"></span>
                <span class="g-fdk-btn"></span>
              </div>
            </div>

            <!-- Светодиодная индикаторная планка кардридера -->
            <div class="genmega-card-prompt-bar">
              <span class="genmega-brand-tag">CHIZHBANK RETAIL</span>
              <div class="card-beacon-green">
                <span class="card-slit-light"></span>
                <span>CARD ▼</span>
              </div>
            </div>

            <!-- Тактильный металлический PIN-пад -->
            <div class="genmega-pin-deck">
              <div class="pin-tactile-metal-grid">
                <div class="pm-key">1</div><div class="pm-key">2</div><div class="pm-key">3</div>
                <div class="pm-key">4</div><div class="pm-key">5</div><div class="pm-key">6</div>
                <div class="pm-key">7</div><div class="pm-key">8</div><div class="pm-key">9</div>
                <div class="pm-key cancel">✕</div><div class="pm-key">0</div><div class="pm-key ok">✓</div>
              </div>
            </div>
          </div>

          <!-- Нижняя защитная сейфовая секция -->
          <div class="genmega-lower-vault-door">
            <div class="genmega-vault-brand-row">
              <div class="genmega-vault-crest">${SVG_ICONS.chizhBirdColor}</div>
              <div class="gps-chizh-sticker">
                <span class="sticker-sub">EQUIPPED AND PROTECTED WITH</span>
                <span class="sticker-main">GPS CHIZHBANK</span>
              </div>
            </div>

            <!-- Лоток выдачи купюр -->
            <div class="genmega-cash-dispenser-pocket" id="cashDispenser">
              <div class="dispenser-lip-rim">
                <div class="dispenser-dark-pocket">
                  <div class="green-guide-slit"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // -------------------------------------------------------------------------
  // ТИР 3: Изумрудно-зеленый банковский терминал (Фото 4 Сбер)
  // -------------------------------------------------------------------------
  tier3: {
    id: "tier3",
    name: "Ур. 3 • Изумрудный Металлик",
    badge: "Emerald Pro",
    description: "Классический зеленый металлик с козырьком, камерой и красными маячками, ушками PIN и гербом Чижа",
    multiplier: 4,
    cost: 45000,
    frenzyTheme: {
      accent: "#00ff88",
      glow: "rgba(0, 255, 136, 0.8)",
      bg: "linear-gradient(90deg, #047857 0%, #10b981 50%, #065f46 100%)"
    },
    render(state) {
      return `
        <div class="atm-face-chassis chassis-tier-3">
          <!-- Верхний блок с камерой обзора и красными маячками справа -->
          <div class="emerald-top-header">
            <div class="emerald-cam-cluster">
              <span class="emerald-cam-lens"></span>
              <span class="emerald-cam-mirror"></span>
            </div>
            <div class="emerald-brand-plate">
              <div class="emerald-chizh-crest">${SVG_ICONS.chizhBirdColor}</div>
              <span class="emerald-bank-title">ChizhBank</span>
            </div>
            <div class="emerald-twin-beacons">
              <span class="beacon-light"></span>
              <span class="beacon-light"></span>
            </div>
          </div>

          <!-- Глубокий защитный козырек с дисплеем и боковыми кнопками FDK -->
          <div class="emerald-visor-hood">
            <div class="emerald-screen-system">
              <div class="emerald-round-btns left">
                <span class="e-circle-btn"></span>
                <span class="e-circle-btn"></span>
                <span class="e-circle-btn"></span>
                <span class="e-circle-btn"></span>
              </div>

              <div class="emerald-lcd-screen" id="atmScreen">
                <div class="lcd-header-bar">
                  <div class="lcd-mini-chizh">${SVG_ICONS.chizhBirdWhite}</div>
                  <span>ChizhBank Online</span>
                  <span class="lcd-status-dot">● ГОТОВ</span>
                </div>
                <div class="lcd-menu-buttons">
                  <div class="lcd-btn-chip">СНЯТИЕ НАЛИЧНЫХ</div>
                  <div class="lcd-btn-chip">ВКЛАДЫ</div>
                  <div class="lcd-btn-chip">ПЛАТЕЖИ</div>
                </div>
                <div class="lcd-main-prompt" id="screenMsg">ВЫБЕРИТЕ ОПЕРАЦИЮ</div>
                <div class="lcd-footer-meta">
                  <span>ТАП: <b id="screenTapVal">+$4</b></span>
                  <span class="lcd-secure-tag">ЧИЖ ЗАЩИТА</span>
                </div>
              </div>

              <div class="emerald-round-btns right">
                <span class="e-circle-btn"></span>
                <span class="e-circle-btn"></span>
                <span class="e-circle-btn"></span>
                <span class="e-circle-btn"></span>
              </div>
            </div>

            <!-- Средняя полка: кардридер с зеленой подсветкой, NFC и защитный PIN-пад с зелеными ушками -->
            <div class="emerald-controls-deck">
              <div class="emerald-reader-module">
                <div class="slot-green-bezel">
                  <div class="card-entry-slit"></div>
                </div>
                <span class="reader-label">КАРТА</span>
              </div>

              <div class="emerald-nfc-sensor-ring">
                <div class="nfc-target-circles">${SVG_ICONS.serviceNfc}</div>
                <span class="nfc-label">NFC</span>
              </div>

              <div class="emerald-hooded-pinpad">
                <div class="pin-ear-wing left-wing"></div>
                <div class="emerald-pin-grid">
                  <div class="ep-key">1</div><div class="ep-key">2</div><div class="ep-key">3</div>
                  <div class="ep-key">4</div><div class="ep-key">5</div><div class="ep-key">6</div>
                  <div class="ep-key">7</div><div class="ep-key">8</div><div class="ep-key">9</div>
                  <div class="ep-key cancel">✕</div><div class="ep-key">0</div><div class="ep-key ok">✓</div>
                </div>
                <div class="pin-ear-wing right-wing"></div>
              </div>
            </div>
          </div>

          <!-- Нижняя часть: наклонный лоток выдачи наличных и нижняя дверца сейфа -->
          <div class="emerald-safe-front">
            <div class="emerald-motor-dispenser" id="cashDispenser">
              <div class="dispenser-glass-window">
                <div class="white-rollers-led"></div>
              </div>
              <span class="dispenser-tag">ВЫДАЧА И ПРИЕМ НАЛИЧНЫХ</span>
            </div>

            <div class="emerald-vault-door">
              <div class="vault-lock-hole"></div>
              <div class="emerald-huge-chizh-symbol">
                ${SVG_ICONS.chizhBirdWhite}
              </div>
              <div class="emerald-vault-logo-text">ChizhBank</div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // -------------------------------------------------------------------------
  // ТИР 4 (ФОТО 1): Сапфировый Киоск (светящаяся зеленая линза, PIN и синий сейф)
  // -------------------------------------------------------------------------
  tier4: {
    id: "tier4",
    name: "Ур. 4 • Сапфировый Киоск",
    badge: "Sapphire Touch",
    description: "Ярко-синий платежный киоск с черной рамкой экрана, наклейками карт, PIN-падом и светящимся зеленым кольцом",
    multiplier: 8,
    cost: 350000,
    frenzyTheme: {
      accent: "#38bdf8",
      glow: "rgba(56, 189, 248, 0.8)",
      bg: "linear-gradient(90deg, #1d4ed8, #2563eb, #1e40af)"
    },
    render(state) {
      return `
        <div class="atm-face-chassis chassis-tier-4-sapphire">
          <div class="sapphire-top-tablet">
            <div class="sapphire-camera-island">
              <span class="sapphire-cam-lens"></span>
              <span class="sapphire-brand-text">ChizhBank Kiosk</span>
            </div>

            <div class="sapphire-screen-display" id="atmScreen">
              <div class="sapphire-screen-header">ОПЛАЧИВАЙТЕ УСЛУГИ CHIZHBANK</div>
              <div class="sapphire-service-icons-grid">
                <div class="service-chip"><span class="chip-svg-box">${SVG_ICONS.servicePhone}</span><span>Связь</span></div>
                <div class="service-chip"><span class="chip-svg-box">${SVG_ICONS.serviceCar}</span><span>Авто</span></div>
                <div class="service-chip"><span class="chip-svg-box">${SVG_ICONS.serviceTv}</span><span>ТВ</span></div>
                <div class="service-chip"><span class="chip-svg-box">${SVG_ICONS.serviceDoc}</span><span>ЖКХ</span></div>
                <div class="service-chip"><span class="chip-svg-box">${SVG_ICONS.serviceCard}</span><span>Карты</span></div>
              </div>
              <div class="sapphire-screen-footer">
                <span class="sapphire-foot-card" id="screenMsg">ВЫБЕРИТЕ УСЛУГУ</span>
                <span>КЛИК: <b id="screenTapVal">+$8</b></span>
              </div>
            </div>
          </div>

          <div class="sapphire-middle-console">
            <div class="sapphire-cards-sticker">
              <div class="card-logo-cell">ChizhPay</div>
              <div class="card-logo-cell mir">МИР</div>
              <div class="card-logo-cell">PLUS</div>
              <div class="card-logo-cell">NFC</div>
            </div>

            <div class="sapphire-metal-pinpad">
              <div class="pin-matrix-round">
                <span class="rk">1</span><span class="rk">2</span><span class="rk">3</span>
                <span class="rk">4</span><span class="rk">5</span><span class="rk">6</span>
                <span class="rk">7</span><span class="rk">8</span><span class="rk">9</span>
                <span class="rk clr">✕</span><span class="rk">0</span><span class="rk ok">✓</span>
              </div>
            </div>

            <div class="sapphire-nfc-deck">
              <div class="nfc-contactless-waves">${SVG_ICONS.serviceNfc}</div>
              <span class="nfc-tag-mini">PAYPASS</span>
            </div>
          </div>

          <div class="sapphire-intake-bay">
            <div class="sapphire-cash-slot" id="cashDispenser">
              <div class="slot-intake-bar"></div>
              <span class="slot-label">ПРИЕМ КУПЮР</span>
            </div>
            <div class="sapphire-glowing-green-lens">
              <div class="lens-glow-core"></div>
            </div>
          </div>

          <div class="sapphire-bottom-cabinet">
            <div class="sapphire-crest-hero">
              ${SVG_ICONS.chizhBirdWhite}
            </div>
            <div class="sapphire-cabinet-title">ChizhBank Express</div>
          </div>
        </div>
      `;
    }
  },

  // -------------------------------------------------------------------------
  // ТИР 5: Солнечный Тотем ChizhBank
  // -------------------------------------------------------------------------
  tier5: {
    id: "tier5",
    name: "Ур. 5 • Солнечный Тотем",
    badge: "Smart Totem",
    description: "Ярко-желтый стильный терминал со светящейся белой колонной-тотемом и крупным логотипом Чижа",
    multiplier: 18,
    cost: 2500000,
    frenzyTheme: {
      accent: "#ffd700",
      glow: "rgba(255, 215, 0, 0.8)",
      bg: "linear-gradient(90deg, #d97706, #f59e0b, #b45309)"
    },
    render(state) {
      return `
        <div class="atm-face-chassis chassis-tier-5-totem">
          <div class="totem-pillar-header">
            <div class="totem-neon-edge left"></div>
            <div class="totem-crest-container">
              <div class="totem-chizh-bird">${SVG_ICONS.chizhBirdColor}</div>
              <span class="totem-chizh-title">ChizhBank</span>
              <span class="totem-chizh-sub">Премиум Банкинг</span>
            </div>
            <div class="totem-neon-edge right"></div>
          </div>

          <div class="totem-yellow-kiosk">
            <div class="kiosk-touch-fascia">
              <div class="fascia-brand-chip">
                <span class="brand-chip-pill">ChizhBank.ru</span>
              </div>

              <div class="kiosk-touch-display" id="atmScreen">
                <div class="touch-screen-top">
                  <div class="touch-mini-logo">
                    ${SVG_ICONS.chizhBirdWhite}
                    <span>Chizh Touch</span>
                  </div>
                  <span class="touch-live-status">● ОНЛАЙН</span>
                </div>
                <div class="touch-screen-hero">
                  <div class="touch-card-icon">${SVG_ICONS.serviceCard}</div>
                  <div class="touch-prompt-title" id="screenMsg">ПРИЛОЖИТЕ КАРТУ ИЛИ ТАПАЙТЕ</div>
                </div>
                <div class="touch-screen-foot">
                  <span>СИЛА ТАПА: <b id="screenTapVal">+$18</b></span>
                  <span class="touch-nfc-tag">NFC ОНЛАЙН</span>
                </div>
              </div>

              <div class="kiosk-deck-hardware">
                <div class="kiosk-nfc-sensor">
                  <div class="nfc-pulse-ring">${SVG_ICONS.serviceNfc}</div>
                  <span class="nfc-txt">NFC</span>
                </div>

                <div class="kiosk-cash-dispenser-tray" id="cashDispenser">
                  <div class="tray-deep-pocket">
                    <div class="pocket-intake-slit"></div>
                  </div>
                  <span class="tray-label">ВЫДАЧА И ПРИЕМ</span>
                </div>
              </div>
            </div>

            <div class="kiosk-lower-safe-door">
              <div class="kiosk-chizh-huge-crest">
                ${SVG_ICONS.chizhBirdColor}
              </div>
              <div class="kiosk-brand-footer">ChizhBank Premium</div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // -------------------------------------------------------------------------
  // ТИР 6 (ФОТО 2): Маджента Ритейл Киоск (высокий экран, ушки, светящееся сердечко/чиж)
  // -------------------------------------------------------------------------
  tier6: {
    id: "tier6",
    name: "Ур. 6 • Маджента Ритейл",
    badge: "Ozon Magenta",
    description: "Ярко-розовый терминал с высоким экраном, зелеными боковыми ручками, светящимся сердцем и брендом ChizhBank",
    multiplier: 45,
    cost: 16000000,
    frenzyTheme: {
      accent: "#ff007f",
      glow: "rgba(255, 0, 127, 0.8)",
      bg: "linear-gradient(90deg, #be185d, #ec4899, #9d174d)"
    },
    render(state) {
      return `
        <div class="atm-face-chassis chassis-tier-6-magenta">
          <div class="magenta-portrait-cockpit">
            <div class="magenta-ear-handle left"><span class="ear-led-green"></span></div>

            <div class="magenta-portrait-display" id="atmScreen">
              <div class="display-chizh-top">
                <div class="chizh-retail-brand">
                  <div class="brand-bird-micro">${SVG_ICONS.chizhBirdWhite}</div>
                  <span>ChizhBank Ритейл</span>
                </div>
                <span class="magenta-live-dot">● ОНЛАЙН</span>
              </div>

              <div class="display-card-promo">
                <div class="promo-title">Получите деньги на карту</div>
                <div class="promo-card-graphic">
                  <div class="promo-card-chip"></div>
                  <div class="promo-card-badge">Chizh Card</div>
                </div>
                <div class="promo-qr-row">
                  <div class="promo-qr-box">QR</div>
                  <span class="promo-qr-desc">Снятие без комиссии</span>
                </div>
              </div>

              <div class="display-bottom-tap">
                <span id="screenMsg">НАЖМИТЕ ДЛЯ СНЯТИЯ</span>
                <span>СИЛА КЛИКА: <b id="screenTapVal">+$45</b></span>
              </div>
            </div>

            <div class="magenta-ear-handle right"><span class="ear-led-green"></span></div>
          </div>

          <div class="magenta-tray-console">
            <div class="tray-pin-mini">
              <div class="mini-keys-grid">
                <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
                <span>6</span><span>7</span><span>8</span><span>9</span><span class="k-ok">✓</span>
              </div>
            </div>
            <div class="tray-cash-out" id="cashDispenser">
              <div class="cash-out-slit"></div>
              <span class="tray-label-mini">ВЫДАЧА</span>
            </div>
          </div>

          <div class="magenta-safe-cabinet">
            <div class="magenta-neon-heart-badge">
              <div class="heart-chizh-icon">${SVG_ICONS.chizhBirdWhite}</div>
            </div>
            <div class="magenta-brand-plate">
              <div class="plate-inner">
                <span class="plate-title">ChizhBank</span>
                <span class="plate-sub">ЭКСПРЕСС-БАНКИНГ</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }
  },

  // -------------------------------------------------------------------------
  // ТИР 7 (ФОТО 3): Алый Терминал со Светодиодной Бегущей Строкой на Стойке
  // -------------------------------------------------------------------------
  tier7: {
    id: "tier7",
    name: "Ур. 7 • Алый Киоск с Бегущей Строкой",
    badge: "Alfa Crimson LED",
    description: "Высокий алый терминал со светодиодной бегущей строкой ChizhBank на стойке, портретным экраном и большим гербом",
    multiplier: 120,
    cost: 95000000,
    frenzyTheme: {
      accent: "#ff2247",
      glow: "rgba(255, 34, 71, 0.8)",
      bg: "linear-gradient(90deg, #b91c1c, #ef4444, #991b1b)"
    },
    render(state) {
      return `
        <div class="atm-face-chassis chassis-tier-7-crimson">
          <div class="crimson-marquee-assembly">
            <div class="marquee-cylinder-housing">
              <div class="marquee-cylinder-glass">
                <div class="marquee-track-motion">
                  <span class="marquee-chunk">✦ CHIZHBANK ✦ 24/7 СВОБОДНЫЕ НАЛИЧНЫЕ ✦ КЭШБЕК ДО 10% ✦ СНЯТИЕ БЕЗ КАРТ ✦</span>
                  <span class="marquee-chunk">✦ CHIZHBANK ✦ 24/7 СВОБОДНЫЕ НАЛИЧНЫЕ ✦ КЭШБЕК ДО 10% ✦ СНЯТИЕ БЕЗ КАРТ ✦</span>
                </div>
              </div>
            </div>
            <div class="marquee-support-stem"></div>
          </div>

          <div class="crimson-portrait-screen-bay" id="atmScreen">
            <div class="screen-crimson-head">
              <span class="crimson-tag-white">ChizhBank Premium</span>
              <span class="crimson-status-tag">ГОТОВ К РАБОТЕ ●</span>
            </div>
            <div class="screen-crimson-body">
              <div class="crimson-hero-heading">Бесплатная Chizh-Карта</div>
              <div class="crimson-card-monolith">
                <div class="monolith-chizh-symbol">
                  ${SVG_ICONS.chizhBirdWhite}
                </div>
                <div class="monolith-text">КЭШБЭК 100%</div>
              </div>
            </div>
            <div class="screen-crimson-foot">
              <span>СИЛА ТАПА: <b id="screenTapVal">+$120</b></span>
              <span class="crimson-smart-badge">SMART NFC</span>
            </div>
          </div>

          <div class="crimson-metal-shelf">
            <div class="crimson-cash-pocket" id="cashDispenser">
              <div class="pocket-lip"></div>
              <span class="pocket-txt">ВЫДАЧА КЭША</span>
            </div>
            <div class="crimson-pin-pad">
              <div class="cpp-grid">
                <span>1</span><span>2</span><span>3</span><span>4</span>
                <span>5</span><span>6</span><span>7</span><span>8</span>
                <span>9</span><span>0</span><span class="ok">OK</span>
              </div>
            </div>
          </div>

          <div class="crimson-safe-pedestal">
            <div class="crimson-brand-bar">ChizhBank</div>
            <div class="crimson-huge-crest">
              ${SVG_ICONS.chizhBirdWhite}
            </div>
          </div>
        </div>
      `;
    }
  },

  // -------------------------------------------------------------------------
  // ТИР 8 (ФОТО 4): Аэродинамический Двухэкранный Концепт Кокпит (Перерисованный)
  // -------------------------------------------------------------------------
  tier8: {
    id: "tier8",
    name: "Ур. 8 • Двухэкранный Кокпит-Концепт",
    badge: "Dual-Screen OLED",
    description: "Перерисованный титановый кокпит: парящий верхний OLED-планшет, второй сенсорный экран в нише и проекционные лучи",
    multiplier: 350,
    cost: 650000000,
    frenzyTheme: {
      accent: "#34d399",
      glow: "rgba(52, 211, 153, 0.8)",
      bg: "linear-gradient(90deg, #065f46, #059669, #047857)"
    },
    render(state) {
      return `
        <div class="atm-face-chassis chassis-tier-8-dual-cockpit">
          <div class="cockpit-ambient-rays"></div>

          <div class="dual-top-floating-tablet" id="atmScreen">
            <div class="tablet-biometric-notch">
              <span class="bio-lens"></span>
              <span class="bio-sensor-dot"></span>
              <span class="bio-light-green"></span>
            </div>

            <div class="dual-top-screen-ui">
              <div class="top-ui-header">
                <div class="ui-chizh-brand">
                  <div class="micro-chizh">${SVG_ICONS.chizhBirdColor}</div>
                  <span>ChizhBank Next</span>
                </div>
                <span class="ui-weather">20:46 • 24°</span>
              </div>

              <div class="top-ui-body">
                <div class="ui-hero-headline">Совершенно новый банкомат ChizhBank</div>
                <div class="ui-hero-desc">Переизобретён для людей • Face ID</div>

                <div class="ui-button-cards-row">
                  <div class="ui-chip-btn active">Снять</div>
                  <div class="ui-chip-btn">Внести</div>
                  <div class="ui-chip-btn">Перевести</div>
                </div>
              </div>

              <div class="top-ui-footer">
                <span>СИЛА КЛИКА: <b id="screenTapVal">+$350</b></span>
                <span class="ui-biometric-ready">FACE SCAN ACTIVE ●</span>
              </div>
            </div>
          </div>

          <div class="dual-cockpit-frame">
            <div class="dual-lower-tray-screen">
              <div class="tray-screen-content">
                <span class="tray-screen-prompt">Приложите карту или смартфон</span>
                <div class="tray-glowing-card-vis">
                  <span class="glowing-card-chip"></span>
                  <span class="glowing-card-title">ChizhBank Digital</span>
                </div>
              </div>
            </div>

            <div class="dual-console-hardware" id="cashDispenser">
              <div class="laser-slit-motor"></div>
              <span class="laser-slit-label">МОТОРИЗОВАННЫЙ КАРМАН НАЛИЧНЫХ</span>
            </div>

            <div class="dual-cockpit-badge-row">
              <div class="dual-neon-ring-emblem">
                <div class="glowing-neon-halo"></div>
                <div class="chizh-bird-circle">
                  ${SVG_ICONS.chizhBirdColor}
                </div>
              </div>
              <div class="dual-matrix-mesh"></div>
            </div>
          </div>

          <div class="dual-floor-underglow"></div>
        </div>
      `;
    }
  },

  // -------------------------------------------------------------------------
  // ТИР 9: Квантовый Кибер-Банкомат 2077 (Финал)
  // -------------------------------------------------------------------------
  tier9: {
    id: "tier9",
    name: "Ур. 9 • Квантовый Кибер-Банк 2077",
    badge: "Quantum Cyber",
    description: "Парящий в гравитационном поле монолит с 3D-голограммой золотого Чижа и квантовой материализацией",
    multiplier: 1000,
    cost: 4000000000,
    frenzyTheme: {
      accent: "#c084fc",
      glow: "rgba(192, 132, 252, 0.9)",
      bg: "linear-gradient(90deg, #7e22ce, #a855f7, #6b21a8)"
    },
    render(state) {
      return `
        <div class="atm-face-chassis chassis-tier-9">
          <div class="cyber-holo-pedestal">
            <div class="holo-rotating-cube">
              <div class="holo-face f-front">${SVG_ICONS.chizhBirdGold}</div>
              <div class="holo-face f-back">${SVG_ICONS.chizhBirdGold}</div>
              <div class="holo-face f-left">Chizh</div>
              <div class="holo-face f-right">Bank</div>
            </div>
            <div class="holo-light-pillar"></div>
          </div>

          <div class="cyber-screen-container" id="atmScreen">
            <div class="cyber-screen-top-meta">CHIZH QUANTUM NET // 2077 // SECURED</div>
            <div class="cyber-screen-hero" id="screenMsg">КВАНТОВАЯ МАТЕРИАЛИЗАЦИЯ КЭША</div>
            <div class="cyber-screen-stats">
              <span>СИЛА ТАПА: <b id="screenTapVal">+$1000</b></span>
              <span class="cyber-overdrive-tag">OVERDRIVE ∞</span>
            </div>
          </div>

          <div class="cyber-deck-hardware">
            <div class="plasma-tube tube-pink"></div>
            <div class="cyber-neuro-orb">
              <div class="neuro-chizh-icon">${SVG_ICONS.chizhBirdColor}</div>
              <span class="neuro-tag">НЕЙРО-КОНТАКТ</span>
            </div>
            <div class="plasma-tube tube-cyan"></div>
          </div>

          <div class="cyber-quantum-portal" id="cashDispenser">
            <div class="portal-vortex-beam"></div>
            <span class="portal-text">ПОРТАЛ СИНТЕЗА КЭША</span>
          </div>
        </div>
      `;
    }
  }
};
