import * as React from 'react';
import { INavBarProps } from './NavBar.props';
import styles from './NavBar.module.scss';
import MyButton from '../UI/Button/MyButton';
import cn from 'classnames';
import MyInput from '../UI/MyInput/MyInput';
import { IRouteObjectItems } from '../../App.props';

const NavBar: React.FC<INavBarProps> = ({ routeItems, ...props }) => {
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const buttonName = [{ title: 'Sign up' }, { title: 'Sign in' }];

  return (
    <nav {...props}>
      <ul className="flex items-center xl:flex-col">
        {routeItems.map((item: IRouteObjectItems, index) => (
          <li className={styles.item} key={index}>
            <a href={item.link}>{item.title}</a>
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
