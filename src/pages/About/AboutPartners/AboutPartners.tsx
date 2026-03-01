import React from 'react';
import styles from './AboutPartners.module.scss';

// Пример массива с логотипами. В реальном проекте логотипы будут динамично подгружаться из папки.
const partners = [
    { src: 'path_to_logo1.webp', alt: 'Роснефть' },
    { src: 'path_to_logo2.webp', alt: 'Финанс' },
    { src: 'path_to_logo3.webp', alt: 'Донской камень' },
    { src: 'path_to_logo4.webp', alt: 'РЕО' },
    { src: 'path_to_logo5.webp', alt: 'Газпромбанк' },
];

const AboutPartners = () => {
    return (
        <div className={styles.partners}>
            <h2>Наши партнёры</h2>
            <div className={styles.grid}>
                {partners.map((partner, index) => (
                    <div key={index} className={styles.partner}>
                        <img
                            src={partner.src}
                            alt={partner.alt}
                            className={styles.logo}
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutPartners;