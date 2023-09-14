import { NextApiRequest, NextApiResponse } from 'next';
import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';
import gql from 'graphql-tag';

export default async function GET(request: NextApiRequest, response: NextApiResponse) {
  const GRAPHQL_API_URL_API_KEY = process.env.GRAPHQL_API_URL_API_KEY ? process.env.GRAPHQL_API_URL_API_KEY : '';
  const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL ? process.env.GRAPHQL_API_URL : '';
  console.log(`API_KEY ${GRAPHQL_API_URL_API_KEY}, GRAPHQL_API_URL ${GRAPHQL_API_URL}`);

  const query = `
    query GetAppointmentsForPT { 
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

  try {
    const config: AxiosRequestConfig = {
      url: GRAPHQL_API_URL,
      method: 'post',
      data: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': GRAPHQL_API_URL_API_KEY
      }
    };
    const appointments: AxiosResponse = await axios.request(config);
    return response.status(200).json(appointments.data);
  } catch (e) {
    console.error(e);
    return response.status(500).json({ error: 'Error in get appointments', data: e });
  }
}
