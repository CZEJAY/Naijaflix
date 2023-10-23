import React from 'react'

const SideBarModal = () => {
  return (
    <div
      className='relative p-1 h-auto gap-2 border-4 w-full bg-slate-950 flex flex-col rounded-lg'
    >
      <span className='font-bold text-xs ml-2 opacity-80'>Menu</span>
      <hr className='' />
      <div className="flex hover:bg-gray-800 transition-all duration-200 px-2 rounded-md py-1">
        <a href='#' className='font-base text-sm'>Favorites</a>
      </div>      
      <div className="flex hover:bg-gray-800 transition-all duration-200 px-2 rounded-md py-1">
        <a href='#' className='font-base text-sm'>Movies</a>
      </div>      
      <div className="flex hover:bg-gray-800 transition-all duration-200 px-2 rounded-md py-1">
        <a href='#' className='font-base text-sm'>TV Shows</a>
      </div>      
      <div className="flex hover:bg-gray-800 transition-all duration-200 px-2 rounded-md py-1">
        <a href='#' className='font-base text-sm'>Get Recommendation</a>
      </div>      
    </div>
  )
}

export default SideBarModal