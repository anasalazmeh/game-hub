import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import StoreQuery from '../Zustand/store'

const SearchInput = () => {
    const ref=useRef<HTMLInputElement>(null)
    const { gameQuery, add } = StoreQuery()
  return (
    <form  onSubmit={(event)=>{
        event.preventDefault()
      if (ref.current)
      add({ search: ref.current.value })
    }}>
          <InputGroup>
              <InputLeftElement children={<BsSearch />} />
              <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled' />
          </InputGroup>
    </form>
  )
}

export default SearchInput