import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '@layouts/LayoutWithHeaderAndFooter';
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Random from '@pages/Random';
import Search from '@pages/Search';

declare global {
  interface Window {
    locale: string;
  }
}

const AppRoutes = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  window.locale = i18n.resolvedLanguage;

  const element = useRoutes([
    {
      path: `/${window.locale}`,
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: `/${window.locale}/category`, element: <Categories /> },
        { path: `/${window.locale}/random`, element: <Random /> },
        { path: `/${window.locale}/search`, element: <Search /> },
      ],
    },
    {
      path: '*',
      element: (
        <Navigate to={`/${window.locale}`} state={{ from: location }} replace />
      ),
    },
  ]);

  return element;
};

export default AppRoutes;
