"use client"
// 
import {Toaster} from "react-hot-toast"

type props = {
    children: React.ReactNode
}

const ToastProvider = ({children}: props) => {
  return (
    <>
    <Toaster />
    {children}
    </>
  )
}

export default ToastProvider