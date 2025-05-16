import styles from './Way.module.scss'
import { WayCard } from './ui/WayCard/WayCard'
import Image from 'next/image'

export const Way: React.FC = () => {

    const way = [
        {number: '1', text: 'Консультация — обсуждаем цели и подбираем форму бизнеса.'},
        {number: '2', text: 'План и лицензия — выбираем Free Zone, Mainland или Offshore.'},
        {number: '3', text: 'Подготовка документов — оформляем всё, что нужно.'},
        {number: '4', text: 'Регистрация — подаём заявки и контролируем процесс.'},
        {number: '5', text: 'Запуск — открываем счёт, оформляем визы и сопровождаем дальше.'}
    ]
    return (
        <section className={styles.way}>
            <Image className={styles.way__line1} alt='line1' src='/assets/images/WayLine1.svg' width={0} height={54}/>
            <Image className={styles.way__line2} alt='line2' src='/assets/images/WayLine2.svg' width={0} height={54}/>
            <Image className={styles.way__line3} alt='line3' src='/assets/images/WayLine3.svg' width={0} height={54}/>
            <Image className={styles.way__line4} alt='line4' src='/assets/images/WayLine3.svg' width={0} height={28}/>
            <Image className={styles.way__line5} alt='line5' src='/assets/images/WayLine3.svg' width={0} height={28}/>
            <Image className={styles.way__line6} alt='line6' src='/assets/images/WayLine4.svg' width={0} height={28}/>
            <Image className={styles.way__line7} alt='line7' src='/assets/images/WayLine5.svg' width={0} height={28}/>
            <div className="container">
                <div className={styles.way__box}>
                    <div className={styles.way__in}>
                        <h2 className={styles.way__title}>Простой путь к регистрации бизнеса</h2>
                        <div className={styles.way__items}>
                            {way.map((el,idx)=>(
                                <WayCard
                                   key={idx}
                                   number={el.number}
                                   text={el.text}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}