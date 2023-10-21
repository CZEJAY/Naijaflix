"use client"
import { signOut, useSession } from "next-auth/react"
import { useState } from "react"
import { BsChevronCompactDown } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import Link from "next/link"
import { useRef } from "react"

import { FiLogOut } from "react-icons/fi"
import Image from "next/image"

const Profile = () => {
    const { data: session } = useSession()
    const [userModal, setUserModal] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)

    const toggleModal = () => {
        setUserModal(!userModal)
        // if clik is anywhere else close the modal
        document.addEventListener("mousedown", (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setUserModal(false)
            } else {
                return null
            }
        })

    }

    if (!session) return null
    return (
        <>
            <div
                className='
        flex
        items-center
        gap-1
        cursor-pointer
        '
            >
                <div

                    className='
           cursor-pointer flex items-center justify-center
           bg-[hsl(211,66%,15%)]
           rounded-full relative
            dark:bg-gray-100
           '
                >
                    <Image className="w-6 h-6 rounded-full"
                        style={{ objectFit: "cover" }}
                        onMouseEnter={() => setUserModal(true)}
                        width={24}
                        height={24}
                        onClick={toggleModal}
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        src={`${session.user?.image}`} alt="Proflie" />
                    <div
                        ref={modalRef}
                        onClick={toggleModal}
                        onMouseLeave={() => setUserModal(false)}
                        aria-hidden="true"
                        className={`${userModal ? "block transition-all duration-500" : "hidden scale-0"} flex flex-col absolute top-8
                        -right-5 items-center gap-1
                            justify-center w-28 h-auto 
                            rounded-lg dark:bg-[hsl(211,66%,15%)] 
                            bg-gray-100 text-[#01b4e4] 
                            dark:text-gray-200 font-bold text-xl 
                            leading-none ring-2 py-2 px-2   
                            dark:ring-gray-900/80 z-[999] shadow-lg
                            shadow-black/60 backdrop-blur-lg`}>
                        <p className="text-xs text-center line-clamp-1">{session.user?.name}</p>
                        <Link href={"#"} className="flex self-center  items-center justify-center gap-1 w-full h-full text-center hover:underline hover:bg-gray-900 p-1 rounded-md active:bg-gray-900 text-sm"><CgProfile /> Profile</Link>

                        <div onClick={() => signOut()} className="flex bg-black py-1 px-2 rounded-lg gap-1">
                            {/* logout icon */}
                            <FiLogOut />
                            <button className="text-sm hover:underline">Logout</button>
                        </div>
                    </div>
                </div>
                <BsChevronCompactDown onClick={toggleModal} className={`
                ${userModal ? "rotate-180" : "rotate-0"}
                transition-all duration-500 ease-in-out
                `} aria-hidden="true" />
            </div >

        </>
    )
}

export default Profile