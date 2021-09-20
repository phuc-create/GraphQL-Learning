import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:8080/v1/graphql",
});

export { client };
