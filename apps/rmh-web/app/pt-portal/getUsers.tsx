'use server'

import '@aws-amplify/ui-react/styles.css';
import '../globals.css';
import {User} from "@/app/pt-portal/models";
import axios from "axios";
import gql from 'graphql-tag';
import { print } from 'graphql/language/printer'

export async function getUsers(ptID: string) {
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
        const data: User[] = await axios.post(GRAPHQL_API_URL, { query: print(query) },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': GRAPHQL_API_URL_API_KEY
                }
            })
            .then(response => {
                const items: User[] = response.data.data.getAppointments.items;
                console.log('Response:', items);
                return items
            })
            .catch(error => {
                console.error('Error:', error.response ? error.response.data : error.message);
                return []
            });
        return data.sort(
            (a, b) =>
                new Date(a.appointmentDate).getTime() -
                new Date(b.appointmentDate).getTime()
        )
    } catch (err) {
        console.log('Formatting Error');
        return []

    }
}