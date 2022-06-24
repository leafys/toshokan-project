import React from 'react';
import { INavBarProps, IObjectInterface } from './NavBar.props';
import styles from './NavBar.module.scss';

const NavBar: React.FC<INavBarProps> = ({ linkItems }) => {
  return (
    <nav className="flex items-center">
      <ul className="flex items-center">
        {linkItems.map((item: IObjectInterface, index) => (
          <li className={styles.nav_item} key={index}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>

      <div className="h-10 w-90 relative flex items-center bg-dark rounded-md">
        <div className={styles.searchIcon}></div>

        <div className="w-full h-full">
          <input
            className="h-full rounded-md outline-none bg-dark w-full text-gray-light"
            type="text"
            placeholder="search..."
          />
        </div>
      </div>

      <button className="text-gray-light ml-5 border-2 border-purple px-7  py-3 rounded-md">
        Sign up
      </button>
      <button className="text-gray-light ml-5 border-2 border-purple px-7  py-3 rounded-md">
        Sign in
      </button>
    </nav>
  );
};

export default NavBar;
