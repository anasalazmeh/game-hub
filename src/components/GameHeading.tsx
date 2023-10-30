import { Heading } from '@chakra-ui/react'
import { GamesHeading } from '../App'
interface Porps{
    gameHeading :GamesHeading
}
const GameHeading = ({ gameHeading }:Porps) => {
    const heading=`${gameHeading.platforms?.name||''} ${gameHeading.genres?.name || ""} Game`;
  return (
      <Heading  fontSize='5xl' marginY={5}>{heading}</Heading>
  )
}

export default GameHeading