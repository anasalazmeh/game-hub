
import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'
import { useContext } from 'react'
import StoreQuery from '../Zustand/store'

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