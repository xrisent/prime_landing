"use client"
import { Button } from '@/shared/ui/Buttons/Button/Button'
import { WorkItem } from './ui/WorkItem/WorkItem'
import styles from './WorkUs.module.scss'
import { useTranslations } from 'next-intl'

export const WorkUs: React.FC = () => {
    const t = useTranslations('WorkUs');

    const work = [
        {img: '/assets/icons/Work1.svg', title: t("title1"), text: t("text1")},
        {img: '/assets/icons/Work2.svg', title: t("title2"), text: t("text2")},
        {img: '/assets/icons/Work3.svg', title: t("title3"), text: t("text3")},
        {img: '/assets/icons/Work4.svg', title: t("title4"), text: t("text4")},
        {img: '/assets/icons/Work5.svg', title: t("title5"), text: t("text5")},
    ]

    return (
        <section className={styles.work}>
            <div className="container">
                <div className={styles.work__box}>
                     <h2 className={styles.work__title}>{t("h2Work")}</h2>
                     <div className={styles.work__items}>
                        {work.map((el,idx)=>(
                            <WorkItem
                               key={idx}
                               imgSrc={el.img}
                               imgAlt='Картинка Work'
                               imgWidth={100}
                               imgHeight={100}
                               title={el.title}
                               text={el.text}
                            />
                        ))}
                     </div>
                     <Button
                       text={t("btnCorner")} 
                       onClick={() => console.log('Hi')}
                       variant="corner" 
                       size="cornerSize"
                     />
                </div>
            </div>
        </section>
    )
}