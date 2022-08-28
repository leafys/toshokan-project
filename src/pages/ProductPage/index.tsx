import Spinner from '@components/Spinner';
import TitlesService from '@services/TitlesService';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate, useParams } from 'react-router';
import { ProductTabData } from './ts/enums/ProductTabData';
import TabsItems from './partials/TabsItems';
import SideBarMenu from './partials/SideBarMenu';
import MainInfo from './partials/MainInfo';

const ProductPage = (): JSX.Element => {
  const { id } = useParams();
  const categoryName = localStorage.getItem('selectedСategory');

  const location = useLocation();
  const navigate = useNavigate();
  const pathName: string = location.search.substring(1);

  useEffect(() => {
    !location.search && navigate({ search: Object.keys(ProductTabData)[0] });
  }, [location.pathname]);

  useEffect(() => {
    const goHomePage = setTimeout(() => {
      !location.search && navigate(-1);
    }, 100);

    return () => {
      clearTimeout(goHomePage);
    };
  }, [location.search]);

  const { data, isFetching } = useQuery(['titleById', id, categoryName], () =>
    TitlesService.getTitleById({ category: categoryName, id })
  );

  if (isFetching)
    return (
      <div className="flex justify-center items-center">
        <Spinner />
      </div>
    );

  return (
    <section className="mb-5 m-sm-:text-md">
      <div className="container flex flex-col gap-5">
        <MainInfo navigate={navigate} pathName={pathName} data={data?.data} />

        <div className="flex gap-5 md:flex-col md:items-center">
          <SideBarMenu data={data?.data} />

          <TabsItems data={data?.data} pathName={pathName} />
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
