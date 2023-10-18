"use client"

import { useState } from "react"
import { BsSearch } from "react-icons/bs"
import SearchBar from "./SearchBar"

const MediumSearch = () => {
    const [showSearchBar, setShowSearchBar] = useState(false)
    const toggleSearchBar = () => {
        setShowSearchBar(!showSearchBar)
        console.log("clicked")
    }
  return (
    <>
        <div className={`${showSearchBar ? "block" : "hidden"} scale-100 transition-all duration-500 lg:hidden`}><SearchBar /></div>
        <BsSearch onClick={toggleSearchBar} className="cursor-pointer text-[#01b4e4]" size={18} />
    </>
  )
}

export default MediumSearch