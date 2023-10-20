import { useEffect, useState } from "react";
import APIClient, { CanceledError } from "../services/API-client";
import { AxiosRequestConfig } from "axios";
interface FatchRespones<T> {
  count: number;
  results: T[];
}
const UseData = <T>(endpoint:string,requestconfig?:AxiosRequestConfig , deps?:any[]) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState("");
  const [isloading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    const Controller = new AbortController();
    APIClient.get<FatchRespones<T>>(endpoint, {
      signal: Controller.signal,
      ...requestconfig,
    })
      .then((res) => {
        setData(res.data.results);
        console.log(res.data.results);
        setloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setloading(false);
      });

    return () => Controller.abort();
  },deps ?[...deps]:[]);
  return {  data, error, isloading,};
};
export default UseData;
