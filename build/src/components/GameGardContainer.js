import { Box } from '@chakra-ui/react';
const GameGardContainer = ({ children }) => {
    return (<Box _hover={{
            transform: 'scale(1.03)',
            transition: 'transform .15s ease-in'
        }} overflow='hidden' borderRadius={5}>
        {children}
        </Box>);
};
export default GameGardContainer;
//# sourceMappingURL=GameGardContainer.js.map