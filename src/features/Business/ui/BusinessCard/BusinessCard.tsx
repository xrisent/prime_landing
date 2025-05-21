import styles from './BusinessCard.module.scss'
import mobile from './BusinessCardMobile.module.scss'
import { BusinessCardProps } from '@/shared/types/types'
import { useTranslations } from 'next-intl'
import { BusinessButtons } from '../BusinessButtons/BusinessButtons'

export const BusinessCard: React.FC<BusinessCardProps> = ({title, price, check1, check2, check3, check4}) => {
    const t = useTranslations('BusinessCard');

    return (
        <div className={`${styles.card} ${mobile.card}`}>
            <div className={`${styles.card__up} ${mobile.card__up}`}>
                <h3 className={`${styles.card__title} ${mobile.card__title}`}>{title}</h3>
                <h4 className={`${styles.card__price} ${mobile.card__price}`}>{price}</h4>
            </div>
            <ul className={`${styles.card__items} ${mobile.card__items}`}>
                <li className={`${styles.card__item} ${mobile.card__item}`}>{check1}</li>
                <li className={`${styles.card__item} ${mobile.card__item}`}>{check2}</li>
                <li className={`${styles.card__item} ${mobile.card__item}`}>{check3}</li>
                <li className={`${styles.card__item} ${mobile.card__item}`}>{check4}</li>
            </ul>
            
            <div className={`${styles.card__btn} ${mobile.card__btn}`}>
                <BusinessButtons
                  businessText={t("btnBusinessCard")}
                />
            </div>
        </div>
    )
}