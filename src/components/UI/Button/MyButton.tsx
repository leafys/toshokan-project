import React from 'react';
import { IButton } from './MyButton.props';

const MyButton: React.FC<IButton> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default MyButton;
