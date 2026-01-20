import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import styles from './Layout.module.scss'; // Проверь, чтобы не было 'as styles' или скобок

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    return (
        <div className={styles.layoutWrapper}>
            <Header onOpenPopup={openPopup} />

            <main className={styles.mainContent}>
                {children}
            </main>

            <Footer />

            <Popup isOpen={isPopupOpen} onClose={closePopup} />
        </div>
    );
};

export default Layout;












// import React, { useState } from 'react';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import Popup from '../Popup/Popup';
// import styles from './Layout.module.scss'
//
// interface LayoutProps {
//     children: React.ReactNode;
// }
//
// const Layout: React.FC<LayoutProps> = ({ children }) => {
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//
//     const openPopup = () => setIsPopupOpen(true);
//     const closePopup = () => setIsPopupOpen(false);
//
//     return (
//         <div className="app-wrapper">
//             {/* Передаем функцию открытия попапа в Header */}
//             <Header onOpenPopup={openPopup} />
//
//             <main>{children}</main>
//
//             <Footer />
//
//             {/* Передаем состояние и функцию закрытия в Popup */}
//             <Popup isOpen={isPopupOpen} onClose={closePopup} />
//         </div>
//     );
// };
//
// export default Layout;