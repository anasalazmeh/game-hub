import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useState } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import StoreQuery from '../Zustand/store'
import UsePlatforms from '../hooks/UsePlatforms'

const PlatformSelector = () => {
    const { gameQuery, add } = StoreQuery()
    const [select,setselect] = useState('Platform')
    const {data,error}=UsePlatforms()
    if(error)return null;
  return (
    <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>{select}
          </MenuButton>
          <MenuList>
        {select != 'Platform' && <Box>
          <MenuItem marginY={2} onClick={() => { add({ ...gameQuery,parent_platforms:undefined }); setselect('Platform') }} key={0} color='red'>Claer</MenuItem>
          <hr />
        </Box>}
        
        {data?.results.map(Platform => <MenuItem onClick={() => { setselect(Platform.name); add({ ...gameQuery, parent_platforms: Platform.id })} } key={Platform.id}>{Platform.name}</MenuItem>)}
          </MenuList>
    </Menu>
  )
}

export default PlatformSelector