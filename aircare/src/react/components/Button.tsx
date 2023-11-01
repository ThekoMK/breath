import React from 'react'

interface Props {
    title: string;
    onClick: () => void;
    classes?: string;
}

const Button = (props: Props) => {
  return (
    <button className={props.classes} onClick={props.onClick}>
        {props.title}
    </button>
  )
}

export default Button
