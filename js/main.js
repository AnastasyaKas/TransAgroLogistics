document.addEventListener('DOMContentLoaded', () => {
    // Находим все необходимые элементы
    const burgerBtn = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const body = document.body;

    // Проверяем, что все элементы существуют
    if (burgerBtn && menu) {
        burgerBtn.addEventListener('click', () => {
            // Переключаем класс 'is-active' на бургере для анимации в крестик
            burgerBtn.classList.toggle('is-active');

            // Переключаем класс 'is-open' на меню для его показа/скрытия
            menu.classList.toggle('is-open');

            // Блокируем/разблокируем скролл страницы
            body.classList.toggle('no-scroll');

            // Обновляем aria-атрибуты для доступности
            const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
            burgerBtn.setAttribute('aria-expanded', !isExpanded);
        });
    }
});




// js/main.js

document.addEventListener('DOMContentLoaded', () => {

    // --- ЛОГИКА ДЛЯ ПОПАПА ---

    // Находим все необходимые элементы
    const openPopupButtons = document.querySelectorAll('.js-open-popup');
    const popup = document.querySelector('.popup');
    const closePopupButton = document.querySelector('.popup__close-btn');
    const body = document.body;

    // Функция открытия попапа
    function openPopup() {
        if (!popup) return; // Если попапа нет на странице, ничего не делаем
        popup.classList.add('is-visible');
        body.classList.add('no-scroll'); // Блокируем скролл основной страницы
    }

    // Функция закрытия попапа
    function closePopup() {
        if (!popup) return;
        popup.classList.remove('is-visible');
        body.classList.remove('no-scroll'); // Возвращаем скролл
    }

    // Добавляем обработчики событий
    if (popup && openPopupButtons.length > 0) {

        // 1. Открытие по клику на любую из кнопок
        openPopupButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault(); // Предотвращаем стандартное действие ссылки
                openPopup();
            });
        });

        // 2. Закрытие по клику на крестик
        closePopupButton.addEventListener('click', closePopup);

        // 3. Закрытие по клику на оверлей (темный фон)
        popup.addEventListener('click', (e) => {
            // Если клик был по самому оверлею, а не по его контенту
            if (e.target === popup) {
                closePopup();
            }
        });

        // 4. Закрытие по нажатию на клавишу Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popup.classList.contains('is-visible')) {
                closePopup();
            }
        });
    }

    // --- КОНЕЦ ЛОГИКИ ДЛЯ ПОПАПА ---
});