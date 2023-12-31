import { Metadata } from "next"
import "../globals.css"
import AuthContext from "@/context/AuthContext"
import ToastProvider from "@/context/ToastProvider"



export const metadata: Metadata = {
    title: 'Naijaflix | Authentication',
    description: 'Naijaflix authentication',
}

export default function authLayout({ children, }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <AuthContext>
                    <ToastProvider>
                        <div
                            className='
                h-screen w-screen
                md:bg-[url("/images/bg.jpg")]
                bg-zinc-950
                flex gap-9
                bg-cover
                flex-col
                justify-center 
                items-center
                shadow-md
                relative '
                        >
                            <div
                                className='
        h-20 w-screen
         px-[2.5vw]
         flex gap-9
         items-center
         absolute
         top-0
         '
                            ><div>
                                    <h1 className='text-[#01b4e4] text-3xl font-bold'>Naijaflix</h1>
                                </div>
                            </div>
                            <div className="h-screen w-screen px-2 md:px-0 flex items-center text-gray-50 justify-center">{children}</div>
                        </div>
                    </ToastProvider>
                </AuthContext>
            </body>
        </html>
    )
}