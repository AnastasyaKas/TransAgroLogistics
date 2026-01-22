import advIcon1 from '@/assets/images/advantages__icon-1.png';
import advIcon2 from '@/assets/images/advantages__icon-2.png';
import advIcon3 from '@/assets/images/advantages__icon-3.png';

export type AdvantageItem = {
    title: string;
    text: string;
    icon: string;
};

export const advantages: AdvantageItem[] = [
    {
        title: 'Экспресс-доставка грузов',
        text: 'Для срочных перевозок с максимально короткими сроками',
        icon: advIcon1,
    },
    {
        title: 'Страхование грузов',
        text: 'Гарантия безопасности и компенсации при повреждении или потере',
        icon: advIcon2,
    },
    {
        title: 'Таможенное оформление',
        text: 'Быстрое и корректное прохождение таможни без задержек',
        icon: advIcon3,
    },
];


