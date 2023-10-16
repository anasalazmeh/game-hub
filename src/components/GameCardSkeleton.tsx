import { Card, CardBody, HStack, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardSkeleton = () => {
  return (
    <Card width='300px' overflow='hidden' flex={1}>
        <Skeleton height='200px' />
        <CardBody  justifyContent={'space-between'}>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton