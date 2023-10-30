import { Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatform, { Platform } from '../hooks/usePlatform'
interface Props{
    onSelectPlatform: (Platform:Platform |null)=>void,
    
}
const PlatformSelector = ({ onSelectPlatform }:Props) => {
    const [select,setselect] = useState('Platform')
    const {data,error}=usePlatform()
    if(error)return null;
  return (
    <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>{select}
          </MenuButton>
          <MenuList>
        {select != 'Platform' && <Box>
          <MenuItem marginY={2} onClick={() => { onSelectPlatform(null); setselect('Platform') }} key={0} color='red'>Claer</MenuItem>
          <hr />
        </Box>}
        
              {data?.results.map(Platform => <MenuItem onClick={() => { onSelectPlatform(Platform); setselect(Platform.name)} } key={Platform.id}>{Platform.name}</MenuItem>)}
          </MenuList>
    </Menu>
  )
}

export default PlatformSelector