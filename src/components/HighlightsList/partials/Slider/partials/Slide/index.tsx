import { ITopAndUncomingTitle } from '@interfaces/ITopAndUpcomingTitles';
import { Link } from 'react-router-dom';

type slideProps = {
  slide: ITopAndUncomingTitle;
  imgLoaded: boolean;
  setImgLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};

const Slide = ({ slide, imgLoaded, setImgLoaded }: slideProps): JSX.Element => {
  return (
    <article>
      <Link to="#" className="flex flex-col items-center justify-center">
        <img
          src={
            imgLoaded
              ? slide.images.jpg.large_image_url
              : 'images/imagePreloader.webp'
          }
          className="w-[175px] h-[225px]  sm:w-[135px] sm:h-[200px] object-cover"
          alt=""
          onLoad={() => setImgLoaded(true)}
        />
        <h1 className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[165px] sm:w-[125px] ">
          {slide.title}
        </h1>
      </Link>
    </article>
  );
};

export default Slide;
