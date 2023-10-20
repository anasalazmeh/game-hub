import { Button, HStack, Image, List, ListItem, Text, background } from '@chakra-ui/react'
import UseGenres, { Genres } from '../hooks/UseGenres'
import IamgeSize from '../services/image-url'
import GenresListSkeleton from './GenresListSkeleton'
import { useState } from 'react'

interface Porps{
    selectgenres:(genres:Genres)=>void
}
const GanresList = ({ selectgenres }:Porps) => {
    const { data, isloading } = UseGenres()
    const [ative,setative]=useState(0)
   const Skeleton=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return (
    <>
    {isloading && Skeleton.map(i=> <GenresListSkeleton key={i}/>)}
          <List >
              {data?.map(genres => <ListItem paddingY={2} key={genres.id} >
                  <HStack transition='all 0.3s' onClick={() => { selectgenres(genres); setative(genres.id) }} background={ative == genres.id ? '#4A5568;':''} width='100%' cursor='pointer' paddingX={3} _hover={{ background:"#4A5568;"} } borderRadius={2} paddingY={2}>
                          <Image boxSize='32px' borderRadius={5} src={IamgeSize(genres.image_background)} />
                      <Text variant='link' fontWeight={ative == genres.id?'bold':'normal'} fontSize='lg' marginLeft={1}>{genres.name}</Text>
                      </HStack>
              </ListItem>)}
          </List>
    </>
  )
}

export default GanresList