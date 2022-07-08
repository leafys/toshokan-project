import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import styles from './slider.module.scss';
import 'swiper/scss/pagination';
import { useHightLight } from '@hooks/useTitles';
import Slide from './partials/Slide';
import { ITypesTopAndUncomingTitles } from '@interfaces/ITopAndUpcomingTitles';
import { swiperSettings } from './plugins/swiperSettings';

const Slider = (): JSX.Element => {
  const [upcomingTitle, setUpcomingTitle] = useState<
    ITypesTopAndUncomingTitles[]
  >([]);

  useHightLight('upcoming', 15, 'seasons/upcoming', setUpcomingTitle);

  return (
    <Swiper {...swiperSettings} className={styles.swiper}>
      {upcomingTitle.map((item: ITypesTopAndUncomingTitles) => (
        <SwiperSlide className={styles['swiper-slide']} key={item.mal_id}>
          <Slide {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
