import React from 'react'

import logo from '../assets/logo.webp'
import { HStack, Image, Text } from '@chakra-ui/react'
import ColorModeSwitch from './ColorModeSwitch'
import ColorModeHTML from './ColorModeHTML'
const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} boxSize='60px'></Image>

      <ColorModeSwitch></ColorModeSwitch>
      {/* <ColorModeHTML></ColorModeHTML> */}
    </HStack>
  )
}

export default Navbar