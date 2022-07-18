import { Dispatch, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import styles from './slider.module.scss';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/navigation';
import { useHightLight } from '@hooks/useTitles';
import Slide from './partials/Slide';
import { ITopAndUncomingTitle } from '@interfaces/ITopAndUpcomingTitles';
import { swiperSettings } from './plugins/swiperSettings';
import { Swiper as swiper } from 'swiper/types';

type SliderProps = {
  setProgressBar: Dispatch<React.SetStateAction<number>>;
};

const Slider = ({ setProgressBar }: SliderProps): JSX.Element => {
  const [upcomingTitle, setUpcomingTitle] = useState<ITopAndUncomingTitle[]>(
    []
  );

  useHightLight('upcoming', 15, 'seasons/upcoming', setUpcomingTitle);

  const onSlideChange = (slider: swiper) => {
    let slideProgress = Math.ceil(slider.progress * 100);
    if (slideProgress >= 88) {
      slideProgress = 100;
    }
    if (slideProgress <= 9) {
      slideProgress = 0;
    }

    setProgressBar(slideProgress);
  };

  return (
    <Swiper
      {...swiperSettings}
      className={styles.swiper}
      onSlideChange={onSlideChange}
    >
      {upcomingTitle.map((item: ITopAndUncomingTitle) => (
        <SwiperSlide className={styles['swiper-slide']} key={item.mal_id}>
          <Slide {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
