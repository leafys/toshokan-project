import { IMainInput } from './MainInput.props';
import styles from './MainInput.module.scss';
import cn from 'classnames';

const MyInput = ({ className, ...props }: IMainInput): JSX.Element => {
  return <input className={cn([styles.root_input, className])} {...props} />;
};
export default MyInput;
