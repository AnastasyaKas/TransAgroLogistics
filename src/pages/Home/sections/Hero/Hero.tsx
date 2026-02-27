import React from "react";
import styles from "./Hero.module.scss";

import heroTitleSvg from "@/assets/images/hero-title.svg";
import { Advantages } from "../Advantages/Advantages";

type HeroProps = {
    onOpenPopup: () => void;
};

export const Hero: React.FC<HeroProps> = ({ onOpenPopup }) => {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.heroInner}>
                    <h1 id="hero-title" className={styles.srOnly}>
                        Логистика для бизнеса
                    </h1>

                    {/* ===== GLASS BLOCK ===== */}
                    <div className={styles.heroContent}>
                        <img
                            className={styles.heroTitleSvg}
                            src={heroTitleSvg}
                            alt="Логистика для бизнеса"
                            loading="eager"
                        />

                        <p className={styles.heroSubtitle}>
                            Надёжная логистика для корпоративных клиентов
                        </p>

                        <button
                            type="button"
                            className={styles.primaryBtn}
                            onClick={onOpenPopup}
                        >
                            <span className={styles.btnText}>Рассчитать стоимость</span>
                        </button>
                    </div>

                    {/* ===== ADVANTAGES ===== */}
                    <Advantages onOpenPopup={onOpenPopup} />
                </div>
            </div>
        </section>
    );
};