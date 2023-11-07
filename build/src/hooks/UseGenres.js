import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/API-client";
import ms from "ms";
const Apiclient = new APICLIENT("/genres");
// const UseGenres = () => UseData<Genres>('/genres')
const UseGenres = () => useQuery({
    queryKey: ["Genres"],
    queryFn: () => Apiclient.GetAll(),
    staleTime: ms('24h'),
});
export default UseGenres;
//# sourceMappingURL=UseGenres.js.map