import DescHeader from '@layouts/Header/DescHeader';
import MobTabHeader from '@layouts/Header/MobTabHeader';
import { Outlet } from 'react-router-dom';

const index = (): JSX.Element => {
  return (
    <>
      <DescHeader className="xl:hidden xl:flex-col" />
      <MobTabHeader className="hidden xl:block" />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default index;
