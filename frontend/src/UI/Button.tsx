import React from 'react'
import classes from './Button.module.scss'
interface buttonType{
    text: string;
    onClick: ()=>void;
    className: string;
}

const Button: React.FC<buttonType> = ({text, onClick, className}) => {
  return (
    <button onClick={onClick} className={`${classes.btn} ${className}`}>
        {text}
    </button>
  )
}

export default Button