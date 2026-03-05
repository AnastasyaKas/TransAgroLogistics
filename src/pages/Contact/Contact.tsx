// src/pages/Contact/Contact.tsx
import React, { useId } from "react";
import styles from "./Contact.module.scss";

import PinIcon from "@/assets/images/ContactIcon/pin.svg";
import PhoneIcon from "@/assets/images/ContactIcon/phone.svg";
import MailIcon from "@/assets/images/ContactIcon/mail.svg";
import ClockIcon from "@/assets/images/ContactIcon/clock.svg";

type IconKey = "pin" | "phone" | "mail" | "clock";

type ContactItem = {
    label: string;
    value: React.ReactNode;
    hint?: React.ReactNode; // ✅ теперь можно передавать ссылку
    icon: IconKey;
};

const ICONS: Record<IconKey, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    pin: PinIcon,
    phone: PhoneIcon,
    mail: MailIcon,
    clock: ClockIcon,
};

const Contact: React.FC = () => {
    const titleId = useId();
    const descId = useId();

    const companyName = "ООО «ТРАНСАГРО»";
    const addressText = (
        <>
            Адрес базы:
            <br />
            Орловский муниципальный округ
            <br />
            с. Звягинки, ул. Заводская, 2
        </>
    );

    const phone = "+7 (960) 652-00-57";
    const phoneHref = "tel:+79606520057";
    const email = "site@transagro.group";
    const emailHref = "mailto:site@transagro.group";
    const hours = "Пн–Пт: 08:00–20:00";

    const yandexMapEmbedSrc = "https://yandex.ru/map-widget/v1/?ll=35.924311%2C52.948771&z=17";
    const yandexOrgUrl = "https://yandex.com.tr/maps/org/transagro/205755918996";
    const yandexRouteUrl = "https://yandex.com.tr/maps/?rtext=~52.948771,35.924311&rtt=auto";

    const items: ContactItem[] = [
        {
            label: "Адрес",
            value: addressText,
            hint: (
                <a href={yandexRouteUrl} target="_blank" rel="noreferrer">
                    Как добраться до базы
                </a>
            ),
            icon: "pin",
        },
        {
            label: "Телефон",
            value: <a href={phoneHref}>{phone}</a>,
            hint: "Звонок — самый быстрый способ",
            icon: "phone",
        },
        {
            label: "Email",
            value: <a href={emailHref}>{email}</a>,
            hint: "Ответим в течение рабочего дня",
            icon: "mail",
        },
        { label: "График", value: hours, hint: "По выходным — по договорённости", icon: "clock" },
    ];

    return (
        <main className={styles.page} aria-labelledby={titleId} aria-describedby={descId}>
            <header className={styles.hero}>
                <div className={styles.container}>
                    <h1 id={titleId} className={styles.title}>
                        Контакты
                    </h1>
                    <p id={descId} className={styles.lead}>
                        Свяжитесь с нами удобным способом — проконсультируем и подскажем в ближайшее время..
                    </p>
                </div>
            </header>

            <section className={`${styles.section} section`} aria-label="Контактная информация и карта">
                <div className={styles.container}>
                    <div className={styles.layout}>
                        {/* LEFT */}
                        <div className={styles.panel} aria-label="Контактные данные">
                            <div className={styles.panelHeader}>
                                <h2 className={styles.h2}>Контактная информация</h2>
                                <div className={styles.company}>{companyName}</div>
                            </div>

                            <ul className={styles.list} role="list">
                                {items.map((it) => {
                                    const Icon = ICONS[it.icon];

                                    return (
                                        <li key={it.label} className={styles.item}>
                                            <div className={styles.icon} aria-hidden="true">
                                                <Icon className={styles.iconSvg} focusable="false" />
                                            </div>

                                            <div className={styles.itemBody}>
                                                <div className={styles.itemLabel}>{it.label}</div>
                                                <div className={styles.itemValue}>{it.value}</div>
                                                {it.hint && <div className={styles.itemHint}>{it.hint}</div>}
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className={styles.actions}>
                                <a className={styles.primaryBtn} href={phoneHref} aria-label="Позвонить">
                                    Позвонить
                                </a>
                                <a className={styles.secondaryBtn} href={emailHref} aria-label="Написать на email">
                                    Написать
                                </a>
                                <a
                                    className={styles.secondaryBtn}
                                    href={yandexRouteUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Построить маршрут в Яндекс.Картах"
                                >
                                    Маршрут
                                </a>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className={styles.mapPanel} aria-label="Карта с местоположением базы">
                            <div className={styles.mapTop}>
                                <h2 className={styles.h2}>На карте</h2>
                                <a className={styles.mapLink} href={yandexOrgUrl} target="_blank" rel="noreferrer">
                                    Открыть в Яндекс.Картах →
                                </a>
                            </div>

                            <div className={styles.mapFrameWrap}>
                                <iframe
                                    className={styles.mapFrame}
                                    src={yandexMapEmbedSrc}
                                    title="ТРАНСАГРО — местоположение базы"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                />

                                <div className={styles.mapBadge} aria-hidden="true">
                                    <span className={styles.mapPin} />
                                    <span className={styles.mapBadgeText}>База ТРАНСАГРО</span>
                                </div>

                                <a
                                    className={styles.mapCta}
                                    href={yandexRouteUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label="Построить маршрут до базы"
                                >
                                    Построить маршрут →
                                </a>
                            </div>

                            <p className={styles.mapNote}>
                                Если метка не отображается в виджете — используйте кнопку «Построить маршрут» или «Открыть в
                                Яндекс.Картах».
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;