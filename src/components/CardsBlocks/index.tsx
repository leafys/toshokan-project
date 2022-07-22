import React, { useEffect, useState } from 'react';
import Card from './partials/Card';
import styles from './CardsBlocks.module.scss';
import { useHightLight } from '@hooks/useTitles';
import { useTranslation } from 'react-i18next';
import { ITopAndUncomingTitle } from '@interfaces/ITopAndUpcomingTitles';
import { useIsMobileMd, useIsXl } from '@hooks/useCurrentBreakpoints';
import MobileSkeleton from './partials/skeletons/MobileSkeleton';
import DescTabletSkeleton from './partials/skeletons/DescTabletSkeleton';

const CardsBlocks = (): JSX.Element => {
  const { t } = useTranslation();
  const [topTitles, setTopTitles] = React.useState<ITopAndUncomingTitle[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);

  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  const xl = useIsXl();
  const mobileMd = useIsMobileMd();

  const currentSizeWindow = () => (xl ? setDisabled(true) : setDisabled(false));

  useEffect(() => {
    currentSizeWindow();
  }, [xl]);

  const { isLoading } = useHightLight(
    'top anime',
    15,
    'top/anime',
    setTopTitles
  );

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
          : topTitles.map((item: ITopAndUncomingTitle) => (
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

export default CardsBlocks;
