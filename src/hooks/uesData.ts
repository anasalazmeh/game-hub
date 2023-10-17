import { useEffect, useState } from "react";
import APIClient, { CanceledError } from "../services/API-client";
interface FatchRespones<T> {
  count: number;
  results: T[];
}
const UseData = <T>(endpoint:string) => {
  const [data, setData] = useState<T[]>();
  const [error, setError] = useState("");
  const [isloading, setloading] = useState(false);
  useEffect(() => {
    setloading(true)
    const Controller = new AbortController();
    APIClient.get<FatchRespones<T>>(endpoint, { signal: Controller.signal })
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
  }, []);
  return {  data, error, isloading,};
};
export default UseData;
