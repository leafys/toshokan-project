import { SetterOrUpdater } from 'recoil';
import { Dispatch, KeyboardEvent, SetStateAction } from 'react';

type propsType = {
  searchValue: string;
  pushQuery: () => void;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  setSearchValue: SetterOrUpdater<string>;
  onHandler: (event: KeyboardEvent<HTMLInputElement>) => void;
  isActive: boolean;
};

export interface IInputBlockProps {
  inputBlockProps: propsType;
}
