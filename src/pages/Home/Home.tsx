import React, { type ReactNode } from 'react';
import styles from './Home.module.scss';

import heroImage from '@/assets/images/main-image.png';
import servicesBg from '@/assets/images/services-bg.png';
import { advantages } from './homeData';
import aboutTitle from '@/assets/images/about-title.svg';
import stageIcon1 from '@/assets/images/stages-icon-1.png';
import stageIcon2 from '@/assets/images/stages-icon-2.png';
import stageIcon3 from '@/assets/images/stages-icon-3.png';
import stageIcon4 from '@/assets/images/stages-icon-4.png';
import avatarIcon from '@/assets/images/avatar.svg';



type ServiceItem = {
    id: string;
    title: ReactNode;
    text: string;
    cta: string;
    variant: 'blue' | 'green' | 'dark';
};


type HomeProps = {
    onOpenPopup: () => void;
};


const services: ServiceItem[] = [
    {
        id: 'intercity',
        title: 'Междугородние грузоперевозки',
        text: 'Оперативная доставка по всей России с гарантией сроков и сохранности груза',
        cta: 'Заказать',
        variant: 'blue',
    },
    {
        id: 'storage',
        title: (
            <>
                Хранение
                <br />
                и подготовка грузов
            </>
        ),
        text: 'Ответственное хранение, упаковка и полная подготовка к отправке',
        cta: 'Заказать',
        variant: 'green',
    },
    {
        id: 'special',
        title: 'Транспортировка специальных грузов',
        text: 'Перевозка нестандартных и тяжелых грузов с оформлением всех необходимых разрешений',
        cta: 'Больше',
        variant: 'dark',
    },
];


const stages = [
    {
        id: 'request',
        title: 'Оставляете заявку',
        text: [
            'Оставьте заявку удобным способом.',
            'Мы свяжемся с вами для согласования маршрута, сроков и условий перевозки.',
        ],
        icon: stageIcon1,
    },
    {
        id: 'estimate',
        title: 'Получаете расчёт и договор',
        text: [
            'В течение 15–30 минут мы подбираем маршрут, рассчитываем стоимость.',
            'И направляем коммерческое предложение.',
        ],
        icon: stageIcon2,
    },
    {
        id: 'start',
        title: 'Запускаем перевозку',
        text: [
            'Логисты координируют процесс: подают транспорт, контролируют погрузку и доставку.',
            'За вами закреплён персональный менеджер.',
        ],
        icon: stageIcon3,
    },
    {
        id: 'deliver',
        title: 'Доставляем',
        text: [
            'Груз прибывает в срок.',
            'Документы подписаны, вы получаете подтверждение доставки и закрывающий пакет.',
        ],
        icon: stageIcon4,
    },
] as const;


const supportStats = [
    { value: '10', label: 'Специалистов в службе поддержки' },
    { value: '4.9', label: 'Средняя оценка качества обслуживания' },
    { value: '3:45', label: 'Минут — среднее время ответа на запрос' },
];

const reviews = [
    { name: 'Михаил', stars: '★★★★☆', text: 'Надёжные перевозки и отличная поддержка. Работаем не первый раз!' },
    { name: 'Роман', stars: '★★★★★' },
    { name: 'Юлия', stars: '★★★★★', text: 'Отличная компания — всегда вовремя, груз в целости. Рекомендую!' },
];

const Home: React.FC<HomeProps> = ({ onOpenPopup }) => {
    return (
        <main className={styles.main}>
            {/* HERO */}
            <section className={styles.hero} aria-labelledby="hero-title">
                <div className="wideContainer">
                    <div className={styles.heroInner}>
                        <div className={styles.heroContent}>
                            <h1 id="hero-title" className={styles.heroTitle}>
                                Транспортируем. Сохраняем. Доставляем.
                            </h1>
                            <p className={styles.heroSubtitle}>
                                Работаем с юридическими лицами и крупным бизнесом по всей стране
                            </p>

                            <div className={styles.heroActions}>
                                <button
                                    type="button"
                                    className={styles.primaryBtn}
                                    onClick={onOpenPopup}
                                >
                                    Рассчитать стоимость
                                </button>

                                <button
                                    type="button"
                                    className={styles.secondaryBtn}
                                    onClick={onOpenPopup}
                                >
                                    Получить консультацию
                                </button>
                            </div>
                        </div>

                        <img
                            className={styles.heroImage}
                            src={heroImage}
                            alt="Грузовой автомобиль"
                            loading="eager"
                        />
                    </div>
                </div>
            </section>

            {/* ADVANTAGES */}
            <section className={styles.advantages}>
                <div className="wideContainer">
                    <ul className={styles.advantagesList}>
                        {advantages.map((item) => (
                            <li key={item.title} className={styles.advantagesCard}>
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

                                    <button
                                        type="button"
                                        className={styles.cardBtn}
                                        onClick={onOpenPopup}
                                    >
                                        Подробнее
                                    </button>
                                </div>

                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* SERVICES (ANCHOR) */}
            <section className={styles.services} id="services" aria-labelledby="services-title">
                <div className="wideContainer">
                    <h2 id="services-title" className={styles.sectionTitle}>
                        Наши услуги
                    </h2>

                    <ul className={styles.servicesList}>
                        {services.map((item) => (
                            <li
                                key={item.id}
                                className={`${styles.serviceItem} ${
                                    item.variant === 'blue'
                                        ? styles.serviceBlue
                                        : item.variant === 'green'
                                            ? styles.serviceGreen
                                            : styles.serviceDark
                                }`}
                                style={{backgroundImage: `url(${servicesBg})`}}
                            >
                                <h3 className={styles.serviceTitle}>{item.title}</h3>
                                <p className={styles.serviceText}>{item.text}</p>

                                <button
                                    type="button"
                                    className={styles.serviceBtn}
                                    onClick={onOpenPopup}
                                >
                                    {item.cta}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ABOUT */}
            {/* ABOUT */}
            <section className={styles.about} id="about" aria-labelledby="about-title">
                <div className="container">
                    <div className={styles.aboutInner}>
                        <div className={styles.aboutContent}>
                            <div className={styles.aboutBrand}>
                                {/* Если есть svg-логотип как на старом лендосе */}
                                {/* Если нет — можно оставить текстом */}
                                <img
                                    src={aboutTitle}
                                    alt="ТРАНСАГРО"
                                    className={styles.aboutBrandLogo}
                                />
                            </div>

                            <p id="about-title" className={styles.aboutText}>
                                «ТРАНСАГРО» — надёжный логистический партнёр с 5-летним опытом.
                                Осуществляем доставку по всей России: от малых отправлений до крупнотоннажных грузов.
                                Собственный автопарк, страхование, точные сроки и поддержка 24/7 — всё для уверенности
                                и комфорта наших клиентов.
                            </p>
                        </div>

                        <div className={styles.experienceCard} aria-label="5 лет в сфере логистики">
                            <div className={styles.experienceBadge}>
                                <span>В сфере</span>
                                <span>логистики</span>
                            </div>

                            <div className={styles.experienceMain}>
                                <span className={styles.experienceNumber}>5</span>
                                <span className={styles.experienceLabel}>лет</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* STAGES */}
            {/* STAGES */}
            <section className={styles.stages} aria-labelledby="stages-title">
                <div className="wideContainer">
                    <h2 id="stages-title" className={styles.sectionTitle}>
                        Этапы работы
                    </h2>

                    <ol className={styles.stagesGrid}>
                        {stages.map((item) => (
                            <li
                                key={item.id}
                                className={`${styles.stageCard} ${styles[`stage_${item.id}`]}`}
                            >
                                <div className={styles.stageTextBlock}>
                                    <h3 className={styles.stageTitle}>{item.title}</h3>

                                    {item.text.map((p) => (
                                        <p key={p} className={styles.stageText}>
                                            {p}
                                        </p>
                                    ))}
                                </div>

                                <img
                                    src={item.icon}
                                    alt=""
                                    aria-hidden="true"
                                    className={styles.stageIcon}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </section>


            {/* SUPPORT */}
            <section className={styles.support} aria-labelledby="support-title">
                <div className="wideContainer">
                    <div className={styles.supportCard}>
                        {/* LEFT */}
                        <div className={styles.supportLeft}>
                            <div className={styles.supportContent}>
                                <h2 id="support-title" className={styles.supportTitle}>Поддержка 24/7</h2>

                                <p className={styles.supportText}>
                                    Наши специалисты оперативно решают любые вопросы — от оформления документов до
                                    отслеживания груза.
                                </p>
                                <p className={styles.supportText}>
                                    Свяжитесь с нами в любое время суток — даже в выходные и праздники. Ответим в
                                    течение нескольких минут.
                                </p>
                            </div>

                            <ul className={styles.supportStats}>
                                {supportStats.map((s) => (
                                    <li key={s.label} className={styles.supportStat}>
                                        <div className={styles.supportStatValue}>{s.value}</div>
                                        <div className={styles.supportStatLabel}>{s.label}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* RIGHT */}
                        <div className={styles.supportRight} aria-label="Отзывы клиентов">
                            <div className={`${styles.reviewCard} ${styles.reviewTop}`}>
                                <div className={styles.reviewHeader}>
                                    <div
                                        className={styles.reviewAvatar}
                                        aria-hidden="true"
                                        style={{backgroundImage: `url(${avatarIcon})`}}
                                    />
                                    <div className={styles.reviewInfo}>
                                        <span className={styles.reviewName}>Михаил</span>
                                        <div className={styles.reviewStars}>★★★★☆</div>
                                    </div>
                                </div>
                                <p className={styles.reviewText}>
                                    Надёжные перевозки и отличная поддержка. Работаем не первый раз!
                                </p>
                            </div>

                            <div className={`${styles.reviewCard} ${styles.reviewMid}`}>
                                <div className={styles.reviewHeader}>
                                    <div
                                        className={styles.reviewAvatar}
                                        aria-hidden="true"
                                        style={{backgroundImage: `url(${avatarIcon})`}}
                                    />
                                    <div className={styles.reviewInfo}>
                                        <span className={styles.reviewName}>Роман</span>
                                        <div className={styles.reviewStars}>★★★★★</div>
                                    </div>
                                </div>
                            </div>

                            <div className={`${styles.reviewCard} ${styles.reviewBottom}`}>
                                <div className={styles.reviewHeader}>
                                    <div
                                        className={styles.reviewAvatar}
                                        aria-hidden="true"
                                        style={{backgroundImage: `url(${avatarIcon})`}}
                                    />
                                    <div className={styles.reviewInfo}>
                                        <span className={styles.reviewName}>Юлия</span>
                                        <div className={styles.reviewStars}>★★★★★</div>
                                    </div>
                                </div>
                                <p className={styles.reviewText}>
                                    Отличная компания — всегда вовремя, груз в целости. Рекомендую!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* CONTACT CTA */}
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
        </main>
    );
};

export default Home;


// // import React from 'react';
//
// import React from 'react';
// import Layout from '../../components/Layout/Layout';
//
// const Home = () => {
//     return (
//         <Layout>
//             <div className="container">
//                 <div className="hero">
//                     <h1 className="hero__title">Транспортируем. Сохраняем. Доставляем.</h1>
//                     {/* ... остальной контент ... */}
//                 </div>
//             </div>
//         </Layout>
//     );
// }
//
// export default Home;
//
//
















