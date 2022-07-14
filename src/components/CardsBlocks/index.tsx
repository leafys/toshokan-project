import React from 'react';
import Card from './partials/Card';
import styles from './CardsBlocks.module.scss';
import { useHightLight } from '@hooks/useTitles';
import { ITopAndUncomingTitles } from '@interfaces/ITopAndUpcomingTitles';
import { useTranslation } from 'react-i18next';

const CardsBlocks = (): JSX.Element => {
  const { t } = useTranslation();
  const [topTitles, setTopTitles] = React.useState<ITopAndUncomingTitles[]>([]);

  useHightLight('top anime', 15, 'top/anime', setTopTitles);

  return (
    <div className="container">
      <h1 className="text-xxl pb-4 font-bold">{t('cards_block.title')}</h1>

      <div className={styles['cards-block']}>
        {topTitles.map((item) => (
          <Card key={item.mal_id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardsBlocks;
