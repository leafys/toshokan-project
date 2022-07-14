import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  purple?: boolean;
}
