import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["cat"],
    queryFn: () =>
      Axios.get("https://catfact.ninja/fact").then((res) => res.data),
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <h1>
      this is the home page, <p>{data?.fact}</p>
      <button onClick={refetch}>update data</button>
      <hr></hr>
      <p>
        <Link to="/Form">Go to Form</Link>
      </p>
    </h1>
  );
};
