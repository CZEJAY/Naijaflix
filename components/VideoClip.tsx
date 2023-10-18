import { fetchMovieVideoClip } from '@/hooks/hook'
import React, { useEffect, useState } from 'react'

interface VideoClipProps {
    movieID: string
}

const VideoClip = ({ movieID }: VideoClipProps) => {
    const [video, setVideo] = useState<any>(null)

    useEffect(() => {
        fetchMovieVideoClip(movieID)
        .then((res) => {
            // console.log(res.data.results)
            setVideo(res.data.results.splice(0, 4))
        })
    }, [movieID])
    return (
        <>
            {
                video && video.length > 0 && video.map((item: any, index: number) => (
                    <iframe key={index} className='rounded-lg h-44 w-80' width="205" height="210" src={`https://www.youtube.com/embed/${item.key}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                ))
            }
        </>
    )
}

export default VideoClip