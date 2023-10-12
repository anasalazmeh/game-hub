import { Grid, GridItem,Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
function App() {
  return (
    <Grid templateAreas={
      {
        base:`"Nav" "Main"`,
        lg:`"Nav Nav" "Aside Main"`
      }
    }>
      <GridItem area='Nav'>
        <Navbar></Navbar>
      </GridItem>
      <Show above='lg'>
      <GridItem area='Aside' bg='gold'>Aside</GridItem>
      </Show>
      <GridItem area='Main' bg='dodgerblue'>Main</GridItem>
    </Grid>
  )
}

export default App
