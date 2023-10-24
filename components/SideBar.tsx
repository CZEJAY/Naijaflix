"use client"

import React from 'react'
import SearchBar from './SearchBar'
import SideBarModal from './SideBarModal'
import SideBarDModal from './SideBarDModal'
import Accord from './Accord'

import { useSideBarToggle } from '@/store/SideBarState'

const SideBar = () => {
  const isOpen = useSideBarToggle((state: any) => (state.isOpen))
  return (
    <div 
    className={`
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
     shadow-lg border px-2 py-2  overflow-y 
    w-[20rem] bg-gradient-to-t flex-col gap-4
    from-slate-100/ to-transparent bg-gray-950
    dark:from-gray-900/ dark:to-transparent  
    z-10 opacity-90 dark:opacity-100 transition-all 
    duration-500 ease-in-out delay-75 sideBar`}>
      <SearchBar />
      <SideBarModal />
      <Accord />
      <SideBarDModal />
    </div>
  )
}

export default SideBar