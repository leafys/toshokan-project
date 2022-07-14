import cn from 'classnames';
import styles from './InputBlock.module.scss';
import MyButton from '@components/UI/Buttons/MainButton';
import MyInput from '@components/UI/Inputs/MainInput';
import { IInputBlockProps } from './InputBlock.props';
import { FocusEvent, useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchValue as searchInputValue } from '@atoms/searchValueAtom';
import { useLocation } from 'react-router';

const InputBlock = ({ inputBlockProps }: IInputBlockProps): JSX.Element => {
  const selectBtns = [{ text: 'anime' }, { text: 'manga' }];
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isUserScrolled, setIsUserScrolled] = useState<boolean>(true);
  const setValueInput = useSetRecoilState(searchInputValue);
  const location = useLocation();

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    const currentTarget = e.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setIsActive(false);
      }
    }, 0);
  };

  const scrollCheck = () => {
    window.scrollY > 70 ? setIsUserScrolled(false) : setIsUserScrolled(true);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      setIsUserScrolled(true);
      window.addEventListener('scroll', scrollCheck);
    } else {
      window.removeEventListener('scroll', scrollCheck);
      setIsUserScrolled(false);
    }

    return () => {
      window.removeEventListener('scroll', scrollCheck);
    };
  }, [location.pathname]);

  const clearSearchInput = () => {
    setValueInput('');
    inputRef.current?.focus();
  };

  const onSearch = () => {
    !isActive ? setIsActive(true) : pushQuery();
    inputRef.current?.focus();
  };

  const {
    setSearchValue,
    onHandler,
    setIsActive,
    toggleSelectCategory,
    pushQuery,
    searchValue,
    isActive,
    activeBtnIndex,
  } = inputBlockProps;

  return (
    <div onBlur={handleBlur} tabIndex={1} className={styles.input_block}>
      <div onClick={onSearch} className={styles.searchIcon}></div>

      <MyInput
        value={searchValue}
        ref={inputRef}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={onHandler}
        className={cn([styles.input, isActive && styles.retractable_input])}
        placeholder={cn([isActive && 'Search...'])}
        type="search"
      />

      {isActive && (
        <>
          <span onClick={clearSearchInput} className={styles.clearInput}></span>
          <div
            className={cn(
              { [styles.select_btn_block]: true },
              { [styles.select_btn_block_active]: isUserScrolled }
            )}
          >
            {selectBtns.map((btn, index) => (
              <MyButton
                key={index}
                purple
                className={cn(
                  { [styles.select_btn]: true },
                  { [styles.active_btn]: activeBtnIndex === index }
                )}
                onClick={() => toggleSelectCategory(btn, index, inputRef)}
              >
                {btn.text}
              </MyButton>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default InputBlock;
