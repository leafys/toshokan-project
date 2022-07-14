import React from 'react';
import { INavBarProps } from './NavBar.props';

import { NavLink } from 'react-router-dom';
import { IRoutesTitleItem, routesTitleItems } from '@layouts/routesTitleItems';

const NavBar = ({classNameForUl, classNameForLi, ...props }: INavBarProps): JSX.Element => {
  return (
    <nav {...props}>
      <ul className={classNameForUl}>
        {routesTitleItems.map((item: IRoutesTitleItem, index) => (
          <li className={classNameForLi} key={index}>
            <NavLink to={item.path}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
  
export default NavBar;
