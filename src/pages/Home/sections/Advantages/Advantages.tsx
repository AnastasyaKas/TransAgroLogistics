import React from "react";
import styles from "./Advantages.module.scss";

import { advantages } from "../../data/homeData";

type AdvantagesProps = {
    onOpenPopup: () => void;
};

export const Advantages: React.FC<AdvantagesProps> = ({ onOpenPopup }) => {
    return (
        <ul className={styles.advantagesList}>
            {advantages.map((item) => (
                <li key={item.title}>
                    <button
                        type="button"
                        className={styles.advantagesCard}
                        onClick={onOpenPopup}
                    >
                        <div className={styles.cardTop}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.text}</p>
                        </div>

                        <div className={styles.cardBottom}>
                            <img
                                src={item.icon}
                                alt=""
                                aria-hidden="true"
                                className={styles.cardIcon}
                            />
                            <span className={styles.cardArrow}> → </span>
                        </div>
                    </button>
                </li>
            ))}
        </ul>
    );
};