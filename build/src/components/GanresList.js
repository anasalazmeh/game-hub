import { HStack, Heading, Image, List, ListItem, Text, useColorMode } from '@chakra-ui/react';
import { useState } from 'react';
import StoreQuery from '../Zustand/store';
import UseGenres from '../hooks/UseGenres';
import IamgeSize from '../services/image-url';
import GenresListSkeleton from './GenresListSkeleton';
const GanresList = () => {
    const { gameQuery, add } = StoreQuery();
    const { toggleColorMode, colorMode } = useColorMode();
    const { data, isLoading } = UseGenres();
    const [ative, setative] = useState(0);
    const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let colorItem = 'gray.100';
    if (colorMode == 'dark') {
        colorItem = 'gray.700';
    }
    return (<>
    <Heading fontSize='2xl' marginBottom={2}>Genres</Heading>
    {isLoading && Skeleton.map(i => <GenresListSkeleton key={i}/>)}
    
          <List>
              {data?.results.map(genres => <ListItem paddingY={2} key={genres.id}>
                  <HStack transition='all 0.3s' onClick={() => { setative(genres.id); add({ ...gameQuery, genres: genres.id }); }} background={ative == genres.id ? colorItem : ''} width='100%' cursor='pointer' _hover={{ background: colorItem }} borderRadius={2} paddingY={2}>
                          <Image objectFit='cover' boxSize='32px' borderRadius={5} src={IamgeSize(genres.image_background)}/>
                      <Text variant='link' fontWeight={ative == genres.id ? 'bold' : 'normal'} fontSize='lg' marginLeft={1}>{genres.name}</Text>
                      </HStack>
              </ListItem>)}
          </List>
    </>);
};
export default GanresList;
//# sourceMappingURL=GanresList.js.map