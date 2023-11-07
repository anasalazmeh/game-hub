import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react';
const GameCardSkeleton = () => {
    return (<Card>
        <Skeleton height='200px'/>
        <CardBody justifyContent={'space-between'}>
            <SkeletonText />
        </CardBody>
    </Card>);
};
export default GameCardSkeleton;
//# sourceMappingURL=GameCardSkeleton.js.map