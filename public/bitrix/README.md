# СКИФ - Стили для 1С-Битрикс

Подготовленные CSS файлы для интеграции с 1С-Битрикс.

## Структура файлов

```
css/
├── base.css          # Базовые стили, переменные, типографика, кнопки, сетка
├── animations.css    # Анимации и hover-эффекты
├── header.css        # Шапка сайта
├── hero.css          # Hero-секция (главный баннер со слайдером)
├── products.css      # Карточки товаров
├── categories.css    # Секция категорий
├── services.css      # Секция услуг
├── rent.css          # Секция аренды прицепов
├── news.css          # Секция новостей
├── partners.css      # Секция партнёров
├── reviews.css       # Секция отзывов
├── contacts.css      # Секция контактов и форма
└── footer.css        # Подвал сайта
```

## Подключение в Битрикс

### 1. Загрузите файлы
Скопируйте папку `css` в директорию вашего шаблона:
```
/local/templates/ваш_шаблон/css/
```

### 2. Подключите в header.php
```php
<?php
// В начале header.php после DOCTYPE
use Bitrix\Main\Page\Asset;
$asset = Asset::getInstance();

// Базовые стили (обязательно первыми)
$asset->addCss(SITE_TEMPLATE_PATH.'/css/base.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/animations.css');

// Компоненты (по необходимости)
$asset->addCss(SITE_TEMPLATE_PATH.'/css/header.css');
$asset->addCss(SITE_TEMPLATE_PATH.'/css/footer.css');
?>
```

### 3. Подключайте секции по необходимости
```php
// В нужных местах шаблона
$asset->addCss(SITE_TEMPLATE_PATH.'/css/products.css');
```

## CSS-переменные

Все цвета вынесены в переменные в `base.css`. Для изменения цветовой схемы отредактируйте блок `:root`:

```css
:root {
  --color-primary: #0b4a7a;     /* Основной синий */
  --color-secondary: #2bb673;   /* Зелёный */
  --color-accent: #1f8f5a;      /* Акцентный */
  /* ... */
}
```

## Классы BEM

Стили организованы по методологии BEM:
- Блок: `.product-card`
- Элемент: `.product-card-title`
- Модификатор: `.product-card-badge.hit`

## Адаптивность

Брейкпоинты:
- `640px` - sm (мобильные)
- `768px` - md (планшеты)
- `1024px` - lg (десктоп)
- `1400px` - контейнер

## Примеры HTML-разметки

### Кнопка
```html
<a href="/catalog/" class="btn btn-primary btn-lg">
  Перейти в каталог
  <svg><!-- иконка стрелки --></svg>
</a>
```

### Карточка товара
```html
<div class="product-card">
  <div class="product-card-image">
    <img src="/path/to/image.jpg" alt="Название товара">
    <div class="product-card-badges">
      <span class="product-card-badge hit">Хит</span>
    </div>
  </div>
  <div class="product-card-content">
    <h3 class="product-card-title">
      <a href="/catalog/product/">Название товара</a>
    </h3>
    <div class="product-card-rating">
      <svg>★</svg>
      <span class="product-card-rating-value">4.8</span>
      <span class="product-card-rating-count">(24)</span>
    </div>
    <div class="product-card-price">
      <span class="product-card-price-current">45 000 ₽</span>
      <span class="product-card-price-old">52 000 ₽</span>
      <span class="product-card-price-discount">-13%</span>
    </div>
    <div class="product-card-stock in-stock">
      <svg>✓</svg> В наличии
    </div>
    <button class="product-card-button">
      <svg>🛒</svg> В корзину
    </button>
  </div>
</div>
```

### Секция
```html
<section class="products-section">
  <div class="container">
    <div class="products-section-header">
      <div>
        <h2 class="products-section-title">Популярные товары</h2>
        <p class="products-section-subtitle">Лучшие предложения</p>
      </div>
      <a href="/catalog/" class="products-section-link">
        Все товары <svg>→</svg>
      </a>
    </div>
    
    <div class="products-grid">
      <!-- Карточки товаров -->
    </div>
    
    <div class="products-section-footer">
      <a href="/catalog/" class="btn btn-secondary btn-lg">Смотреть все</a>
    </div>
  </div>
</section>
```

## Иконки

Для иконок рекомендуется использовать:
- [Lucide Icons](https://lucide.dev/) (совместимы с текущей вёрсткой)
- Или любой другой SVG-иконочный шрифт

## Шрифты

Подключены Google Fonts:
- **Montserrat** (900) - заголовки
- **Open Sans** (400, 500, 600, 700) - текст

Шрифты уже подключены в `base.css`.

## Поддержка

При возникновении вопросов обращайтесь к разработчику.
