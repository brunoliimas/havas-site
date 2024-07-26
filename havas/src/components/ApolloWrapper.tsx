"use client"; // O arquivo precisa do pragma "use client"

import { ApolloLink, HttpLink } from "@apollo/client";
import { ApolloNextAppProvider, ApolloClient, InMemoryCache } from "@apollo/experimental-nextjs-app-support";

// Função para criar o cliente Apollo
function makeClient() {
  const httpLink = new HttpLink({
    uri: "http://localhost:8000/graphql", // Substitua pelo URL da sua API GraphQL
    fetchOptions: {
      // Pode desabilitar o cache se necessário
      // cache: "no-store"
    },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
}

// Componente para envolver a aplicação com o ApolloProvider
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
