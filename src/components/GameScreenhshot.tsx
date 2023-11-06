import React from 'react'
import UseScreenhshot from '../hooks/UseScreenhshot'
import { Image, SimpleGrid } from '@chakra-ui/react'
interface Props {
    id: number | string
}
const GameScreenhshot = ({ id }:Props) => {
    const { data, isLoading, error } = UseScreenhshot(id)
    console.log(data);
    if (isLoading) return null
    if (error) throw error
  return (
    <SimpleGrid spacing={5} columns={{sm:1,md:2}}>
          {data?.results.map(item => <Image key={item.id} src={item.image} />)}
    </SimpleGrid>
  )
}
export default GameScreenhshot