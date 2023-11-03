import { Heading } from '@chakra-ui/react'
import { GamesHeading } from '../App'
import StoreQuery from '../Zustand/store'
import UseGenre from '../hooks/UseGenre'
import usePlatform from '../hooks/UsePlatform'
interface Porps{
    gameHeading :GamesHeading
}
const GameHeading = ({ gameHeading }:Porps) => {
    const { gameQuery, add } = StoreQuery()
    const Headinggenre = UseGenre(gameQuery.genres)?.name
    const Headingplatform = usePlatform(gameQuery.parent_platforms)?.name
    // let All="All"
    // if (Headinggenre || Headingplatform)All=''
    const heading = `${Headingplatform || ( Headinggenre?'':'All')} ${Headinggenre||''} Game`;
  return (
      <Heading  fontSize='5xl' marginY={5}>{heading}</Heading>
  )
}

export default GameHeading