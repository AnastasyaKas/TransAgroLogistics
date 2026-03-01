import React from 'react';
import Layout from '../../components/Layout/Layout';

// Импортируем компоненты для разных блоков страницы About
import AboutHeader from './AboutHeader/AboutHeader';
import AboutAdvantages from './AboutAdvantages/AboutAdvantages';
import AboutGallery from './AboutGallery/AboutGallery';
import AboutPartners from './AboutPartners/AboutPartners';
import { AboutContactCta } from './AboutContactCta/AboutContactCta';

const About = () => {
    // Функция, которая будет вызвана при открытии попапа
    const handleOpenPopup = () => {
        console.log('Popup opened');
        // Здесь можно добавить логику для открытия попапа
    };

    return (
        <div className="about">
            {/* Блок О компании */}
            <AboutHeader />

            {/* Блок Преимущества */}
            <AboutAdvantages />

            {/* Блок Галерея */}
            <AboutGallery />

            {/* Блок Партнеры */}
            <AboutPartners />

            {/* Блок Контактная форма с передачей функции для открытия попапа */}
            <AboutContactCta onOpenPopup={handleOpenPopup} />
        </div>
    );
};

export default About;