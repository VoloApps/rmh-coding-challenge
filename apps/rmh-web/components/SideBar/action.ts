import axios from "axios";
import { DocumentNode } from "graphql";
import gql from "graphql-tag";

const endpoint =
  "https://acnxb73revg5rbelc22nrft7re.appsync-api.us-east-1.amazonaws.com/graphql";
const apiKey = process.env.GRAPHQL_API_URL_API_KEY
  ? process.env.GRAPHQL_API_URL_API_KEY
  : "da2-xko5sleonrcgpijnqjvqy2arzy";

const headers = {
  "Content-Type": "application/json",
  "x-api-key": apiKey,
};

const query = gql`
  query MyQuery {
    getAppointments(ptId: "6b87d552-a2fe-465a-998c-1b288fee212f") {
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

function getGqlString(doc: DocumentNode) {
  return doc.loc && doc.loc.source.body;
}

export const getPatientList = async () => {
  try {
    const result = await axios.post(
      endpoint,
      {
        query: getGqlString(query),
      },
      {
        headers: headers,
      }
    );

    return result.data.data.getAppointments.items;
  } catch (e) {
    console.error("Error making GraphQL request:", e);
  }
};
