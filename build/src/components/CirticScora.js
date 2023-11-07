import { Badge } from "@chakra-ui/react";
const CirticScora = ({ scora }) => {
    if (!scora)
        return null;
    let color = scora > 75 ? 'green' : scora > 60 ? 'yellow' : '';
    return (<Badge colorScheme={color} paddingX={2} fontSize='14px' borderRadius={5}>{scora}</Badge>);
};
export default CirticScora;
//# sourceMappingURL=CirticScora.js.map