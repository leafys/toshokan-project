import { SetterOrUpdater } from 'recoil';
import {
  Dispatch,
  KeyboardEvent,
  MutableRefObject,
  SetStateAction,
} from 'react';

type propsType = {
  searchValue: string;
  pushQuery: () => void;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  setSearchValue: SetterOrUpdater<string>;
  onHandler: (event: KeyboardEvent<HTMLInputElement>) => void;
  toggleSelectCategory: (
    btn: { text: string },
    index: number,
    focus: MutableRefObject<HTMLInputElement | null>
  ) => void;
  isActive: boolean;
  activeBtnIndex: number;
};

export interface IInputBlockProps {
  inputBlockProps: propsType;
}
