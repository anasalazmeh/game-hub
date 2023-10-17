import { SimpleGrid, Text } from '@chakra-ui/react';
import UseGame from '../hooks/UseGame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameGardContainer from './GameGardContainer';

const GameGrid = () => {
    const {data, error,isloading } = UseGame()
    const Skeleton=[1,2,3,4,5,6,7,8]

    return (
        <>
            {error && <Text color="red" fontSize='50px'>{error}</Text>}
            <SimpleGrid columns={{
                sm: 1,
                md: 2,
                lg: 3,
                xl:4,
                }} spacing={2} padding='10px'>
                {isloading && Skeleton.map(i => <GameGardContainer key={i}><GameCardSkeleton ></GameCardSkeleton></GameGardContainer>)}
                {data?.map(item =>
                    <GameGardContainer key={item.id}><GameCard game={item}  ></GameCard></GameGardContainer>
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid