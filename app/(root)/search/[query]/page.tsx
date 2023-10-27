'use client'
import MovieComponent from '@/components/MovieComponent'
import ViewMore from '@/components/ViewMore'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


type props = {
  params: {
    query: string
  }
}

const page = ({ params }: props) => {
  const [search, setSearch] = useState<any>([])
  useEffect(() => {
    const getMovie = async () => {
      await axios.post('/api/search', {
        query: params.query
      })
        .then((res) => {
          setSearch(res.data.results)
          console.log(res.data);
        })
      // console.log(search);
    }
    getMovie()
  }, [])

  const handlePagination = () => {
    // console.log("pagination");
    const getMovie = async () => {
      await axios.post('/api/search', {
        query: params.query,
        page: 2
      })
        .then((res) => {
          setSearch(res.data.results)
          console.log(res.data);
        })
      // console.log(search);
    }
    getMovie()
  
  }

  return (
    <>
      <div
        className='p-1 px-2 flex justify-center w-full h-full items-start gap-4 flex-wrap'
      >
        <div className="flex self-start w-full">
          <h1 className='text-gray-950  dark:text-white'>Search result for: <q>{params.query}</q></h1>
          <p className='text-gray-950 dark:text-white ml-auto'>{search.length} results</p>
        </div>
        {
          search && search.length > 0 ? search.map((movie: any) => (
            <div className="flex flex-row self-center flex-wrap">
              <MovieComponent key={movie.id} item={movie} />
            </div>
          ))
            : <h1>No Result Found</h1>
        }
      </div>
      {search && search.length > 0 && <div onClick={handlePagination} className=""><ViewMore /></div> }
    </>
  )
}

export default page