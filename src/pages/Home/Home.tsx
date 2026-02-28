import React from "react";
import styles from "./Home.module.scss";

import { Hero } from "./sections/Hero/Hero";
import { Services } from "./sections/Services/Services";
import { About } from "./sections/About/About";
import { Stages } from "./sections/Stages/Stages";
import { Support } from "./sections/Support/Support";
import { ContactCta } from "./sections/ContactCta/ContactCta";

type HomeProps = {
    onOpenPopup: () => void;
};

const Home: React.FC<HomeProps> = ({ onOpenPopup }) => {
    return (
        <main className={styles.main}>
            <Hero onOpenPopup={onOpenPopup} />

            <Services
                onOpenPopup={onOpenPopup}
                titleClassName={styles.sectionTitle}
            />

            <About />

            <Stages titleClassName={styles.sectionTitle} />

            <Support />

            <ContactCta onOpenPopup={onOpenPopup} />
        </main>
    );
};

export default Home;

















