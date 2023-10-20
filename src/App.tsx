import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GanresList from './components/GanresList'
import { useState } from 'react'
import { Genres } from './hooks/UseGenres'
function App() {
  const [selectgenres, setselectgenres]=useState<Genres | null>(null)
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
          <GanresList selectgenres={(genres)=>setselectgenres(genres)}></GanresList>
        </GridItem>
      </Show>
      <GridItem area='Main' >
        <GameGrid itemGenres={selectgenres}></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
