import { ITypesTopAndUncomingTitles } from '@interfaces/ITopAndUpcomingTitles';
import { Link } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs';

const Card = (card: ITypesTopAndUncomingTitles): JSX.Element => {
  return (
    <article className="h-full">
      <Link to="#">
        <img
          className="object-cover w-full h-[300px] cards-md-:w-[200px]"
          src={card.images.jpg.large_image_url}
          alt="anime canvas"
        />

        <div className="w-full cards-md-:w-[200px]">
          <h3 className="whitespace-nowrap overflow-hidden text-ellipsis">
            {card.title}
          </h3>

          <div className="flex justify-between items-center">
            <span>{card.type}</span>

            <div className="flex gap-2 items-center">
              <BsFillStarFill className="fill-orange" />
              <span className="">{card.score}</span>
            </div>

            <span>{card.year === null ? 'unknown' : card.year}</span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Card;
