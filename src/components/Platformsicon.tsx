import { HStack, Icon } from '@chakra-ui/react'
import {
    FaAndroid,
    FaApple,
    FaLinux,
    FaNeos,
    FaPlaystation,
    FaWindows,
    FaXbox,
} from 'react-icons/fa'
import { IconType } from 'react-icons/lib/esm/iconBase'
import { MdPhoneIphone, MdWeb } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { Platform } from '../hooks/usePlatform'
interface Props {
    platform: Platform[]
}
const Platformsicon = ({ platform }: Props) => {
    const iconmap:{[key:string]:IconType} = {
        "pc": FaWindows,
        "playstation": FaPlaystation,
        "xbox": FaXbox,
        'android':FaAndroid,
        "mac": FaApple,
        "linux": FaLinux,
        "nintendo": SiNintendo,
        "ios": MdPhoneIphone,
        'web': MdWeb,
        'neo geo':FaNeos,
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