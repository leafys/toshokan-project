import { ITopAnime } from '@hooks/useHightLight';
import React from 'react';
import { Link } from 'react-router-dom';

const Slide = ({ images, title }: ITopAnime): JSX.Element => {
  return (
    <Link to="#" className="flex flex-col items-center justify-center ">
      <img
        src={images.jpg.image_url}
        className="w-[175px] h-[225px]  sm:w-[135px] sm:h-[200px] object-cover"
        alt=""
      />
      <h1 className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[165px] sm:w-[125px] ">
        {title}
      </h1>
    </Link>
  );
};

export default Slide;
