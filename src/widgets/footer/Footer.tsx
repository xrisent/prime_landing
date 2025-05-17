import styles from './Footer.module.scss'
import mobile from './FooterMobile.module.scss'

export const Footer: React.FC = () => {
    return (
        <footer className={`${styles.footer} ${mobile.footer}`}>
            <div className={`container ${styles.containerFooter}`}>
                <div className={`${styles.footer__box} ${mobile.footer__box}`}>
                    <div className={styles.line}></div>
                    <p>2025 PRIME SETUP. All rights reserved</p>
                </div>
            </div>
            <div className={styles.footerBg}></div>
        </footer>
    )
};