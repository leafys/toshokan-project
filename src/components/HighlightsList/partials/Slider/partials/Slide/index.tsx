import { ITopAndUncomingTitle } from '@interfaces/ITopAndUpcomingTitles';
import { Link } from 'react-router-dom';

const Slide = ({ images, title }: ITopAndUncomingTitle): JSX.Element => {
  return (
    <article>
      <Link to="#" className="flex flex-col items-center justify-center">
        <img
          src={images.jpg.large_image_url}
          className="w-[175px] h-[225px]  sm:w-[135px] sm:h-[200px] object-cover"
          alt=""
        />
        <h1 className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[165px] sm:w-[125px] ">
          {title}
        </h1>
      </Link>
    </article>
  );
};

export default Slide;
