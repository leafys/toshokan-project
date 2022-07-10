import { IMainInput } from './MainInput.props';
import styles from './MainInput.module.scss';
import cn from 'classnames';
import React from 'react';

const MyInput = React.forwardRef(
  (
    { className, ...props }: IMainInput,
    ref: React.LegacyRef<HTMLInputElement> | undefined
  ): JSX.Element => {
    return (
      <input
        ref={ref}
        className={cn([styles.root_input, className])}
        {...props}
      />
    );
  }
);
export default MyInput;
