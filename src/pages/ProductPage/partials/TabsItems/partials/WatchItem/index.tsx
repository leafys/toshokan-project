import React from 'react';
import { IWatchItemProps, WatchDataItems } from './IWatchItemProps';
import styles from './WatchItem.module.scss';

const WatchItem = ({ pathName, data }: IWatchItemProps): JSX.Element => {
  const [imgLoaded, setImgLoaded] = React.useState<boolean>(true);

  if (pathName === 'watch' && !data?.episodes?.length)
    return <h1 className="text-xxl">Videos not found</h1>;

  return (
    <>
      {(pathName === 'watch' || data?.episodes?.length) && (
        <div className={styles['watch-block']}>
          {data.episodes.map((item: WatchDataItems) => (
            <div
              key={item.mal_id}
              className={imgLoaded ? 'bg-gray w-[300px] h-[120px]' : ''}
            >
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                <div className="relative w-[300px] h-[120px]">
                  {item.images.jpg.image_url ? (
                    <img
                      onLoad={() => setImgLoaded(false)}
                      className={styles.loadedImage}
                      src={
                        imgLoaded
                          ? 'images/imagePreloader.webp'
                          : item.images.jpg.image_url
                      }
                      alt="animeImage"
                    />
                  ) : (
                    <img
                      alt="NotFoundImg"
                      src="images/imageNotFoundScaled.png"
                      className={styles.loadedImage}
                    />
                  )}

                  <div className="flex absolute bottom-0 text-md opacity-70 bg-slate-800 w-full h-[40px] flex-col justify-center">
                    <div className={styles.title}>
                      {item.episode} - {item.title}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default WatchItem;
