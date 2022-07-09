import {
  SwiperOptions,
  Pagination,
  Autoplay,
  Navigation,
  Controller,
} from 'swiper';
import styles from '../slider.module.scss';

export const swiperSettings: SwiperOptions = {
  pagination: {
    type: 'bullets',
    dynamicBullets: true,
    clickable: true,
    progressbarFillClass: 'swiper-pagination-progressbar-fill',
    bulletActiveClass: `swiper-pagination-bullet-active ${styles['pagination-bullet-active']}`,
    bulletClass: `swiper-pagination-bullet ${styles['pagination-bullet']}`,
  },

  navigation: true,
  setWrapperSize: true,
  modules: [Pagination, Autoplay, Navigation, Controller],
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  spaceBetween: 10,
  slidesPerView: 'auto',
  slidesPerGroup: 2,
  watchSlidesProgress: true,
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 10,
    },

    450: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 2,

      pagination: {
        type: 'progressbar',
        progressbarFillClass: `swiper-pagination-progressbar-fill ${styles['pagination-progressbar-fill']}`,
      },
    },

    640: {
      slidesPerView: 'auto',
      spaceBetween: 35,
      slidesPerGroup: 3,
    },
  },
};

export const ProgressBarSetings: SwiperOptions = {
  pagination: {
    type: 'progressbar',
    progressbarFillClass: `swiper-pagination-progressbar-fill ${styles['pagination-progressbar-fill']}`,
  },

  setWrapperSize: true,
  modules: [Pagination, Controller],
  spaceBetween: 10,
  slidesPerView: 1,
  slidesPerGroup: 2,
  watchSlidesProgress: true,
  a11y: {
    prevSlideMessage: 'Previous slide',
    nextSlideMessage: 'Next slide',
  },
};
