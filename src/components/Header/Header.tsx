import React, {useEffect, useId, useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import logo from '@/assets/images/logo.svg';
// 1. Импортируем стили как объект styles
import styles from './Header.module.scss';

interface HeaderProps {
    onOpenPopup: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenPopup }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navId = useId();

    const closeMenu = () => setIsMenuOpen(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', isMenuOpen);
        return () => document.body.classList.remove('no-scroll');
    }, [isMenuOpen]);

    useEffect(() => {
        if(!isMenuOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMenu();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isMenuOpen]);


    return (
        // 2. Используем styles.имяКласса
        <header className={styles.header} id="header">
            {/* Глобальный класс "container" пишем строкой, если он в global.scss */}
            <div className="container">
                <div className={styles.wrapper}>
                    <Link to="/" className={styles.logoLink} aria-label="Трансагро — на главную" onClick={closeMenu}>
                        <img
                            src={logo}
                            alt="Трансагро"
                            className={styles.logoImage}
                        />
                    </Link>

                    {/* 3. Для динамических классов используем шаблонную строку */}
                    <nav
                        id={navId}
                        className={`${styles.menu} ${isMenuOpen ? styles.isOpen : ''}`}
                        aria-label="Основная навигация">
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <Link to="/#services" className={styles.link}>
                                    Услуги
                                </Link>
                            </li>

                            <li className={styles.item}>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}
                                    onClick={closeMenu}
                                >
                                    О компании
                                </NavLink>
                            </li>

                            <li className={styles.item}>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}
                                    onClick={closeMenu}
                                >
                                    Контакты
                                </NavLink>
                            </li>
                        </ul>

                        <button
                            type="button"
                            className={`${styles.btn} ${styles.btnMobile}`}
                            onClick={() => {
                                closeMenu();
                                onOpenPopup();
                            }}
                        >
                            Заказать звонок
                        </button>
                    </nav>


                    <button
                        type="button"
                        className={`${styles.btn} ${styles.btnDesktop}`}
                        onClick={onOpenPopup}
                    >
                        Заказать звонок
                    </button>

                    <button
                        type="button"
                        className={`${styles.burger} ${isMenuOpen ? styles.isActive : ''}`}
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
                        aria-expanded={isMenuOpen}
                        aria-controls={navId}
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