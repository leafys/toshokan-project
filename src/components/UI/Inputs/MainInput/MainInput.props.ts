import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export interface IMainInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}
