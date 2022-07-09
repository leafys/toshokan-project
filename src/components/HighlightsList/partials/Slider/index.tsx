import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import styles from './slider.module.scss';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/navigation';
import { useHightLight } from '@hooks/useTitles';
import Slide from './partials/Slide';
import { ITypesTopAndUncomingTitles } from '@interfaces/ITopAndUpcomingTitles';
import { ProgressBarSetings, swiperSettings } from './plugins/swiperSettings';

const Slider = (): JSX.Element => {
  const [upcomingTitle, setUpcomingTitle] = useState<
    ITypesTopAndUncomingTitles[]
  >([]);

  useHightLight('upcoming', 15, 'seasons/upcoming', setUpcomingTitle);

  const [firstSwiper, setFirstSwiper] = useState<any>({});
  const [secondSwiper, setSecondSwiper] = useState<any>({});

  return (
    <>
      <Swiper
        {...ProgressBarSetings}
        className={styles.swiper}
        onSwiper={setFirstSwiper}
      >
        
      </Swiper>

      <Swiper
        {...swiperSettings}
        className={styles.swiper}
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
      >
        {upcomingTitle.map((item: ITypesTopAndUncomingTitles) => (
          <SwiperSlide className={styles['swiper-slide']} key={item.mal_id}>
            <Slide {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
