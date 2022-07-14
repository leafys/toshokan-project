import { Dispatch, SetStateAction } from 'react';
export interface INavBarProps {
  className: string;
  classNameForUl: string;
  classNameForLi: string;
  setIsNavOpen?: Dispatch<SetStateAction<boolean>>;
}
