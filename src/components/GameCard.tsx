import React from 'react'
import { Game } from '../hooks/UseGame'
import { Card, CardBody, CardHeader, Heading, Image, Text } from '@chakra-ui/react'
interface Pops {
    game: Game
}
const GameCard = ({ game }: Pops) => {
    return (
        <Card>
            <Image src={game.background_image} ></Image>
            <CardBody>
                <Heading>{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard