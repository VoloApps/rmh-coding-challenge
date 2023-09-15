import { graphQLClient } from "@/lib/graphql-clinet";
import { Appointment } from "@/types/appointment";
import { gql } from "graphql-request";

type GetAppointmentsResponse = {
  getAppointments: {
    items: Appointment[];
  };
};

export const getAppointmentsQuery = gql`
  query GetAppointments {
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

export async function getAppointments() {
  try {
    const data = await graphQLClient.request<GetAppointmentsResponse>(
      getAppointmentsQuery
    );
    return data.getAppointments.items;
  } catch (err) {
    console.log(err);
  }
}
