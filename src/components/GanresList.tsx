import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import UseGenres from '../hooks/UseGenres'
import IamgeSize from '../services/image-url'
import GenresListSkeleton from './GenresListSkeleton'


const GanresList = () => {
   const{data,isloading}= UseGenres()
   const Skeleton=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  return (
    
    <>
    {isloading && Skeleton.map(i=> <GenresListSkeleton key={i}/>)}
          <List >
              {data?.map(item => <ListItem paddingY={2} key={item.id}>
                  <HStack>
                      <Image boxSize='32px' borderRadius={5} src={IamgeSize(item.image_background)} />
                      <Text fontSize='lg' marginLeft={1}>{item.name}</Text>
                  </HStack>
              </ListItem>)}
          </List>
    </>
  )
}

export default GanresList