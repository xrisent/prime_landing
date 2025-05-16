import styles from './WayCard.module.scss'
import { WayCardProps } from '@/shared/types/types'

export const WayCard: React.FC<WayCardProps> = ({number, text}) => {
    return (
        <div className={styles.card}>
            <span className={`${styles.card__corner} ${styles['card__corner--left']}`} />
            <span className={`${styles.card__corner} ${styles['card__corner--right-top']}`} />
            <span className={`${styles.card__corner} ${styles['card__corner--right-bottom']}`} />

            <div className={styles.card__title}>
                <h3 className={styles.card__number}>{number}</h3>
            </div>
            
            <p className={styles.card__text}>{text}</p>
        </div>
    )
}