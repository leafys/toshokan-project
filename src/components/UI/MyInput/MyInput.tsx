import React from 'react';
import { IInput } from './MyInput.props';
import styles from './MyInput.module.scss';
import cn from 'classnames';

const MyInput: React.FC<IInput> = ({ className, ...props }) => {
  return <input className={cn([styles.root_input, className])} {...props} />;
};

export default MyInput;
