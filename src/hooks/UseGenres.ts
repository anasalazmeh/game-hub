import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/API-client";
export interface Genres {
  id: number;
  name: string;
  image_background:string
}
const Apiclient = new APICLIENT<Genres>("/genres");

interface fatchGanres {
  count: number;
  results: Genres[];
}

// const UseGenres = () => UseData<Genres>('/genres')
const UseGenres = () =>
  useQuery({
    queryKey: ["Genres"],
    queryFn:()=> Apiclient.GetAll(),
    staleTime: 24 * 1000 * 60,
  });
export default UseGenres;
