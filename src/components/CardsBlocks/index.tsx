import React from 'react';
import Card from './partials/Card';
import styles from './CardsBlocks.module.scss';
import { useHightLight } from '@hooks/useTitles';
import { ITypesTopAndUncomingTitles } from '@interfaces/ITopAndUpcomingTitles';

const CardsBlocks = (): JSX.Element => {
  const [topTitles, setTopTitles] = React.useState<
    ITypesTopAndUncomingTitles[]
  >([]);

  useHightLight('top anime', 15, 'top/anime', setTopTitles);

  return (
    <div>
      <h1 className="text-xxl pb-4">Top Anime</h1>

      <div className={styles['cards-block']}>
        {topTitles.map((item) => (
          <Card key={item.mal_id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardsBlocks;
