# СКИФ - Готовая вёрстка для 1С-Битрикс

Полный комплект CSS-стилей и инструкции для интеграции с 1С-Битрикс.

---

## 📦 Как скачать проект

### Способ 1: Через GitHub (рекомендуется)
1. Зайдите в настройки проекта Lovable → GitHub
2. Подключите репозиторий GitHub
3. Сделайте `git clone` репозитория на локальный компьютер:
```bash
git clone https://github.com/ваш-аккаунт/ваш-репозиторий.git
cd ваш-репозиторий
```

### Способ 2: Скачать ZIP-архив
1. На странице GitHub нажмите зелёную кнопку **Code**
2. Выберите **Download ZIP**
3. Распакуйте архив

---

## 📁 Структура проекта для Битрикс

```
public/bitrix/
└── css/
    ├── base.css          # Базовые стили, переменные, типографика, кнопки
    ├── animations.css    # Анимации и hover-эффекты
    ├── header.css        # Шапка сайта
    ├── hero.css          # Hero-секция (главный баннер)
    ├── products.css      # Карточки товаров
    ├── catalog.css       # Каталог товаров
    ├── categories.css    # Секция категорий
    ├── category-page.css # Страница категории
    ├── product-detail.css# Детальная страница товара
    ├── services.css      # Секция услуг
    ├── rent.css          # Секция аренды прицепов
    ├── news.css          # Секция новостей
    ├── partners.css      # Секция партнёров
    ├── reviews.css       # Секция отзывов
    ├── contacts.css      # Секция контактов
    └── footer.css        # Подвал сайта

src/
├── assets/               # Все изображения проекта
│   ├── logo-new.png     # Логотип
│   ├── products/        # Фото товаров
│   ├── services/        # Фото услуг
│   ├── partners/        # Логотипы партнёров
│   ├── offices/         # Фото офисов
│   └── news/            # Фото новостей
├── components/          # React-компоненты (образцы вёрстки)
└── pages/               # Страницы (образцы вёрстки)
```

---

## 🔧 Подключение стилей в Битрикс

### 1. Скопируйте CSS-файлы в шаблон
```
/local/templates/ваш_шаблон/css/skif/
```

### 2. Подключите в header.php

```php
<?php
use Bitrix\Main\Page\Asset;
$asset = Asset::getInstance();

// ===== ОБЯЗАТЕЛЬНЫЕ БАЗОВЫЕ СТИЛИ =====
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/base.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/animations.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/header.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/footer.css');

// ===== КОМПОНЕНТЫ ПО НЕОБХОДИМОСТИ =====
// Подключайте только те, которые используются на странице

// Главная страница
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/hero.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/products.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/categories.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/services.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/rent.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/news.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/partners.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/reviews.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/contacts.css');

// Каталог
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/catalog.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/category-page.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/skif/product-detail.css');
?>
```

---

## 🎨 CSS-переменные (цвета бренда)

Все цвета вынесены в переменные в `base.css`. Для изменения палитры отредактируйте блок `:root`:

```css
:root {
  /* Основные цвета СКИФ */
  --color-primary: #0b4a7a;        /* Глубокий синий */
  --color-primary-dark: #083a5f;
  --color-secondary: #2bb673;      /* Зелёный */
  --color-secondary-dark: #1f8f5a;
  --color-accent: #1f8f5a;         /* Акцентный */
  
  /* Фоны */
  --color-bg: #f5f7f9;
  --color-bg-card: #ffffff;
  --color-bg-dark: #0d1821;
  
  /* Текст */
  --color-text: #0d1821;
  --color-text-muted: #5a6670;
  
  /* Градиенты */
  --gradient-primary: linear-gradient(135deg, #0b4a7a 0%, #1f8f5a 100%);
  --gradient-accent: linear-gradient(135deg, #2bb673 0%, #0b4a7a 100%);
}
```

---

## 📝 Получение HTML-разметки из React-компонентов

### Метод 1: Инспектор браузера (быстрый)

1. Откройте превью сайта: https://skif-design-leap.lovable.app
2. Нажмите F12 → вкладка **Elements**
3. Выделите нужный блок и скопируйте HTML (ПКМ → Copy → Copy outerHTML)
4. Уберите лишние React-атрибуты (`data-*`, `class` замените на `className`)

### Метод 2: Экспорт из исходников (точный)

Откройте файлы компонентов и скопируйте JSX. Примеры:

| Секция | Файл |
|--------|------|
| Шапка | `src/components/layout/Header.tsx` |
| Подвал | `src/components/layout/Footer.tsx` |
| Hero-баннер | `src/components/home/HeroSection.tsx` |
| Карточка товара | `src/components/ProductCard.tsx` |
| Популярные товары | `src/components/home/PopularProductsSection.tsx` |
| Категории | `src/components/home/CategoriesSection.tsx` |
| Услуги | `src/components/home/ServicesSection.tsx` |
| Аренда | `src/components/home/RentSection.tsx` |
| Новости | `src/components/home/NewsSection.tsx` |
| Партнёры | `src/components/home/PartnersSection.tsx` |
| Отзывы | `src/components/home/ReviewsSection.tsx` |
| Контакты | `src/components/home/ContactsSection.tsx` |
| Страница товара | `src/pages/Product.tsx` |
| Страница категории | `src/pages/Category.tsx` |
| Страница услуги | `src/pages/Service.tsx` |
| Каталог | `src/pages/Catalog.tsx` |

### Преобразование JSX → HTML

| JSX | HTML |
|-----|------|
| `className="..."` | `class="..."` |
| `onClick={...}` | `onclick="..."` |
| `{variable}` | PHP-код или статический текст |
| `<img src={imageSrc} />` | `<img src="/images/..." />` |

---

## 🛒 Примеры HTML-разметки

### Карточка товара (для catalog.section)

```html
<div class="product-card">
  <div class="product-card-image">
    <img src="/upload/iblock/xxx/image.jpg" alt="Название">
    <div class="product-card-badges">
      <span class="product-card-badge hit">Хит</span>
    </div>
  </div>
  <div class="product-card-content">
    <h3 class="product-card-title">
      <a href="/catalog/product/123/">Прицеп СКИФ-2500</a>
    </h3>
    <div class="product-card-price">
      <span class="product-card-price-current">89 000 ₽</span>
      <span class="product-card-price-old">99 000 ₽</span>
      <span class="product-card-price-discount">-10%</span>
    </div>
    <div class="product-card-stock in-stock">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      В наличии
    </div>
    <button class="product-card-button" data-id="123">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="m1 1 4 4 12.6 2.9a1 1 0 0 1 .8 1v7.1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6"></path></svg>
      В корзину
    </button>
  </div>
</div>
```

### Секция с товарами

```html
<section class="products-section">
  <div class="container">
    <div class="products-section-header">
      <div>
        <h2 class="products-section-title">Популярные товары</h2>
        <p class="products-section-subtitle">Лучшие предложения месяца</p>
      </div>
      <a href="/catalog/" class="products-section-link">
        Все товары
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
      </a>
    </div>
    
    <div class="products-grid">
      <!-- Карточки товаров -->
    </div>
    
    <div class="products-section-footer">
      <a href="/catalog/" class="btn btn-secondary btn-lg">Смотреть все товары</a>
    </div>
  </div>
</section>
```

### Кнопка

```html
<a href="/catalog/" class="btn btn-primary btn-lg">
  Перейти в каталог
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
```

---

## 🖼️ Иконки

Проект использует **Lucide Icons** (SVG). Для Битрикс можно:

1. **Вставлять SVG inline** (рекомендуется для лучшей производительности)
2. Или подключить через CDN:
```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

Документация: https://lucide.dev/

---

## 🔤 Шрифты

Подключены Google Fonts (уже в base.css):
- **Montserrat** (400–900) — заголовки
- **Open Sans** (400–700) — текст

---

## 📱 Адаптивные брейкпоинты

```css
@media (max-width: 640px)  { /* sm - мобильные */ }
@media (max-width: 768px)  { /* md - планшеты */ }
@media (max-width: 1024px) { /* lg - десктоп */ }
```

Контейнер: `max-width: 1400px`

---

## ⚡ JavaScript функционал

Для интерактивных элементов потребуется написать JS:

### Корзина
- Добавление товара (кнопка `.product-card-button`)
- Счётчик в шапке
- LocalStorage для хранения

### Избранное
- Кнопка сердечка
- LocalStorage для хранения

### Мобильное меню
- Открытие/закрытие (класс `.active`)
- Закрытие по клику вне меню

### Модальные окна
- Обратный звонок
- Обратная связь

Образцы логики можно посмотреть в:
- `src/hooks/useCart.ts`
- `src/hooks/useFavorites.ts`
- `src/components/CallbackModal.tsx`

---

## ✅ Чек-лист интеграции

- [ ] Скопировать CSS в шаблон Битрикс
- [ ] Подключить base.css и animations.css первыми
- [ ] Настроить шапку (header.php)
- [ ] Настроить подвал (footer.php)
- [ ] Адаптировать catalog.section для карточек товаров
- [ ] Адаптировать catalog.element для детальной страницы
- [ ] Настроить формы (обратный звонок, обратная связь)
- [ ] Подключить Яндекс.Карты в контактах
- [ ] Протестировать на мобильных устройствах

---

## 📞 Поддержка

При возникновении вопросов обращайтесь к разработчику проекта.
