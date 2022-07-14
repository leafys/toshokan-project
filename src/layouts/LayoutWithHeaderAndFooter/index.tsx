import Footer from '@layouts/Footer';
import Header from '@layouts/Header';
import LocaleFrame from '@layouts/LocaleFrame';

import { Outlet } from 'react-router-dom';

const index = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <LocaleFrame />
    </>
  );
};

export default index;
