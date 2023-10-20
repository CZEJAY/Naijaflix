"use client"

import Link from 'next/link'
import { AiFillHeart, AiFillStar, AiOutlineHeart } from 'react-icons/ai'
import MovieLikeBtn from './MovieLikeBtn'

interface movieProps {
    item: any,
    toggleFavorite?: (id: number) => void
}

const MovieComponent: React.FC<movieProps> = ({ item, }) => {
    const imgUrl = "https://image.tmdb.org/t/p/w500"




    return (
        <div className="group shadow-lg shadow-gray-400 dark:shadow-gray-700 dark:bg-black relative border-2 hover:scale-105 transition-all duration-500 object-scale-down rounded-t-lg">
            <Link className='' href={`/movie/${item.id}`} >
                <div className='cursor-pointer flex flex-col  relative items-center justify-center w-36 sm:w-48   rounded-lg mb-10'>
                    <img src={imgUrl + item.poster_path} alt={item.title} className='group-hover:scale-100 transition-all duration-500 object-scale-down rounded-lg w-full  h-full' />
                    <div className=" flex flex-col  backdrop-hue-rotate-15  group-hover:-translate-y-6 transition-all  absolute bottom-0 py-2 px-3 self-baseline group-hover:bg-black bg-transparent backdrop-blur-lg z-50 duration-500">
                        <p className='font-semibold text-sm sm:text-xl secondary line-clamp-1'>{item.title}</p>
                        <p className='line-clamp-1 sm:line-clamp-3 text-gray-300 group-hover:text-gray-50 dark:text-gray-50 text-sm font-semibold'>{item.overview}</p>
                        <div>
                            <p className='group-hover:text-[#01b4e4] transition ease-in-out duration-300 text-xs text-gray-400 font-semibold mt-2 mb-2 flex items-center gap-2'>
                                {item.vote_average} <AiFillStar /> |<span>{item.release_date} <span className='hidden'>|</span> <span className='hidden'>{item.original_language}</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
            <div className="ml-1 mb-1 flex">
                <p className='text-xs text-gray-400 font-semibold'>{item.original_language}</p>
                <p className='text-xs text-gray-400 font-semibold'>|</p>
            </div>
            <div className="ml-1 flex items-center gap-1">
                <MovieLikeBtn item={item} />
                {/* <p className='text-xs text-gray-400 font-semibold'>{item.popularity} Popularity</p> */}
                {/* <p className='text-xs text-gray-400 font-semibold'>{item.release_date}</p> */}
            </div>
        </div>
    )
}

export default MovieComponent