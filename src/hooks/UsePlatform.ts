import React from 'react'
import UsePlatforms from './UsePlatforms'

const usePlatform = (id?:number) => {
  const Platform=UsePlatforms()
  return Platform.data?.results.find(data=> data.id==id)
}

export default usePlatform