import React from 'react';
import { IButton } from './MainButton.props';
import styles from './MainButton.module.scss';
import cn from 'classnames';

const MyButton = ({ children, className, ...props }: IButton): JSX.Element => {
  return (
    <button className={cn([styles.root_btn, className])} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
