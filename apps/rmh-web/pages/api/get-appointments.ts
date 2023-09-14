import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import gql from 'graphql-tag';

export default async function GET(request: NextApiRequest, response: NextApiResponse) {
  const GRAPHQL_API_URL_API_KEY = process.env.GRAPHQL_API_URL_API_KEY ? process.env.GRAPHQL_API_URL_API_KEY : '';
  const GRAPHQL_API_URL = process.env.GRAPHQL_API_URL ? process.env.GRAPHQL_API_URL : '';
  console.log(`API_KEY ${GRAPHQL_API_URL_API_KEY}, GRAPHQL_API_URL ${GRAPHQL_API_URL}`)

  response.status(200).json([]);
}
