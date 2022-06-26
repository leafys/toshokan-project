import * as React from 'react';
import { INavBarProps, IObjectInterface } from './NavBar.props';
import styles from './NavBar.module.scss';
import MyButton from '../UI/Button/MyButton';
import cn from 'classnames';

const NavBar: React.FC<INavBarProps> = ({ linkItems, ...props }) => {
  const buttonName = [{ title: 'Sign up' }, { title: 'Sign in' }];
  const [isActive, setIsActive] = React.useState(false);

  return (
    <nav {...props}>
      <ul className="flex items-center">
        {linkItems.map((item: IObjectInterface, index) => (
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

        <input
          className={cn([styles.input, isActive && styles.retractable_input])}
          type="search"
          placeholder={cn([isActive && 'Search...'])}
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
