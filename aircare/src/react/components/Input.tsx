import { type } from 'os';
import React from 'react'

interface Props {
    id: string;
    type: string;
    placeholder: string;
    title: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = (props: Props) => {
  return (
    <div className='flex gap-[6px] flex-col'>
      <label className='text-sm font-medium text-[#343a40] ml-[14px]' htmlFor={props.id}>{props.title}</label>
      <input className='w-[398px] h-[51px] rounded-[15px] bg-[#f4f4f4] text-xs font-medium text-[#9c9c9c] pl-[18px] flex items-center' id={props.id} type={props.type} name={props.id} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
    </div>
  )
}

export default Input
