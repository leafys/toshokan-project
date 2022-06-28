import { Dispatch, SetStateAction } from 'react';

export interface INavBarProps {
  className?: string;
  setIsNavOpen?: Dispatch<SetStateAction<boolean>>;
}
