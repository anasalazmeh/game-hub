import { SimpleGrid, Text } from '@chakra-ui/react'
import Game from '../entities/Game'
import CirticScora from './CirticScora'
interface Props{
    data:Game
}
const GameAttribute = ({ data }:Props) => {
  return (
      <SimpleGrid marginY={5} spacingY={7} columns={{
          sm: 1,
          md: 2,
      }}>
          <div>
              <Text color='gray.500'>Platform</Text>
              {data?.parent_platforms.map(item => <Text>{item.platform.name}</Text>)}
          </div>
          <div>
              <Text color='gray.500' >Metascore</Text>
              <CirticScora scora={data?.metacritic}></CirticScora>
          </div>
          <div>
              <Text color='gray.500' fontSize='xl'>Genres</Text>
              {data?.genres.map(item => <Text>{item.name}</Text>)}
          </div>
          <div>
              <Text color='gray.500' fontSize='xl'>Publishers</Text>
              {data?.publishers.map(item => <Text>{item.name}</Text>)}
          </div>
      </SimpleGrid>
  )
}

export default GameAttribute