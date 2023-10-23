
import React from 'react'
import Links from './Links'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

import LinksScreen from './LinksScreen'
import Link from 'next/link'
import Profile from './Profile'
import { getServerSession } from 'next-auth/next'
import MediumSearch from './MediumSearch'
import NotificationModal from './NotificationModal'

const Navbar = async () => {
  //@ts-ignore
  const session = await getServerSession(authOptions)
  const isLoggedIn = !!session
  // console.log(isLoggedIn)

  return (
    <nav
      className=' dark
          h-20 w-full
          dark:bg-transparent
         bg-[hsl(200,23%,97%)] text-[hsl(211,66%,15%)]
         px-[2.5vw] shadow-black/60 
         flex dark:text-[#01b4e4]
         items-center justify-between backdrop-blur-lg
         sm:w-screen sticky top-0 z-[999] 
         '
    >
      <div className='mr-3 relative'>
        <h1 className='dark:text-white text-[hsl(211,66%,15%)] text-2xl md:text-3xl font-bold'>
          <Link href={"/"}>Naijaflix</Link>
        </h1>
        {/* design bg gradient */}
        <div className='h-[2px] w-[90px] bg-gradient-to-r from-[hsl(211,66%,15%)] to-[hsl(200,43%,52%)] animate-pulse'></div>
        {/* end design bg gradient */}
        {/* design animated bg gradient  */}
        {/* <div className='absolute top-0 h-[2px] w-[80px] bg-gradient-to-r from-[hsl(200,23%,97%)] to-[hsl(200,23%,97%)] transition-all animate-ping'></div> */}
      </div>

      <div className='flex md:hidden mt-2'>
        <Links label='Browse' />
      </div>

      <div
        className='hidden md:flex  items-center justify-center gap-3'
      >
        <LinksScreen label='Home' />
        <LinksScreen label='TV Shows' />
        <LinksScreen label='Movies' />
        <LinksScreen label='New & Popular' />
        <LinksScreen label='My List' />
      </div>

      <div className='ml-auto flex gap-4 items-center relative px-2'>
        <MediumSearch />
        <div className="relative flex">
          <NotificationModal />
        </div>
        {/* {
          !isLoggedIn && (
            <Link href={"/api"} className="flex items-center gap-1  text-center hover:underline hover:bg-gray-900 p-1 rounded-md active:bg-gray-900 text-sm"><MdLogin />Login</Link>
          )
        } */}

        {isLoggedIn ? <Profile /> : null}
      </div>

    </nav>
  )
}

export default Navbar