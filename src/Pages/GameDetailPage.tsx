import React from 'react'
import UseGame from '../hooks/UseGame'

import { useParams } from 'react-router-dom';
import { GridItem, HStack, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import UseGameDetail from '../hooks/UseGameDetail';
import ExpandableText from '../components/ExpandableText';
import CirticScora from '../components/CirticScora';
import GameAttribute from '../components/GameAttribute';
import GameTrailer from '../components/GameTrailer';
import GameScreenhshot from '../components/GameScreenhshot';

const GameDetailPage = () => {
  const {slug}=useParams()
  const { data,isLoading,error } = UseGameDetail(slug || '')
  if(isLoading)return <Spinner/>
  if(error)throw error
  return (
    <>
    <SimpleGrid spacing={1} columns={{base:1, md:2}}>
      <GridItem paddingRight={1}>
      <Heading>{data?.name}</Heading>
          <Text >{<ExpandableText Text={data?.description_raw} /> && ''}</Text>
          <GameAttribute data={data!} />
      </GridItem>
      <GridItem>
      <GameTrailer id={data?.id!} />
      <GameScreenhshot id={data?.id!}/>
      </GridItem>
      </SimpleGrid>
    </>
  )
}

export default GameDetailPage