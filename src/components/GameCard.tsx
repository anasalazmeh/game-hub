import React from 'react'
import { Game } from '../hooks/UseGame'
import { Card, CardBody, CardHeader, HStack, Heading, Image, Text } from '@chakra-ui/react'
import Platformsicon from './Platformsicon'
import CirticScora from './CirticScora'
import IamgeSize from '../services/image-url'
interface Pops {
    game: Game
}
const GameCard = ({ game }: Pops) => {
    return (
        <Card overflow='hidden'>
            <Image src={IamgeSize(game.background_image)} ></Image>
            <CardBody>
                <Heading fontSize='xl'>{game.name}</Heading>
                <HStack justifyContent={'space-between'}>
                    <Platformsicon platform={game.parent_platforms.map((p) => p.platform)}></Platformsicon>
                    <CirticScora scora={game.metacritic}></CirticScora>
                </HStack>
            </CardBody>
        </Card >
    )
}

export default GameCard