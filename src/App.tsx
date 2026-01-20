import React from 'react';
import Header from './components/Header/Header';  // Заголовок
import Footer from './components/Footer/Footer';  // Футер
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Для роутинга
import Home from './pages/Home';  // Главная страница
import About from './pages/About';  // Страница "О нас"
import Contact from './pages/Contact';  // Страница "Контакты"
// import './styles/style.css';  // Локальные стили для этого компонента


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
