import React from 'react';
import { IInput } from './MainInput.props';
import styles from './MainInput.module.scss';
import cn from 'classnames';

const MyInput = ({ className, ...props }: IInput): JSX.Element => {
  return <input className={cn([styles.root_input, className])} {...props} />;
};

export default MyInput;
