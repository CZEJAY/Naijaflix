"use client"

import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { EditBtn } from '@/components/EditBtn'

const page = () => {
  const { data: session } = useSession()
  return (
    <div
      className='p-8 flex'
    >
      <div className="flex w-full items-center p-3 h-auto rounded-lg border-2">
        <div className="self-start">
          <Image
            src={session?.user?.image!}
            alt="profile"
            width={100}
            height={100}
            className="rounded-full mb-1"
          />
          <p className="text-sm text-gray-900 dark:text-gray-400">Name: {session?.user?.name}</p>
          <p className="text-sm text-gray-900 dark:text-gray-400">Email: {session?.user?.email}</p>
          <p className="text-sm text-gray-900 dark:text-gray-400">Joined:</p>
        </div>
        <div className="ml-auto self-end"><EditBtn /></div>
      </div>
    </div>
  )
}

export default page