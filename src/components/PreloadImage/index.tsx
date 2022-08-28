import React from 'react';
import { IPreloadImageProps } from './IPreloadImage.props';
import cn from 'classnames';

const PreloadImage = ({
  src,
  preloadClassname,
  mainClassname,
  alt,
  ...props
}: IPreloadImageProps) => {
  const [imageLoading, setImageLoading] = React.useState<boolean>(true);

  return (
    <img
      src={imageLoading ? 'images/imagePreloader.webp' : src}
      className={
        imageLoading ? cn('bg-gray', [preloadClassname]) : mainClassname
      }
      alt={alt}
      onLoad={() => setImageLoading(false)}
      {...props}
    />
  );
};

export default PreloadImage;
