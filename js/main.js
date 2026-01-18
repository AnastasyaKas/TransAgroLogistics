

document.addEventListener('DOMContentLoaded', () => {
    // Бургер-меню
    const burgerBtn = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const body = document.body;
    const menuLinks = document.querySelectorAll('.header__link');

    if (burgerBtn && menu) {
        burgerBtn.addEventListener('click', () => {
            burgerBtn.classList.toggle('is-active');
            menu.classList.toggle('is-open');
            body.classList.toggle('no-scroll');
            const isExpanded = burgerBtn.getAttribute('aria-expanded') === 'true';
            burgerBtn.setAttribute('aria-expanded', !isExpanded);
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                const targetId = link.getAttribute('href').slice(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });

                    burgerBtn.classList.remove('is-active');
                    menu.classList.remove('is-open');
                    body.classList.remove('no-scroll');
                    burgerBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // Логика для попапа
    const openPopupButtons = document.querySelectorAll('.js-open-popup');
    const popup = document.querySelector('.popup');
    const closePopupButton = document.querySelector('.popup__close-btn');

    function openPopup() {
        if (popup) {
            popup.classList.add('is-visible');
            body.classList.add('no-scroll');
        }
    }

    function closePopup() {
        if (popup) {
            popup.classList.remove('is-visible');
            body.classList.remove('no-scroll');
        }
    }

    if (popup && openPopupButtons.length > 0) {
        openPopupButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                openPopup();
            });
        });

        closePopupButton.addEventListener('click', closePopup);

        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                closePopup();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && popup.classList.contains('is-visible')) {
                closePopup();
            }
        });
    }

    // Логика отправки формы
    const forms = document.querySelectorAll('.popup__form');
    forms.forEach(form => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            // Показать сообщение
            // alert('Форма успешно отправлена, но сейчас работает только фронтенд. Мы свяжемся с вами позже!');

            // Очистить форму
            form.reset();

            // Закрыть попап
            closePopup();
        });
    });
});

