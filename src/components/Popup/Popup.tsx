import React from 'react';
import styles from './Popup.module.scss';

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть">
                    ×
                </button>
                <h3 className={styles.title}>Оставьте заявку</h3>
                <p className={styles.subtitle}>Мы свяжемся с вами в ближайшее время.</p>

                <form className={styles.form}>
                    <input type="text" placeholder="Ваше имя" className={styles.input} />
                    <input type="tel" placeholder="Ваш телефон" className={styles.input} />
                    <button type="submit" className={styles.submitBtn}>Отправить</button>
                </form>
            </div>
        </div>
    );
};

export default Popup;