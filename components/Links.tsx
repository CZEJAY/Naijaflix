"use client"



import { BsChevronCompactDown } from "react-icons/bs"
import { useState } from "react"
import Link from "next/link"
import { useRef } from "react"
import { AiOutlineHome, AiOutlineOrderedList } from "react-icons/ai"
import { BiMovie } from "react-icons/bi"
import { MdLogin, MdOutlineRecentActors } from "react-icons/md"
import { BiSlideshow } from "react-icons/bi"
import { GiFilmProjector } from "react-icons/gi"
import { useSession } from "next-auth/react"
import SideBar from "./SideBar"


interface labelProps {
  label: string
}

const Links: React.FC<labelProps> = ({ label }) => {
  const { data: session } = useSession()
  const [userModal, setUserModal] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleUserModal = () => {
    setUserModal(!userModal)
    // if clik is anywhere else close the modal
    document.addEventListener("mousedown", (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setUserModal(false)
      } else {
        setUserModal(true)
      }

    })
  }
  // console.log(userModal)
  return (
    <div
      onClick={handleUserModal}
      onMouseEnter={() => setUserModal(true)}
      aria-hidden="true"
      tabIndex={0}
      role="button"
      className="flex items-center gap-2 cursor-pointer relative"
    >
      <h3 className="font-semibold ">{label}</h3>
      <BsChevronCompactDown className={`${userModal ? "rotate-180" : ""} w-5 h-5 transition-all duration-500 ease-in-out`} aria-hidden="true" />

      {/* <div
        ref={modalRef}
        onMouseLeave={() => setUserModal(false)}
        tabIndex={0}
        role="button"
        aria-hidden="true"
        // onClick={handleUserModal}
        onKeyDown={handleUserModal}
        aria-label="User Menu"
        className={`${userModal ? "block" : "hidden"} flex flex-col absolute top-0
          left-0 items-center 
            justify-center w-32 h-auto 
            rounded-lg dark:bg-[#0d253f] 
            bg-gray-200 text-gray-900 
            dark:text-gray-200 font-bold text-xl 
            leading-none ring-2 py-2 px-2
            dark:ring-gray-900/80 z-[999] shadow-lg
             shadow-black/60 backdrop-blur-lg`}
      >
      </div> */}
    </div>
  )
}

export default Links