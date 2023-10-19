"use client"
import React, { useState } from 'react'

const page = () => {
  const [movieName, setMovieName] = useState('')
  const [dowloadLink, setDowloadLink] = useState('')
  const fetchMovieLink = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/fetchHero`, {
        method: "POST",
        body: JSON.stringify({ movieName }),
        headers: {
          'Content-Type': 'application/json'
        },
      })

      if (response.ok) {
        const data = await response.json()
        setDowloadLink(data.downloadLink)
      } else {
        console.log("Failed to fetch movie link")
      }
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
          Get Download Link
        </button>
        {dowloadLink && <a href={dowloadLink} target="_blank" rel="noreferrer" className='ml-2'>Download Link</a>}
      </div>
    </div>
  )
}

export default page