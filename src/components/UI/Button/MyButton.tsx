import React from 'react';
import { IButton } from './MyButton.props';
import styles from './MyButton.module.scss';
import cn from 'classnames';

const MyButton: React.FC<IButton> = ({ children, className, ...props }) => {
  return (
    <button className={cn([styles.root_btn, className])} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
