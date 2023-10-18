"use client"
import React, { useState, useEffect } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'
type Theme = "Light" | "Dark"

const DarkMode = () => {
  const [theme, setTheme] = useState<Theme>("Light")

  const toggleTheme = () => {
    if (theme === "Light") {
      setTheme("Dark")
      window.localStorage.setItem("theme", "Dark")
      document.documentElement.classList.add("dark")
    } else {
      setTheme("Light")
      window.localStorage.setItem("theme", "Light")
      document.documentElement.classList.remove("dark")
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme
    if (localTheme) {
      setTheme(localTheme)
      if (localTheme === "Dark") {
        document.documentElement.classList.add("dark")
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme("Dark")
      document.documentElement.classList.add("dark")
    } 
    
  }, [])
  return (
    <button onClick={toggleTheme} className='h-12 cursor-pointer hover:bg-black/30 transition duration-300 w-12 rounded-full flex items-center justify-center  fixed right-2 bottom-4 shadow-lg shadow-black/50 backdrop-blur-md  z-50'>
      {
        theme === "Light" ? <BsSun className="animate-pulse" size={24} /> : <BsMoon className='animate-bounce' size={24} />
      }

    </button>
  )
}

export default DarkMode