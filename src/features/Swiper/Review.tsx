import styles from './Review.module.scss'
import { ReviewSwiper } from './ui/ReviewSwiper/ReviewSwiper'
import { useTranslations } from 'next-intl'

export const Review: React.FC = () => {
    const t = useTranslations('Review');

    return (
        <>
            <section className={styles.review}>
                <div className="container">
                    <div className={styles.review__box}>
                        <div className={styles.review__up}>
                            <h2 className={styles.review__title}>{t("h2Review")}</h2>
                            <p className={styles.review__text}>{t("pReview")}</p>
                        </div>
                        <div className={styles.review__swiper}>
                            <ReviewSwiper/>
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.review__bar__box}>
                <div className={styles.review__bar}/>
            </div>
        </>
    )
}