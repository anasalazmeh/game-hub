import { Box, Flex, Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GanresList from './components/GanresList'
import { useState } from 'react'
import { Genres } from './hooks/UseGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/UseGame'
import SortSelector from './components/SortSelector'
import GameHeading from './components/GameHeading'
export interface GameQuery {
  genres:number,
  platforms:number,
  ordering:string,
  search:string
}
export interface GamesHeading {
  genres:Genres,
  platforms:Platform,
}
function App() {
  const [GameQuery,setGameQuery]=useState<GameQuery>({}as GameQuery)
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
        <Navbar onSearch={(search => setGameQuery({ ...GameQuery,search:search }))}></Navbar>
      </GridItem>
      <Show above='lg'>
        <GridItem area='Aside' paddingX={2} >
          <GanresList selectgenres={(genres) =>
             {
            setGameQuery({ ...GameQuery, genres: genres.id }) ;
            setGameHeading({ ...gameheading, genres: genres })
              }}></GanresList>
        </GridItem>
      </Show>
      <GridItem area='Main' >
        <Box paddingLeft={2}>
          <GameHeading gameHeading={gameheading}/>
          <Flex  marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector onSelectPlatform={(Platform) =>{
                 setGameQuery({ ...GameQuery, platforms: Platform.id });
                setGameHeading({ ...gameheading, platforms: Platform })
              }} />
            </Box>
            <SortSelector onSortSelector={(sort) => setGameQuery({ ...GameQuery, ordering: sort })} />
          </Flex>
        </Box>
        <GameGrid gameQuery={GameQuery}></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
