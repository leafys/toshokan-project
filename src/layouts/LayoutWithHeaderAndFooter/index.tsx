import Header from '@layouts/Header';
import MobTabHeader from '@layouts/MobTabHeader';
import { Outlet } from 'react-router-dom';
import { publicRoutes } from '../../router/routes';

const index = (): JSX.Element => {
  return (
    <>
      <Header routeItems={publicRoutes} className="xl:hidden xl:flex-col" />
      <MobTabHeader routeItems={publicRoutes} className="hidden xl:block" />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default index;
