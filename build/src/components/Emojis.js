import { Image } from '@chakra-ui/react';
import bulls from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbs from '../assets/thumbs-up.webp';
const Emojis = ({ rating }) => {
    if (rating < 3)
        return null;
    const emojis = {
        3: { src: meh, alt: 'meh', boxSize: '25px' },
        4: { src: thumbs, alt: 'recommded', boxSize: '25px' },
        5: { src: bulls, alt: 'exceptional', boxSize: '30px' },
    };
    return (<Image {...emojis[rating]} marginTop={2}></Image>);
};
export default Emojis;
//# sourceMappingURL=Emojis.js.map