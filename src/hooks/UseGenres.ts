import { useEffect, useState } from "react";
import APIClient, { CanceledError } from "../services/API-client";

interface Ganres {
  id: number;
  name: string;
}

interface fatchGanres {
  count: number;
  results: Ganres[];
}

const UseGenres = () => {
  const [ganres, setganres] = useState<Ganres[]>();
  const [error, setError] = useState("");
  const [isloading, setloading] = useState(true);
  useEffect(() => {
    const Controller = new AbortController();
    APIClient.get<fatchGanres>("/genres", { signal: Controller.signal })
      .then((res) => {
        setganres(res.data.results);
        console.log(ganres);
        setloading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setloading(false);
      });
    return () => Controller.abort();
  }, []);
  return { error, isloading, ganres };
};
export default UseGenres;
