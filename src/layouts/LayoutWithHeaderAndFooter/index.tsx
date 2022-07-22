import Footer from '@layouts/Footer';
import Header from '@layouts/Header';
import { Outlet } from 'react-router-dom';

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
