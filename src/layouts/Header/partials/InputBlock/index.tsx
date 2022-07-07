import cn from 'classnames';
import styles from './InputBlock.module.scss';
import MyButton from '@components/UI/Buttons/MainButton';
import MyInput from '@components/UI/Inputs/MainInput';
import { IInputBlockProps } from './InputBlock.props';
import { KeyboardEvent } from 'react';
import { useSetRecoilState } from 'recoil';
import { searchValue as searchInputValue } from '@atoms/searchValueAtom';

const InputBlock = ({ inputBlockProps }: IInputBlockProps): JSX.Element => {
  const selectBtns = [{ text: 'anime' }, { text: 'manga' }];

  const setValueInput = useSetRecoilState(searchInputValue);

  const onSearch = () => (!isActive ? setIsActive(true) : pushQuery());
  const onHandler = (event: KeyboardEvent<HTMLInputElement>) =>
    event.key === 'Enter' && pushQuery();

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
    <div className={styles.input_block}>
      <div onClick={onSearch} className={styles.searchIcon}></div>

      <MyInput
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={onHandler}
        className={cn([styles.input, isActive && styles.retractable_input])}
        placeholder={cn([isActive && 'Search...'])}
        type="search"
      />

      {isActive && (
        <>
          <span
            onClick={() => setValueInput('')}
            className={styles.clearInput}
          ></span>
          <div className={styles.select_btn_block}>
            {selectBtns.map((btn, index) => (
              <MyButton
                key={index}
                className={cn(
                  { [styles.select_btn]: true },
                  { [styles.active_btn]: activeBtnIndex === index }
                )}
                onClick={() => toggleSelectCategory(btn, index)}
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