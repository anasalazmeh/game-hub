import React from 'react'
import { Game } from '../hooks/UseGame'
import { Card, CardBody, CardHeader, Heading, Image, Text } from '@chakra-ui/react'
import Platformsicon from './Platformsicon'
interface Pops {
    game: Game
}
const GameCard = ({ game }: Pops) => {
    return (
        <Card>
            <Image src={game.background_image} ></Image>
            <CardBody>
                <Heading>{game.name}</Heading>
                <Platformsicon platform={game.parent_platforms.map((p) => p.platform)}></Platformsicon>
            </CardBody>
        </Card >
    )
}

export default GameCard