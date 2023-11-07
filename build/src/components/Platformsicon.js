import { HStack, Icon } from '@chakra-ui/react';
import { FaAndroid, FaApple, FaLinux, FaNeos, FaPlaystation, FaWindows, FaXbox, } from 'react-icons/fa';
import { MdPhoneIphone, MdWeb } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
const Platformsicon = ({ platform }) => {
    const iconmap = {
        "pc": FaWindows,
        "playstation": FaPlaystation,
        "xbox": FaXbox,
        'android': FaAndroid,
        "mac": FaApple,
        "linux": FaLinux,
        "nintendo": SiNintendo,
        "ios": MdPhoneIphone,
        'web': MdWeb,
        'neo geo': FaNeos,
    };
    return (<>
            <HStack marginY={1}>
                {platform.map(p => <Icon as={iconmap[p.slug]} key={p.id} color='gray.500'></Icon>)}
            </HStack>
        </>);
};
export default Platformsicon;
//# sourceMappingURL=Platformsicon.js.map