function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    
    if (tab === 'login') {
        document.querySelectorAll('.tab-btn')[0].classList.add('active');
        document.getElementById('login-form').classList.add('active');
    } else {
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
        document.getElementById('register-form').classList.add('active');
    }
}

function togglePassword(id, icon) {
    const input = document.getElementById(id);
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

// Проверка сложности пароля в реальном времени
function checkStrength() {
    const pass = document.getElementById('reg-password').value;
    const fill = document.getElementById('strength-fill');
    const text = document.getElementById('strength-text');
    
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/\d/.test(pass)) score++;
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass)) score++;
    
    const levels = [
        { w: '0%',   c: '#2a3547', t: '' },
        { w: '20%',  c: '#ff4757', t: 'Очень слабый' },
        { w: '40%',  c: '#ff6348', t: 'Слабый' },
        { w: '60%',  c: '#ffa502', t: 'Средний' },
        { w: '80%',  c: '#7bed9f', t: 'Хороший' },
        { w: '100%', c: '#27ae60', t: 'Отличный' }
    ];
    
    const l = levels[score];
    fill.style.width = l.w;
    fill.style.backgroundColor = l.c;
    text.textContent = l.t;
    text.style.color = l.c;
}

// ===== Регистрация =====
async function handleRegister(e) {
    e.preventDefault();
    const errorDiv = document.getElementById('register-error');
    const successDiv = document.getElementById('register-success');
    errorDiv.textContent = '';
    successDiv.textContent = '';

    const username = document.getElementById('reg-username').value.trim();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm').value;

    try {
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password, confirmPassword })
        });
        const data = await res.json();

        if (data.success) {
            successDiv.textContent = '✅ ' + data.message;
            document.getElementById('register-form').reset();
            document.getElementById('strength-fill').style.width = '0%';
            document.getElementById('strength-text').textContent = '';
            setTimeout(() => switchTab('login'), 1500);
        } else {
            errorDiv.textContent = '❌ ' + data.error;
        }
    } catch (err) {
        errorDiv.textContent = 'Ошибка соединения с сервером';
    }
}

// ===== Вход =====
async function handleLogin(e) {
    e.preventDefault();
    const errorDiv = document.getElementById('login-error');
    errorDiv.textContent = '';

    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value;

    try {
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });
        const data = await res.json();

        if (data.success) {
            errorDiv.style.color = '#27ae60';
            errorDiv.textContent = '✅ ' + data.message;
            setTimeout(() => window.location.href = 'index.html', 800);
        } else {
            errorDiv.style.color = '#ff4757';
            errorDiv.textContent = '❌ ' + data.error;
        }
    } catch (err) {
        errorDiv.textContent = 'Ошибка соединения с сервером';
    }
}