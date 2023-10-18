"use client"
import CastCredits from '@/components/CastCredits'
import CastCreditsCard from '@/components/CastCreditsCard'
import VideoClip from '@/components/VideoClip'
import { fetchMovieDetails, fetchMovieDetailsCredits } from '@/hooks/hook'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { AiFillStar } from 'react-icons/ai'
import { FaSpinner } from 'react-icons/fa'


interface pageProps {
  params: { movieId: string }
}

const MovieDetailsPage: React.FC<pageProps> = ({ params }) => {
  const [details, setDetails] = useState<any>(null)

  const imgUrl = "https://image.tmdb.org/t/p/w500"

  useEffect(() => {
    fetchMovieDetails(params.movieId)
      .then((res) => {
        setDetails(res.data)
        // console.log(res.data)
        res.data && res.data.length > 0 ? document.title = `Naijaflix | ${res.data.title}` : "Naijaflix"
      })
    // .finally(() => console.log("Movie Detail Fetched"))
  }, [])
  const formatString = (currentIndex: number, maxIndex: number) => {
    return (currentIndex == maxIndex - 1) ? "" : ","
  }
  return (
    <>

      <div className={`w-full h-96 mb-10 bg-slate-300 flex items-start justify-start relative text-black w-xs`} >

        {details && details.backdrop_path && details.title && (
          <div className='w-full h-full relative'>
            <img src={`${imgUrl}${details?.backdrop_path}`} alt="" className='h-full w-full object-cover absolute' />
            <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-baseline  justify-start'>
              <img src={`${imgUrl}${details.poster_path}`} className='w-52 hidden self-center ml-4 rounded-lg' alt="" />
              <div className='px-2 md:px-10 mt-4 text-ellipsis max-w-xl lg:max-w-4xl w-full h-full flex flex-col items-center justify-center'>
                <h1 className='text-white mb-2 text-2xl md:text-3xl lg:text-5xl font-bold self-start cursor-default '>{details.original_title}</h1>
                <p className='text-white mb-2 text-sm md:text-xl self-start font-semibold cursor-default line-clamp-4  '>{details.overview}</p>
                <div className="flex self-start w-max flex-wrap overflow-hidden md:max-w-lg max-w-sm gap-2 items-center">
                  <p className='secondary text-sm  font-semibold self-start  cursor-default'>{details.release_date}</p>
                  <p className='secondary text-sm  font-semibold self-start  cursor-default'>|</p>
                  <p className='secondary text-sm  font-semibold self-start  cursor-default'>{details.vote_average}</p>
                  <span className='secondary text-sm  font-semibold self-start mt-1 cursor-default'><AiFillStar /></span>
                  <p className='secondary text-sm  font-semibold self-start  cursor-default'>|</p>
                  <p className='secondary text-sm  font-semibold self-start  cursor-default'>{details.runtime} min</p>
                  <p className='secondary text-sm  md:visible font-semibold self-start  cursor-default'>|</p>
                  {
                    details.genres && details.genres.length > 0 && details.genres.map((item: any, index: number) => (
                      <p key={index} className=' md:visible secondary text-sm  font-semibold self-start  cursor-default'>{item.name}{formatString(index, details.genres.length)}</p>
                    ))
                  }

                </div>
                <div className="flex self-start mt-2 gap-5">

                  <Link href={`/watch/${details.id}`} className='flex items-center justify-center h-10 w-28 rounded-full text-white self-start bg-[#01b4e4] cursor-pointer hover:border-2 font-semibold hover:text-[#01b4e4] hover:border-[#01b4e4] hover:bg-black/10 transition ease-in-out duration-300'>
                    Watch
                  </Link>
                  <Link href={`download/${details.id}`} className='flex items-center justify-center h-10 w-28 rounded-full text-white self-start bg-transparent font-semibold hover:text-[#01b4e4] hover:border-[#01b4e4] hover:bg-black/10 transition ease-in-out duration-300 border-2 cursor-pointer'>
                    Download
                  </Link>
                </div>

                <div className="flex self-start mt-2 flex-col">
                  <p className='secondary text-sm  font-semibold self-start  cursor-default'>#{details.tagline}</p>
                  <div className="flex">
                    <p className='secondary text-sm  font-semibold self-start  cursor-default'>Cast:
                      <CastCredits movieId={params.movieId} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>


      <div className="flex items-center justify-center">
        {!details ? <FaSpinner className='animate-spin text-center' /> : ""}
      </div>

      <div className="flex flex-col bg-gray-300 dark:bg-gray-800">
        <h2 className='text-2xl md:text-3xl ml-1 text-gray-950 font-semibold self-start dark:text-gray-50 cursor-default'>{details ? "Characters:" : ""}</h2>
        <div className='flex gap-4 py-1 flex-wrap items-start justify-center px-3'>
          <CastCreditsCard movieId={params.movieId} />
        </div>
      </div>

      {/* Video Clip */}

      <div className="mb-2 flex gap-2 py-2 mt-3 flex-col px-2 ">
        <h1 className='text-2xl md:text-3xl ml-1 text-gray-700 font-semibold self-start dark:text-gray-50 cursor-default'>{details ? "Video Clip" : ""}</h1>
        <div className="flex flex-wrap gap-2 items-start justify-center  px-3">
          <VideoClip movieID={params.movieId} />
        </div>
      </div>

      {/* recommendations */}
      <div className="flex flex-col py-2 gap-2 mt-2">
        <h1 className='text-2xl md:text-3xl ml-1 text-gray-700 font-semibold self-start dark:text-gray-50 cursor-default'>{details ? "Recommendations" : ""}</h1>
        <div className="flex flex-wrap items-start px-3">

        </div>

      </div>
    </>
  )
}

export default MovieDetailsPage