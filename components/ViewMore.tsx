"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const ViewMore = () => {
    const router = useRouter()
    return (
        <div className='flex justify-center mt-10 mb-10'>
            <button onClick={() => router.push(`/movies`)} className='text-white font-semibold w-1/2 cursor-pointer px-5 py-2 rounded-lg bg-[#01b4e4] hover:bg-black/10 transition ease-in-out duration-300'>View More</button>
        </div>
    )
}

export default ViewMore