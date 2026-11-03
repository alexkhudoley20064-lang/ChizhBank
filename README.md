# 🏧 ChizhBank: Кэш-Магнат (Telegram Mini App Arcade Tycoon)

Полноценная игра-кликер и Idle Tycoon для **Telegram Mini Apps (TMA)** и мобильных браузеров.
Стек: Чистый **HTML5 Canvas, CSS3, ES6 JavaScript** (без тяжелых фреймворков, 60 FPS на любых смартфонах) + кастомная векторная графика SVG и процедурный звук Web Audio API.

---

## 📦 Комплект файлов проекта для GitHub

| Файл | Назначение |
|---|---|
| `index.html` | Главная верстка приложения, интерфейс, модалки, аккордеоны |
| `style.css` | Стили, анимации, адаптив для телефонов, темы День / Ночь |
| `game.js` | Движок игры: экономика, тапы, частицы купюр, карьера, IPO, облачный сейв |
| `atm-models.js` | Визуальные макеты 9 поколений банкоматов ChizhBank |
| `icons.js` | Векторные SVG-иконки Apple SF Symbols, гербы Чижа, карты packet |
| `bot.py` | Готовый Telegram-бот на Python (работает без сторонних библиотек) |
| `cloudflare-worker.js` | Серверный скрипт для базы данных Cloudflare D1 (сохранения игроков) |
| `serve.py` | Локальный сервер разработки без кэширования для тестирования |
| `gallery.html` | Музей и галерея моделей всех банкоматов |

---

## 📱 1. Как запустить и играть с телефона

### Вариант А: По локальной сети Wi-Fi (самый быстрый)
1. Убедитесь, что ваш Mac и телефон подключены к **одному Wi-Fi роутеру**.
2. На Mac в терминале узнайте локальный IP-адрес:
   ```bash
   ipconfig getifaddr en0
   ```
   *(например, покажет `192.168.1.45`)*
3. Запустите сервер на Mac:
   ```bash
   python3 serve.py
   ```
4. На телефоне в Safari/Chrome откройте:
   ```text
   http://192.168.1.45:8000
   ```

### Вариант Б: Через бесплатный Cloudflare Tunnel (с HTTPS для Telegram)
Telegram Mini Apps требуют защищенный протокол **HTTPS**. Для этого идеально подходит бесплатный туннель Cloudflare:
1. Установите `cloudflared` (на Mac через Homebrew):
   ```bash
   brew install cloudflared
   ```
2. Запустите туннель к вашему локальному серверу:
   ```bash
   cloudflared tunnel --url http://localhost:8000
   ```
3. Cloudflare выдаст публичную ссылку вида `https://xxxx.trycloudflare.com`.
4. Эту ссылку можно сразу вставлять в `@BotFather` (Menu Button или Web App URL)!

---

## ☁️ 2. Как подключить базу данных Cloudflare D1

Файл [`cloudflare-worker.js`](./cloudflare-worker.js) уже подготовлен для моментального подключения.

1. Зарегистрируйтесь на [cloudflare.com](https://dash.cloudflare.com) (бесплатного тарифа за глаза хватит на сотни тысяч игроков).
2. В боковом меню перейдите в **Workers & Pages** ➔ **D1 SQL Database** ➔ нажмите **Create Database**. Назовите базу: `chizhbank-db`.
3. Откройте вкладку **Console** вашей базы и выполните SQL-запрос для создания таблицы игроков:
   ```sql
   CREATE TABLE IF NOT EXISTS players (
     user_id TEXT PRIMARY KEY,
     state TEXT NOT NULL,
     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```
4. Перейдите в **Workers & Pages** ➔ **Create Application** ➔ **Create Worker**.
5. Зайдите в созданный воркер: **Settings** ➔ **Variables and Secrets** ➔ блок **D1 Database Bindings** ➔ **Add binding**:
   - **Variable name:** `DB`
   - **D1 Database:** выберите `chizhbank-db`
6. В редакторе кода воркера вставьте содержимое файла `cloudflare-worker.js` и нажмите **Deploy**.
7. Скопируйте полученный адрес воркера (например, `https://chizhbank-api.your-name.workers.dev`) и в `index.html` перед закрывающим тегом `</body>` добавьте:
   ```html
   <script>
     window.CHIZHBANK_CLOUD_URL = "https://chizhbank-api.your-name.workers.dev";
   </script>
   ```
Теперь игра автоматически сохраняет и загружает прогресс каждого пользователя Telegram по его `user.id`!

---

## 🤖 3. Настройка Telegram-бота (`bot.py`)

1. Откройте `@BotFather` в Telegram и создайте нового бота командой `/newbot`.
2. Скопируйте выданный токен (`API Token`).
3. Запустите бота командой:
   ```bash
   BOT_TOKEN="ВАШ_ТОКЕН" WEBAPP_URL="ВАША_HTTPS_ССЫЛКА" python3 bot.py
   ```
4. Бот автоматически настроит кнопку **«🏧 Играть»** в меню и приветственное сообщение с кнопкой прямого запуска Mini App.

---

## 🐙 4. Как выложить проект на GitHub

1. Инициализируйте репозиторий и добавьте файлы:
   ```bash
   cd "/Users/alexkhudoley/Downloads/Gemini/Game 1"
   git init
   git add .
   git commit -m "feat: ChizhBank Tycoon v2.0 - Complete Game Release"
   ```
2. Создайте новый репозиторий на [github.com/new](https://github.com/new) (например, `chizhbank-tycoon`).
3. Свяжите и отправьте код:
   ```bash
   git branch -M main
   git remote add origin https://github.com/ВАШ_АККАУНТ/chizhbank-tycoon.git
   git push -u origin main
   ```
4. **Бесплатный хостинг игры через GitHub Pages:**
   В настройках репозитория на GitHub перейдите в **Settings** ➔ **Pages** ➔ **Build and deployment** ➔ выберите ветку `main` и нажмите **Save**. Через минуту игра будет опубликована по адресу:
   `https://ВАШ_АККАУНТ.github.io/chizhbank-tycoon/`
