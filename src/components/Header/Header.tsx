import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// 1. Импортируем стили как объект styles
import styles from './Header.module.scss';

interface HeaderProps {
    onOpenPopup: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenPopup }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Глобальные классы (на body) оставляем как есть
        document.body.classList.toggle('no-scroll');
    };

    return (
        // 2. Используем styles.имяКласса
        <header className={styles.header} id="header">
            {/* Глобальный класс "container" пишем строкой, если он в global.scss */}
            <div className="container">
                <div className={styles.wrapper}>
                    <Link to="/" className={styles.logoLink}>
                        Логотип
                    </Link>

                    {/* 3. Для динамических классов используем шаблонную строку */}
                    <nav className={`${styles.menu} ${isMenuOpen ? styles.isOpen : ''}`}>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <Link to="/about" className={styles.link}>О компании</Link>
                            </li>
                            <li className={styles.item}>
                                <Link to="/contact" className={styles.link}>Контакты</Link>
                            </li>
                        </ul>

                        <button
                            className={`${styles.btn} ${styles.btnMobile}`}
                            onClick={onOpenPopup}
                        >
                            Заказать звонок
                        </button>
                    </nav>

                    <button
                        className={`${styles.btn} ${styles.btnDesktop}`}
                        onClick={onOpenPopup}
                    >
                        Заказать звонок
                    </button>

                    <button
                        className={`${styles.burger} ${isMenuOpen ? styles.isActive : ''}`}
                        onClick={toggleMenu}
                        aria-label="Открыть меню"
                    >
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                        <span className={styles.burgerLine}></span>
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;