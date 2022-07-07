import React from "react";

const Slide = ({ image_url, title }: any) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <img
          src={image_url}
          className="w-[175px] h-[225px]  sm:w-[135px] sm:h-[200px] object-cover"
          alt=""
        />
        <h1 className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[165px] sm:w-[125px] ">
          {title}
        </h1>
      </div>
    </>
  );
};

export default Slide;
