import React from 'react'
import { AiOutlineHeart, AiOutlineHome, AiOutlineOrderedList } from 'react-icons/ai'
import { BiMovie, BiSlideshow } from 'react-icons/bi'
import { GiFilmProjector } from 'react-icons/gi'
import { MdOutlineRecentActors } from 'react-icons/md'

const SideBarModal = () => {
  return (
    <div
      className='scrollbar overscroll-auto relative overflow-y-auto p-1 h-48 gap-2 border-4 w-full bg-slate-950 flex flex-col rounded-lg'
    >
      <span className='font-bold text-xs ml-2 opacity-80'>Menu</span>
      <hr className='' />
      <div className="flex hover:bg-gray-800 transition-all duration-200 px-2 rounded-md py-1">
        <a href='#' className='font-base text-sm'>Home</a>
        <AiOutlineHome className="ml-auto" />
      </div>      
      <div className="flex hover:bg-gray-800 transition-all duration-200 px-2 rounded-md py-1">
        <a href='#' className='font-base text-sm'>Favorites</a>
        <AiOutlineHeart className="ml-auto" />
      </div>      
      <div className="flex hover:bg-gray-800 transition-all duration-200 px-2 rounded-md py-1">
        <a href='#' className='font-base text-sm'>Movies</a>
        <BiMovie className="ml-auto" />
      </div>      
      <div className="flex hover:bg-gray-800 transition-all duration-200 px-2 rounded-md py-1">
        <a href='#' className='font-base text-sm'>Series</a>
        <GiFilmProjector className="ml-auto"   />
      </div>      
      <div className="flex hover:bg-gray-800 transition-all duration-200 px-2 rounded-md py-1">
        <a href='#' className='font-base text-sm'>TV Shows</a>
        <BiSlideshow  className="ml-auto"  />
      </div>      
      <div className="flex hover:bg-gray-800 transition-all duration-200 px-2 rounded-md py-1">
        <a href='#' className='font-base text-sm'>New & Popular</a>
        <MdOutlineRecentActors className="ml-auto"/>
      </div>      
      <div className="flex hover:bg-gray-800 transition-all duration-200 px-2 rounded-md py-1">
        <a href='#' className='font-base text-sm'>My List</a>
        <AiOutlineOrderedList className="ml-auto"   />
      </div>      
    </div>
  )
}

export default SideBarModal