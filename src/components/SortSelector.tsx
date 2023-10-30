import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
interface Props{
    onSortSelector:(sort:string)=>void
}
const SortSelector = ({ onSortSelector }:Props) => {
    const SortOrder=[
        {value:'',label:'Relevance'},
        {value:'-added',label:'Data added'},
        {value:'-name',label:'Name'},
        {value:'-released',label:'Release data'},
        {value:'-metacritic',label:'Poularity'},
        {value:'-rating',label:'Average rating'},
    ]
    const [select, setselect] = useState('Relevance')
  return (
      <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
              Order by: {select}
          </MenuButton>
          <MenuList>
            {SortOrder.map(sort=>
                <MenuItem key={sort.value} onClick={() =>{ 
                    onSortSelector(sort.value);
                    setselect(sort.label);
                }}>{sort.label}</MenuItem>
                )}
          </MenuList>
      </Menu>
  )
}

export default SortSelector