import { useQuery } from '@tanstack/react-query';
import APICLIENT from '../services/API-client';
const UseTrailer = (id) => {
    const Apiclient = new APICLIENT(`/games/${id}/movies`);
    return useQuery({
        queryKey: [`Trailer :${id}`],
        queryFn: Apiclient.GetAll,
    });
};
export default UseTrailer;
//# sourceMappingURL=UseTrailer.js.map