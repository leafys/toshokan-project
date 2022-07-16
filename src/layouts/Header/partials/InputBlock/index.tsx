import cn from 'classnames';
import styles from './InputBlock.module.scss';
import { IInputBlockProps } from './InputBlock.props';
import { FocusEvent, useRef } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchValue as searchInputValue } from '@atoms/searchValueAtom';
import { motion } from 'framer-motion';

const InputBlock = ({ inputBlockProps }: IInputBlockProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const setValueInput = useSetRecoilState(searchInputValue);

  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    const currentTarget = e.currentTarget;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setIsActive(false);
      }
    }, 0);
  };

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
    pushQuery,
    searchValue,
    isActive,
  } = inputBlockProps;

  return (
    <div onBlur={handleBlur} tabIndex={3} className={styles.input_block}>
      <div onClick={onSearch} className={styles.searchIcon}></div>

      <motion.input
        initial={{ width: 0, background: 'var(--black)' }}
        animate={{
          width: isActive ? '360px' : 0,
          background: isActive ? 'var(--brown-dark)' : 'var(--black)',
        }}
        exit={{ width: 0, background: 'var(--black)' }}
        transition={{ duration: 0.4 }}
        value={searchValue}
        ref={inputRef}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={onHandler}
        className="pl-12 h-full rounded-md outline-none"
        placeholder={cn([isActive && 'Search...'])}
        type="search"
      />

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={clearSearchInput}
        className={styles.clearInput}
      ></motion.span>
    </div>
  );
};

export default InputBlock;
