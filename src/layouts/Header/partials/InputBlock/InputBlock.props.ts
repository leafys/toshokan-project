import { SetterOrUpdater } from 'recoil';
import { Dispatch, SetStateAction } from 'react';

type propsType = {
  searchValue: string;
  pushQuery: () => void;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  setSearchValue: SetterOrUpdater<string>;
  isActive: boolean;
  activeBtnIndex: number;
  toggleSelectCategory: (btn: { text: string }, index: number) => void;
};

export interface IInputBlockProps {
  inputBlockProps: propsType;
}
