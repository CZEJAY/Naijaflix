import React from 'react'


type props = {
  params: {
    query: string
  }
}

const page = ({params}: props) => {
  return (
    <div>Search Result for: {params.query}</div>
  )
}

export default page