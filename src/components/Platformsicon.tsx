import { Platform } from '../hooks/UseGame'
import { HStack, Icon } from '@chakra-ui/react'
import {
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { IconType } from 'react-icons/lib/esm/iconBase'
interface Props {
    platform: Platform[]
}
const Platformsicon = ({ platform }: Props) => {
    const iconmap:{[key:string]:IconType} = {
        "pc": FaWindows,
        "playstation": FaPlaystation,
        "xbox": FaXbox,
        "mac": FaApple,
        "linux": FaLinux,
        "nintendo": SiNintendo,
        "ios": MdPhoneIphone,
    }
    return (
        <>
            <HStack marginY={1}>
                {platform.map(p =>
                    <Icon as={iconmap[p.slug]} key={p.id} color='gray.500'></Icon>
                )}
            </HStack>
        </>
    )
}

export default Platformsicon