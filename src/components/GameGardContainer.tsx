import { Box } from '@chakra-ui/react'
import React, { ReactChild, ReactNode } from 'react'
interface Props{
    children:ReactNode
}
const GameGardContainer = ({ children }: Props) => {
  return (
      <Box overflow='hidden' width='300px' borderRadius={5}>
        {children}
        </Box>
  )
}

export default GameGardContainer