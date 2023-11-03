import { useQuery } from "@tanstack/react-query";

import APICLIENT from "../services/API-client";
import ms from "ms";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const Apiclient = new APICLIENT<Platform>("/platforms/lists/parents");
// const usePlatform = () => UseData<Platform>("/platforms/lists/parents");
const UsePlatforms = () =>
  useQuery({
    queryKey: ["Platform"],
    queryFn: Apiclient.GetAll,
    staleTime:ms('24h')
  });
export default UsePlatforms;
