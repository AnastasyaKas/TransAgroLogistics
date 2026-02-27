import React from "react";
import styles from "./Support.module.scss";

import { supportStats } from "../../data/supportStats";

import mikhailAvatar from "@/assets/images/mikhail.png";
import romanAvatar from "@/assets/images/roman.png";
import yuliaAvatar from "@/assets/images/yulia.png";

export const Support: React.FC = () => {
    return (
        <section
            className={styles.support}
            aria-labelledby="support-title"
        >
            <div className="wideContainer">
                <div className={styles.supportCard}>
                    {/* LEFT */}
                    <div className={styles.supportLeft}>
                        <div className={styles.supportContent}>
                            <h2 id="support-title" className={styles.supportTitle}>
                                Поддержка 24/7
                            </h2>

                            <p className={styles.supportText}>
                                Наши специалисты оперативно решают любые вопросы — от
                                оформления документов до отслеживания груза.
                            </p>

                            <p className={styles.supportText}>
                                Свяжитесь с нами в любое время суток — даже в выходные и
                                праздники. Ответим в течение нескольких минут.
                            </p>
                        </div>

                        <ul className={styles.supportStats}>
                            {supportStats.map((stat) => (
                                <li key={stat.label} className={styles.supportStat}>
                                    <div className={styles.supportStatValue}>
                                        {stat.value}
                                    </div>
                                    <div className={styles.supportStatLabel}>
                                        {stat.label}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* RIGHT */}
                    <div
                        className={styles.supportRight}
                        aria-label="Отзывы клиентов"
                    >
                        <div
                            className={`${styles.reviewCard} ${styles.reviewTop}`}
                        >
                            <div className={styles.reviewHeader}>
                                <img
                                    className={styles.reviewAvatar}
                                    src={mikhailAvatar}
                                    alt="Михаил"
                                    loading="lazy"
                                />
                                <div className={styles.reviewInfo}>
                  <span className={styles.reviewName}>
                    Михаил
                  </span>
                                    <div className={styles.reviewStars}>
                                        ★★★★☆
                                    </div>
                                </div>
                            </div>

                            <p className={styles.reviewText}>
                                Надёжные перевозки и отличная поддержка. Работаем не
                                первый раз!
                            </p>
                        </div>

                        <div
                            className={`${styles.reviewCard} ${styles.reviewMid}`}
                        >
                            <div className={styles.reviewHeader}>
                                <img
                                    className={styles.reviewAvatar}
                                    src={romanAvatar}
                                    alt="Роман"
                                    loading="lazy"
                                />
                                <div className={styles.reviewInfo}>
                  <span className={styles.reviewName}>
                    Роман
                  </span>
                                    <div className={styles.reviewStars}>
                                        ★★★★★
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={`${styles.reviewCard} ${styles.reviewBottom}`}
                        >
                            <div className={styles.reviewHeader}>
                                <img
                                    className={styles.reviewAvatar}
                                    src={yuliaAvatar}
                                    alt="Юлия"
                                    loading="lazy"
                                />
                                <div className={styles.reviewInfo}>
                  <span className={styles.reviewName}>
                    Юлия
                  </span>
                                    <div className={styles.reviewStars}>
                                        ★★★★★
                                    </div>
                                </div>
                            </div>

                            <p className={styles.reviewText}>
                                Отличная компания — всегда вовремя, груз в целости.
                                Рекомендую!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};