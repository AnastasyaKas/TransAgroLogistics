import React, { useEffect, useState, useId } from 'react';  // Импортируем useId
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'; // импортируем HashLink
import logo from '@/assets/images/logo.svg';
import styles from './Header.module.scss';

interface HeaderProps {
    onOpenPopup: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenPopup }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navId = useId();  // Создаём уникальный id с помощью useId

    const closeMenu = () => setIsMenuOpen(false);
    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    useEffect(() => {
        document.body.classList.toggle('no-scroll', isMenuOpen);
        return () => document.body.classList.remove('no-scroll');
    }, [isMenuOpen]);

    useEffect(() => {
        if (!isMenuOpen) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMenu();
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [isMenuOpen]);

    return (
        <header className={styles.header} id="header">
            <div className="container">
                <div className={styles.wrapper}>
                    <Link to="/" className={styles.logoLink} aria-label="Трансагро — на главную" onClick={closeMenu}>
                        <img src={logo} alt="Трансагро" className={styles.logoImage} />
                    </Link>

                    <nav id={navId} className={`${styles.menu} ${isMenuOpen ? styles.isOpen : ''}`} aria-label="Основная навигация">
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                {/* Используем HashLink для плавного скроллинга */}
                                <HashLink to="/#services" className={styles.link} onClick={closeMenu}>
                                    Услуги
                                </HashLink>
                            </li>

                            <li className={styles.item}>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }: { isActive: boolean }) => `${styles.link} ${isActive ? styles.active : ''}`}
                                    onClick={closeMenu}
                                >
                                    О компании
                                </NavLink>
                            </li>

                            <li className={styles.item}>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }: { isActive: boolean }) => `${styles.link} ${isActive ? styles.active : ''}`}
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
};

export default Header;
