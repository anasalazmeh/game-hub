import { Badge } from "@chakra-ui/react"

interface Props{
    scora:number
}
const CirticScora = ({scora}:Props) => {
  let color=scora>75?'green':scora>60 ?'yellow':'';
  return (
    <Badge colorScheme={color} paddingX={2} fontSize='14px' borderRadius={5}>{scora}</Badge>
  )
}

export default CirticScora