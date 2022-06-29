import React from 'react';
import { INavBarProps } from './NavBar.props';
import styles from './NavBar.module.scss';
import { NavLink } from 'react-router-dom';
import { IRoutesTitleItem, routesTitleItems } from '@layouts/routesTitleItems';

const NavBar = ({ setIsNavOpen, ...props }: INavBarProps): JSX.Element => {
  return (
    <nav {...props}>
      <ul className="flex items-center xl:flex-col">
        {routesTitleItems.map((item: IRoutesTitleItem, index) => (
          <li className={styles.item} key={index}>
            <NavLink
              onClick={() => setIsNavOpen && setIsNavOpen(false)}
              to={item.path}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
