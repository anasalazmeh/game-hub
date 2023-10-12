import React, { useEffect, useState } from 'react'
import APIClient, { CanceledError } from '../services/API-client';
import { Text } from '@chakra-ui/react';
interface Game {
    id: number,
    name: string
}
interface fatchGame {
    count: number,
    results: Game[]
}
const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    useEffect(() => {
        const Controller = new AbortController()
        APIClient.get<fatchGame>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return;
                setError(err.message)
            })
    })
    return (
        <>
            {error && <Text color="red" fontSize='50px'>{error}</Text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid