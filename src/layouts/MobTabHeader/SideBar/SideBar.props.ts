import { ReactNode } from 'react';

export interface ISideBar {
  isNavOpen: boolean;
  children: ReactNode;
  toggleNav: () => void;
}
