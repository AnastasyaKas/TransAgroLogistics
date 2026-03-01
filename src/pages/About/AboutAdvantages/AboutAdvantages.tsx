import React from 'react';
import styles from './AboutAdvantages.module.scss';

const AboutAdvantages = () => {
    const advantages = [
        {
            icon: 'truck', // Пример иконки, можно использовать иконки из библиотеки или кастомные
            title: 'Надёжная техника и контроль автопарка',
        },
        {
            icon: 'factory',
            title: 'Работа с промышленными и корпоративными заказчиками',
        },
        {
            icon: 'toolbox',
            title: 'Комплексный подход',
        },
        {
            icon: 'user',
            title: 'Индивидуальный подход',
        },
        {
            icon: 'check-circle',
            title: 'Контроль на всех этапах',
        },
        {
            icon: 'link',
            title: 'Долгосрочное партнёрство',
        },
    ];

    return (
        <div className={styles.advantages}>
            <h2>Наши преимущества</h2>
            <div className={styles.cards}>
                {advantages.map((advantage, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>
                            <i className={`fas fa-${advantage.icon}`} />
                        </div>
                        <p className={styles.cardTitle}>{advantage.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutAdvantages;