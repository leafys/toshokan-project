import { SwiperOptions, Pagination, Autoplay } from 'swiper';
import styles from '../slider.module.scss';

export const swiperSettings: SwiperOptions = {
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
