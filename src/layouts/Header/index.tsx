import React from 'react';
import NavBar from '@components/NavBar';
import MyInput from '@components/UI/Inputs/MainInput';
import { searchValue as headerSearchValue } from '@atoms/searchValueAtom';
import { useRecoilState } from 'recoil';
import MyButton from '@components/UI/Buttons/MainButton';
import cn from 'classnames';
import styles from './Header.module.scss';
import SideBar from './partials/SideBar';
import Burger from './partials/Burger';

const Header = (): JSX.Element => {
  const [searchValue, setSearchValue] = useRecoilState(headerSearchValue);
  const [isActive, setIsActive] = React.useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = React.useState<boolean>(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header>
      <div className="container mx-auto flex justify-between items-center px-5 py-4 xl:hidden xl:flex-col">
        <a href="/">
          <img className="w-main-logo" src="images/logo.png" alt="logo" />
        </a>

        <div className="flex">
          <NavBar className="flex items-center" />

          <div className={styles.input_block}>
            <div
              onClick={() => setIsActive(!isActive)}
              className={styles.searchIcon}
            ></div>

            <MyInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className={cn([
                styles.input,
                isActive && styles.retractable_input,
              ])}
              placeholder={cn([isActive && 'Search...'])}
              type="search"
            />

            <MyButton className={styles.btn}>Sign up</MyButton>
            <MyButton className={styles.btn}>Sign in</MyButton>
          </div>
        </div>
      </div>

      <div className="hidden xl:block">
        <div className="container mx-auto flex items-center px-5 py-4">
          <a href="/">
            <img
              className="w-mobile-tablet-logo"
              src="images/mob-logo.png"
              alt="logo"
            />
          </a>

          <MyInput
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full mx-3 p-4 h-12 text-gray-light bg-dark rounded-md"
            placeholder="Search..."
            type="search"
          />

          <SideBar toggleNav={toggleNav} isNavOpen={isNavOpen}>
            <NavBar
              setIsNavOpen={setIsNavOpen}
              className="xl:flex xl:flex-col xl:items-center"
            />

            <MyButton className={styles.btn}>Sign up</MyButton>
            <MyButton className={styles.btn}>Sign in</MyButton>
          </SideBar>

          <Burger toggleNav={toggleNav} isNavOpen={isNavOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
