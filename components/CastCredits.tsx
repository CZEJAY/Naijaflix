"useclient"
import { fetchMovieDetailsCredits } from '@/hooks/hook'
import React, { useEffect, useState } from 'react'

interface movieProps {
    movieId: string;

}

const CastCredits = ({movieId}: movieProps) => {
    const [credits, setCredits] = useState<any>(null)

    useEffect(() => {
    fetchMovieDetailsCredits(movieId)
      .then((res) => {
        // console.log(res.data["cast"].splice(0, 5))
        setCredits(res.data["cast"].splice(0, 5))
        console.log(credits)
      })
    }, [])

    const formatString = (currentIndex: any, maxIndex: number) => {
        return (currentIndex == maxIndex -1) ? "" : ","
    }
  return (
    <>
        {
            credits && credits.length > 0 && credits.map((item: any) => (
                <span key={item.id} className='ml-1 text-white'>{item.name}{formatString(credits.indexOf(item), credits.length)}</span>
            ))
        }
    </>
  )
}

export default CastCredits