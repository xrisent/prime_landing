import styles from './Review.module.scss'
import { ReviewSwiper } from './ui/ReviewSwiper/ReviewSwiper'

export const Review: React.FC = () => {
    return (
        <section className={styles.review}>
            <div className="container">
                <div className={styles.review__box}>
                    <div className={styles.review__up}>
                        <h2 className={styles.review__title}>Что о нас говорят клиенты</h2>
                        <p className={styles.review__text}>Отзывы тех, кто уже запустил бизнес в ОАЭ с нашей помощью. Их опыт — лучшее подтверждение качества нашей работы.</p>
                    </div>
                    <div className={styles.review__swiper}>
                        <ReviewSwiper/>
                    </div>
                </div>
            </div>
        </section>
    )
}