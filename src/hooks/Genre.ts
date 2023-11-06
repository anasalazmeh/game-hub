import React from 'react'
import UseGenres from './UseGenres'

const UseGenre = (id?:number|null) => {
  const genre=UseGenres()
  if(id!=null)return genre.data?.results.find(data=>data.id ==id)
}

export default UseGenre