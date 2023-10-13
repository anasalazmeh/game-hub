import { useEffect, useState } from "react";
import APIClient, { CanceledError } from "../services/API-client";
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
}
interface fatchGame {
  count: number;
  results: Game[];
}
const UseGame = () => {
  const [games, setGames] = useState<Game[]>();
  const [error, setError] = useState("");
  useEffect(() => {
    const Controller = new AbortController();
    APIClient.get<fatchGame>("/games", { signal: Controller.signal })
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => Controller.abort();
  }, []);
  return { games, error };
};
export default UseGame;
