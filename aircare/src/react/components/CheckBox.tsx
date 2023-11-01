import React from 'react'

interface Props {
    id: string;
    title: string;
    checked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({id, title, checked} : Props) => {
  return (
      <div>
          <input type="checkbox" id={id} checked={checked}/>
          <label htmlFor={id}>{title}</label>
      </div>
  )
}

export default CheckBox
