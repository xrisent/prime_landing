import styles from './Questions.module.scss'
import { QuestionsItem } from './ui/QuestionsItem/QuestionsItem'
import { AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'

export const Questions: React.FC = () => {
    const t = useTranslations('Questions');

    const questions = [
        {question: t("question1"), answer: t("answer1")},
        {question: t("question2"), answer: t("answer2")},
        {question: t("question3"), answer: t("answer3")},
        {question: t("question4"), answer: t("answer4")},
        {question: t("question5"), answer: t("answer5")},
    ]

    return (
        <section className={styles.questions}>
            <div className="container">
                <div className={styles.questions__box}>
                    <h2 className={styles.questions__title}>{t("h2Questions")}</h2>
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