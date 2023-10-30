import { useQuery } from "@tanstack/react-query";

import APICLIENT from "../services/API-client";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const Apiclient = new APICLIENT<Platform>("/platforms/lists/parents");
// const usePlatform = () => UseData<Platform>("/platforms/lists/parents");
const usePlatform = () =>
  useQuery({
    queryKey: ["Platform"],
    queryFn:  Apiclient.GetAll,
    staleTime: 24 * 1000 * 60,
  });
export default usePlatform;
