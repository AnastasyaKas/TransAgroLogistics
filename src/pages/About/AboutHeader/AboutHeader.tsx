import React from 'react';
import styles from './AboutHeader.module.scss';

// Импортируем изображения из папки assets
import aboutHeaderDesktopWebp from '../../../assets/images/aboutHeader-desktop.webp';
import aboutHeaderDesktopJpg from '../../../assets/images/aboutHeader-desktop.jpg';
import aboutHeaderTabletWebp from '../../../assets/images/aboutHeader-tablet.webp';
import aboutHeaderTabletJpg from '../../../assets/images/aboutHeader-tablet.jpg';
import aboutHeaderMobileWebp from '../../../assets/images/aboutHeader-mobile.webp';
import aboutHeaderMobileJpg from '../../../assets/images/aboutHeader-mobile.jpg';

const AboutHeader = () => {
    return (
        <div className={styles.aboutHeader}>
            <div className={styles.container}>
                <h1 className={styles.title}>О нас</h1>
                <div className={styles.content}>

                    <div className={styles.text}>

                        <p className={styles.lead}>
                            ООО «ТРАНСАГРО» — транспортно-подрядная компания, работающая в сфере автомобильных
                            грузоперевозок и строительно-ремонтных работ.
                        </p>

                        <p>
                            Мы сотрудничаем с корпоративными заказчиками и промышленными объектами, обеспечивая надёжное
                            выполнение договорных обязательств.
                        </p>
                        <p>
                            Компания располагает современным автопарком грузовой техники и собственной производственной
                            инфраструктурой, что позволяет поддерживать высокий уровень технической готовности и
                            стабильность работы. Деятельность ведётся с соблюдением отраслевых требований, принципов
                            прозрачности и ориентиром на долгосрочное партнёрство.
                        </p>
                    </div>
                    <div className={styles.image}>
                        <picture>
                            {/* Для десктопа */}
                            <source
                                media="(min-width: 1024px)"
                                srcSet={aboutHeaderDesktopWebp}
                                type="image/webp"
                            />
                            <source
                                media="(min-width: 1024px)"
                                srcSet={aboutHeaderDesktopJpg}
                                type="image/jpeg"
                            />
                            {/*/!* Для планшетов *!/*/}
                            {/*<source*/}
                            {/*    media="(min-width: 768px) and (max-width: 1023px)"*/}
                            {/*    srcSet={aboutHeaderTabletWebp}*/}
                            {/*    type="image/webp"*/}
                            {/*/>*/}
                            {/*<source*/}
                            {/*    media="(min-width: 768px) and (max-width: 1023px)"*/}
                            {/*    srcSet={aboutHeaderTabletJpg}*/}
                            {/*    type="image/jpeg"*/}
                            {/*/>*/}
                            {/* Для мобильных */}
                            <source
                                media="(max-width: 767px)"
                                srcSet={aboutHeaderMobileWebp}
                                type="image/webp"
                            />
                            <source
                                media="(max-width: 767px)"
                                srcSet={aboutHeaderMobileJpg}
                                type="image/jpeg"
                            />
                            {/* Если браузер не поддерживает WebP, будет использовать JPG */}
                            <img
                                src={aboutHeaderDesktopJpg}
                                alt="Truck"
                                loading="lazy"
                                className={styles.imageContent}
                            />
                        </picture>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHeader;