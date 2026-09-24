const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

// ===== Настройка базы данных =====
const db = new sqlite3.Database('./database.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            failed_attempts INTEGER DEFAULT 0,
            locked_until INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

// ===== Middleware =====
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'nekoarcgames-super-secret-key-change-me',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 2 // 2 часа
    }
}));

// ===== Валидация пароля (сложный пароль) =====
function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;
    return regex.test(password);
}

function validateUsername(username) {
    // Логин: 3-20 символов, латиница, цифры, подчёркивание
    const regex = /^[a-zA-Z0-9_]{3,20}$/;
    return regex.test(username);
}

app.post('/api/register', async (req, res) => {
    const { username, password, confirmPassword } = req.body;

    // Проверки
    if (!username || !password || !confirmPassword) {
        return res.status(400).json({ error: 'Заполните все поля' });
    }

    if (!validateUsername(username)) {
        return res.status(400).json({ 
            error: 'Логин: 3-20 символов, только латиница, цифры и _' 
        });
    }

    if (!validatePassword(password)) {
        return res.status(400).json({ 
            error: 'Пароль должен содержать минимум 8 символов, заглавную и строчную буквы, цифру и спецсимвол' 
        });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Пароли не совпадают' });
    }

    try {
        // Хешируем пароль (10 раундов соли)
        const passwordHash = await bcrypt.hash(password, 10);

        db.run(
            'INSERT INTO users (username, password_hash) VALUES (?, ?)',
            [username, passwordHash],
            function(err) {
                if (err) {
                    if (err.message.includes('UNIQUE')) {
                        return res.status(409).json({ error: 'Такой логин уже занят' });
                    }
                    return res.status(500).json({ error: 'Ошибка базы данных' });
                }
                return res.json({ 
                    success: true, 
                    message: 'Регистрация успешна! Теперь войдите.' 
                });
            }
        );
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Ошибка сервера' });
    }
});

const MAX_ATTEMPTS = 5;
const LOCK_TIME_MS = 5 * 60 * 1000; // Блокировка на 5 минут

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: 'Заполните все поля' });
    }

    db.get('SELECT * FROM users WHERE username = ?', [username], async (err, user) => {
        if (err) return res.status(500).json({ error: 'Ошибка базы данных' });

        // Пользователь не найден — не сообщаем об этом (защита от перебора логинов)
        if (!user) {
            return res.status(401).json({ error: 'Неверный логин или пароль' });
        }

        // Проверка блокировки
        const now = Date.now();
        if (user.locked_until > now) {
            const remaining = Math.ceil((user.locked_until - now) / 1000);
            return res.status(423).json({ 
                error: `Аккаунт заблокирован. Попробуйте через ${remaining} сек.`,
                locked: true,
                remaining
            });
        }

        // Проверка пароля
        const match = await bcrypt.compare(password, user.password_hash);

        if (!match) {
            const attempts = user.failed_attempts + 1;
            let lockedUntil = 0;
            let message = `Неверный логин или пароль. Осталось попыток: ${MAX_ATTEMPTS - attempts}`;

            if (attempts >= MAX_ATTEMPTS) {
                lockedUntil = now + LOCK_TIME_MS;
                message = 'Превышено число попыток. Аккаунт заблокирован на 5 минут.';
            }

            db.run(
                'UPDATE users SET failed_attempts = ?, locked_until = ? WHERE id = ?',
                [attempts, lockedUntil, user.id],
                () => {
                    if (lockedUntil) {
                        return res.status(423).json({ error: message, locked: true });
                    }
                    return res.status(401).json({ error: message, attemptsLeft: MAX_ATTEMPTS - attempts });
                }
            );
            return;
        }

        // Успех — сбрасываем счётчики
        db.run(
            'UPDATE users SET failed_attempts = 0, locked_until = 0 WHERE id = ?',
            [user.id]
        );

        req.session.userId = user.id;
        req.session.username = user.username;

        res.json({ 
            success: true, 
            username: user.username,
            message: 'Вход выполнен!' 
        });
    });
});

app.post('/api/logout', (req, res) => {
    req.session.destroy(() => {
        res.json({ success: true });
    });
});

// ===== ТЕКУЩИЙ ПОЛЬЗОВАТЕЛЬ =====
app.get('/api/me', (req, res) => {
    if (req.session.userId) {
        res.json({ loggedIn: true, username: req.session.username });
    } else {
        res.json({ loggedIn: false });
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}`);
});