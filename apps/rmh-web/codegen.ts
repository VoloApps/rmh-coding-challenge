import { CodegenConfig } from "@graphql-codegen/cli";

const plugins = ["typescript", "typescript-operations", "typed-document-node"];

/**
 * Configuration to collection the GraphQL schema and generate the types
 */
const config: CodegenConfig = {
  schema: {
    "https://acnxb73revg5rbelc22nrft7re.appsync-api.us-east-1.amazonaws.com/graphql":
      {
        headers: {
          "x-api-key": "da2-xko5sleonrcgpijnqjvqy2arzy",
        },
      },
  },
  documents: "./app/graphql/*.graphql",
  generates: {
    "./app/generated-graphql-types/rmh.ts": {
      plugins: plugins,
    },
  },
};
export default config;
