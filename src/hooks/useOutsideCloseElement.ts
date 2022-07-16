import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';

export const useOutsideCloseElement = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  setState: Dispatch<SetStateAction<any>>
) => {
  useEffect(() => {
    const handleClickOutside = ({ target }: MouseEvent) => {
      if (ref.current && !ref.current.contains(target as Node)) {
        setState(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setState]);
};
