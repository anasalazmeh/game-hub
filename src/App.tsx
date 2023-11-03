import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GanresList from './components/GanresList'
import { useState } from 'react'
import { Genres } from './hooks/UseGenres'
import PlatformSelector from './components/PlatformSelector'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
import { Platform } from './hooks/UsePlatforms'
export interface GameQuery {
  genres?:number,
  parent_platforms?:number,
  ordering?:string,
  search?:string
}
export interface GamesHeading {
  genres?:Genres,
  platforms?:Platform,
}
function App() {
  const [Gamequery,setGameQuery]=useState<GameQuery>({}as GameQuery)
  const [gameheading, setGameHeading] = useState<GamesHeading>({} as GamesHeading)
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
        <Navbar ></Navbar>
      </GridItem>
      <Show above='lg'>
        <GridItem area='Aside' paddingX={2} >
          <GanresList ></GanresList>
        </GridItem>
      </Show>
      <GridItem area='Main' >
        <Box paddingLeft={2}>
          <GameHeading gameHeading={gameheading}/>
          <Flex  marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector/>
            </Box>
            <SortSelector  />
          </Flex>
        </Box>
        <GameGrid ></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
