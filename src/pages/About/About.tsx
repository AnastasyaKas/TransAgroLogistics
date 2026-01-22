import React from 'react';
import Layout from '../../components/Layout/Layout';
// import './styles/style.css';

const About = () => {
    return (
        <>
            <Layout>
            <main className="main">
                <div className="container">
                    <div className="about__wrapper">
                        <div className="about__content">
                            <div className="about__top">
                                {/*<img className="about__logo" src="assets/images/about-title.svg" alt=""/>*/}
                            </div>
                            <p className="about__text">
                                «ТРАНСАГРО» — надёжный логистический партнёр с 5-летним опытом. Осуществляем доставку по всей России: от малых отправлений до крупнотоннажных грузов. Собственный автопарк, страхование, точные сроки и поддержка 24/7 — всё для уверенности и комфорта наших клиентов.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            </Layout>
        </>
    );
}

export default About;
