import { Pagination, Autoplay, SwiperOptions } from 'swiper';
import styles from './slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import { ITopAnime, useHightLight } from '@hooks/useHightLight';
import Slide from './partials/Slide';
const Slider = (): JSX.Element => {
  const { data } = useHightLight();

  const swiperSettings: SwiperOptions = {
    pagination: {
      dynamicBullets: true,
      clickable: true,
      bulletActiveClass: `swiper-pagination-bullet-active ${styles['pagination-bullet-active']}`,
      bulletClass: `swiper-pagination-bullet ${styles['pagination-bullet']}`,
    },
    navigation: true,
    slidesPerGroup: 3,
    modules: [Pagination, Autoplay],
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    spaceBetween: 10,
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        spaceBetween: 10,
      },

      480: {
        spaceBetween: 30,
      },

      640: {
        spaceBetween: 35,
      },
    },
  };

  return (
    <>
      <Swiper {...swiperSettings} className={styles.swiper}>
        {data?.map((item: ITopAnime) => (
          <SwiperSlide className={styles['swiper-slide']} key={item.mal_id}>
            <Slide {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
