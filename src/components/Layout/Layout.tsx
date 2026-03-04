import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";

import styles from "./Layout.module.scss";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const { pathname } = useLocation();

    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);

    const showBreadcrumbs = pathname !== "/";

    return (
        <div className={styles.layoutWrapper}>
            <Header onOpenPopup={openPopup} />

            {showBreadcrumbs && (
                <div className={styles.breadcrumbsWrap}>
                    <Breadcrumbs />
                </div>
            )}

            <main className={styles.mainContent}>{children}</main>

            <Footer />
            <Popup isOpen={isPopupOpen} onClose={closePopup} />
        </div>
    );
};

export default Layout;