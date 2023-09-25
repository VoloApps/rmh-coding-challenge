import { CodegenConfig } from "@graphql-codegen/cli";

const plugins = ["typescript", "typescript-operations", "typed-document-node"];

const config: CodegenConfig = {
  schema:
    "https://acnxb73revg5rbelc22nrft7re.appsync-api.us-east-1.amazonaws.com/graphql",
  documents: "./app/graphql/*.graphql",
  generates: {
    "./app/generated-graphql-types/rmh.ts": {
      plugins: plugins,
      config: {
        headers: {
          Authorization: "da2-xko5sleonrcgpijnqjvqy2arzy",
        },
      },
    },
  },
};
export default config;
