'use client';
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './ReviewSwiper.module.scss';

export const ReviewSwiper: React.FC = () => {
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      paginationRef.current &&
      swiperRef.current.pagination
    ) {
      swiperRef.current.params.pagination.el = paginationRef.current;
      swiperRef.current.pagination.init();
      swiperRef.current.pagination.render();
      swiperRef.current.pagination.update();
    }
  }, []);

  return (
    <div className={styles.slider__wrapper}>
      <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={styles.my__swiper}
      >
        {[1, 2, 3].map((_, index) => (
          <SwiperSlide key={index}>
            <div className={styles.content__slide}>
              <div className={styles.content__up}>
                <Image
                  className={styles.content__img}
                  alt="Swiper Avatar"
                  src="/assets/images/AvatarSwiper.svg"
                  width={120}
                  height={120}
                />
                <h4 className={styles.content__title}>Анна Петрова, Москва</h4>
              </div>
              <div className={styles.content__stars}>
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    className={styles.content__star}
                    alt="Swiper Star"
                    src="/assets/icons/Star.svg"
                    width={53}
                    height={49}
                  />
                ))}
              </div>
              <div className={styles.content__review}>
                <p className={styles.content__text}>
                  «Я долго искала компанию, которая поможет открыть бизнес в ОАЭ без стресса — и нашла! Меня сопровождали на каждом этапе, отвечали на все вопросы, помогли с оформлением документов и регистрацией. Через 5 дней я уже получила лицензию. Честно — это лучшая инвестиция в своё дело!»
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div ref={paginationRef} className={styles.swiper__pagination} />
    </div>
  );
};
