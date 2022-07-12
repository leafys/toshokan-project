import { ITopAndUncomingTitle } from '@interfaces/ITopAndUpcomingTitles';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';
import styles from './Card.module.scss';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import ToolltipCard from '@components/ToolltipCard/ToolltipCard';

type cardProps = { card: ITopAndUncomingTitle; disabled: boolean };

const Card = ({ card, disabled }: cardProps): JSX.Element => {
  return (
    <article tabIndex={card.mal_id} className="w-full h-full">
      <Tippy
        placement="right"
        delay={400}
        content={<ToolltipCard {...card} />}
        disabled={disabled}
        interactive={true}
      >
        <Link className="m-md-:flex w-full" to="#">
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
              <div className="m-md-:flex m-md-:gap-2 items-center">
                <span className={styles['card-section-first-span']}>Type:</span>
                <span className="m-sm-:text-md mb-2">{card.type}</span>
              </div>

              <div className="flex gap-2 items-center">
                <BsFillStarFill className="fill-orange m-md-:hidden" />
                <div className="m-md-:flex m-md-:gap-2">
                  <span className={styles['card-section-first-span']}>
                    Score:
                  </span>
                  <span className="m-sm-:text-md mb-2">{card.score}</span>
                </div>
              </div>

              <div className="m-md-:flex m-md-:gap-2">
                <span className={styles['card-section-first-span']}>Year:</span>
                <span className="m-sm-:text-md mb-2">
                  {card.year === null ? 'unknown' : card.year}
                </span>
              </div>
            </div>
          </div>
        </Link>
      </Tippy>
    </article>
  );
};

export default Card;
