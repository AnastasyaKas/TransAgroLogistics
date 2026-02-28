import React from "react";
import styles from "./About.module.scss";

import aboutTitle from "@/assets/images/about-title.svg";

export const About: React.FC = () => {
    return (
        <section
            className={styles.about}
            id="about"
            aria-labelledby="about-title"
        >
            <div className="container">
                <div className={styles.aboutInner}>
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutBrand}>
                            <img
                                src={aboutTitle}
                                alt="ТРАНСАГРО"
                                className={styles.aboutBrandLogo}
                            />
                        </div>

                        <p id="about-title" className={styles.aboutText}>
                            <strong>«ТРАНСАГРО»</strong> — надёжный логистический партнёр с
                            5-летним опытом. Осуществляем доставку по всей России: от малых
                            отправлений до крупнотоннажных грузов. Собственный автопарк,
                            страхование, точные сроки и поддержка 24/7 — всё для уверенности
                            и комфорта наших клиентов.
                        </p>
                    </div>

                    <div
                        className={styles.experienceCard}
                        aria-label="5 лет в сфере логистики"
                    >
                        <div className={styles.experienceBadge}>
                            <span>В сфере</span>
                            <span>логистики</span>
                        </div>

                        <div className={styles.experienceMain}>
                            <span className={styles.experienceNumber}>5</span>
                            <span className={styles.experienceLabel}>лет</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};