import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import UseGame from '../hooks/UseGame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameGardContainer from './GameGardContainer';
interface Porps{
    gameQuery:GameQuery
}
const GameGrid = ({ gameQuery }: Porps) => {
    const { data, error,isLoading } = UseGame(gameQuery)
    const Skeleton=[1,2,3,4,5,6,7,8]
    if (error) return <Text color="red" fontSize='50px'>{error.message}</Text>
    return (
        <>
            <SimpleGrid columns={{
                sm: 1,
                md: 2,
                lg: 3,
                xl:4,
                }} spacing={6} padding='10px'>
                {isLoading && Skeleton.map(i => <GameGardContainer key={i}><GameCardSkeleton ></GameCardSkeleton></GameGardContainer>)}
                {data?.map(item =>
                    <GameGardContainer key={item.id}><GameCard game={item}  ></GameCard></GameGardContainer>
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid