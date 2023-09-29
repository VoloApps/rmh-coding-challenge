import { NextApiRequest, NextApiResponse } from "next";
import { request as GQLRequest, gql } from "graphql-request";

export default async function GET(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const document = gql`
query MyQuery {
  getAppointments(ptId: "${request.query.ptdid}") {
    items {
      appointmentDate
      createdOn
      duration
      patientName
      ptId
      zoomUrl
    }
  }
}
`;

  const GRAPHQL_API_URL_API_KEY = process.env.GRAPHQL_API_URL_API_KEY
    ? process.env.GRAPHQL_API_URL_API_KEY
    : "";
  const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL
    ? process.env.GRAPHQL_API_URL
    : "";
  console.log(
    `API_KEY ${GRAPHQL_API_URL_API_KEY}, GRAPHQL_API_URL ${GRAPHQL_API_URL}`
  );

  const result = await GQLRequest(GRAPHQL_API_URL, document, undefined, {
    "x-api-key": GRAPHQL_API_URL_API_KEY,
  });

  // @ts-ignore todo: fix types
  response.status(200).json(result.getAppointments.items);
}
