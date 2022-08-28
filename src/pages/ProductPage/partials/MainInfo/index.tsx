import { ProductTabData } from '@pages/ProductPage/ts/enums/ProductTabData';
import { IMainInfoProps } from './IMainInfoProps';
import styles from './MainInfo.module.scss';
import cn from 'classnames';
import PreloadImage from '@components/PreloadImage';

const MainInfo = ({
  data,
  navigate,
  pathName,
}: IMainInfoProps): JSX.Element => {
  const pushQuery = (index: number) => {
    navigate({ search: Object.keys(ProductTabData)[index] });
  };

  return (
    <div className="flex gap-5 justify-between lg:flex-col lg:items-center">
      <PreloadImage
        src={data?.images.webp.image_url}
        preloadClassname="w-[225px] h-[320px]"
        mainClassname="w-[225px] h-[320px] object-cover"
        alt="main image page"
      />

      <div className="flex flex-col bg-product-page-bg rounded-md p-4 justify-between w-full max-w-[1320px]">
        <div className="flex flex-col gap-3">
          <h1 className="flex lg:justify-center">{data?.title}</h1>

          <p className="text-justify text-contrast-gray">{data?.synopsis}</p>
        </div>

        <div className="flex flex-col mx-auto w-full mt-10">
          <ul className="flex justify-center gap-20 w-full lessMd:gap-10 m-sm-:flex-wrap">
            {Object.keys(ProductTabData).map((item, index) => (
              <li key={item}>
                <button
                  className={cn(
                    [pathName === item ? styles.active : ''],
                    'capitalize'
                  )}
                  onClick={() => pushQuery(index)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
