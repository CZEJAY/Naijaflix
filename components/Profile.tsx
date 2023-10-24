"use client"
import { signOut, useSession } from "next-auth/react"
import { useState } from "react"
import { useRef } from "react"
import Image from "next/image"
import { useSideBarToggle } from "@/store/SideBarState"

const Profile = () => {
    const toggleSideBar = useSideBarToggle((state: any) => state.toggle)
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
                        priority={true}
                        quality={100}
                        layout="fixed"
                        objectFit="cover"
                        objectPosition="center"
                        placeholder="blur"
                        blurDataURL={`${session.user?.image}`}
                        onMouseEnter={() => setUserModal(true)}
                        width={24}
                        height={24}
                        onClick={toggleSideBar}
                        decoding="async"
                        referrerPolicy="no-referrer"
                        src={`${session.user?.image}`} alt="Proflie" />
                </div>    
            </div >

        </>
    )
}

export default Profile