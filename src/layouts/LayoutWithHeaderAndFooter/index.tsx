import Header from '@layouts/Header';

import { Outlet } from 'react-router-dom';

const index = (): JSX.Element => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default index;
