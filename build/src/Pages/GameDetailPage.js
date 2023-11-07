import { GridItem, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttribute from '../components/GameAttribute';
import GameScreenhshot from '../components/GameScreenhshot';
import GameTrailer from '../components/GameTrailer';
import UseGameDetail from '../hooks/UseGameDetail';
const GameDetailPage = () => {
    const { slug } = useParams();
    const { data, isLoading, error } = UseGameDetail(slug);
    if (isLoading)
        return <Spinner />;
    if (error)
        throw error;
    return (<>
    <SimpleGrid spacing={1} columns={{ base: 1, md: 2 }}>
      <GridItem paddingRight={1}>
      <Heading>{data?.name}</Heading>
          <Text><ExpandableText Text={data?.description_raw}/></Text>
          <GameAttribute data={data}/>
      </GridItem>
      <GridItem>
      <GameTrailer id={data?.id}/>
      <GameScreenhshot id={data?.id}/>
      </GridItem>
      </SimpleGrid>
    </>);
};
export default GameDetailPage;
//# sourceMappingURL=GameDetailPage.js.map