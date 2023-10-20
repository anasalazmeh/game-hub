import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GanresList from './components/GanresList'
import { useState } from 'react'
import { Genres } from './hooks/UseGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/UseGame'
import SortSelector from './components/SortSelector'
export interface GameQuery {
  genres:number,
  platforms:number,
  ordering:string,
}
function App() {
  const [GameQuery,setGameQuery]=useState<GameQuery>({}as GameQuery)
  return (
    <Grid templateAreas={
      {
        base: `"Nav" "Main"`,
        lg: `"Nav Nav" "Aside Main"`
      }
    } templateColumns={
      {
        base:'1fr',
        lg:'250px'
      }
    }>
      <GridItem area='Nav'>
        <Navbar></Navbar>
      </GridItem>
      <Show above='lg'>
        <GridItem area='Aside' paddingX={2} >
          <GanresList selectgenres={(genres) => setGameQuery({ ...GameQuery, genres: genres.id })}></GanresList>
        </GridItem>
      </Show>
      <GridItem area='Main' >
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            
        <PlatformSelector  onSelectPlatform={(Platform) => setGameQuery({ ...GameQuery, platforms: Platform.id })}/>
          </Box>
          <SortSelector onSortSelector={(sort) => setGameQuery({ ...GameQuery,ordering:sort })} />
        </Flex>
        <GameGrid gameQuery={GameQuery}></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
