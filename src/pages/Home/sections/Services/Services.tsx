import React from "react";
import styles from "./Services.module.scss";

import servicesBg from "@/assets/images/services-bg.webp";
import { services } from "../../data/services";

type ServicesProps = {
    onOpenPopup: () => void;
    titleClassName?: string;
};

export const Services: React.FC<ServicesProps> = ({
                                                      onOpenPopup,
                                                      titleClassName,
                                                  }) => {
    return (
        <section
            className={styles.services}
            id="services"
            aria-labelledby="services-title"
        >
            <div className="wideContainer">
                <h2 id="services-title" className={titleClassName}>
                    Наши услуги
                </h2>

                <ul className={styles.servicesList}>
                    {services.map((item) => {
                        const variantClass =
                            item.variant === "blue"
                                ? styles.serviceBlue
                                : item.variant === "green"
                                    ? styles.serviceGreen
                                    : styles.serviceDark;

                        const buttonClass =
                            item.cta === "Больше"
                                ? styles.serviceBtnGhost
                                : styles.serviceBtnPrimary;

                        return (
                            <li
                                key={item.id}
                                className={`${styles.serviceItem} ${variantClass}`}
                                style={{ backgroundImage: `url(${servicesBg})` }}
                            >
                                <div className={styles.serviceBody}>
                                    <h3 className={styles.serviceTitle}>{item.title}</h3>

                                    <p className={styles.serviceText}>{item.text}</p>

                                    <button
                                        type="button"
                                        className={`${styles.serviceBtn} ${buttonClass}`}
                                        onClick={onOpenPopup}
                                    >
                                        {item.cta}
                                    </button>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};