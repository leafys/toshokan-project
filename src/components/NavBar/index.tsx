import React from 'react';
import { INavBarProps } from './NavBar.props';
import styles from './NavBar.module.scss';
import cn from 'classnames';
import { IRouteObjectItem } from '@router/AppRoutes.props';
import MyButton from '@UI/Buttons/MainButton';
import MyInput from '@UI/Inputs/MainInput';
import { NavLink } from 'react-router-dom';

const NavBar = ({ ...props }: INavBarProps): JSX.Element => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const buttonName = [{ title: 'Sign up' }, { title: 'Sign in' }];
  const routesTitleItems = [
    { path: '/', title: 'Home' },
    { path: 'category', title: 'Category' },
    { path: 'random', title: 'Random' },
  ];

  return (
    <nav {...props}>
      <ul className="flex items-center xl:flex-col">
        {routesTitleItems.map((item: IRouteObjectItem, index) => (
          <li className={styles.item} key={index}>
            <NavLink to={item.path}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.input_block}>
        <div
          onClick={() => setIsActive(!isActive)}
          className={styles.searchIcon}
        ></div>

        <MyInput
          className={cn([styles.input, isActive && styles.retractable_input])}
          placeholder={cn([isActive && 'Search...'])}
          type="search"
        />
      </div>

      {buttonName.map((item, index) => (
        <MyButton className={styles.btn} key={index}>
          {item.title}
        </MyButton>
      ))}
    </nav>
  );
};

export default NavBar;
