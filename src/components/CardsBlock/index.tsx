import { useEffect, useState } from 'react';
import Card from './partials/Card';
import styles from './CardsBlock.module.scss';
import { useTranslation } from 'react-i18next';
import { IPopularTitles } from '@interfaces/ITopAndUpcomingTitles';

const CardsBlock = ({ data }: IPopularTitles): JSX.Element => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState<boolean>(false);

  const currentSizeWindow = () =>
    window.innerWidth < 1224 ? setDisabled(true) : setDisabled(false);

  useEffect(() => {
    window.addEventListener('resize', currentSizeWindow);

    return () => {
      window.removeEventListener('resize', currentSizeWindow);
    };
  }, []);

  return (
    <div className="container">
      <h1 className="text-xxl pb-4 font-bold">{t('cards_block.title')}</h1>
      <div className={styles['cards-block']}>
        {data.map((item) => (
          <Card key={item.mal_id} disabled={disabled} card={item} />
        ))}
      </div>
    </div>
  );
};

export default CardsBlock;
