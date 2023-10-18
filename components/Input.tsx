
import React from 'react'

interface inputProps {
  id: string;
  label: string;
  value?: string;
  onChange?: any;
  type: string;
  name: string;
  required?: boolean;
}

const Input: React.FC<inputProps> = ({
  id,
  label,
  value,
  onChange,
  type,
  name,
  required
}) => {
  return (
    <div className="relative w-[90%]">
      <input
        required
        id={id}
        type={type}
        name={name}
        onChange={onChange}
        className='
     block
     px-6 pt-6
     pb-2
     bg-neutral-700
     rounded-md text-md
     w-full
     appearance-none
     focus:outline-none
     focus:ring-0
     peer
     '
        placeholder=' '
      />
      <label
        htmlFor="email"
        className='
      absolute
      text-md font-semibold
      duration-150
      transform
      -translate-y-3
      top-4
      z-10
      origin-[0]
      left-6
      peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-0
      peer-focus:scale-75
      peer-focus:-translate-y-3
      '
      >{label}</label>
    </div>
  )
}

export default Input