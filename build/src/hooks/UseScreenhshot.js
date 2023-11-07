import APICLIENT from '../services/API-client';
import { useQuery } from '@tanstack/react-query';
const UseScreenhshot = (id) => {
    const Apiclient = new APICLIENT(`/games/${id}/screenshots`);
    return useQuery({
        queryKey: [`Screenhshots :${id}`],
        queryFn: Apiclient.GetAll,
    });
};
export default UseScreenhshot;
//# sourceMappingURL=UseScreenhshot.js.map