import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react'
import UseGenres from '../hooks/UseGenres'
import IamgeSize from '../services/image-url'


const GanresList = () => {
   const{data}= UseGenres()
  return (
    <List >
          {data?.map(item => <ListItem paddingY={2} key={item.id}>
            <HStack>
                  <Image boxSize='32px' borderRadius={5} src={IamgeSize(item.image_background)}/>
                  <Text fontSize='lg' marginLeft={1}>{item.name}</Text>
            </HStack>
            </ListItem>)}
    </List>
  )
}

export default GanresList