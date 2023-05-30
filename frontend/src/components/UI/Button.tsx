import React from 'react'
import classes from './Button.module.scss'
interface buttonType{
    text: string;
    onClick: ()=>void;
}

const Button: React.FC<buttonType> = ({text, onClick}) => {
  return (
    <button onClick={onClick} className={classes.btn}>
        {text}
    </button>
  )
}

export default Button