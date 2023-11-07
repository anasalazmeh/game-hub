import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import StoreQuery from '../Zustand/store';
const SearchInput = () => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const { gameQuery, add } = StoreQuery();
    return (<form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) {
                add({ search: ref.current.value });
                navigate('/');
            }
        }}>
          <InputGroup>
              <InputLeftElement children={<BsSearch />}/>
              <Input ref={ref} borderRadius={20} placeholder='Search games...' variant='filled'/>
          </InputGroup>
    </form>);
};
export default SearchInput;
//# sourceMappingURL=SearchInput.js.map