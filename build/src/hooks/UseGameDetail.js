import { useQuery } from "@tanstack/react-query";
import APICLIENT from "../services/API-client";
const UseGameDetail = (id) => {
    const Apiclient = new APICLIENT(`/games/${id}`);
    return useQuery({
        queryKey: [`game :${id}`],
        queryFn: Apiclient.Get,
    });
};
export default UseGameDetail;
//# sourceMappingURL=UseGameDetail.js.map