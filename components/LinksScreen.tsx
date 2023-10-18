import React from 'react'
import { BsChevronCompactDown } from 'react-icons/bs';

interface Props {
    label: string;
}

const LinksScreen: React.FC<Props> = ({label}) => {
  return (
    <div 
     className='hidden lg:flex items-center gap-4 cursor-pointer'
    >
        <h3 className="font-semibold hover:opacity-30 transition">{label}</h3>
    </div>
  )
}

export default LinksScreen