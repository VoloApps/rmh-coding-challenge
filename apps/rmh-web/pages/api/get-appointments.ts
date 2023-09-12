import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import gql from 'graphql-tag';
import { query, ast } from '@/lib/graphql/gql';

export default async function GET(request: NextApiRequest, response: NextApiResponse) {
  const GRAPHQL_API_URL_API_KEY = process.env.GRAPHQL_API_URL_API_KEY ? process.env.GRAPHQL_API_URL_API_KEY : '';
  const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL ? process.env.GRAPHQL_API_URL : ''; 
  console.log(`API_KEY ${GRAPHQL_API_URL_API_KEY}, GRAPHQL_API_URL ${GRAPHQL_API_URL}`)

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": GRAPHQL_API_URL_API_KEY
  }

  const data = await axios({
    url: GRAPHQL_API_URL,
    method: "post",
    data: {
      operationName: "myQuery",
      query: query
    },
    headers: headers
  }).then((res) => {
    return response.status(200).json(res.data);
  })
}
