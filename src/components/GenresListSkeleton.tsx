import { HStack, List, ListItem, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GenresListSkeleton = () => {
  return (
      <List paddingY={2}>
      <ListItem display='flex' justifyContent='space-between' paddingX={3}>
                        <Skeleton boxSize='32px' >
                        </Skeleton>
            
              </ListItem>
        </List>
  )
}

export default GenresListSkeleton