import React from 'react'
import classes from './Input.module.scss'

interface InputProps {
    type: string;
    placeholder: string;
}

const Input: React.FC<InputProps> = ({type, placeholder}) => {
  return (
    <input type={type} placeholder={placeholder} className={classes.input}/>
  )
}

export default Input