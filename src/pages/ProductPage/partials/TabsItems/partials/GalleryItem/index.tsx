import { GalleryData, IGalleryItem } from './GalleryItemProps';
import styles from './GalleryItem.module.scss';
import PreloadImage from '@components/PreloadImage';

const GalleryItem = ({ pathName, data }: IGalleryItem): JSX.Element => {
  return (
    <>
      {pathName === 'gallery' && (
        <div className={styles['gallery-block']}>
          {data.map((item: GalleryData, index: number) => (
            <PreloadImage
              key={index}
              src={item.webp.image_url}
              preloadClassname="w-[180px] h-[290px]"
              mainClassname="max-w-[180px] min-h-[290px] h-full w-full object-cover"
              alt="galleryPicture"
            />
          ))}
        </div>
      )}
    </>
  );
};

export default GalleryItem;
