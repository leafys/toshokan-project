import { ITopAndUncomingTitle } from '@interfaces/ITopAndUpcomingTitles';
import { Link } from 'react-router-dom';
import styles from './ToolltipCard.module.scss';

const ToolltipCard = (card: ITopAndUncomingTitle): JSX.Element => {
  const genresNotFound = (
    <span className="text-contrast-gray text-base">genres not found</span>
  );
  const themesNotFound = (
    <span className="text-contrast-gray text-base">themes not found</span>
  );

  return (
    <div className="p-4 flex flex-col gap-y-2">
      <Link to="#" className={styles.title}>
        {card.title}
      </Link>

      <p className={styles.desc}>{card.synopsis}</p>

      <ul className={styles['content-list']}>
        <span>Type:</span>

        {card.type && (
          <li className="relative">
            <Link className={styles.link} to="#">
              {card.type}
            </Link>
          </li>
        )}
        {card.year && (
          <li className="relative">
            <Link className={styles.link} to="#">
              {card.year}
            </Link>
          </li>
        )}
        {card.status && (
          <li className="relative">
            <Link className={styles.link} to="#">
              {card.status}
            </Link>
          </li>
        )}
      </ul>

      <ul className={styles['content-list']}>
        <span>Genres:</span>

        {card.genres.length
          ? card.genres.map((item) => (
              <li key={item.mal_id} className="relative">
                <Link className={styles.link} to="#">
                  {item.name}
                </Link>
              </li>
            ))
          : genresNotFound}
      </ul>

      <ul className={styles['content-list']}>
        <span>Themes:</span>

        {card.themes.length
          ? card.themes.map((item) => (
              <li key={item.mal_id} className="relative">
                <Link className={styles.link} to="#">
                  {item.name}
                </Link>
              </li>
            ))
          : themesNotFound}
      </ul>
    </div>
  );
};

export default ToolltipCard;
