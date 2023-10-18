"useclient"
import { fetchMovieDetailsCredits } from '@/hooks/hook'
import React, { useEffect, useState } from 'react'

interface movieProps {
  movieId: string;
  
}

const CastCreditsCard = ({movieId}: movieProps) => {
  const [credits, setCredits] = useState<any>(null)
  const imgUrl = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
    fetchMovieDetailsCredits(movieId)
      .then((res) => {
        // console.log(res.data["cast"].splice(0, 5))
        setCredits(res.data["cast"].splice(0, 5))
        // console.log(res.data["cast"].splice(0, 5))
      })
    }, [])

    const formatString = (currentIndex: any, maxIndex: number) => {
        return (currentIndex == maxIndex -1) ? "" : ","
    }
  return (
    <>
        {
            credits && credits.length > 0 && credits.map((item: any, index: number) => (
                <div key={index} className='h-28 w-[7.69rem] lg:w-52 lg:h-48 flex flex-col bg-slate-400 relative  rounded-lg'>
                  <img src={`${imgUrl}${item.profile_path}`} className={`absolute brightness-50 w-full h-full object-fill rounded-lg ${item.profile_path ? "" : "hidden"}`} alt="" />
                  <div className="flex flex-col items-center absolute bottom-0 h-full w-full py-1 px-1">
                    <h4 className='text-white font-semibold self-center text-sm mt-auto text-center'>{item.original_name}</h4>
                    <span className='text-xs secondary self-center font-bold flex text-center'>{item.character}</span>
                  </div>
                </div>
            ))
        }
    </>
  )
}

export default CastCreditsCard