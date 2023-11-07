
import { useQuery } from "@tanstack/react-query";
import  Platform  from "../entities/Platform";
import APICLIENT from "../services/API-client";
import  Game  from "../entities/Game";

const UseGameDetail = (id:number |string) => {
    const Apiclient=new APICLIENT<Game>(`/games/${id}`)
    return useQuery<Game>({
        queryKey:[`game :${id}`],
        queryFn:Apiclient.Get,
    })
}

export default UseGameDetail