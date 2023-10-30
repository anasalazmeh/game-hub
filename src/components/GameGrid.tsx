import { Button, HStack, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import { GameQuery } from '../App';
import UseGame from '../hooks/UseGame';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameGardContainer from './GameGardContainer';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
interface Porps {
    gameQuery: GameQuery
}
const GameGrid = ({ gameQuery }: Porps) => {
    const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } = UseGame(gameQuery)
    const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8]
    const fetchScroll = data?.pages.reduce((totla, page) => totla + page.results.length, 0) || 0
    if (error) return <Text color="red" fontSize='50px'>{error.message}</Text>
    return (
        <>
            <InfiniteScroll dataLength={fetchScroll} hasMore={!!hasNextPage} next={() => fetchNextPage()} 
            loader={
                <HStack justifyContent='center'>
                    <Button paddingX={14} margin={2} onClick={() => fetchNextPage()}> <Spinner/></Button>
                </HStack>
            }>
                <SimpleGrid columns={{
                    sm: 1,
                    md: 2,
                    lg: 3,
                    xl: 3,
                    
                }} spacing={6} padding='10px'>
                    {isLoading && Skeleton.map(i => <GameGardContainer key={i}><GameCardSkeleton ></GameCardSkeleton></GameGardContainer>)}
                    {/* {data?.map(item =>
                    <GameGardContainer key={item.id}><GameCard game={item}  ></GameCard></GameGardContainer>
                )} */}
                    {data?.pages.map((data, index) =>
                        <React.Fragment key={index}>
                            {data.results.map(item =>
                                <GameGardContainer key={item.id}><GameCard game={item}  ></GameCard></GameGardContainer>
                            )}
                        </React.Fragment>
                    )}
                </SimpleGrid>
            </InfiniteScroll>

        </>
    )
}

export default GameGrid