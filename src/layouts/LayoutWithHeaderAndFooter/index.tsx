import Footer from '@layouts/Footer';
import Header from '@layouts/Header';
import { lazy } from 'react';
import { Outlet } from 'react-router-dom';
const LocaleFrame = lazy(() => import('@layouts/LocaleFrame'));

const Layout = (): JSX.Element => {
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

export default Layout;
