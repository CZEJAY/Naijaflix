"use client"

import React, { useEffect } from 'react'
import SearchBar from './SearchBar'
import SideBarModal from './SideBarModal'
import SideBarDModal from './SideBarDModal'
import Accord from './Accord'
import { useRef } from 'react'
import { useSideBarStore } from '@/context/store/useSideBar'

const Mobile = () => {
  const mobileRef = useRef<HTMLDivElement>(null)
  const isOpen = useSideBarStore((state: any) => state.isOpen)
  const close = useSideBarStore((state: any) => state.close)

  const toggleMode = (e: MouseEvent) => {
    if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
      close()
      console.log(!mobileRef.current.contains(e.target as Node));
    } else {
      return null
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", (e) => toggleMode(e))
  }, [])
  return (
    <div >
      <div
        ref={mobileRef}
        className={`
      ${isOpen ? 'translate-x-0 ' : '-translate-x-full'}
     shadow-lg border px-2 py-2 flex lg:hidden overflow-y-auto 
    w-[20rem] bg-gradient-to-t flex-col 
    from-slate-100/ to-transparent bg-gray-950 gap-2
    dark:from-gray-900/ dark:to-transparent h-screen
    z-10 opacity-90 dark:opacity-100 transition-all 
    duration-500 ease-in-out delay-75 sideBar`}>
        <SearchBar />
        <SideBarModal />
        <Accord />
        <SideBarDModal />
      </div>
    </div>
  )
}

export default Mobile