import { ChakraProvider, ColorModeProvider } from "@chakra-ui/react";
import { Provider, createClient, dedupExchange, fetchExchange } from "urql";
import { cacheExchange, Cache, QueryInput } from "@urql/exchange-graphcache";
import theme from "../theme";
import {
  LoginMutation,
  MeDocument,
  MeQuery,
  RegisterClientMutation,
  RegisterTrainerMutation,
} from "../generated/graphql";

function betterUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}

const client = createClient({
  url: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: "include",
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          login: (_result, args, cache, info) => {
            betterUpdateQuery<LoginMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result: any, query) => {
                if (result.login.errors) {
                  return query;
                } else {
                  return {
                    me: result.login.user,
                  };
                }
              }
            );
          },

          registerTrainer: (_result, args, cache, info) => {
            betterUpdateQuery<RegisterTrainerMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result: any, query) => {
                if (result.registerTrainer.errors) {
                  return query;
                } else {
                  return {
                    me: result.registerTrainer.user,
                  };
                }
              }
            );
          },

          registerClient: (_result, args, cache, info) => {
            betterUpdateQuery<RegisterClientMutation, MeQuery>(
              cache,
              { query: MeDocument },
              _result,
              (result: any, query) => {
                if (result.registerClient.errors) {
                  return query;
                } else {
                  return {
                    me: result.registerClient.user,
                  };
                }
              }
            );
          },
        },
      },
    }),
    fetchExchange,
  ],
});

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ColorModeProvider
          options={{
            useSystemColorMode: true,
          }}
        >
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
