
import { HStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const Navbar = () => {

  return (
    <HStack  padding='10px'>
      <Link to={'/'} ><Image src={logo} boxSize='70px' objectFit='scale-down' /></Link>
      <SearchInput/>
      <ColorModeSwitch></ColorModeSwitch>
      {/* <ColorModeHTML></ColorModeHTML> */}
    </HStack>
  )
}

export default Navbar