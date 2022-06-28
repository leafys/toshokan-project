import { atom } from 'recoil';

export const searchValue = atom({
  key: 'atomSearchValue',
  default: '',
});
