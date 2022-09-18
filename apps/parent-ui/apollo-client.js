import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export const apoloClient = new ApolloClient({
  uri: "http://localhost:4040/graphql",
  cache: new InMemoryCache(),
});
