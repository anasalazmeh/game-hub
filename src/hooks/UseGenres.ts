import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/API-client";
import ms from "ms";
import  Genres  from "../entities/Genres";
const Apiclient = new APICLIENT<Genres>("/genres");

interface fatchGanres {
  count: number;
  results: Genres[];
}

// const UseGenres = () => UseData<Genres>('/genres')
const UseGenres = () =>
  useQuery({
    queryKey: ["Genres"],
    queryFn: () => Apiclient.GetAll(),
    staleTime:ms('24h'),
  });
export default UseGenres;
