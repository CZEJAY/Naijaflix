"use client"
import React from 'react'

import { SessionProvider } from 'next-auth/react'

type props = {
    children: React.ReactNode
}
const AuthContext = ({ children }: props) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    )
}

export default AuthContext