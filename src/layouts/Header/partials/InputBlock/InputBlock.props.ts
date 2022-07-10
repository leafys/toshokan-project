import { SetterOrUpdater } from 'recoil';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';

type propsType = {
  searchValue: string;
  pushQuery: () => void;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  setSearchValue: SetterOrUpdater<string>;
  isActive: boolean;
  activeBtnIndex: number;
  toggleSelectCategory: (
    btn: { text: string },
    index: number,
    focus: MutableRefObject<HTMLInputElement | null>
  ) => void;
};

export interface IInputBlockProps {
  inputBlockProps: propsType;
}
