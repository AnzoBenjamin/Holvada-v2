import React from 'react'

interface buttonType{
    text: string;
    onClick: ()=>{};
}

const Button: React.FC<buttonType> = ({text, onClick}) => {
  return (
    <button onClick={onClick}>
        {text}
    </button>
  )
}

export default Button