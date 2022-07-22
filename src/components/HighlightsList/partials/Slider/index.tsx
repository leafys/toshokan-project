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
import SkeletonHighlights from './partials/skeletons/HighlightSkeleton';

type SliderProps = {
  setProgressBar: Dispatch<React.SetStateAction<number>>;
};

const Slider = ({ setProgressBar }: SliderProps): JSX.Element => {
  const [upcomingTitle, setUpcomingTitle] = useState<ITopAndUncomingTitle[]>(
    []
  );
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  const { isLoading } = useHightLight(
    'upcoming',
    15,
    'seasons/upcoming',
    setUpcomingTitle
  );

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
      {isLoading
        ? [...new Array(10)].map((_, index) => (
            <SwiperSlide key={index} className={styles['swiper-slide']}>
              <SkeletonHighlights className="w-auto" />
            </SwiperSlide>
          ))
        : upcomingTitle.map((item: ITopAndUncomingTitle) => (
            <SwiperSlide className={styles['swiper-slide']} key={item.mal_id}>
              <Slide
                setImgLoaded={setImgLoaded}
                imgLoaded={imgLoaded}
                slide={item}
              />
            </SwiperSlide>
          ))}
    </Swiper>
  );
};

export default Slider;
