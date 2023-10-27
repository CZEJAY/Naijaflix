import '../globals.css'
import type { Metadata } from 'next'
import DarkMode from '@/components/ThemeSwitch'
import SideBar from '@/components/SideBar'
import ToastProvider from '@/context/ToastProvider'
import AuthContext from '@/context/AuthContext'
import Navbar from '@/components/Navbar'
import Mobile from '@/components/mobile'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Naijaflix',
  description: 'A naijaflix app',
  themeColor: '#000000',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4386764806395713"
          //@ts-ignore
          crossorigin="anonymous" />
      </head>
      <body className="dark  bg-white relative overflow-x-hidden dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90">
        <AuthContext>
          <Navbar />
          <ToastProvider >
            <div className="flex relative">
              {/* sidebar design */}
              <Mobile />
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
