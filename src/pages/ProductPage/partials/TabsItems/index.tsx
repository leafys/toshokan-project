import Spinner from '@components/Spinner';
import { ProductTabData } from '@pages/ProductPage/ts/enums/ProductTabData';
import TitlesService from '@services/TitlesService';
import { useQuery } from 'react-query';
import { useParams } from 'react-router';
import CharacterItem from './partials/CharacterItem';
import GalleryItem from './partials/GalleryItem';
import OverviewItem from './partials/OverviewItem';
import StaffItem from './partials/StaffItem';
import WatchItem from './partials/WatchItem';
import { ITabsItemsProps } from './TabsItems.props';

type TabsItemsProps = {
  pathName: string;
  data: ITabsItemsProps;
};

const TabsItems = ({
  pathName,
  data: OverviewData,
}: TabsItemsProps): JSX.Element => {
  const { id } = useParams();

  const getQueryTab = Object.entries(ProductTabData).find(
    ([key]) => key === pathName
  );

  const { data, isFetching } = useQuery(
    ['getAnimeTabsProductPage', getQueryTab?.[1]],
    () => TitlesService.getTabsData({ id, getQueryTab: getQueryTab?.[1] })
  );

  if (isFetching)
    return (
      <div className="w-full flex justify-center">
        <Spinner />
      </div>
    );

  return (
    <div className="w-full md:order-1">
      <OverviewItem pathName={pathName} data={OverviewData} />

      <WatchItem pathName={pathName} data={data?.data} />

      <GalleryItem pathName={pathName} data={data?.data} />

      <CharacterItem pathName={pathName} data={data?.data} />

      <StaffItem pathName={pathName} data={data?.data} />
    </div>
  );
};

export default TabsItems;
