import React from 'react';
import { IButton } from './MainButton.props';
import styles from './MainButton.module.scss';
import cn from 'classnames';

const MyButton = ({
  children,
  className,
  purple,
  onClick,
  ...props
}: IButton): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={cn([
        styles['root-btn'],
        purple && styles['root-btn_purple'],
        className,
      ])}
      {...props}
    >
      {children}
    </button>
  );
};

export default MyButton;
