import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { apoloClient } from "./apollo-client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apoloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
