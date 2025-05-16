import styles from './Questions.module.scss'
import { QuestionsItem } from './ui/QuestionsItem/QuestionsItem'
import { AnimatePresence, motion } from 'framer-motion'

export const Questions: React.FC = () => {

    const questions = [
        {question:'Сколько времени занимает регистрация компании?', answer:'Обычно требуются паспорт, фотографии, бизнес-план и заявление на регистрацию. В некоторых случаях могут понадобиться дополнительные документы'},
        {question:'Можно ли открыть бизнес удалённо?', answer:'Обычно требуются паспорт, фотографии, бизнес-план и заявление на регистрацию. В некоторых случаях могут понадобиться дополнительные документы'},
        {question:'Какие документы нужно предоставить?', answer:'Обычно требуются паспорт, фотографии, бизнес-план и заявление на регистрацию. В некоторых случаях могут понадобиться дополнительные документы'},
        {question:'Чем отличается Mainland от Free Zone?', answer:'Обычно требуются паспорт, фотографии, бизнес-план и заявление на регистрацию. В некоторых случаях могут понадобиться дополнительные документы'},
        {question:'Что входит в ваши услуги?', answer:'Обычно требуются паспорт, фотографии, бизнес-план и заявление на регистрацию. В некоторых случаях могут понадобиться дополнительные документы'},
    ]

    return (
        <section className={styles.questions}>
            <div className="container">
                <div className={styles.questions__box}>
                    <h2 className={styles.questions__title}>Часто задаваемые вопросы</h2>
                    <div className={styles.questions__items}>
                        <AnimatePresence>
                            {questions.map((el,idx)=>(
                                <QuestionsItem
                                  key={idx}
                                  question={el.question}
                                  answer={el.answer}
                                />
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}