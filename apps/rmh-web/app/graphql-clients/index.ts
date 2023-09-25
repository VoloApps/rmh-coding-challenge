import { cacheExchange, createClient, fetchExchange, gql } from "@urql/core";
import { registerUrql } from "@urql/next/rsc";

const makeClient = () => {
  return createClient({
    url: process.env.NEXT_PUBLIC_API_ENDPOINT!,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
      return {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY!,
        },
      };
    },
  });
};

const { getClient } = registerUrql(makeClient);

export { getClient };
