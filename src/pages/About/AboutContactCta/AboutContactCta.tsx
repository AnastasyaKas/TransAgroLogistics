import React from 'react';
import styles from './AboutContactCta.module.scss';

type AboutContactCtaProps = {
    onOpenPopup: () => void;
};

export const AboutContactCta: React.FC<AboutContactCtaProps> = ({ onOpenPopup }) => {
    return (
        <section className={styles.contact} id="contact" aria-labelledby="contact-title">
            <div className="wideContainer">
                <div className={styles.contactInner}>
                    <h2 id="contact-title" className={styles.contactTitle}>
                        Будем рады ответить на ваши вопросы
                    </h2>

                    <button
                        type="button"
                        className={styles.contactBtn}
                        onClick={onOpenPopup}
                    >
                        Контакты
                    </button>
                </div>
            </div>
        </section>
    );
};