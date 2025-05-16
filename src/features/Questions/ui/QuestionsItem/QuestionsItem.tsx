"use client"
import { useState } from 'react'
import styles from './QuestionsItem.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { QuestionsItemProps } from '@/shared/types/types'

export const QuestionsItem: React.FC<QuestionsItemProps> = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.item}>
            <div className={styles.item__box}>
                <div className={styles.item__left}>
                    <h3 className={styles.item__question}>{question}</h3>
                </div>
                <div onClick={() => setIsOpen(prev => !prev)} className={styles.item__right}>
                    <motion.img
                      className={styles.item__arrow}
                      src='/assets/icons/Arrow.svg'
                      alt='Arrow'
                      width={21}
                      height={13}
                      animate={{ rotate: isOpen ? -180 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                    <motion.img
                      className={styles.item__arrow2}
                      src='/assets/icons/Arrow2.svg'
                      alt='Arrow'
                      width={21}
                      height={13}
                      animate={{ rotate: isOpen ? -180 : 0 }}
                      transition={{ duration: 0.2 }}
                    />
                </div>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  layout
                  className={styles.content}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className={styles.content__text}>{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
        </div>
    )
}
