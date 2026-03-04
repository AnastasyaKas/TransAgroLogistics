import React from "react";

import AboutHeader from "./AboutHeader/AboutHeader";
import AboutAdvantages from "./AboutAdvantages/AboutAdvantages";
import AboutGallery from "./AboutGallery/AboutGallery";
import AboutPartners from "./AboutPartners/AboutPartners";

import ContactCta from "@/components/ContactCta/ContactCta";

type AboutProps = {
    onOpenPopup: () => void;
};

const About: React.FC<AboutProps> = ({ onOpenPopup }) => {
    return (
        <div className="about">
            <AboutHeader />
            <AboutAdvantages />
            <AboutGallery />
            <AboutPartners />

            <ContactCta
                onOpenPopup={onOpenPopup}
                title="Остались вопросы?"
                subtitle="Оставьте заявку — ответим в ближайшее время."
                buttonText="Связаться"
            />
        </div>
    );
};

export default About;