import { Navigate, useLocation, useRoutes } from 'react-router-dom';
import Layout from '@layouts/LayoutWithHeaderAndFooter';
import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Random from '@pages/Random';
import Search from '@pages/Search';

const AppRoutes = () => {
  const location = useLocation();

  const element = useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'category', element: <Categories /> },
        { path: 'random', element: <Random /> },
        { path: 'search', element: <Search /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/" state={{ from: location }} replace />,
    },
  ]);

  return element;
};

export default AppRoutes;
