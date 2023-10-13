import { SimpleGrid, Text } from '@chakra-ui/react';
import UseGame from '../hooks/UseGame';
import GameCard from './GameCard';

const GameGrid = () => {
    const { games, error } = UseGame()

    return (
        <>
            {error && <Text color="red" fontSize='50px'>{error}</Text>}
            <SimpleGrid columns={{
                sm: 1,
                md: 2,
                lg: 3,
                xl: 4,
            }} spacing='10px' padding='10px'>
                {games?.map(item =>
                    <GameCard game={item}></GameCard>
                )}
            </SimpleGrid>
        </>
    )
}

export default GameGrid