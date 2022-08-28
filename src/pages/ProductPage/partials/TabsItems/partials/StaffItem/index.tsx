import PreloadImage from '@components/PreloadImage';
import { IStaffItemProps, IStaffItemData } from './IStaffItemProps';
import styles from './StaffItem.module.scss';

const StaffItem = ({ pathName, data }: IStaffItemProps): JSX.Element => {
  return (
    <>
      {pathName === 'staff' && (
        <div className={styles['staff-block']}>
          {data.map((item: IStaffItemData) => (
            <div
              className="flex text-md max-w-[300px] h-[130px] w-full bg-product-page-bg rounded-md p-2 gap-2"
              key={item.person.mal_id}
            >
              <PreloadImage
                src={item.person.images.jpg.image_url}
                preloadClassname="w-[100px] h-[120px]"
                mainClassname="max-w-[100px] w-full max-h-[120px] object-cover h-full"
                alt="staffPicture"
              />

              <div className="flex flex-col gap-4">
                <h1>{item.person.name}</h1>

                <div className="flex flex-col">
                  {item.positions.map((position, index) => (
                    <span key={index}>{position}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default StaffItem;
