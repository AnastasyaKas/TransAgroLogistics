// src/pages/About/AboutPartners/AboutPartners.tsx
import React, { useId, useMemo } from "react";
import styles from "./AboutPartners.module.scss";

import logoPartner1 from "@/assets/images/AboutPartners/path_to_logo1.webp";
import logoPartner2 from "@/assets/images/AboutPartners/path_to_logo2.webp";
import logoPartner3 from "@/assets/images/AboutPartners/path_to_logo3.webp";
import logoPartner4 from "@/assets/images/AboutPartners/path_to_logo4.webp";
import logoPartner5 from "@/assets/images/AboutPartners/path_to_logo5.webp";
import logoPartner6 from "@/assets/images/AboutPartners/path_to_logo6.webp";

type Partner = {
    id: string;
    name: string;
    logoSrc: string;
    href?: string;
};

const AboutPartners: React.FC = () => {
    const titleId = useId();

    const partners: Partner[] = useMemo(
        () => [
            { id: "p1", name: "Партнёр 1", logoSrc: logoPartner1 },
            { id: "p2", name: "Партнёр 2", logoSrc: logoPartner2 },
            { id: "p3", name: "Партнёр 3", logoSrc: logoPartner3 },
            { id: "p4", name: "Партнёр 4", logoSrc: logoPartner4 },
            { id: "p5", name: "Партнёр 5", logoSrc: logoPartner5 },
            { id: "p6", name: "Партнёр 6", logoSrc: logoPartner6 },
        ],
        []
    );

    const loopPartners = useMemo(() => [...partners, ...partners], [partners]);

    return (
        <section className={`${styles.partners} section`} aria-labelledby={titleId}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.headText}>
                        <h2 id={titleId} className={styles.title}>
                            Наши партнёры
                        </h2>
                    </div>
                </header>

                <div className={styles.marquee} aria-label="Лента логотипов партнёров">
                    <ul className={styles.track} role="list">
                        {loopPartners.map((p, idx) => {
                            const isClone = idx >= partners.length;
                            const isLink = Boolean(p.href);

                            return (
                                <li
                                    key={`${p.id}-${idx}`}
                                    className={styles.cell}
                                    aria-hidden={isClone ? "true" : undefined}
                                >
                                    {isLink && !isClone ? (
                                        <a
                                            className={styles.item}
                                            href={p.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`Открыть сайт партнёра: ${p.name}`}
                                        >
                                            <img className={styles.logo} src={p.logoSrc} alt={p.name} />
                                        </a>
                                    ) : (
                                        <div className={styles.item}>
                                            <img className={styles.logo} src={p.logoSrc} alt={p.name} />
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                    <div className={styles.fadeLeft} aria-hidden="true" />
                    <div className={styles.fadeRight} aria-hidden="true" />
                </div>
            </div>
        </section>
    );
};

export default AboutPartners;