import { IPopularTitlesItem } from '@components/CardsBlocks/interfaces/ICardsBlocks';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';

const Card = ({
  title,
  type,
  score,
  year,
  images,
}: IPopularTitlesItem): JSX.Element => {
  return (
    <article className="max-w-[190px] w-full">
      <Link className="flex flex-col h-full" to="#">
        <div className="h-[260px]">
          <img
            className="w-full h-full object-cover"
            src={images.jpg.large_image_url}
            alt="anime canvas"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="whitespace-nowrap overflow-hidden text-ellipsis">
            {title}
          </h3>

          <div className="flex justify-between">
            <span>{type}</span>

            <div className="flex items-center gap-2">
              <BsFillStarFill className="fill-orange" />
              <span>{score}</span>
            </div>

            <span>{year === null ? 'unknown' : year}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Card;
