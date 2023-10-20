import UseData from "./uesData";

export interface Genres {
  id: number;
  name: string;
  image_background:string
}

interface fatchGanres {
  count: number;
  results: Genres[];
}

const UseGenres = () => UseData<Genres>('/genres')
export default UseGenres;
