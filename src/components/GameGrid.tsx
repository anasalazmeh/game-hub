import { SimpleGrid, Text } from '@chakra-ui/react';
import UseGame from '../hooks/UseGame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameGardContainer from './GameGardContainer';

const GameGrid = () => {
    const { games, error,isloading } = UseGame()
    const Skeleton=[1,2,3,4,5,6]

    return (
        <>
            {error && <Text color="red" fontSize='50px'>{error}</Text>}
            <SimpleGrid columns={{
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
                }} spacing={10} padding='10px'>
                {isloading && Skeleton.map(i => <GameGardContainer><GameCardSkeleton></GameCardSkeleton></GameGardContainer>)}
                {games?.map(item =>
                    <GameGardContainer><GameCard game={item} key={item.id} ></GameCard></GameGardContainer>
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid