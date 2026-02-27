import React from "react";
import styles from "./Stages.module.scss";

import { stages } from "../../data/stages";
import {
    handleCardMove,
    handleCardEnter,
    handleCardLeave,
} from "../../utils/cardSpotlight";

type StagesProps = {
    titleClassName?: string;
};

const getUrl = (icon: string | { default: string }) =>
    typeof icon === "string" ? icon : icon.default;

export const Stages: React.FC<StagesProps> = ({ titleClassName }) => {
    return (
        <section className={styles.stages} aria-labelledby="stages-title">
            <div className="wideContainer">
                <h2 id="stages-title" className={titleClassName}>
                    Этапы работы
                </h2>

                <ol className={styles.stagesGrid}>
                    {stages.map((item, index) => (
                        <li
                            key={item.id}
                            className={`${styles.stageCard} ${
                                styles[`stage_${item.id}`]
                            }`}
                            onMouseMove={handleCardMove}
                            onMouseEnter={handleCardEnter}
                            onMouseLeave={handleCardLeave}
                        >
                            <div className={styles.stageTextBlock}>
                                <h3 className={styles.stageTitle}>{item.title}</h3>

                                {item.text.map((paragraph) => (
                                    <p key={paragraph} className={styles.stageText}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            <span className={styles.stageNumber} aria-hidden="true">
                {(index + 1).toString().padStart(2, "0")}
              </span>

                            <img
                                src={getUrl(item.icon)}
                                alt=""
                                aria-hidden="true"
                                className={styles.stageIcon}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};