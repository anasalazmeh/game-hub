import { useQuery } from "@tanstack/react-query";
import { useInfiniteQuery } from "@tanstack/react-query";

import APICLIENT, { FetchRespones } from "../services/API-client";
import ms from "ms";
import StoreQuery from "../Zustand/store";
import { Game } from "../entities/Game";

const Apiclient = new APICLIENT<Game>("/games");

const UseGame = () =>{
  const { gameQuery} = StoreQuery()
  // UseData<Game>(
  //   "/games",
  //   {
  //     params: {
  //       ...gameQuery
  //     },
  //   },
  //   [gameQuery]);
  // useInfiniteQuery<(FetchRespones<Game>), Error>({
  //   queryKey: ["games", gameQuery],
  //   queryFn:()=>{

  //   }
  //   // getNextPageParam: (lastpage, allpage) => {
  //   //   return lastpage > 0 ? allpage.length + 1 : undefined;
  //   // },
  //   // staleTime: 1 * 60 * 60 * 1000 * 60,
  // });
 return useInfiniteQuery<FetchRespones<Game>, Error>({
   queryKey: ["games", gameQuery],
   queryFn: ({ pageParam = 1 }) =>
     Apiclient.GetAll({
       params: {
         ...gameQuery,
         page: pageParam,
       },
     }),
   staleTime: ms("24h"),
   getNextPageParam: (lastpage, allpage) =>
     lastpage.next ? allpage.length + 1 : undefined,
 });}
export default UseGame;
