import React from 'react'
import UseGame from '../hooks/UseGame'

import { useParams } from 'react-router-dom';
import { HStack, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import UseGameDetail from '../hooks/UseGameDetail';
import ExpandableText from '../components/ExpandableText';
import CirticScora from '../components/CirticScora';
import GameAttribute from '../components/GameAttribute';

const GameDetailPage = () => {
  const {slug}=useParams()
  const { data,isLoading,error } = UseGameDetail(slug)
  if(isLoading)return <Spinner/>
  if(error)throw error
  return (
    <>
      <Heading>{data?.name}</Heading>
      <Text><ExpandableText Text={data?.description_raw}/></Text>
      <GameAttribute data={data!}/>
    </>
  )
}

export default GameDetailPage