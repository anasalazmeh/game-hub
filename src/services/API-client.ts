import axios ,{AxiosRequestConfig, CanceledError} from "axios";
import { GameQuery } from "../App";
const Apiclient= axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'4cc7705bffd843ffa6d83553be5040e2'
    }
})
export interface FetchRespones<T> {
  count: number;
  results: T[];
}
class APICLIENT<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  GetAll = (gamequery?: AxiosRequestConfig ) =>
    Apiclient.get<FetchRespones<T>>(this.endpoint,
        { 
            ...gamequery
        }
    )
    .then(res=>res.data.results)
}
export default APICLIENT