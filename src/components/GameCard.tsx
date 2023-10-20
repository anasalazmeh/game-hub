import React from 'react'
import { Game } from '../hooks/UseGame'
import { Card, CardBody, CardHeader, HStack, Heading, Image, Text } from '@chakra-ui/react'
import Platformsicon from './Platformsicon'
import CirticScora from './CirticScora'
import IamgeSize from '../services/image-url'
import Emojis from './Emojis'
interface Pops {
    game: Game
}
const GameCard = ({ game }: Pops) => {
    return (
        <Card >
            <Image src={IamgeSize(game.background_image)} ></Image>
            <CardBody>
                <HStack justifyContent={'space-between'} marginBottom={2}>
                    <Platformsicon platform={game.parent_platforms.map((p) => p.platform)}></Platformsicon>
                    <CirticScora scora={game.metacritic}></CirticScora>
                </HStack>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <Emojis rating={game.rating_top}></Emojis>
            </CardBody>
        </Card >
    )
}

export default GameCard