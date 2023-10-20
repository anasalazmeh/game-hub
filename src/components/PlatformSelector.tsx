import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useState } from 'react'
import {BsChevronDown} from 'react-icons/bs'
import usePlatform from '../hooks/usePlatform'
import { Platform } from '../hooks/UseGame'
interface Props{
    onSelectPlatform: (Platform:Platform)=>void,
    SelectPlatform: Platform |null,
    
}
const PlatformSelector = ({ onSelectPlatform, SelectPlatform }:Props) => {
    const [select,setselect] = useState('Platform')
    const {data,error}=usePlatform()
    if(error)return null;
  return (
    <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>{SelectPlatform?.name || 'Platforms'}</MenuButton>
          <MenuList>
              {data?.map(Platform => <MenuItem onClick={() =>  onSelectPlatform(Platform) } key={Platform.id}>{Platform.name}</MenuItem>)}
          </MenuList>
    </Menu>
  )
}

export default PlatformSelector