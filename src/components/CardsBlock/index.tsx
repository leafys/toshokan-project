import { useEffect, useState } from 'react';
import Card from './partials/Card';
import styles from './CardsBlock.module.scss';
import { IPopularTitles } from '@interfaces/ITopAndUpcomingTitles';
import { useIsXl } from '@hooks/useCurrentBreakpoints';

const CardsBlock = ({ data }: IPopularTitles): JSX.Element => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const xl = useIsXl();

  const currentSizeWindow = () => (xl ? setDisabled(true) : setDisabled(false));

  useEffect(() => {
    currentSizeWindow();
  }, [xl]);

  return (
    <div className="container">
      <div className={styles['cards-block']}>
        {data?.map((item) => (
          <Card key={item.mal_id} disabled={disabled} card={item} />
        ))}
      </div>
    </div>
  );
};

export default CardsBlock;
