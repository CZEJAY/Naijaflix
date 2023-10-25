"use client"
import { useSession } from "next-auth/react"
import Image from "next/image"
import { useSideBarStore } from "@/context/store/useSideBar"

const Profile = () => {
    const { data: session } = useSession()
    const toggle = useSideBarStore((state: any) => state.toggle)
    

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
                        width={24}
                        height={24}
                        onClick={toggle}
                        decoding="async"
                        referrerPolicy="no-referrer"
                        src={`${session.user?.image}`} alt="Proflie" />
                </div>    
            </div >

        </>
    )
}

export default Profile