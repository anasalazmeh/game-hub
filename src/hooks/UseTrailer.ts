import { useQuery } from '@tanstack/react-query';
import Trailer from '../entities/Trailer';
import APICLIENT from '../services/API-client';
const UseTrailer = (id:number |string) =>{
        const Apiclient = new APICLIENT<Trailer>(`/games/${id}/movies`);
        return useQuery({
          queryKey: [`Trailer :${id}`],
          queryFn: Apiclient.GetAll,
        });
} 

export default UseTrailer