import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  AWSDateTime: { input: any; output: any };
};

export type AddUserInput = {
  acceptedTermsAndConditions?: InputMaybe<Scalars["Boolean"]["input"]>;
  createdOn: Scalars["AWSDateTime"]["input"];
  email: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
};

export type Appointment = {
  __typename?: "Appointment";
  appointmentDate?: Maybe<Scalars["AWSDateTime"]["output"]>;
  createdOn?: Maybe<Scalars["AWSDateTime"]["output"]>;
  duration?: Maybe<Scalars["Int"]["output"]>;
  patientName?: Maybe<Scalars["String"]["output"]>;
  ptId: Scalars["ID"]["output"];
  zoomUrl?: Maybe<Scalars["String"]["output"]>;
};

export type AppointmentsConnection = {
  __typename?: "AppointmentsConnection";
  items?: Maybe<Array<Maybe<Appointment>>>;
  limit?: Maybe<Scalars["Int"]["output"]>;
  nextToken?: Maybe<Scalars["String"]["output"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addUser?: Maybe<User>;
};

export type MutationAddUserArgs = {
  input: AddUserInput;
};

export type Query = {
  __typename?: "Query";
  getAppointments?: Maybe<AppointmentsConnection>;
};

export type QueryGetAppointmentsArgs = {
  filter?: InputMaybe<TableAppointmentsFilterInput>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  nextToken?: InputMaybe<Scalars["String"]["input"]>;
  ptId: Scalars["ID"]["input"];
};

export type TableAppointmentsFilterInput = {
  appointmentDate?: InputMaybe<TableStringFilterInput>;
};

export type TableBooleanFilterInput = {
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  ne?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type TableFloatFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  contains?: InputMaybe<Scalars["Float"]["input"]>;
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  ge?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  le?: InputMaybe<Scalars["Float"]["input"]>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  ne?: InputMaybe<Scalars["Float"]["input"]>;
  notContains?: InputMaybe<Scalars["Float"]["input"]>;
};

export type TableIdFilterInput = {
  beginsWith?: InputMaybe<Scalars["ID"]["input"]>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  contains?: InputMaybe<Scalars["ID"]["input"]>;
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  ge?: InputMaybe<Scalars["ID"]["input"]>;
  gt?: InputMaybe<Scalars["ID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  le?: InputMaybe<Scalars["ID"]["input"]>;
  lt?: InputMaybe<Scalars["ID"]["input"]>;
  ne?: InputMaybe<Scalars["ID"]["input"]>;
  notContains?: InputMaybe<Scalars["ID"]["input"]>;
};

export type TableIntFilterInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  contains?: InputMaybe<Scalars["Int"]["input"]>;
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  ge?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  le?: InputMaybe<Scalars["Int"]["input"]>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  ne?: InputMaybe<Scalars["Int"]["input"]>;
  notContains?: InputMaybe<Scalars["Int"]["input"]>;
};

export type TableStringFilterInput = {
  beginsWith?: InputMaybe<Scalars["String"]["input"]>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  eq?: InputMaybe<Scalars["String"]["input"]>;
  ge?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  le?: InputMaybe<Scalars["String"]["input"]>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  notContains?: InputMaybe<Scalars["String"]["input"]>;
};

export type User = {
  __typename?: "User";
  acceptedTermsAndConditions?: Maybe<Scalars["Boolean"]["output"]>;
  createdOn?: Maybe<Scalars["AWSDateTime"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
};

export type QueryAppointmentListQueryVariables = Exact<{
  [key: string]: never;
}>;

export type QueryAppointmentListQuery = {
  __typename?: "Query";
  getAppointments?: {
    __typename?: "AppointmentsConnection";
    items?: Array<{
      __typename?: "Appointment";
      appointmentDate?: any | null;
      createdOn?: any | null;
      duration?: number | null;
      patientName?: string | null;
      ptId: string;
      zoomUrl?: string | null;
    } | null> | null;
  } | null;
};

export const QueryAppointmentListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "QueryAppointmentList" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getAppointments" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "ptId" },
                value: {
                  kind: "StringValue",
                  value: "6b87d552-a2fe-465a-998c-1b288fee212f",
                  block: false,
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "items" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "appointmentDate" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdOn" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "duration" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "patientName" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "ptId" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "zoomUrl" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  QueryAppointmentListQuery,
  QueryAppointmentListQueryVariables
>;
