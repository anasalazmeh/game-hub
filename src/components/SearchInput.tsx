import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchInput = () => {
  return (
    <InputGroup>
    <InputLeftElement children={<BsSearch/>} />
    <Input borderRadius={20} placeholder='Search ...game' />
    </InputGroup>
  )
}

export default SearchInput