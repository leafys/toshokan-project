import { useEffect, useState } from 'react';
import Card from './partials/Card';
import styles from './CardsBlock.module.scss';
import { useTranslation } from 'react-i18next';
import { ITopAndUncomingTitle } from '@interfaces/ITopAndUpcomingTitles';
import { useIsMobileMd, useIsXl } from '@hooks/useCurrentBreakpoints';
import MobileSkeleton from './partials/skeletons/MobileSkeleton';
import DescTabletSkeleton from './partials/skeletons/DescTabletSkeleton';

type cardsBlockProps = {
  data: ITopAndUncomingTitle[];
  isLoading: boolean;
};

const CardsBlock = ({ data, isLoading }: cardsBlockProps): JSX.Element => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState<boolean>(false);
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  const xl = useIsXl();
  const mobileMd = useIsMobileMd();

  const currentSizeWindow = () => (xl ? setDisabled(true) : setDisabled(false));

  useEffect(() => {
    currentSizeWindow();
  }, [xl]);

  return (
    <div className="container">
      <h1 className="text-xxl pb-4 font-bold">{t('cards_block.title')}</h1>
      <div className={styles['cards-block']}>
        {isLoading
          ? [...new Array(15)].map((_, index) =>
              mobileMd ? (
                <MobileSkeleton key={index} />
              ) : (
                <DescTabletSkeleton key={index} />
              )
            )
          : data.map((item: ITopAndUncomingTitle) => (
              <Card
                key={item.mal_id}
                setImgLoaded={setImgLoaded}
                imgLoaded={imgLoaded}
                disabled={disabled}
                card={item}
              />
            ))}
      </div>
    </div>
  );
};

export default CardsBlock;