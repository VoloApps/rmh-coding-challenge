'use server'

import '@aws-amplify/ui-react/styles.css';
import '../globals.css';
import {User} from "@/app/pt-portal/models";
import axios from "axios";
import gql from 'graphql-tag';
import {dummyAppointmentData} from "@/app/pt-portal/dummyData";

export async function getUsers(ptID: string) {
    console.log(ptID)
    const GRAPHQL_API_URL_API_KEY = process.env.GRAPHQL_API_URL_API_KEY ? process.env.GRAPHQL_API_URL_API_KEY : '';
    const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL ? process.env.GRAPHQL_API_URL : '';
    const query = gql`
 query MyQuery {
      getAppointments(ptId: "${ptID}") {
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
`
    try {
        // const AuthStr = 'Bearer '.concat(GRAPHQL_API_URL_API_KEY);
        // const { data }: { data: User[] } = await axios.post(
        //     `https://acnxb73revg5rbelc22nrft7re.appsync-api.us-east-1.amazonaws.com/graphql`, {
        //         headers: {Authorization: AuthStr}, query
        //     });

        return dummyAppointmentData.sort(
            (a, b) =>
                new Date(a.appointmentDate).getTime() -
                new Date(b.appointmentDate).getTime()
        )
    } catch (err) {
        console.log(err);
        return []

    }
}