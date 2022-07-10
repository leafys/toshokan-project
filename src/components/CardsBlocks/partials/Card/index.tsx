import { ITopAndUncomingTitles } from '@interfaces/ITopAndUpcomingTitles';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';
import styles from './Card.module.scss';

const Card = (card: ITopAndUncomingTitles): JSX.Element => {
  return (
    <article className="w-full h-full">
      <Link className="cards-md-:flex w-full" to="#">
        <img
          className={styles['card-img']}
          src={card.images.jpg.image_url}
          alt="anime canvas"
        />

        <div className={styles['block-card-info']}>
          <h3 className={styles['card-title']}>{card.title}</h3>

          <h4 className={styles['card-desc']}>{card.synopsis}</h4>

          <h4 className={styles['card-fold-desc']}>{card.synopsis}</h4>

          <div className={styles['card-section-score-type-year']}>
            <div className="cards-md-:flex cards-md-:gap-2 items-center">
              <span className={styles['card-section-first-span']}>Type:</span>
              <span className="cards-sm-:text-md mb-2">{card.type}</span>
            </div>

            <div className="flex gap-2 items-center">
              <BsFillStarFill className="fill-orange cards-md-:hidden" />
              <div className="cards-md-:flex cards-md-:gap-2">
                <span className={styles['card-section-first-span']}>
                  Score:
                </span>
                <span className="cards-sm-:text-md mb-2">{card.score}</span>
              </div>
            </div>

            <div className="cards-md-:flex cards-md-:gap-2">
              <span className={styles['card-section-first-span']}>Year:</span>
              <span className="cards-sm-:text-md mb-2">
                {card.year === null ? 'unknown' : card.year}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Card;
