'use client'
import MovieComponent from '@/components/MovieComponent'
import ViewMore from '@/components/ViewMore'
import { Skeleton } from '@/components/ui/skeleton'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


type props = {
  params: {
    query: string
  }
}

const page = ({ params }: props) => {
  const [search, setSearch] = useState<any>([])
  const [page, setPage] = useState<number>()
  useEffect(() => {
    const getMovie = async () => {
      await axios.post('/api/search', {
        query: params.query
      })
        .then((res) => {
          setSearch(res.data.results)
          setPage(res.data.total_pages)
          console.log(res.data.total_pages);
        })
      // console.log(search);
    }
    getMovie()
  }, [])

  const handlePagination = () => {
    page && page > 1 && setPage(page - 1)
    const getMovie = async () => {
      await axios.post('/api/search', {
        query: params.query,
        page
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
        className='p-1 px-2 flex justify-center  items-start gap-4 flex-wrap'
      >
        {
          search && search.length > 0 ? (
            <div className="flex self-start border bg-gray-950 rounded-md py-1 px-2 items-center justify-between w-full">
              <h1 className='text-gray-950  dark:text-white'>Search result for: <q>{params.query}</q></h1>
              <p className='text-gray-950 self-center  dark:text-white'>Page 1 of {page} pages</p>
              <p className='text-gray-950 dark:text-white '>{search.length} results</p>
            </div>
          ) : (
            <Skeleton className="flex self-start border rounded-md py-4 px-2 items-center justify-between w-full" />
          )
        }
        {
          search && search.length > 0 ? search.map((movie: any) => (
            <div className="flex flex-row  self-center flex-wrap">
              <MovieComponent key={movie.id} item={movie} />
            </div>
          ))
            : (
              <div className="flex gap-4 mt-2 self-center flex-wrap">
                <Skeleton className="w-[200px] h-[250px] rounded-lg" />
                <Skeleton className="w-[200px] h-[250px] rounded-lg" />
                <Skeleton className="w-[200px] h-[250px] rounded-lg" />
                <Skeleton className="w-[200px] h-[250px] rounded-lg" />
                <Skeleton className="w-[200px] h-[250px] rounded-lg" />
                <Skeleton className="w-[200px] h-[250px] rounded-lg" />
                <Skeleton className="w-[200px] h-[250px] rounded-lg" />
                <Skeleton className="w-[200px] h-[250px] rounded-lg" />
                <Skeleton className="w-[200px] h-[250px] rounded-lg" />
                <Skeleton className="w-[200px] h-[250px] rounded-lg" />
              </div>
            )
        }
      </div>
      {search && search.length > 0 && <div onClick={handlePagination} className=""><ViewMore /></div>}
    </>
  )
}

export default page