import React, { forwardRef } from 'react';
import classes from './Input.module.scss';

interface InputProps {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder }, ref) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        ref={ref}
        className={classes.input}
      />
    );
  }
);

export default Input;
