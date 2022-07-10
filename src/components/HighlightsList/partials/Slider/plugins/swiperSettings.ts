import { SwiperOptions, Pagination, Autoplay} from 'swiper';
import styles from '../slider.module.scss';

export const swiperSettings: SwiperOptions = {
  pagination: {
    type: 'bullets',
    dynamicBullets: true,
    clickable: true,
    bulletActiveClass: `swiper-pagination-bullet-active ${styles['pagination-bullet-active']}`,
    bulletClass: `swiper-pagination-bullet ${styles['pagination-bullet']}`,
  },

  setWrapperSize: true,
  modules: [Pagination, Autoplay],
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  spaceBetween: 10,
  slidesPerView: 2,
  slidesPerGroup: 2,
  watchSlidesProgress: true,
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 10,
    },

    450: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },

    640: {
      slidesPerView: 'auto',
      spaceBetween: 35,
      slidesPerGroup: 3,
    },
  },
};
