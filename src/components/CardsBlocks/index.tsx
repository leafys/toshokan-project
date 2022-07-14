import React, { useEffect, useState } from 'react';
import Card from './partials/Card';
import styles from './CardsBlocks.module.scss';
import { useHightLight } from '@hooks/useTitles';
import { ITopAndUncomingTitle } from '@interfaces/ITopAndUpcomingTitles';

const CardsBlocks = (): JSX.Element => {
  const [topTitles, setTopTitles] = React.useState<ITopAndUncomingTitle[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);

  const currentSizeWindow = () =>
    window.innerWidth < 1224 ? setDisabled(true) : setDisabled(false);

  useEffect(() => {
    window.addEventListener('resize', currentSizeWindow);

    return () => {
      window.removeEventListener('resize', currentSizeWindow);
    };
  }, []);

  useHightLight('top anime', 15, 'top/anime', setTopTitles);

  return (
    <div className="container">
      <h1 className="text-xxl pb-4 font-bold">Top Anime</h1>

      <div className={styles['cards-block']}>
        {topTitles.map((item: ITopAndUncomingTitle) => (
          <Card key={item.mal_id} disabled={disabled} card={item} />
        ))}
      </div>
    </div>
  );
};

export default CardsBlocks;
