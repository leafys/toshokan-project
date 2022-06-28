import { IMainInput } from './MainInput.props';
import styles from './MainInput.module.scss';
import cn from 'classnames';
import { useRecoilState } from 'recoil';
import { searchValue } from '@atoms/searchValueAtom';

const MyInput = ({ className, ...props }: IMainInput): JSX.Element => {
  const [value, setValue] = useRecoilState(searchValue);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={cn([styles.root_input, className])}
      {...props}
    />
  );
};

export default MyInput;
