import React from 'react'
import UseGenres from '../hooks/UseGenres'


const GanresList = () => {
   const{ganres}= UseGenres()
  return (
    <ul>
          {ganres?.map(item => <li key={item.id}>{item.name}</li>)}
    </ul>
  )
}

export default GanresList