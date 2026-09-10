// База данных игр с расширенным списком
const gamesDB = [
    // RPG игры
    {
        id: 1,
        title: "Cyberpunk 2077",
        description: "Приключенческая RPG в открытом мире от создателей The Witcher.",
        fullDescription: "Cyberpunk 2077 - приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Вы играете за V, наёмника в поисках устройства, позволяющего обрести бессмертие.",
        genre: "RPG",
        year: 2020,
        developer: "CD Projekt RED",
        rating: 4.2,
        price: 2499,
        originalPrice: 3999,
        discount: 37,
        platforms: ["pc", "playstation", "xbox"],
        image: "Картинки для сайта/Cyberpunk2077NG_Cover_art_RGB-en.jpg",
        featured: true,
        discounted: true,
        isPreorder: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i7-6700 или AMD Ryzen 5 1600",
            memory: "12 GB RAM",
            graphics: "NVIDIA GeForce GTX 1060 6GB или AMD Radeon RX 580 8GB",
            storage: "70 GB"
        }
    },
    {
        id: 2,
        title: "Elden Ring",
        description: "Фэнтезийная action-RPG от создателей Dark Souls и Джорджа Мартина.",
        fullDescription: "Elden Ring - фэнтезийная action-RPG, разработанная FromSoftware в сотрудничестве с Джорджем Р. Р. Мартином. Игра представляет собой масштабный открытый мир, наполненный опасностями, тайнами и могущественными противниками.",
        genre: "RPG",
        year: 2022,
        developer: "FromSoftware",
        rating: 4.8,
        price: 3499,
        platforms: ["pc", "playstation", "xbox"],
        image: "Картинки для сайта/i (1).jpg",
        featured: true,
        discounted: false,
        isPreorder: false,
        systemRequirements: {
            os: "Windows 10/11 64-bit",
            processor: "Intel Core i7-8700K или AMD Ryzen 5 3600X",
            memory: "16 GB RAM",
            graphics: "NVIDIA GeForce GTX 1070 8GB или AMD Radeon RX Vega 56 8GB",
            storage: "60 GB"
        }
    },
    {
        id: 3,
        title: "The Witcher 3: Wild Hunt",
        description: "Эпическая RPG о ведьмаке Геральте в огромном открытом мире.",
        fullDescription: "The Witcher 3: Wild Hunt - награждённая игра в жанре RPG, завершающая историю ведьмака Геральта. Вам предстоит путешествовать по огромному открытому миру, выполнять захватывающие задания, сражаться с монстрами.",
        genre: "RPG",
        year: 2015,
        developer: "CD Projekt RED",
        rating: 4.9,
        price: 1499,
        originalPrice: 1999,
        discount: 25,
        platforms: ["pc", "playstation", "xbox", "switch"],
        image: "Картинки для сайта/45a0d9d39f01bd10a9d967194d81e0660da0cd93038501be48b32ac4667a8591.jpg",
        featured: true,
        discounted: true,
        isPreorder: false,
        systemRequirements: {
            os: "Windows 7/8/10 64-bit",
            processor: "Intel Core i5-2500K или AMD Phenom II X4 940",
            memory: "6 GB RAM",
            graphics: "NVIDIA GeForce GTX 660 или AMD Radeon HD 7870",
            storage: "50 GB"
        }
    },
    // Экшн игры
    {
        id: 4,
        title: "Call of Duty: Black OPs 7",
        description: "Продолжение культового шутера с новой кампанией и мультиплеером.",
        fullDescription: "Call of Duty: Black Ops 7 - продолжение успешного перезапуска серии. Игра предлагает захватывающую сюжетную кампанию, масштабный мультиплеер и кооперативный режим.",
        genre: "Экшн",
        year: 2025,
        developer: "Infinity Ward",
        rating: 2.9,
        price: 3999,
        platforms: ["pc", "playstation", "xbox"],
        image: "Картинки для сайта/i2.jpg",
        featured: true,
        discounted: false,
        isPreorder: false,
        systemRequirements: {
            os: "Windows 10/11 64-bit",
            processor: "Intel Core i5-6600 или AMD Ryzen 5 1400",
            memory: "12 GB RAM",
            graphics: "NVIDIA GeForce GTX 1060 или AMD Radeon RX 580",
            storage: "125 GB"
        }
    },
    {
        id: 5,
        title: "DOOM The Dark Ages",
        description: "Продолжение культового шутера с безумными сражениями с демонами.",
        fullDescription: "DOOM The Dark Ages - продолжение знаменитого шутера, в котором игрок сражается с ордами демонов из ада. Улучшенная графика, новые виды оружия и эпические битвы с боссами.",
        genre: "Экшн",
        year: 2025,
        developer: "id Software",
        rating: 4.5,
        price: 1999,
        originalPrice: 2999,
        discount: 33,
        platforms: ["pc", "playstation", "xbox", "switch"],
        image: "Картинки для сайта/orig2.jpg",
        featured: false,
        discounted: true,
        isPreorder: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel Core i5 @ 3.3 GHz или выше, или AMD Ryzen 3 @ 3.1 GHz или выше",
            memory: "8 GB RAM",
            graphics: "NVIDIA GeForce GTX 970 (4GB), GTX 1060 (6GB), AMD Radeon R9 290 (4GB) или RX 470 (4GB)",
            storage: "80 GB"
        }
    },
    // Стратегии
    {
        id: 6,
        title: "Civilization VI",
        description: "Постройте величайшую империю в истории человечества.",
        fullDescription: "Sid Meier's Civilization VI - последняя часть знаменитой пошаговой стратегии. Стройте города, развивайте технологии, ведите дипломатию и сражайтесь за господство над миром.",
        genre: "Стратегия",
        year: 2016,
        developer: "Firaxis Games",
        rating: 4.3,
        price: 1499,
        platforms: ["pc", "playstation", "xbox", "switch"],
        image: "Картинки для сайта/orig3.jpg",
        featured: false,
        discounted: false,
        isPreorder: false,
        systemRequirements: {
            os: "Windows 7x64 / Windows 8.1x64 / Windows 10x64",
            processor: "Intel Core i3 2.5 Ghz или AMD Phenom II 2.6 Ghz или выше",
            memory: "4 GB RAM",
            graphics: "1 GB & AMD 5570 или nVidia 450",
            storage: "12 GB"
        }
    },
    // Гонки
    {
        id: 7,
        title: "Forza Horizon 5",
        description: "Откройте для себя яркий мир открытого мира в Мексике.",
        fullDescription: "Forza Horizon 5 - гоночная игра в открытом мире, действие которой происходит в Мексике. Исследуйте пустыни, джунгли, города и вулканы за рулём сотен лучших автомобилей мира.",
        genre: "Гонки",
        year: 2021,
        developer: "Playground Games",
        rating: 4.7,
        price: 2999,
        originalPrice: 3999,
        discount: 25,
        platforms: ["pc", "xbox"],
        image: "Картинки для сайта/orig.jpg",
        featured: true,
        discounted: true,
        isPreorder: false,
        systemRequirements: {
            os: "Windows 10 version 15063.0 or higher",
            processor: "Intel i5-4460 or AMD Ryzen 3 1200",
            memory: "8 GB RAM",
            graphics: "NVidia GTX 970 OR AMD RX 470",
            storage: "110 GB"
        }
    },
    // Инди игры
    {
        id: 8,
        title: "Hollow Knight: Silksong",
        description: "Исследуйте огромный подземный мир в этом метроидвании.",
        fullDescription: "Hollow Knight: Silksong - атмосферная action-adventure игра в стиле метроидвании. Исследуйте обширные взаимосвязанные территории, сражайтесь с жуткими существами и раскрывайте древние тайны.",
        genre: "Инди",
        year: 2025,
        developer: "Team Cherry",
        rating: 4.8,
        price: 699,
        originalPrice: 999,
        discount: 30,
        platforms: ["pc", "playstation", "xbox", "switch"],
        image: "Картинки для сайта/a829b552c6.jpg",
        featured: false,
        discounted: true,
        isPreorder: false,
        systemRequirements: {
            os: "Windows 7/8/10",
            processor: "Intel Core 2 Duo E5200",
            memory: "4 GB RAM",
            graphics: "GeForce 9800GTX+ (1GB)",
            storage: "9 GB"
        }
    },
    {
        id: 9,
        title: "Red Dead Redemption 2",
        description: "Эпическая история о жизни на Диком Западе в упадке.",
        fullDescription: "Red Dead Redemption 2 - приключенческий боевик с открытым миром, действие которого происходит в Америке 1899 года. Играйте за Артура Моргана, члена банды Ван дер Линде.",
        genre: "Экшн",
        year: 2018,
        developer: "Rockstar Games",
        rating: 4.9,
        price: 2799,
        platforms: ["pc", "playstation", "xbox"],
        image: "Картинки для сайта/output.jpg",
        featured: true,
        discounted: false,
        isPreorder: false,
        systemRequirements: {
            os: "Windows 10 - April 2018 Update (v1803)",
            processor: "Intel® Core™ i7-4770K / AMD Ryzen 5 1500X",
            memory: "12 GB RAM",
            graphics: "Nvidia GeForce GTX 1060 6GB / AMD Radeon RX 480 4GB",
            storage: "150 GB"
        }
    },
    {
        id: 10,
        title: "God of War",
        description: "Кратос возвращается в новой роли отца и наставника.",
        fullDescription: "God of War - действие игры происходит в мире скандинавской мифологии. Кратос должен научиться контролировать свою ярость и стать настоящим отцом для своего сына Атрея.",
        genre: "Экшн",
        year: 2018,
        developer: "Santa Monica Studio",
        rating: 4.8,
        price: 3499,
        platforms: ["pc", "playstation"],
        image: "Картинки для сайта/It2T5ImFmhbPlq2Wk06q4g.jpg",
        featured: true,
        discounted: false,
        isPreorder: false,
        systemRequirements: {
            os: "Windows 10 64-bit",
            processor: "Intel i5-2500k (4 core 3.3 GHz) или AMD Ryzen 3 1200 (4 core 3.1 GHz)",
            memory: "8 GB RAM",
            graphics: "NVIDIA GTX 960 (4 GB) или AMD R9 290X (4 GB)",
            storage: "70 GB"
        }
    }
];

// Игры для предзаказа
const preorderGames = [
    {
        id: 101,
        title: "Dawn of War IV",
        description: "Новая часть культовой стратегии во вселенной мрачного будущего.",
        fullDescription: "Warhammer 40,000: Dawn of War IV - это новая часть стратегии во вселенной Warhammer 40,000. Возьмите на себя управление четырьмя уникальными фракциями: космическим десантом, орками, некронами и Адептус Механикус. ",
        genre: "Стратегия",
        year: 2026,
        developer: "KING Art",
        rating: 0,
        price: 4499,
        platforms: ["pc"],
        image: "Картинки для сайта/1764913334_n2.jpg",
        featured: true,
        discounted: false,
        isPreorder: true,
        releaseDate: "Июнь 2026",
        preorderBonus: "Эксклюзивные скины для юнитов",
        systemRequirements: {
            os: "Windows 10/11 64-bit",
            processor: "AMD Ryzen 5 3600 или Intel Core i7-9700",
            memory: "16 GB RAM",
            graphics: "AMD Radeon RX 5700 XT или NVIDIA GeForce RTX 2070",
            storage: "100 GB"
        }
    },
    {
        id: 102,
        title: "Resident Evil Requiem",
        description: "Реквием по мертвым. Кошмар для живых. Бегите от смерти сквозь леденящий душу ужас.",
        fullDescription: "Resident Evil Requiem - новая часть культовой серии хорроров",
        genre: "Хоррор",
        year: 2026,
        developer: "Capcom",
        rating: 0,
        price: 4999,
        platforms: ["pc","playstation","xbox"],
        image: "Картинки для сайта/01K3VHJX8T0EMECDXN5GHRGPYH.jpg",
        featured: true,
        discounted: false,
        isPreorder: true,
        releaseDate: "Февраль 2026",
        preorderBonus: "Эксклюзивные костюмы",
        systemRequirements: {
            os: "Windows 11 64-bit",
            processor: "Intel Core i7-8700 или AMD Ryzen 5 5500.",
            memory: "16 GB",
            graphics: "NVIDIA GeForce RTX 2060 Super (8 GB) или AMD Radeon RX 6600 (8 GB).",
            storage: "90 GB"
        }
    },
];

// Все игры
const allGames = [...gamesDB, ...preorderGames];

// Категории
const categories = [
    "Все",
    "RPG", 
    "Экшн", 
    "Стратегия", 
    "Гонки", 
    "Инди",
    "Хоррор",
];

// Глобальные переменные
let cart = JSON.parse(localStorage.getItem('gameStoreCart')) || [];
let currentPage = 'home';
let currentSort = 'popular';
let currentPlatform = 'all';

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initCategories();
    loadHomePage();
    updateCartCount();
    updateCartDisplay();
    
    // Обработка Enter в поиске
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') searchGames();
    });
    
    // Загрузка категорий в выпадающее меню
    function initCategories() {
        const dropdown = document.getElementById('categories-dropdown');
        categories.forEach(category => {
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = category;
            link.onclick = function(e) {
                e.preventDefault();
                filterByCategory(category);
            };
            dropdown.appendChild(link);
        });
    }
    
    function loadHomePage() {
        // Популярные игры (помеченные как featured)
        const popularGames = gamesDB.filter(game => game.featured && !game.isPreorder);
        displayGames(popularGames, 'popular-games');
        
        // Игры со скидками
        const discountedGames = gamesDB.filter(game => game.discounted && !game.isPreorder);
        displayGames(discountedGames, 'discounted-games');
        
        // Будущие игры (предзаказы)
        displayGames(preorderGames, 'upcoming-games');
        
        // Каталог всех игр
        displayGames(allGames, 'catalog-container');
        
        // Игры для страницы скидок
        const allDiscountedGames = allGames.filter(game => game.discounted);
        displayGames(allDiscountedGames, 'discounts-container');
        
        // Игры для страницы предзаказов
        displayGames(preorderGames, 'preorders-container');
    }
});

// Функция отображения игр
function displayGames(gameList, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (gameList.length === 0) {
        container.innerHTML = '<p class="no-games">Игры не найдены</p>';
        return;
    }
    
    gameList.forEach(game => {
        const gameElement = document.createElement('div');
        gameElement.className = `game-card ${game.discounted ? 'discounted' : ''} ${game.isPreorder ? 'preorder' : ''}`;
        
        const priceHTML = game.discounted 
            ? `
                <div class="game-price-container">
                    <span class="original-price">${game.originalPrice} ₽</span>
                    <span class="discounted-price">${game.price} ₽ <span class="discount-badge">-${game.discount}%</span></span>
                </div>
            `
            : `<div class="game-price">${game.price} ₽</div>`;
        
        const buttonHTML = game.isPreorder
            ? `<button class="buy-btn preorder-btn" onclick="event.stopPropagation(); addToCart(${game.id})">
                   <i class="fas fa-calendar-alt"></i> Предзаказ
               </button>`
            : `<button class="buy-btn" onclick="event.stopPropagation(); addToCart(${game.id})">
                   <i class="fas fa-cart-plus"></i> Купить
               </button>`;
        
        gameElement.innerHTML = `
            <div class="game-img" style="background-image: url('${game.image}')" onclick="showGameDetail(${game.id})"></div>
            <div class="game-info">
                <div class="game-meta">
                    <span class="game-genre">${game.genre}</span>
                    <span class="game-year">${game.year}</span>
                </div>
                <h3 class="game-title" onclick="showGameDetail(${game.id})">${game.title}</h3>
                <p class="game-description">${game.description}</p>
                <div class="game-footer">
                    ${priceHTML}
                    ${buttonHTML}
                </div>
            </div>
        `;
        container.appendChild(gameElement);
    });
}

// Функция показа деталей игры
function showGameDetail(gameId) {
    const game = allGames.find(g => g.id === gameId);
    if (!game) return;
    
    const modal = document.createElement('div');
    modal.className = 'cart-modal active';
    modal.innerHTML = `
        <div class="cart-content" style="max-width: 900px;">
            <div class="cart-header">
                <h2>${game.title}</h2>
                <button class="close-cart" onclick="this.closest('.cart-modal').remove()">&times;</button>
            </div>
            
            <div class="game-detail-content">
                <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 2rem;">
                    <div>
                        <div class="game-img" style="height: 300px; border-radius: 10px; background-image: url('${game.image}')"></div>
                        <h3 style="margin: 1.5rem 0 1rem; color: #00a8ff;">Описание</h3>
                        <p style="line-height: 1.8; margin-bottom: 2rem;">${game.fullDescription}</p>
                        
                        <h3 style="color: #00a8ff; margin-bottom: 1rem;">Системные требования</h3>
                        <ul class="requirements-list" style="background-color: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 10px; list-style: none;">
                            <li style="margin-bottom: 0.8rem; padding-bottom: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <strong>ОС:</strong> ${game.systemRequirements.os}
                            </li>
                            <li style="margin-bottom: 0.8rem; padding-bottom: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <strong>Процессор:</strong> ${game.systemRequirements.processor}
                            </li>
                            <li style="margin-bottom: 0.8rem; padding-bottom: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <strong>Оперативная память:</strong> ${game.systemRequirements.memory}
                            </li>
                            <li style="margin-bottom: 0.8rem; padding-bottom: 0.8rem; border-bottom: 1px solid rgba(255,255,255,0.1);">
                                <strong>Видеокарта:</strong> ${game.systemRequirements.graphics}
                            </li>
                            <li>
                                <strong>Место на диске:</strong> ${game.systemRequirements.storage}
                            </li>
                        </ul>
                    </div>
                    
                    <div style="background-color: rgba(255,255,255,0.05); padding: 2rem; border-radius: 10px; height: fit-content;">
                        <div style="margin-bottom: 2rem;">
                            <div style="font-size: 2.5rem; color: #00a8ff; font-weight: bold; margin-bottom: 0.5rem;">
                                ${game.discounted ? `<span style="text-decoration: line-through; color: #888; font-size: 1.5rem; display: block;">${game.originalPrice} ₽</span>` : ''}
                                ${game.price} ₽
                                ${game.discounted ? `<span style="color: #ff4757; font-size: 1rem; display: block; margin-top: 0.5rem;">Скидка ${game.discount}%</span>` : ''}
                            </div>
                            
                            ${game.isPreorder ? `
                                <div style="color: #00a8ff; margin-bottom: 1rem;">
                                    <i class="fas fa-calendar-alt"></i> Выход: ${game.releaseDate}
                                </div>
                                <div style="color: #27ae60; margin-bottom: 1.5rem;">
                                    <i class="fas fa-gift"></i> Бонус предзаказа: ${game.preorderBonus}
                                </div>
                            ` : ''}
                            
                            <div style="margin-bottom: 1.5rem;">
                                <div><strong>Жанр:</strong> ${game.genre}</div>
                                <div><strong>Разработчик:</strong> ${game.developer}</div>
                                <div><strong>Год выпуска:</strong> ${game.year}</div>
                                <div><strong>Платформы:</strong> ${game.platforms.map(p => p.toUpperCase()).join(', ')}</div>
                                ${game.rating > 0 ? `<div><strong>Рейтинг:</strong> ★ ${game.rating}/5</div>` : ''}
                            </div>
                        </div>
                        
                        <button class="buy-btn ${game.isPreorder ? 'preorder-btn' : ''}" style="width: 100%; padding: 1.2rem; font-size: 1.2rem;" onclick="addToCart(${game.id}); this.closest('.cart-modal').remove(); showNotification('&quot;${game.title}&quot; добавлен в корзину!')">
                            <i class="fas ${game.isPreorder ? 'fa-calendar-alt' : 'fa-cart-plus'}"></i>
                            ${game.isPreorder ? 'Оформить предзаказ' : 'Добавить в корзину'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
}

// Функция добавления в корзину
function addToCart(gameId) {
    const game = allGames.find(g => g.id === gameId);
    if (!game) return;
    
    const existingItem = cart.find(item => item.id === gameId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...game,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartCount();
    updateCartDisplay();
    
    showNotification(`"${game.title}" добавлен в корзину!`);
}

// Удаление из корзины
function removeFromCart(gameId) {
    cart = cart.filter(item => item.id !== gameId);
    saveCart();
    updateCartCount();
    updateCartDisplay();
}

// Изменение количества
function updateQuantity(gameId, change) {
    const item = cart.find(item => item.id === gameId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity < 1) {
        removeFromCart(gameId);
    } else {
        saveCart();
        updateCartCount();
        updateCartDisplay();
    }
}

// Обновление отображения корзины
function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const discountInfo = document.getElementById('discount-info');
    const discountSaved = document.getElementById('discount-saved');
    
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; padding: 2rem; color: #888;">Корзина пуста</p>';
        cartTotal.textContent = '0';
        discountInfo.style.display = 'none';
        return;
    }
    
    let total = 0;
    let totalSaved = 0;
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const itemPrice = item.discounted ? item.price : item.price;
        const itemOriginalPrice = item.discounted ? item.originalPrice : item.price;
        const itemSaved = item.discounted ? (item.originalPrice - item.price) * item.quantity : 0;
        
        total += itemPrice * item.quantity;
        totalSaved += itemSaved;
        
        const cartItem = document.createElement('div');
        cartItem.className = `cart-item ${item.discounted ? 'discounted' : ''} ${item.isPreorder ? 'preorder' : ''}`;
        cartItem.innerHTML = `
            <div class="cart-item-img" style="background-image: url('${item.image}')"></div>
            <div class="cart-item-title">${item.title}</div>
            <div>
                <div class="cart-item-price">${itemPrice} ₽</div>
                ${item.discounted ? `<div class="cart-item-discount">Скидка ${item.discount}%</div>` : ''}
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-times"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toLocaleString('ru-RU');
    
    if (totalSaved > 0) {
        discountSaved.textContent = totalSaved.toLocaleString('ru-RU');
        discountInfo.style.display = 'block';
    } else {
        discountInfo.style.display = 'none';
    }
}

// Очистка корзины
function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('Вы уверены, что хотите очистить корзину?')) {
        cart = [];
        saveCart();
        updateCartCount();
        updateCartDisplay();
        showNotification('Корзина очищена');
    }
}

// Оформление заказа
function checkout() {
    if (cart.length === 0) {
        showNotification('Корзина пуста');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.discounted ? item.price : item.price) * item.quantity, 0);
    const gameCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const preorderCount = cart.filter(item => item.isPreorder).reduce((sum, item) => sum + item.quantity, 0);
    
    let message = `Вы приобрели ${gameCount} игр на сумму ${total.toLocaleString('ru-RU')} ₽. `;
    
    if (preorderCount > 0) {
        message += `Из них ${preorderCount} предзаказов. Вы получите уведомление, когда игры станут доступны. `;
    }
    
    message += "Ключи для актвации отправлены на вашу почту.";
    
    document.getElementById('payment-message').textContent = message;
    
    document.getElementById('paymentModal').classList.add('active');
    
    cart = [];
    saveCart();
    updateCartCount();
    updateCartDisplay();
}

// Закрытие окна оплаты
function closePayment() {
    document.getElementById('paymentModal').classList.remove('active');
    toggleCart();
    showPage('home');
}

// Сохранение корзины в localStorage
function saveCart() {
    localStorage.setItem('gameStoreCart', JSON.stringify(cart));
}

// Обновление счетчика корзины
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}

// Переключение корзины
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    cartModal.classList.toggle('active');
    if (cartModal.classList.contains('active')) {
        updateCartDisplay();
    }
}

// Поиск игр
function searchGames() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    
    const filteredGames = allGames.filter(game => 
        game.title.toLowerCase().includes(searchTerm) || 
        game.description.toLowerCase().includes(searchTerm) ||
        game.fullDescription.toLowerCase().includes(searchTerm) ||
        game.genre.toLowerCase().includes(searchTerm) ||
        game.developer.toLowerCase().includes(searchTerm)
    );
    
    showPage('catalog');
    displayGames(filteredGames, 'catalog-container');
}

// Фильтрация по категории
function filterByCategory(category) {
    if (category === 'Все') {
        displayGames(allGames, 'catalog-container');
    } else {
        const filteredGames = allGames.filter(game => game.genre === category);
        showPage('catalog');
        displayGames(filteredGames, 'catalog-container');
    }
}

// Переключение страниц
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById('cartModal').classList.remove('active');
    
    const gameDetailModal = document.querySelector('.cart-modal:not(#cartModal):not(#paymentModal)');
    if (gameDetailModal) gameDetailModal.remove();
    
    if (pageId === 'home' || pageId === 'catalog' || pageId === 'discounts' || pageId === 'preorders') {
        currentPage = pageId;
        document.getElementById(pageId).classList.add('active');
        
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
            if (link.textContent.includes(getPageName(pageId))) {
                link.classList.add('active');
            }
        });
    }
}

function getPageName(pageId) {
    const names = {
        'home': 'Главная',
        'catalog': 'Каталог',
        'discounts': 'Акции',
        'preorders': 'Предзаказы'
    };
    return names[pageId] || '';
}

// Показать уведомление
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #00a8ff, #0097e6);
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
        max-width: 400px;
        word-wrap: break-word;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Добавляем CSS анимации
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    .no-games {
        text-align: center;
        padding: 3rem;
        color: #888;
        font-size: 1.2rem;
        grid-column: 1 / -1;
    }
`;
document.head.appendChild(style);
// Проверка авторизации при загрузке
async function checkAuth() {
    try {
        const res = await fetch('/api/me');
        const data = await res.json();
        const userInfo = document.getElementById('user-info');
        
        if (!userInfo) return;
        
        if (data.loggedIn) {
            userInfo.innerHTML = `
                <span style="color:#00a8ff;font-weight:600;">
                    <i class="fas fa-user"></i> ${data.username}
                </span>
                <button onclick="logout()" style="background:#ff4757;border:none;color:#fff;
                    padding:0.5rem 1rem;border-radius:5px;cursor:pointer;margin-left:10px;">
                    Выйти
                </button>
            `;
        } else {
            userInfo.innerHTML = `
                <a href="auth.html" style="color:#00a8ff;text-decoration:none;font-weight:600;">
                    <i class="fas fa-sign-in-alt"></i> Войти
                </a>
            `;
        }
    } catch (e) { console.error(e); }
}

async function logout() {
    await fetch('/api/logout', { method: 'POST' });
    location.reload();
}

document.addEventListener('DOMContentLoaded', checkAuth);
// =====================================================
//            АВТОРИЗАЦИЯ — проверка статуса пользователя
// =====================================================
async function checkAuthStatus() {
    const userInfo = document.getElementById('user-info');
    if (!userInfo) return;

    try {
        const res = await fetch('/api/me');
        const data = await res.json();

        if (data.loggedIn) {
            // Пользователь авторизован — показываем имя и кнопку выхода
            userInfo.innerHTML = `
                <span class="user-greeting">
                    <i class="fas fa-user-circle"></i> ${data.username}
                </span>
                <button class="logout-btn" onclick="logoutUser()">
                    <i class="fas fa-sign-out-alt"></i> Выйти
                </button>
            `;
        } else {
            // Не авторизован — показываем кнопку "Войти"
            userInfo.innerHTML = `
                <a href="auth.html" class="login-btn">
                    <i class="fas fa-user"></i> Войти
                </a>
            `;
        }
    } catch (err) {
        // Если сервер недоступен — оставляем ссылку по умолчанию
        console.warn('Не удалось проверить авторизацию:', err);
    }
}

async function logoutUser() {
    try {
        await fetch('/api/logout', { method: 'POST' });
        // Перезагружаем страницу, чтобы сбросить состояние
        location.reload();
    } catch (err) {
        alert('Ошибка выхода. Попробуйте ещё раз.');
    }
}

// Запускаем проверку при загрузке страницы
document.addEventListener('DOMContentLoaded', checkAuthStatus);