import React from 'react';
import { INavBarProps } from './NavBar.props';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { IRoutesTitleItem, routesTitleItems } from '@layouts/routesTitleItems';
import { useTranslation } from 'react-i18next';

const NavBar = ({ setIsNavOpen, ...props }: INavBarProps): JSX.Element => {
  const { t } = useTranslation();
  const locale = window.locale;
  return (
    <nav {...props}>
      <ul className="flex items-center xl:flex-col">
        {routesTitleItems.map((item: IRoutesTitleItem, index) => (
          <li className={styles.item} key={index}>
            <NavLink
              onClick={() => setIsNavOpen && setIsNavOpen(false)}
              to={`/${locale}${item.path}`}
              end
            >
              {t(item.title)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
