import {
  ApolloClient,
  InMemoryCache,
  useQuery,
} from "@apollo/client";
import { User_Query } from "./Hasura/Query";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:8080/v1/graphql",
});

const ApigraphQL = () => {
  // const idUserDemo = localStorage["user"];
  const { loading, error, data } = useQuery(User_Query);

  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
  if (loading) return <div>Loading....!</div>;

  return <div>{JSON.stringify(data, null, 2)}</div>;
};
export { client, ApigraphQL };
