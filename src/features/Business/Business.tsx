import styles from './Business.module.scss'
import { BusinessCard } from './ui/BusinessCard/BusinessCard'
import { useTranslations } from 'next-intl'

export const Business: React.FC = () => {
    const t = useTranslations('Business');

    const business = [
        {title: t("title1Business"), price: t("price1Business"), check1: t("check1Business1"), check2: t("check2Business1"), check3: t("check3Business1"), check4: t("check4Business1")},
        {title: t("title2Business"), price: t("price2Business"), check1: t("check1Business2"), check2: t("check2Business2"), check3: t("check3Business2"), check4: t("check4Business2")},
        {title: t("title3Business"), price: t("price3Business"), check1: t("check1Business3"), check2: t("check2Business3"), check3: t("check3Business3"), check4: t("check4Business3")},
    ] 

    return (
        <section className={styles.business}>
            <div className="container">
                <div className={styles.business__box}>
                    <div className={styles.business__up}>
                        <h2 className={styles.business__title}>{t("h2Business")}</h2>
                        <p className={styles.business__text}>{t("pBusiness")}</p>
                    </div>
                    <div className={styles.business__items}>
                        {business.map((el,idx)=>(
                            <BusinessCard
                               key={idx}
                               title={el.title}
                               price={el.price}
                               check1={el.check1}
                               check2={el.check2}
                               check3={el.check3}
                               check4={el.check4}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}