import { ITopAndUncomingTitle } from '@interfaces/ITopAndUpcomingTitles';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';
import styles from './Card.module.scss';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import ToolltipCard from '@components/ToolltipCard';

type cardProps = {
  card: ITopAndUncomingTitle;
  disabled: boolean;
  imgLoaded: boolean;
  setImgLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};

const Card = ({
  card,
  disabled,
  imgLoaded,
  setImgLoaded,
}: cardProps): JSX.Element => {
  return (
    <article
      tabIndex={card.mal_id}
      className=" lessMd:w-full lessMd:h-full w-[190px] h-[348px]"
    >
      <Tippy
        placement="right"
        delay={400}
        content={<ToolltipCard {...card} />}
        disabled={disabled}
        interactive={true}
      >
        <Link className="mobileMd:flex w-full" to="#">
          <img
            onLoad={() => setImgLoaded(true)}
            className={styles['card-img']}
            src={
              imgLoaded
                ? card.images.jpg.image_url
                : 'images/imagePreloader.webp'
            }
            alt="anime canvas"
          />

          <div className={styles['block-card-info']}>
            <h3 className={styles['card-title']}>{card.title}</h3>

            <h4 className={styles['card-desc']}>{card.synopsis}</h4>

            <h4 className={styles['card-fold-desc']}>{card.synopsis}</h4>

            <div className={styles['card-section-score-type-year']}>
              <div className="mobileMd:flex mobileMd:gap-2 items-center">
                <span className={styles['card-section-first-span']}>Type:</span>
                <span className="m-sm-:text-md mb-2">{card.type}</span>
              </div>

              <div className="flex gap-2 items-center">
                <BsFillStarFill className="fill-orange mobileMd:hidden" />
                <div className="mobileMd:flex mobileMd:gap-2">
                  <span className={styles['card-section-first-span']}>
                    Score:
                  </span>
                  <span className="m-sm-:text-md mb-2">{card.score}</span>
                </div>
              </div>

              <div className="mobileMd:flex mobileMd:gap-2">
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
