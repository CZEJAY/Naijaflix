"use client"


import { MdNotificationsNone } from "react-icons/md"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
import { BsTrash3Fill } from "react-icons/bs"
import toast from "react-hot-toast"

const NotificationModal = () => {
    const [notificationModal, setNotificationModal] = useState(false)
    const modalRef = useRef<HTMLDivElement>(null)
    const [notification, setNotification] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const getNotif = async () => {
            await axios.get(`api/notification`)
                .then((res) => setNotification(res.data.notif))
        }
        getNotif()
    }, [])

    const handleDelete = async (index: number) => {
        setIsLoading(true)
        try {
          await axios.delete(`api/delete`, {
            data: {
                index
            }
          })
          .then((res) => {
            toast.success(res.data.message)
            setNotification(notification.filter((item: any, i: number) => i !== index))
          })
          setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = () => {
        setNotificationModal(!notificationModal)
        document.addEventListener("mousedown", (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setNotificationModal(false)
            } else {
                setNotificationModal(true)
            }
        })
    }
    return (
        <>
            <div className="relative self-center mt-1">
                <button onMouseEnter={() => setNotificationModal(true)} onClick={handleClick}>
                    <MdNotificationsNone className="cursor-pointer relative" size={25} />
                    <span className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 text-xs flex justify-center items-center text-white">
                        {notification.length}
                    </span>
                </button>
                <div
                    ref={modalRef}
                    onMouseLeave={() => setNotificationModal(false)}
                    tabIndex={0}
                    role="button"
                    aria-hidden="true"
                    className={`${notificationModal ? "block" : "hidden"} flex flex-col absolute top-8
          -right-5 items-center 
          justify-center w-44 h-auto 
          rounded-lg dark:bg-[hsl(211,66%,15%)] 
          bg-gray-100 text-[#01b4e4] 
          dark:text-gray-200 font-bold text-xl 
          leading-none ring-2 py-2 px-2 gap-1
          dark:ring-gray-900/80 z-[999] shadow-lg
          shadow-black/60 backdrop-blur-lg`}
                >
                    {
                        notification.length > 0 ? notification.map((item: any, index: number) => (
                            <p key={index} className="text-xs flex items-center bg-black px-3 py-1 rounded-md line-clamp-1 relative">{item} <BsTrash3Fill key={index} onClick={() => handleDelete(index)} className={`${isLoading ? "animate-pulse" : ""} absolute inset-1 ml-auto text-red-500 hover:text-red-700`} /></p>
                        )) : (
                            <p className="text-xs">{`${notification.length} Notifications`} </p>
                        )
                    }
                </div>
                <div className=""></div>
            </div>
        </>
    )
}

export default NotificationModal