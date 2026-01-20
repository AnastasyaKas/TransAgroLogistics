import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <p className={styles.copy}>
                        © {new Date().getFullYear()} ТРАНСАГРО. Все права защищены.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


// import React from 'react';
// import './Footer.scss';
// import styles from './Footer.module.scss'
//
//
// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="container">
//                 <div className="footer__wrapper">
//                     <div className="footer__main">
//                         <div className="footer__contacts">
//                             <h4 className="footer__title">Контакты</h4>
//                             <address className="footer__address">
//                                 <a href="mailto:info@transagro.group" className="footer__link">info@transagro.group</a>
//                                 <span> Респ. Калмыкия г. Элиста, ул. им. Чкалова, д. 36</span>
//                             </address>
//                         </div>
//                         <a href="/" className="footer__logo">
//                             {/*<img src="assets/images/logo-footer.svg" alt="Логотип ТрансАгро" />*/}
//                         </a>
//                     </div>
//                     <div className="footer__legal">
//                         <a href="/" className="footer__link footer__link--legal">Пользовательское соглашение</a>
//                         <p className="footer__copyright">Информация на сайте носит ознакомительный характер и не является публичной офертой</p>
//                         <a href="/" className="footer__link footer__link--legal">Политика конфиденциальности</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }
//
// export default Footer;
