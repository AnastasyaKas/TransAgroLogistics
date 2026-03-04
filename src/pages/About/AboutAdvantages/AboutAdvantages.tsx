import React from "react";
import styles from "./AboutAdvantages.module.scss";

// SVG из Figma (SVGR: SVG -> React component)
import TruckIcon from "@/assets/images/IconAboutAdvantages/icon-1-car.svg";
import IndustryIcon from "@/assets/images/IconAboutAdvantages/icon-2-factory.svg";
import PuzzleIcon from "@/assets/images/IconAboutAdvantages/icon-3-puzzle.svg";
import UserIcon from "@/assets/images/IconAboutAdvantages/icon-4-way.svg";
import StagesIcon from "@/assets/images/IconAboutAdvantages/icon-5-stages.svg";
import PartnershipIcon from "@/assets/images/IconAboutAdvantages/icon-6-chain.svg";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Advantage = {
    Icon: IconComponent;
    title: string;
    variant?: "default" | "wide";
};

const ADVANTAGES: Advantage[] = [
    { Icon: TruckIcon, title: "Надёжная техника\nи контроль автопарка" },
    { Icon: IndustryIcon, title: "Работа с промышленными\nи корпоративными заказчиками" },
    { Icon: PuzzleIcon, title: "Комплексный подход" },
    { Icon: UserIcon, title: "Индивидуальный подход" },
    { Icon: StagesIcon, title: "Контроль на всех этапах", variant: "wide" }, //
    { Icon: PartnershipIcon, title: "Долгосрочное партнёрство" },
];

function renderTitleWithBreaks(text: string) {
    const parts = text.split("\n");
    return parts.map((line, i) => (
        <React.Fragment key={`${line}-${i}`}>
            {line}
            {i < parts.length - 1 && <br />}
        </React.Fragment>
    ));
}

const AboutAdvantages: React.FC = () => {
    return (
        <section className={`${styles.advantages} section`} aria-labelledby="about-advantages-title">
            <div className={styles.container}>
                <header className={styles.header}>
                    <h2
                        id="about-advantages-title"
                        className={styles.title}
                    >
                        Наши преимущества
                    </h2>
                </header>

                <div className={styles.grid}>
                    {ADVANTAGES.map(({Icon, title, variant}, idx) => (
                        <article key={idx} className={styles.card}>
                            <div
                                className={`${styles.icon} ${
                                    variant === "wide"
                                        ? styles.iconWide
                                        : ""
                                }`}
                                aria-hidden="true"
                            >
                                <Icon
                                    className={styles.iconSvg}
                                    focusable="false"
                                />
                            </div>

                            <p className={styles.cardTitle}>
                                {renderTitleWithBreaks(title)}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutAdvantages;