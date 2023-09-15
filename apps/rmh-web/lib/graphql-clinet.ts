import { GraphQLClient } from "graphql-request";

const endpoint = process.env.GRAPHQL_ENDPOINT!;
const apiKey = process.env.GRAPHQL_API_KEY!;

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    "x-api-key": apiKey,
  },
});
