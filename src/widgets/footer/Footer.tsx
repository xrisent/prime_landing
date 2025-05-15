import styles from './Footer.module.scss'
import mobile from './FooterMobile.module.scss'
import Image from 'next/image'
// import { useRouter } from 'next/navigation'

export const Footer: React.FC = () => {
    return (
        <footer className={`${styles.footer} ${mobile.footer}`}>
            <div className="container">
                <div className={`${styles.footer__box} ${mobile.footer__box}`}>
                    
                </div>
            </div>
        </footer>
    )
};