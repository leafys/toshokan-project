import NavBar from '@components/NavBar';
import MyInput from '@components/UI/Inputs/MainInput';
import { searchValue as headerSearchValue } from '@atoms/searchValueAtom';
import { useRecoilState } from 'recoil';
import MyButton from '@components/UI/Buttons/MainButton';
import styles from './Header.module.scss';
import SideBar from './partials/SideBar';
import Burger from './partials/Burger';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSeacrh } from '@hooks/useSeacrh';
import InputBlock from './partials/InputBlock';
import { MutableRefObject, useState } from 'react';

const Header = (): JSX.Element => {
  const [searchValue, setSearchValue] =
    useRecoilState<string>(headerSearchValue);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [searchCategory, setSearchCategory] = useState<string>('anime');
  const [activeBtnIndex, setActiveBtnIndex] = useState<number>(0);
  const searchParams = { [searchCategory]: searchValue };
  const navigate = useNavigate();

  const searchFunc = useSeacrh({ searchCategory, searchParams });

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);

    !isNavOpen && typeof window != 'undefined' && window.document
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
  };

  const toggleSelectCategory = (
    btn: { text: string },
    index: number,
    focus: MutableRefObject<HTMLInputElement | null>
  ) => {
    setActiveBtnIndex(index);
    setSearchCategory(btn.text);
    focus.current?.focus();
  };

  const pushQuery = () => {
    if (!searchValue || searchValue.length < 3) return;

    navigate({
      pathname: '/search',

      search: `?${createSearchParams(searchParams)}`,
    });

    searchFunc();
  };

  const inputBlockProps = {
    setSearchValue,
    setIsActive,
    pushQuery,
    toggleSelectCategory,
    searchValue,
    isActive,
    activeBtnIndex,
  };

  return (
    <>
      <div className="h-[80px] "></div>
      <header className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center py-4 xl:hidden xl:flex-col">
          <Link to="/">
            <img className="w-main-logo" src="images/logo.png" alt="logo" />
          </Link>

          <div className="flex items-center">
            <NavBar
              className="flex items-center"
              classNameForUl={'flex items-center xl:flex-col'}
              classNameForLi={styles.item}
            />

            <InputBlock inputBlockProps={inputBlockProps} />

            <MyButton className={styles.btn}>Sign up</MyButton>
            <MyButton className={styles.btn}>Sign in</MyButton>
          </div>
        </div>

        <div className="hidden xl:block">
          <div className="container mx-auto flex items-center px-5 py-4">
            <Link to="/">
              <img
                className="w-mobile-tablet-logo"
                src="images/mob-logo.png"
                alt="logo"
              />
            </Link>

            <MyInput
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-full mx-3 p-4 h-12 text-gray-light bg-dark rounded-md"
              placeholder="Search..."
              type="search"
            />

            <SideBar toggleNav={toggleNav} isNavOpen={isNavOpen}>
              <NavBar
                className="xl:flex xl:flex-col xl:items-center"
                classNameForUl={'flex items-center xl:flex-col'}
                classNameForLi={styles.item}
              />

              <MyButton className={styles.btn}>Sign up</MyButton>
              <MyButton className={styles.btn}>Sign in</MyButton>
            </SideBar>

            <Burger toggleNav={toggleNav} isNavOpen={isNavOpen} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
