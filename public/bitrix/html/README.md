# Статические HTML-файлы для натяжки на 1С-Битрикс

## Структура файлов

```
public/bitrix/html/
├── index.html          — Главная страница
├── catalog.html        — Каталог (список категорий)
├── category.html       — Страница категории (список товаров)
├── product.html        — Карточка товара
├── services.html       — Список услуг
├── service-detail.html — Детальная страница услуги
├── contacts.html       — Контакты
├── about.html          — О компании
├── news.html           — Список новостей
├── payment.html        — Способы оплаты
├── cart.html           — Корзина
├── checkout.html       — Оформление заказа
├── favorites.html      — Избранное
└── README.md           — Этот файл
```

## Как использовать

### 1. Общая структура каждого файла

Каждый HTML-файл содержит полную разметку страницы:
- `<!-- HEADER -->` — шапка сайта (header.php в Битрикс)
- `<!-- MAIN -->` — основной контент (work_area в Битрикс)
- `<!-- FOOTER -->` — подвал сайта (footer.php в Битрикс)

### 2. Маппинг на компоненты Битрикс

| HTML секция | Компонент Битрикс |
|---|---|
| Товарная карточка (PRODUCT CARD) | `bitrix:catalog.element` |
| Список товаров (Products grid) | `bitrix:catalog.section` |
| Категории (CATEGORY CARD) | `bitrix:catalog.section.list` |
| Новости (News) | `bitrix:news.list` / `bitrix:news.detail` |
| Форма обратной связи | `bitrix:form.result.new` или кастомная |
| Корзина | `bitrix:sale.basket.basket` |
| Оформление заказа | `bitrix:sale.order.ajax` |

### 3. Что нужно для натяжки

1. **Header/Footer** — вынести из `index.html` в `header.php` и `footer.php`
2. **CSS** — подключить файлы из `public/bitrix/css/` + скомпилированный Tailwind
3. **Иконки** — SVG иконки инлайнятся прямо в HTML (заменяют lucide-react)
4. **Картинки** — пути типа `/assets/...` заменить на пути Битрикса
5. **Повторяющиеся блоки** — отмечены комментариями `<!-- PRODUCT CARD -->`, `<!-- CATEGORY CARD -->` и т.д. — обернуть в PHP-циклы

### 4. CSS переменные

Все цвета задаются через CSS-переменные в `base.css`:
```css
--primary: 202 83% 26%;     /* Тёмно-синий */
--secondary: 152 68% 42%;   /* Зелёный */
--accent: 152 68% 34%;      /* Тёмно-зелёный */
```

### 5. Градиенты

Используются утилитарные классы:
- `.gradient-primary` — основной градиент (синий → зелёный)
- `.gradient-secondary` — зелёный градиент
- `.gradient-accent` — акцентный градиент
- `.gradient-hero` — градиент для hero-секции

### 6. Интерактивные элементы

Следующие элементы требуют JS-обработки:
- Мобильное меню (`#mobile-menu-btn`)
- Выпадающее меню каталога (`#catalog-dropdown`)
- Выпадающее меню «О компании» (`#about-dropdown`)
- Поиск (`#mobile-search-btn`)
- Модалка «Заказать звонок» (`#callback-btn`)
- Слайдер на главной (hero)
- Корзина (добавление/удаление товаров)
- Избранное (сердечки)

### 7. Tailwind CSS

Проект использует Tailwind CSS. Для Битрикса нужно:
1. Скомпилировать Tailwind в один CSS-файл
2. Либо использовать CDN: `<script src="https://cdn.tailwindcss.com"></script>` (только для разработки!)
3. Для продакшена — собрать через `npx tailwindcss -o styles.min.css --minify`
