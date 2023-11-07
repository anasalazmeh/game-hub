import { Heading } from '@chakra-ui/react'
import StoreQuery from '../Zustand/store'
import Genre from '../hooks/Genre'
import Platform from '../hooks/Platform'




const GameHeading = () => {
    const { gameQuery} = StoreQuery()
    const Headinggenre = Genre(gameQuery.genres)?.name
    const Headingplatform = Platform(gameQuery.parent_platforms)?.name
    // let All="All"
    // if (Headinggenre || Headingplatform)All=''
    const heading = `${Headingplatform || ( Headinggenre?'':'All')} ${Headinggenre||''} Game`;
  return (
      <Heading  fontSize='5xl' marginY={5}>{heading}</Heading>
  )
}

export default GameHeading