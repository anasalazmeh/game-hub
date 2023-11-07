import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APICLIENT from "../services/API-client";
const Apiclient = new APICLIENT("/platforms/lists/parents");
// const usePlatform = () => UseData<Platform>("/platforms/lists/parents");
const UsePlatforms = () => useQuery({
    queryKey: ["Platform"],
    queryFn: Apiclient.GetAll,
    staleTime: ms('24h')
});
export default UsePlatforms;
//# sourceMappingURL=UsePlatforms.js.map