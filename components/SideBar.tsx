import React from 'react'
import SearchBar from './SearchBar'
import SideBarModal from './SideBarModal'
import SideBarDModal from './SideBarDModal'
import Accord from './Accord'


const SideBar = () => {
  return (
    <div 
    className='
    hidden shadow-lg border p-2 lg:flex overflow-y-auto 
    w-[20rem] bg-gradient-to-t flex-col gap-4
    from-slate-100/ to-transparent 
    dark:from-gray-900/ dark:to-transparent  
    z-10 opacity-90 dark:opacity-100 transition-all 
    duration-500 ease-in-out delay-75 sideBar'>
      <SearchBar />
      <SideBarModal />
      <Accord />
      <SideBarDModal />
    </div>
  )
}

export default SideBar