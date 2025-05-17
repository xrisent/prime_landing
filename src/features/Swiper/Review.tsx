import styles from './Review.module.scss'
import { ReviewSwiper } from './ui/ReviewSwiper/ReviewSwiper'
import { useTranslations } from 'next-intl'

export const Review: React.FC = () => {
    const t = useTranslations('Review');

    const reviews = [
      {
        id: 1,
        title: t("titleReview1"),
        text: t("textReview1"),
        image: '/assets/images/AvatarSwiper.svg',
        stars: 5,
      },
      {
        id: 2,
        title: t("titleReview2"),
        text: t("textReview2"),
        image: '/assets/images/AvatarSwiper.svg',
        stars: 4,
      },
      {
        id: 3,
        title: t("titleReview3"),
        text: t("textReview3"),
        image: '/assets/images/AvatarSwiper.svg',
        stars: 4,
      },
    ];

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
                            <ReviewSwiper reviews={reviews} />
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