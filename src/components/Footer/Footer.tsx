import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

import logoUrl from "@/assets/images/logo-footer.svg?url"; // или logo-footer.svg

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer} role="contentinfo">
            <div className="container">
                {/* TOP */}
                <div className={styles.top}>
                    <div className={styles.contacts}>
                        <h3 className={styles.title}>Контакты</h3>

                        <a
                            href="mailto:site@transagro.group"
                            className={styles.contactLink}
                        >
                            site@transagro.group
                        </a>

                        <p className={styles.address}>
                            Орловский муниципальный округ<br/>
                            с. Звягинки, ул. Заводская, д. 2
                        </p>
                    </div>

                    <div className={styles.brand}>
                        <img src={logoUrl} alt="ТрансАгро" className={styles.logo}/>
                    </div>
                </div>

                {/* DIVIDER */}
                <div className={styles.divider} />

                {/* BOTTOM */}
                <div className={styles.bottom}>
                    <Link to="/terms-of-service" className={styles.policyLink}>
                        Пользовательское соглашение
                    </Link>

                    <p className={styles.disclaimer}>
                        Информация на сайте носит ознакомительный характер и не является публичной офертой
                    </p>

                    <Link to="/privacy-policy" className={styles.policyLink}>
                        Политика конфиденциальности
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



