import styles from './Business.module.scss'
import { BusinessCard } from './ui/BusinessCard/BusinessCard'

export const Business: React.FC = () => {

    const business = [
        {title:'Материковая компания', price: 'от 13 900 AED', check1: 'Доступ ко всему рынку ОАЭ', check2: '100% иностранное владение', check3: 'Аренда флекс-офиса включена', check4: 'Лицензия и юрадрес в пакете'},
        {title:'Свободная зона', price: 'от 5 800 AED', check1: '100% владение', check2: 'Без налога на прибыль', check3: 'Регистрация от 3 дней', check4: 'Упрощённый документооборот'},
        {title:'Оффшор', price: 'от 14 500 AED', check1: '0% налогов', check2: 'Без обязательств по офису', check3: 'Идеально для международного бизнеса', check4: 'Высокая конфиденциальность'},
    ] 

    return (
        <section className={styles.business}>
            <div className="container">
                <div className={styles.business__box}>
                    <div className={styles.business__up}>
                        <h2 className={styles.business__title}>Начните бизнес в ОАЭ с профессиональной поддержкой</h2>
                        <p className={styles.business__text}>Простые и понятные пакеты для быстрого старта. Выбирайте и регистрируйтесь без лишней бюрократии.</p>
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