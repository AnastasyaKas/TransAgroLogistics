import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "@/components/Layout/Layout";
import Popup from "@/components/Popup/Popup";

// ✅ ленивые страницы (code splitting)
const Home = React.lazy(() => import("@/pages/Home/Home"));
const About = React.lazy(() => import("@/pages/About/About"));
const Contact = React.lazy(() => import("@/pages/Contact/Contact"));
const TermsOfService = React.lazy(() => import("@/pages/TermsOfService/TermsOfService"));
const PrivacyPolicy = React.lazy(() => import("@/pages/PrivacyPolicy/PrivacyPolicy"));

const App: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => setIsPopupOpen(true);
    const handleClosePopup = () => setIsPopupOpen(false);

    return (
        <Router>
            <Suspense fallback={<div style={{ padding: 24 }}>Loading…</div>}>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Layout>
                                <Home onOpenPopup={handleOpenPopup} />
                            </Layout>
                        }
                    />

                    <Route
                        path="/about"
                        element={
                            <Layout>
                                <About onOpenPopup={handleOpenPopup} />
                            </Layout>
                        }
                    />

                    <Route
                        path="/contact"
                        element={
                            <Layout>
                                <Contact />
                            </Layout>
                        }
                    />

                    {/* Если эти страницы тоже должны быть внутри Layout — оберни так же */}
                    <Route path="/terms-of-service" element={<TermsOfService />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </Suspense>

            <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
        </Router>
    );
};

export default App;