"use client"

import { fetchMovie } from '@/hooks/hook'
import React, { useEffect, useState } from 'react'
import ViewMore from './ViewMore'
import { FaSpinner } from 'react-icons/fa'
import MovieComponent from './MovieComponent'
import { useSession } from 'next-auth/react'
import { Skeleton } from './ui/skeleton'

const MovieCard = (hero: any) => {

  const [data, setData] = useState<any>([])
  const { data: session } = useSession()

  useEffect(() => {
    fetchMovie()
      .then((res) => {
        setData(res)
        // console.log(res)
      })
      .catch((err) => console.log(err))

  }, [])


  return (
    <>
      <div className="flex items-center justify-center mb-3 ml-3">
        <h1 className='text-2xl sm:text-4xl font-semibold text-gray-950 dark:text-gray-50'>
          {
            data && data.length > 0 ? "Popular Movies" : <Skeleton className="w-[200px] h-[50px] rounded-full" />
          }
        </h1>
      </div>
      <div className='flex gap-7  flex-wrap justify-center '>

        {
          data && data.length > 0 ? data.map((item: any, index: number) => (
            <MovieComponent key={index} item={item} />
          )) :
            <div className="flex items-center gap-5 flex-wrap">
              <Skeleton className="w-[200px] h-[250px] rounded-lg" />
              <Skeleton className="w-[200px] h-[250px] rounded-lg" />
              <Skeleton className="w-[200px] h-[250px] rounded-lg" />
              <Skeleton className="w-[200px] h-[250px] rounded-lg" />
            </div>
        }
      </div>
      {
        data && data.length > 0 ? <ViewMore /> : ""
      }
    </>
  )
}

export default MovieCard