import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { lazy } from 'react';
import Preloader from '@components/Preloader';

const Layout = lazy(() => import('@layouts/LayoutWithHeaderAndFooter'));
const Home = lazy(() => import('@pages/Home'));
const Categories = lazy(() => import('@pages/Categories'));
const Random = lazy(() => import('@pages/Random'));
const Search = lazy(() => import('@pages/Search'));

declare global {
  interface Window {
    locale: string;
    disableScroll: () => void;
    enableScroll: () => void;
  }
}

const AppRoutes = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  window.locale = i18n.resolvedLanguage;

  const element = useRoutes([
    {
      path: `/${window.locale}`,
      element: (
        <React.Suspense fallback={<Preloader />}>
          <Layout />
        </React.Suspense>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: `category`,
          element: <Categories />,
        },
        {
          path: `random`,
          element: <Random />,
        },
        {
          path: `search`,
          element: <Search />,
        },
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
