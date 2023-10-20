import React from 'react'

import logo from '../assets/logo.webp'
import { HStack, Image, Text } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import ColorModeHTML from './ColorModeHTML'
import SearchInput from './SearchInput'
const Navbar = () => {
  return (
    <HStack  padding='10px'>
      <Image src={logo} boxSize='60px'></Image>
      <SearchInput/>
      <ColorModeSwitch></ColorModeSwitch>
      {/* <ColorModeHTML></ColorModeHTML> */}
    </HStack>
  )
}

export default Navbar