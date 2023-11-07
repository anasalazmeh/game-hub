import { Image, SimpleGrid } from '@chakra-ui/react';
import UseScreenhshot from '../hooks/UseScreenhshot';
const GameScreenhshot = ({ id }) => {
    const { data, isLoading, error } = UseScreenhshot(id);
    console.log(data);
    if (isLoading)
        return null;
    if (error)
        throw error;
    return (<SimpleGrid marginTop={5} spacing={5} columns={{ sm: 1, md: 2 }}>
          {data?.results.map(item => <Image key={item.id} src={item.image}/>)}
    </SimpleGrid>);
};
export default GameScreenhshot;
//# sourceMappingURL=GameScreenhshot.js.map