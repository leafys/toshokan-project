import { INavBarProps } from './NavBar.props';
import { NavLink } from 'react-router-dom';
import { IRoutesTitleItem, routesTitleItems } from '@layouts/routesTitleItems';
import { useTranslation } from 'react-i18next';

const NavBar = ({
  classNameForUl,
  classNameForLi,
  setIsNavOpen,
  ...props
}: INavBarProps): JSX.Element => {
  const { t } = useTranslation();

  // close Sidebar and add scroll
  const closeNavbar = () => {
    setIsNavOpen && setIsNavOpen(false);
    window.enableScroll();
  };

  return (
    <nav {...props}>
      <ul className={classNameForUl}>
        {routesTitleItems.map((item: IRoutesTitleItem, index) => (
          <li className={classNameForLi} key={index}>
            <NavLink onClick={closeNavbar} to={item.path} end>
              {t(item.title)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
