import { NextApiRequest, NextApiResponse } from "next";
import { request as GQLRequest, gql } from "graphql-request";
import { User } from "@/app/pt-portal/models";

interface Result {
  getAppointments: {
    items: User[];
  };
}

export default async function GET(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
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

    const result: Result = await GQLRequest(
      GRAPHQL_API_URL,
      document,
      undefined,
      {
        "x-api-key": GRAPHQL_API_URL_API_KEY,
      }
    );

    response.status(200).json(result.getAppointments.items);
  } catch (err) {
    response.status(500).json({ err });
  }
}
