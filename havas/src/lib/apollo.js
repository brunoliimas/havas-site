import { HttpLink } from "@apollo/client";
import { registerApolloClient, ApolloClient, InMemoryCache } from "@apollo/experimental-nextjs-app-support";

// Registra o cliente Apollo
export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: "http://localhost:8000/graphql",  // Substitua pelo URL da sua API GraphQL
      fetchOptions: {
        // Pode desabilitar o cache se necessário
        cache: "no-store"
      },
    }),
  });
});
