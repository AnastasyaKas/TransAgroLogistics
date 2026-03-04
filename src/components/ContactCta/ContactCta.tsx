// src/components/ContactCta/ContactCta.tsx
import React from "react";
import styles from "./ContactCta.module.scss";

type ContactCtaProps = {
    onOpenPopup: () => void;
    title?: string;
    subtitle?: string;
    buttonText?: string;
    className?: string;
};

const ContactCta: React.FC<ContactCtaProps> = ({
                                                   onOpenPopup,
                                                   title = "Свяжитесь с нами",
                                                   subtitle = "Ответим на вопросы и подготовим предложение под вашу задачу.",
                                                   buttonText = "Оставить заявку",
                                                   className,
                                               }) => {
    return (
        <section className={[styles.contactCta, "section", className].filter(Boolean).join(" ")}>
            <div className={styles.container}>
                <div className={styles.inner}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>{title}</h2>
                        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    </div>

                    <button type="button" className={styles.button} onClick={onOpenPopup}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactCta;