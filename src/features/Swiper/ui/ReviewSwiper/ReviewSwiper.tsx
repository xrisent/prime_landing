'use client';
import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './ReviewSwiper.module.scss';


export const ReviewSwiper: React.FC = () => {
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);
  if (!isMounted) return null;

  return (
    <div className={styles.slider__wrapper}>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
          renderBullet: (_, className) => `<span class="${className}"></span>`,
        }}
        onBeforeInit={(swiper) => {
          if (swiper.params.pagination && typeof swiper.params.pagination !== 'boolean') {
            swiper.params.pagination.el = paginationRef.current;
          }
        }}
        className={styles.my__swiper}
      >
        
        <SwiperSlide>
            <div className={styles.content__slide}>
                <div className={styles.content__up}>
                    <Image className={styles.content__img} alt='Swiper Avatar' src='/assets/images/AvatarSwiper.svg' width={120} height={120}/>
                    <h4 className={styles.content__title}>Анна Петрова, Москва</h4>
                </div>
                <div className={styles.content__stars}>
                    <Image className={styles.content__star} alt='Swiper Star' src='/assets/icons/Star.svg' width={53} height={49}/>
                    <Image className={styles.content__star} alt='Swiper Star' src='/assets/icons/Star.svg' width={53} height={49}/>
                    <Image className={styles.content__star} alt='Swiper Star' src='/assets/icons/Star.svg' width={53} height={49}/>
                    <Image className={styles.content__star} alt='Swiper Star' src='/assets/icons/Star.svg' width={53} height={49}/>
                    <Image className={styles.content__star} alt='Swiper Star' src='/assets/icons/Star.svg' width={53} height={49}/>
                </div>
                <div className={styles.content__review}>
                    <p className={styles.content__text}>«Я долго искала компанию, которая поможет открыть бизнес в ОАЭ без стресса — и нашла! Меня сопровождали на каждом этапе, отвечали на все вопросы, помогли с оформлением документов и регистрацией. Через 5 дней я уже получила лицензию. Честно — это лучшая инвестиция в своё дело!»</p>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>

      <div ref={paginationRef} className={styles.swiper__pagination} />
    </div>
  );
};
