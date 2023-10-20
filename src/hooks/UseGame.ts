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
const UseGame = (itemgenres: Genres | null, platform: Platform | null) =>
  UseData<Game>(
    "/games",
    { params: {
      genres: itemgenres?.id, 
      platforms: platform?.id }
    },
    [itemgenres, platform]
  );
export default UseGame;
