import type { ReactNode } from "react";

export type ServiceItem = {
    id: string;
    title: ReactNode;
    text: string;
    cta: string;
    variant: "blue" | "green" | "dark";
};

export const services: ServiceItem[] = [
    {
        id: "intercity",
        title: (
            <>
                Междугородние
                <br />
                грузоперевозки
            </>
        ),
        text: "Оперативная доставка по всей России с гарантией сроков и сохранности груза",
        cta: "Заказать",
        variant: "blue",
    },
    {
        id: "storage",
        title: (
            <>
                Хранение
                <br />
                и подготовка грузов
            </>
        ),
        text: "Ответственное хранение, упаковка и полная подготовка к отправке",
        cta: "Заказать",
        variant: "green",
    },
    {
        id: "special",
        title: (
            <>
                Транспортировка
                <br />
                специальных грузов
            </>
        ),
        text: "Перевозка нестандартных и тяжелых грузов с оформлением всех необходимых разрешений",
        cta: "Больше",
        variant: "dark",
    },
];