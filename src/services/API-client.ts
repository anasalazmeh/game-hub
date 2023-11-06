import axios, { AxiosRequestConfig } from "axios";
export const Apiclient= axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'4cc7705bffd843ffa6d83553be5040e2'
    }
})
export interface FetchRespones<T> {
  count: number;
  next:string |null
  results: T[];
}
class APICLIENT<T> {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  GetAll = (config?: AxiosRequestConfig) =>
    Apiclient.get<FetchRespones<T>>(this.endpoint,config)
    .then( (res) => {console.log(res.data);
      return res.data
    });
    Get=()=>Apiclient.get<T>(this.endpoint)
    .then(res=>res.data)
}
export default APICLIENT