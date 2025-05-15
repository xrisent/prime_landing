"use client"
import { Button } from '@/shared/ui/Buttons/Button/Button'
import styles from './Header.module.scss'
import mobile from './HeaderMobile.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Burger } from '../burger/Burger'
import { Language } from '../language/Language'

export const Header: React.FC = () => {

    const navigation = useRouter()

    return (
        <header className={`${styles.header} ${mobile.header}`}>
            <div className="container">
                <div className={`${styles.header__box} ${mobile.header__box}`}>

                    <Image 
                      src='/assets/icons/Logo.svg' 
                      onClick={() => navigation.push("/")}
                      className={`${styles.header__logo} ${mobile.header__logo}`} 
                      alt='Header Logo'
                      width={204} 
                      height={82}
                    />

                    <nav className={`${styles.header__nav} ${mobile.header__nav}`}>
                        <ul className={`${styles.header__ul} ${mobile.header__ul}`}>
                            <li onClick={() => navigation.push("#")} className={`${styles.header__ul__li} ${mobile.header__ul__li}`}>О нас</li>
                            <li onClick={() => navigation.push("#")} className={`${styles.header__ul__li} ${mobile.header__ul__li}`}>Услуги</li>
                            <li onClick={() => navigation.push("#")} className={`${styles.header__ul__li} ${mobile.header__ul__li}`}>Блог</li>
                            <li onClick={() => navigation.push("#")} className={`${styles.header__ul__li} ${mobile.header__ul__li}`}>FAQ</li>
                            <li onClick={() => navigation.push("#")} className={`${styles.header__ul__li} ${mobile.header__ul__li}`}>Контакты</li>
                        </ul> 
                    </nav>

                    <div className={`${styles.header__right} ${mobile.header__right}`}>
                        <Language/>
                        <div className={`${styles.header__btn} ${mobile.header__btn}`}>
                            <Button
                              text={'Оставить заявку'} 
                              onClick={() => console.log('Hi')}
                              variant="request" 
                              size="requestSize"
                            />
                        </div>
                        <div className={`${styles.header__burger} ${mobile.header__burger}`}>
                            <Burger/>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    )
}