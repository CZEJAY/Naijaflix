"use client"
import axios from 'axios'
import React, { useState } from 'react'
import { CgSpinner } from 'react-icons/cg'

const page = () => {
  const [movieName, setMovieName] = useState('')
  const [dowloadLink, setDowloadLink] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchMovieLink = async () => {
    setLoading(true)
    try {
      await axios.post('/api/getMovieLink', { movieName }).then((res) => {
        setDowloadLink(res.data)
        console.log(res.data)
      })
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='flex items-center justify-center bg-slate-500 p-3'>

      <div>
        <input
          type="text"
          placeholder='Enter movie name'
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
          className='bg-slate-400 text-gray-50 p-2 rounded-lg ring-0'
        />
        <button
          onClick={fetchMovieLink}
          className='bg-blue-500 text-white px-4 py-2 rounded-lg ml-2'
        >
          {loading ? "" : "Get Link"}
          {loading && (<CgSpinner className={loading ? "animate-spin" : ""} />)}
        </button>
        {dowloadLink && dowloadLink.map((item, index) => (
          <div key={index} className='bg-slate-400 p-2 rounded-lg my-2'>
            <a href={item} target="_blank" rel="noreferrer">
              {item}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page