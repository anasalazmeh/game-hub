import React from 'react'
import UseTrailer from '../hooks/UseTrailer'
interface Props{
    slug:number| string
}
const GameTrailer = ({ slug }:Props) => {
    const { data } = UseTrailer(slug)
    const first=data?.results[0]
    if(!first)return null
  return (
        first ?
          <video src={first.data[480]} controls poster={first.preview}/>
          : null
    
  )
}

export default GameTrailer