"use client"

import { fetchMovieDetails } from '@/hooks/hook'
import React, { useEffect, useState } from 'react'

interface watchProps {
    params: { id: string }

}

const page = ({ params }: watchProps) => {
    const [watch, setWatch] = useState<any>(null)

    useEffect(() => {
        fetchMovieDetails(params.id)
            .then((res) => {
                setWatch(res.data)
                console.log(res.data)
                res.data && res.data.length > 0 ? document.title = `Naijaflix | ${res.data.title}` : "Naijaflix"
            })
        // .finally(() => console.log("Movie Detail Fetched"))
    }, [])
    console.log(params.id)
    const imgUrl = "https://image.tmdb.org/t/p/w500"
    return (
        <>
            {
                watch && (
                    <div className='h-96 w-full p-5 bg-black flex items-center justify-center'>
                        <video className='h-96 w-full aspect-square' controls playsInline poster={`${imgUrl}${watch.poster_path}`}
                            src="https://downloadwella.com/273owyx04xwd/Fast.X.(NKIRI.COM).2023.AMZN.WEBRip.DOWNLOADED.FROM.NKIRI.COM.mkv" typeof='video/mp4' ></video>
                    </div>
                )
            }
        </>
    )
}

export default page