import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import DarkMode from '@/components/ThemeSwitch'
import SideBar from '@/components/SideBar'
import ToastProvider from '@/context/ToastProvider'
import AuthContext from '@/context/AuthContext'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Naijaflix',
  description: 'A naijaflix app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-300/100 relative overflow-x-hidden dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
        <AuthContext>
          <ToastProvider >
            <Navbar />
            <div className="flex relative">
              {/* sidebar design */}
              <SideBar />
              <div className="flex-1 ml-0 lg:ml-[320px] overflow-y-auto">{children}</div>
            </div>
          </ToastProvider>
          <DarkMode />
        </AuthContext>
        {/* <div className="absolute top-0 w-full text-center bg-gradient-to-t from-slate-100/ to-transparent dark:from-gray-900/ dark:to-transparent h-full z-10 opacity-90 dark:opacity-100 transition-all duration-500 ease-in-out delay-75"></div> */}
      </body>
    </html>
  )
}
