import { Button } from '@chakra-ui/react';
import { useState } from 'react';
interface Props{
    Text?:string |null ,
    // children:ReactNode,
}
const ExpandableText = ({ Text }: Props) => {
    if (!Text) return null
    const linit=300;
    const [check,setcheck]=useState(false)
    if (Text.length < linit) return <>{Text}</>
    let Newtext = check ? Text : Text.substring(0, linit)+'... '
    return <> {Newtext}<Button marginLeft={1} size='xs'  fontWeight='bold' colorScheme="yellow" onClick={()=>setcheck(!check)}>{check?'Show less':'Show more'}</Button></>
}

export default ExpandableText