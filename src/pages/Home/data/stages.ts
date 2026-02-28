import stageIcon1 from "@/assets/images/stages-icon-1.webp";
import stageIcon2 from "@/assets/images/stages-icon-2.webp";
import stageIcon3 from "@/assets/images/stages-icon-3.webp";
import stageIcon4 from "@/assets/images/stages-icon-4.webp";

export type StageId = "request" | "estimate" | "start" | "deliver";

export type StageItem = {
    id: StageId;
    title: string;
    text: string[];
    icon: string; // ✅ просто строка
};

export const stages: StageItem[] = [
    {
        id: "request",
        title: "Оставляете заявку",
        text: [
            "Оставьте заявку удобным способом.",
            "Мы свяжемся с вами для согласования маршрута, сроков и условий перевозки.",
        ],
        icon: stageIcon1,
    },
    {
        id: "estimate",
        title: "Получаете расчёт и договор",
        text: [
            "В течение 15–30 минут мы подбираем маршрут, рассчитываем стоимость.",
            "И направляем коммерческое предложение.",
        ],
        icon: stageIcon2,
    },
    {
        id: "start",
        title: "Запускаем перевозку",
        text: [
            "Логисты координируют процесс: подают транспорт, контролируют погрузку и доставку.",
            "За вами закреплён персональный менеджер.",
        ],
        icon: stageIcon3,
    },
    {
        id: "deliver",
        title: "Доставляем",
        text: [
            "Груз прибывает в срок.",
            "Документы подписаны, вы получаете подтверждение доставки и закрывающий пакет.",
        ],
        icon: stageIcon4,
    },
];