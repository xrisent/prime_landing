"use client"
import { Button } from '@/shared/ui/Buttons/Button/Button'
import { WorkItem } from './ui/WorkItem/WorkItem'
import styles from './WorkUs.module.scss'

export const WorkUs: React.FC = () => {

    const work = [
        {img: '/assets/icons/Work1.svg', title: 'Более 100 успешных регистраций', text: 'Мы помогли предпринимателям из 10+ стран открыть бизнес в ОАЭ.'},
        {img: '/assets/icons/Work2.svg', title: 'Прозрачные условия', text: 'Работаем по договору, без скрытых платежей.'},
        {img: '/assets/icons/Work3.svg', title: ' Сопровождаем на каждом этапе', text: 'От идеи — до получения лицензии и запуска.'},
        {img: '/assets/icons/Work4.svg', title: 'Работаем строго по закону ОАЭ', text: 'Все процессы соответствуют требованиям местного законодательства.'},
        {img: '/assets/icons/Work5.svg', title: 'Комплексный подход', text: 'Всё в одном месте: лицензия, банковский счёт, визы, бухгалтерия.'},
    ]

    return (
        <section className={styles.work}>
            <div className="container">
                <div className={styles.work__box}>
                     <h2 className={styles.work__title}>Почему стоит работать с нами</h2>
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
                       text={'Записаться на консультацию'} 
                       onClick={() => console.log('Hi')}
                       variant="corner" 
                       size="cornerSize"
                     />
                </div>
            </div>
        </section>
    )
}