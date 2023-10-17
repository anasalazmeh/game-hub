import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GanresList from './components/GanresList'
function App() {

  return (
    <Grid templateAreas={
      {
        base: `"Nav" "Main"`,
        lg: `"Nav Nav" "Aside Main"`
      }
    }>
      <GridItem area='Nav'>
        <Navbar></Navbar>
      </GridItem>
      <Show above='lg'>
        <GridItem area='Aside' >
          <GanresList></GanresList>
        </GridItem>
      </Show>
      <GridItem area='Main' >
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  )
}

export default App
