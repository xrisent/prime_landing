"use client"
import { Button } from '@/shared/ui/Buttons/Button/Button'
import styles from './BusinessCard.module.scss'
import { BusinessCardProps } from '@/shared/types/types'

export const BusinessCard: React.FC<BusinessCardProps> = ({title, price, check1, check2, check3, check4}) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__up}>
                <h3 className={styles.card__title}>{title}</h3>
                <h4 className={styles.card__price}>{price}</h4>
            </div>
            <ul className={styles.card__items}>
                <li className={styles.card__item}>{check1}</li>
                <li className={styles.card__item}>{check2}</li>
                <li className={styles.card__item}>{check3}</li>
                <li className={styles.card__item}>{check4}</li>
            </ul>
            
            <Button
              text={'Начать сейчас'} 
              onClick={() => console.log('Hi')}
              variant="start" 
              size="startSize"
            />
        </div>
    )
}