"use client"

import { fetchMovie } from '@/hooks/hook'
import React, { useEffect, useState } from 'react'
import ViewMore from './ViewMore'
import { FaSpinner } from 'react-icons/fa'
import MovieComponent from './MovieComponent'
import { useSession } from 'next-auth/react'

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
            data && data.length > 0 ? "Popular Movies" : <FaSpinner className='text-gray-400 animate-spin' />
          }
        </h1>
      </div>
      <div className='flex gap-7  flex-wrap justify-center '>

        {
          data && data.length > 0 && data.map((item: any, index: number) => (
            <MovieComponent  key={index} item={item} />
          ))
        }
      </div>
      {
        data && data.length > 0 ? <ViewMore /> : ""
      }
    </>
  )
}

export default MovieCard