import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '@/pages/Home/Home';
import About from '@/pages/About/About';
import Contact from '@/pages/Contact/Contact';
import Popup from '@/components/Popup/Popup';

const App: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home onOpenPopup={handleOpenPopup} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </Router>
    );
};

export default App;
