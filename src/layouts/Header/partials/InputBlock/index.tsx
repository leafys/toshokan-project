import cn from 'classnames';
import styles from './InputBlock.module.scss';
import MyButton from '@components/UI/Buttons/MainButton';
import MyInput from '@components/UI/Inputs/MainInput';
import { IInputBlockProps } from './InputBlock.props';
import { FocusEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchValue as searchInputValue } from '@atoms/searchValueAtom';

const InputBlock = ({ inputBlockProps }: IInputBlockProps): JSX.Element => {
  const selectBtns = [{ text: 'anime' }, { text: 'manga' }];
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isUserScrolled, setIsUserScrolled] = useState<boolean>(true);
  const setValueInput = useSetRecoilState(searchInputValue);

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    const currentTarget = e.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setIsActive(false);
      }
    }, 0);
  };

  const scrollCheck = () => {
    if (window.scrollY > 70) {
      setIsUserScrolled(false);
    } else {
      setIsUserScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollCheck);
    return () => {
      window.removeEventListener('scroll', scrollCheck);
    };
  }, []);

  const onSearch = () => {
    !isActive ? setIsActive(true) : pushQuery();
    inputRef.current?.focus();
  };

  const clearSearchInput = () => {
    setValueInput('');
    inputRef.current?.focus();
  };

  const onHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    event.key === 'Enter' && pushQuery();
  };
  const {
    setSearchValue,
    pushQuery,
    setIsActive,
    toggleSelectCategory,
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
          <div className={cn(styles.select_btn_block, isUserScrolled &&  styles.select_btn_block_active)}>
            {selectBtns.map((btn, index) => (
              <MyButton
                key={index}
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
