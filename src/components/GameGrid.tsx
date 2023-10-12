import React, { useEffect, useState } from 'react'
import APIClient, { CanceledError } from '../services/API-client';
import { Text } from '@chakra-ui/react';
import UseGame from '../hooks/UseGame';

const GameGrid = () => {
    const{games,error}=UseGame()
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