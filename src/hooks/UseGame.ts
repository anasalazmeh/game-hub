import { GameQuery } from "../App";
import { Genres } from "./UseGenres";
import UseData from "./uesData";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
interface fatchGame {
  count: number;
  results: Game[];
}
const UseGame = (gameQuery:GameQuery) =>
  UseData<Game>(
    "/games",
    {
      params: {
        ...gameQuery

      },
    },
    [gameQuery]

    
  );
export default UseGame;
