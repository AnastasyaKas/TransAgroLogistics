import React, { useEffect, useRef } from "react";
import styles from "./Popup.module.scss";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
    const modalRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        document.addEventListener("keydown", onKeyDown);
        // фокус на модалку (чтобы Esc/Tab ощущались корректно)
        requestAnimationFrame(() => modalRef.current?.focus());

        return () => document.removeEventListener("keydown", onKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose} role="presentation">
            <div
                className={styles.modal}
                ref={modalRef}
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                aria-labelledby="popup-title"
                aria-describedby="popup-subtitle"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    type="button"
                    className={styles.closeBtn}
                    onClick={onClose}
                    aria-label="Закрыть"
                >
                    <span aria-hidden="true">×</span>
                </button>

                <h3 id="popup-title" className={styles.title}>
                    Оставьте заявку
                </h3>
                <p id="popup-subtitle" className={styles.subtitle}>
                    Мы свяжемся с вами в ближайшее время.
                </p>

                <form className={styles.form}>
                    <label className={styles.field}>
                        <span className={styles.label}>Ваше имя</span>
                        <input
                            type="text"
                            placeholder="Иван"
                            className={styles.input}
                            autoComplete="name"
                        />
                    </label>

                    <label className={styles.field}>
                        <span className={styles.label}>Ваш телефон</span>
                        <input
                            type="tel"
                            placeholder="+7 999 123-45-67"
                            className={styles.input}
                            inputMode="tel"
                            autoComplete="tel"
                        />
                    </label>

                    <button type="submit" className={styles.submitBtn}>
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Popup;