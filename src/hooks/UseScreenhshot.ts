import React from 'react'
import APICLIENT from '../services/API-client';
import { useQuery } from '@tanstack/react-query';
import Screenhshot from '../entities/Screenhshot';


const UseScreenhshot = (id:number|string) => {
  const Apiclient = new APICLIENT<Screenhshot>(`/games/${id}/screenshots`);
  return useQuery({
    queryKey: [`Screenhshots :${id}`],
    queryFn: Apiclient.GetAll,
  });
} 

export default UseScreenhshot