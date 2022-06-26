export interface ISideBar {
  isNavOpen: Boolean;
  children: JSX.Element;
  toggleNav: () => void;
}
