"use client"

import React from 'react'
import SearchBar from './SearchBar'
import SideBarModal from './SideBarModal'
import SideBarDModal from './SideBarDModal'
import Accord from './Accord'
import { useRef } from 'react'
import { useSideBarStore } from '@/context/store/useSideBar'

const SideBar = () => {
  return (
    <div
      className={`
     shadow-lg border px-2 py-2 hidden lg:flex overflow-y-auto 
    w-[20rem] bg-gradient-to-t flex-col 
    from-slate-100/ to-transparent bg-gray-950 gap-2
    dark:from-gray-900/ dark:to-transparent  h-full
    z-[99999999999999] opacity-90 dark:opacity-100 transition-all 
    duration-500 ease-in-out delay-75 sideBar`}>
      <SearchBar />
      <SideBarModal />
      <Accord />
      <SideBarDModal />
    </div>
  )
}

export default SideBar