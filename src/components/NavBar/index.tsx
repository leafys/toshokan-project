import { INavBarProps } from './NavBar.props';
import { NavLink } from 'react-router-dom';
import { IRoutesTitleItem, routesTitleItems } from '@layouts/routesTitleItems';
import { useTranslation } from 'react-i18next';

const NavBar = ({
  classNameForUl,
  classNameForLi,
  ...props
}: INavBarProps): JSX.Element => {
  const { t } = useTranslation();
  const locale = window.locale;

  return (
    <nav {...props}>
      <ul className={classNameForUl}>
        {routesTitleItems.map((item: IRoutesTitleItem, index) => (
          <li className={classNameForLi} key={index}>
            <NavLink to={`/${locale}${item.path}`} end>
              {t(item.title)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
