import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import { Game } from '../hooks/UseGame'
import IamgeSize from '../services/image-url'
import CirticScora from './CirticScora'
import Emojis from './Emojis'
import Platformsicon from './Platformsicon'
interface Pops {
    game: Game
}
const GameCard = ({ game }: Pops) => {

    return (
        <Card >
            <Image src={IamgeSize(game.background_image)} ></Image>
            <CardBody>
                <HStack justifyContent={'space-between'} marginBottom={2}>
                    <Platformsicon
                     platform={game.parent_platforms.map((p) => p.platform)}></Platformsicon>
                    <CirticScora scora={game.metacritic}></CirticScora>
                </HStack>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <Emojis rating={game.rating_top}></Emojis>
            </CardBody>
        </Card >
    )
}

export default GameCard