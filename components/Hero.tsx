"use client"
import React, { useEffect, useState } from 'react'
import { fetchMovie } from '@/hooks/hook'
import { AiFillStar } from 'react-icons/ai';
import Link from 'next/link';
import { Skeleton } from './ui/skeleton';


const Hero = () => {
  const [index, setIndex] = useState(0)
  const [hero, setHero] = useState<any>([])
  const imgUrl = "https://image.tmdb.org/t/p/w500"
  const genreiUrl = "https://image.tmdb.org/3/genre/movie/list?"
  const movieiUrl = "https://image.tmdb.org/3/movie/popular?"
  const movieGenreUrl = "https://image.tmdb.org/3/discover/movie?"



  useEffect(() => {
    fetchMovie()
      .then((res: any) => {
        setHero(res)
      })

    const togglenumber = () => {
      return Math.floor(Math.random() * 10) + 1
    }
    setIndex(togglenumber())
  }, [])

  return (
    <>
      <div className={`${!hero ? "animate-pulse" : "animate-none"}  w-full h-96 mb-10 bg-slate-300 flex items-start justify-start relative text-black w-xs`} >
        {hero.length > 0 && hero[index].backdrop_path && hero[index].title ? (
          <div className='w-full h-full relative'>
            <img src={`${imgUrl}${hero[index].backdrop_path}`} alt="" className='h-full w-full object-cover absolute' />
            <div className='absolute top-0 left-0 w-full h-full bg-black/50 flex items-baseline  justify-start'>
              <div className='px-2 md:px-10 mt-4 text-ellipsis max-w-xl lg:max-w-4xl w-full h-full flex flex-col items-center justify-center'>
                <h1 className='text-white mb-2 text-2xl md:text-3xl lg:text-5xl font-bold self-start cursor-default '>{hero[index].title}</h1>
                <p className='text-white mb-2 text-sm md:text-xl self-start font-semibold cursor-default line-clamp-4 max-w-prose'>{hero[index].overview}</p>
                <div className="flex self-start gap-2 items-center">
                  <p className='secondary text-sm  font-semibold self-start  cursor-default'>{hero[index].release_date}</p>
                  <p className='secondary text-sm  font-semibold self-start  cursor-default'>|</p>
                  <p className='secondary text-sm  font-semibold self-start  cursor-default'>{hero[index].vote_average} / 10 </p>
                  <span className='secondary text-sm  font-semibold self-start mt-1 cursor-default'><AiFillStar /></span>
                </div>
                <div className="flex self-start mt-2 gap-5">
                  <div className='group flex drop-shadow-md  items-center justify-center h-10 w-28 rounded-full text-white self-start bg-[#01b4e4] hover:border-2 font-semibold hover:text-[#01b4e4] hover:border-[#01b4e4] hover:bg-black/10 transition ease-in-out duration-300 '>
                    <Link className='group-hover:animate-pulse transition ease-in-out duration-300' href={`/watch`}>
                      Watch
                    </Link>
                  </div>
                  <div className='group flex drop-shadow-md items-center justify-center h-10 w-28 rounded-full text-white self-start bg-transparent font-semibold hover:text-[#01b4e4] hover:border-[#01b4e4] hover:bg-black/10 transition ease-in-out duration-300 border-2 '>
                    <Link className='group-hover:animate-bounce transition ease-in-out duration-300' href={`/download`}>
                      Download
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) :
          <Skeleton className='w-full h-full relative'>
            {/* <Skeleton className='absolute top-0 left-0 w-full h-full flex items-baseline  justify-start'> */}
            <Skeleton className='px-2 md:px-10  text-ellipsis max-w-xl lg:max-w-4xl w-full h-full flex flex-col items-center justify-center'>
                <Skeleton className='text-white mb-2 text-2xl md:text-3xl lg:text-5xl font-bold self-start cursor-default '></Skeleton>
                <Skeleton className='text-white mb-2 text-sm md:text-xl self-start font-semibold cursor-default line-clamp-4 max-w-prose'></Skeleton>
                <Skeleton className="flex self-start gap-2 items-center">
                  <Skeleton className='secondary text-sm  font-semibold self-start  cursor-default'></Skeleton>
                  <Skeleton className='secondary text-sm  font-semibold self-start  cursor-default'></Skeleton>
                  <Skeleton className='secondary text-sm  font-semibold self-start  cursor-default'></Skeleton>
                  <Skeleton className='secondary text-sm  font-semibold self-start mt-1 cursor-default'></Skeleton>
                </Skeleton>
                <Skeleton className="flex self-start mt-2 gap-5">
                  <Skeleton className='group flex drop-shadow-md  items-center justify-center h-10 w-28 rounded-full text-white self-start  hover:border-2 font-semibold transition ease-in-out duration-300 '>
                    <Skeleton className='group-hover:animate-pulse transition ease-in-out duration-300' >
                      
                    </Skeleton>
                  </Skeleton>
                  <Skeleton className='group flex drop-shadow-md items-center justify-center h-10 w-28 rounded-full text-white self-start bg-transparent font-semibold  transition ease-in-out duration-300 border-2 '>
                    <Skeleton className='group-hover:animate-bounce transition ease-in-out duration-300' >
                      
                    </Skeleton>
                  </Skeleton>
                </Skeleton>
              </Skeleton>
            </Skeleton>
          // </Skeleton>
        }
      </div>
    </>
  )
}

export default Hero