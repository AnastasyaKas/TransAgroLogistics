import React from 'react';
import Layout from '../../components/Layout/Layout';

const Contact = () => {
    return (
        <>
            <Layout>
            <main className="main">
                <div className="container">
                    <h2 className="contact__title">Будем рады ответить на ваши вопросы</h2>
                    <a className=" button--contact js-open-popup">Контакты</a>
                </div>
            </main>
            </Layout>
        </>
    );
}

export default Contact;
