import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

import logo from '@/assets/images/logo-footer.svg'; // или logo-footer.svg

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer} role="contentinfo">
            <div className="container">
                {/* TOP */}
                <div className={styles.top}>
                    <div className={styles.contacts}>
                        <h3 className={styles.title}>Контакты</h3>

                        <a
                            href="mailto:info@transagro.group"
                            className={styles.contactLink}
                        >
                            info@transagro.group
                        </a>

                        <p className={styles.address}>
                            Респ. Калмыкия, г. Элиста, ул. им. Чкалова, д. 36
                        </p>
                    </div>

                    <div className={styles.brand}>
                        <img
                            src={logo}
                            alt="ТрансАгро"
                            className={styles.logo}
                        />
                    </div>
                </div>

                {/* DIVIDER */}
                <div className={styles.divider} />

                {/* BOTTOM */}
                <div className={styles.bottom}>
                    <Link to="#" className={styles.policyLink}>
                        Пользовательское соглашение
                    </Link>

                    <p className={styles.disclaimer}>
                        Информация на сайте носит ознакомительный характер и не является публичной офертой
                    </p>

                    <Link to="#" className={styles.policyLink}>
                        Политика конфиденциальности
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



