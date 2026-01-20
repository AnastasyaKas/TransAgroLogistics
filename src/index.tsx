import React from 'react';
import ReactDOM from 'react-dom/client';  // Импортируем из 'react-dom/client'
import App from './App';
import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);  // Создаем корень для приложения
root.render(  // Используем метод render на объекте root
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
