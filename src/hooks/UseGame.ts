import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APICLIENT from "../services/API-client";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
const Apiclient = new APICLIENT<Game>("/games");

const UseGame = (gameQuery: GameQuery) =>
  // UseData<Game>(
  //   "/games",
  //   {
  //     params: {
  //       ...gameQuery

  //     },
  //   },
  //   [gameQuery]);
  useQuery<Game[], Error>({
    queryKey:['games',gameQuery],
    queryFn: () => Apiclient.GetAll({params:{
      ...gameQuery
    }}),
    staleTime: 24 * 1000 * 60,
  });
export default UseGame;
