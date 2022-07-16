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
import { useTranslation } from 'react-i18next';
import { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { CgArrowDownR } from 'react-icons/cg';
import { motion } from 'framer-motion';
import cn from 'classnames';
import { useOutsideCloseElement } from '@hooks/useOutsideCloseElement';

const Header = (): JSX.Element => {
  const { t } = useTranslation();
  const locale = window.locale;
  const [searchValue, setSearchValue] =
    useRecoilState<string>(headerSearchValue);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [isNavOpenDropDawn, setNavOpenDropDawn] = useState<boolean>(false);
  const [searchCategory, setSearchCategory] = useState<string>('anime');
  const [activeBtnIndex, setActiveBtnIndex] = useState<number>(0);
  const selectBtns = [{ text: 'anime' }, { text: 'manga' }];

  const categoryFromLocalstore = localStorage.getItem(
    'selectedСategory'
  ) as string;
  const searchParams = { [categoryFromLocalstore]: searchValue };
  const navigate = useNavigate();
  const dropRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useOutsideCloseElement(dropRef, setNavOpenDropDawn);

  const searchFunc = useSeacrh({ categoryFromLocalstore, searchParams });

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);

    !isNavOpen && typeof window != 'undefined' && window.document
      ? window.disableScroll()
      : window.enableScroll();
  };

  useEffect(() => {
    localStorage.setItem('selectedСategory', searchCategory);
  }, [searchCategory]);

  const toggleSelectCategory = (btn: { text: string }, index: number) => {
    setActiveBtnIndex(index);
    setSearchCategory(btn.text);
    setNavOpenDropDawn(false);
  };

  const pushQuery = () => {
    if (!searchValue || searchValue.length < 3) return;

    navigate({
      pathname: '/search',

      search: `?${createSearchParams(searchParams)}`,
    });

    searchFunc();
  };

  const onHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && pushQuery();
  };

  const inputBlockProps = {
    setSearchValue,
    setIsActive,
    pushQuery,
    onHandler,
    toggleSelectCategory,
    searchValue,
    isActive,
    activeBtnIndex,
  };

  return (
    <>
      <div className="h-[80px]"></div>
      <header className="w-full bg-black fixed top-0 left-0 right-0 z-10">
        <div className="container mx-auto flex justify-between items-center py-4 xl:hidden xl:flex-col">
          <div className="relative">
            <Link to={`/${locale}`}>
              <img
                className="w-main-logo select-none"
                src="images/logo.png"
                alt="logo"
              />
            </Link>

            <div ref={dropRef}>
              <CgArrowDownR
                onClick={() => setNavOpenDropDawn(!isNavOpenDropDawn)}
                className="absolute select-none w-[14px] -right-4 bottom-[0px] cursor-pointer"
              />

              <motion.div
                initial={{ transform: 'translateY(-50px)', opacity: 0 }}
                animate={{
                  transform: isNavOpenDropDawn
                    ? 'translateY(0%)'
                    : 'translateY(-100%)',
                  opacity: isNavOpenDropDawn ? 1 : 0,
                }}
                exit={{ transform: 'translateY(-50px)', opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={styles.dropdown}
              >
                {selectBtns.map((btn, index) => (
                  <button
                    key={index}
                    onClick={() => toggleSelectCategory(btn, index)}
                    className={cn(
                      { [styles.select_btn]: true },
                      { [styles.active_btn]: activeBtnIndex === index }
                    )}
                  >
                    {btn.text}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>

          <div className="flex items-center">
            <NavBar
              classNameForUl={'flex items-center xl:flex-col'}
              classNameForLi={styles.item}
              className="flex items-center"
            />
            <InputBlock inputBlockProps={inputBlockProps} />

            <MyButton purple className={styles.btn}>
              {t('header.sign_up')}
            </MyButton>
            <MyButton purple className={styles.btn}>
              {t('header.sign_in')}
            </MyButton>
          </div>
        </div>

        <div className="hidden xl:block">
          <div className="container mx-auto flex items-center px-5 py-4">
            <Link to={`/${locale}`}>
              <img
                className="w-mobile-tablet-logo"
                src="images/mob-logo.png"
                alt="logo"
              />
            </Link>

            <div className="w-full mr-6 relative">
              <div
                onClick={() => pushQuery()}
                className={styles.searchIcon}
              ></div>

              <MyInput
                value={searchValue}
                onKeyDown={onHandler}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-full mx-3 p-4 h-12 text-gray-light bg-dark rounded-md"
                placeholder="Search..."
                type="search"
              />
            </div>

            <SideBar toggleNav={toggleNav} isNavOpen={isNavOpen}>
              <NavBar
                classNameForUl={'flex items-center xl:flex-col'}
                classNameForLi={styles['item-moobile']}
                className="xl:flex xl:flex-col xl:items-center"
                setIsNavOpen={setIsNavOpen}
              />

              <MyButton purple className={styles.btn}>
                {t('header.sign_up')}
              </MyButton>
              <MyButton purple className={styles.btn}>
                {t('header.sign_in')}
              </MyButton>
            </SideBar>

            <Burger toggleNav={toggleNav} isNavOpen={isNavOpen} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
