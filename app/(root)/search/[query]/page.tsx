'use client'
import MovieComponent from '@/components/MovieComponent'
import SeriesComp from '@/components/SeriesComp'
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
  const [series, setSeries] = useState<any>([])
  const [seriesPage, setSeriesPage] = useState<number>()
  const [page, setPage] = useState<number>()
  const [title, setTitle] = useState<string>()
  useEffect(() => {
    const getMovie = async () => {
      await axios.post('/api/search', {
        query: params.query
      })
        .then((res) => {
          setSearch(res.data.movies.results)
          setSeries(res.data.series.results)
          setPage(res.data.movies.total_pages)
          setSeriesPage(res.data.series.total_pages)
          setTitle(res.data.query)
          console.log(res.data.series);
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
          setSearch(res.data.movies.results)
          console.log(res.data);
        })
      // console.log(search);
    }
    getMovie()

  }


  const testRegExp = () => {
    //format params.query and remove percentage symbol and any number in the string
    const regExp = params.query.replace(/[%]/g, ' ').replace(/[0-9]/g, '')
    return regExp
  }
  // console.log(testRegExp());
  

  return (
    <>
      <div className="overflow-x-hidden">
        <div
          className='p-1 px-2 flex  items-start justify-evenly gap-4 flex-wrap'
        >
          {
            search && search.length > 0 ? (
              <div className="flex self-start border bg-gray-950 rounded-md py-1 px-2 items-center justify-between w-full">
                <h1 className='text-gray-950 text-xs sm:text-md dark:text-white'>Search result for: <q>{title && title.length > 0 ? testRegExp() : 'No search query provided'} </q> in movie</h1>
                <p className='text-gray-950 text-xs sm:text-md self-center  dark:text-white'>Page 1 of {page} pages</p>
                <p className='text-gray-950 text-xs sm:text-md dark:text-white '>{series.length} results</p>
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
                <div className="flex items-center justify-center gap-4 mt-2 self-center flex-wrap">
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                </div>
              )
          }
        </div>
        {search && search.length > 0 && <div onClick={handlePagination} className=""><ViewMore /></div>}
        <div className="p-1 px-2 flex  items-start justify-evenly gap-4 flex-wrap">

          {
            series && series.length > 0 ? (
              <div className="flex self-start border mt-2 bg-gray-950 rounded-md py-1 px-2 items-center justify-between w-full">
                <h1 className='text-gray-950 text-xs sm:text-md dark:text-white'>Search result for: <q>{title && title.length > 0 ? testRegExp() : params.query.length > 0 ? testRegExp() : 'No search query provided'}</q> in series</h1>
                <p className='text-gray-950 text-xs sm:text-md self-center  dark:text-white'>Page 1 of {seriesPage} pages</p>
                <p className='text-gray-950 text-xs sm:text-md dark:text-white '>{series.length} results</p>
              </div>
            ) : (
              <Skeleton className="flex self-start border rounded-md py-4 px-2 items-center justify-between w-full" />
            )
          }

          {
            series && series.length > 0 ? series.map((movie: any) => (
              <div className="flex flex-row  self-center flex-wrap">
                <SeriesComp key={movie.id} item={movie} />
              </div>
            ))
              : (
                <div className="flex items-center justify-center gap-4 mt-2 self-center flex-wrap">
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                  <Skeleton className="w-40 h-[250px] rounded-lg" />
                </div>
              )
          }
        </div>
      </div>
    </>
  )
}

export default page