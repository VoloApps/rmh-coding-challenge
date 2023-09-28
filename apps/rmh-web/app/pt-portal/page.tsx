'use client'

import '@aws-amplify/ui-react/styles.css';
import '../globals.css';
import Head from 'next/head';
import TopBar from '@/components/TopBar';
import gql from 'graphql-tag';
import { useEffect, useState } from 'react';

type Appointment = {
  appointmentDate: string,
  createdOn: string,
  duration: number,
  patientName: string,
  ptId: string,
  zoomUrl: string
}

export default function PTPortal() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  
  useEffect(() => {
    getClients();
  }, [])

  async function getClients() {
    const query = gql`
query MyQuery($ptId: ID!) {
  getAppointments(ptId: $ptId) {
    items {
      appointmentDate
      createdOn
      duration
      patientName
      ptId
      zoomUrl
    }
  }
}`
    const h = new Headers();
    h.append('x-api-key', 'da2-xko5sleonrcgpijnqjvqy2arzy')
    h.append('Content-Type', 'application/json')
    try {
      const request = await fetch("https://acnxb73revg5rbelc22nrft7re.appsync-api.us-east-1.amazonaws.com/graphql", {
        method: "POST",
        headers: h,
        body: JSON.stringify({ query: query.loc?.source.body, variables: { ptId: "6b87d552-a2fe-465a-998c-1b288fee212f" } })
      });
      const data = await request.json()
      const appointments: Appointment[] = data.data.getAppointments.items;
      setAppointments(appointments);
    } catch (error) {

      // setError(error)
    }

  };


  return (
    <section>
      <Head>
        <title>PT Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className='justify-center w-full'>
        <div className='bg-white w-80 min-h-screen rounded-t-2xl flex flex-col'>
          <h1 className='pl-4 pt-2 text-lg font-medium'>My Appointments</h1>
          <div className='flex flex-row w-full justify-around pt-2'>
            <div className='text-blue-800 border-b-blue-800 border-b'>Today's</div>
            <div className='text-blue-800'>All</div>
            </div>
            <input placeholder='Search Client' className='rounded border p-2 m-2'></input>
            <div className='flex flex-col '>

              {appointments.map(appt => (<div className='flex flex-row items-center hover:bg-blue-100 px-2 py-2' key={appt.ptId}>

                <svg
                className='border rounded-full'
                  width={40}
                  height={41}
                  viewBox="0 0 40 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5946 34.3893C8.31668 31.7178 13.3191 28.6954 19.9795 28.6954C26.5768 28.6954 31.5186 31.6433 33.3001 34.3065C29.9769 37.9229 25.2077 40.1894 19.9091 40.1894C14.651 40.1894 9.91429 37.9575 6.5946 34.3893Z"
                    fill="#C3C6CC"
                  />
                  <path
                    d="M26.89 17.5026C26.89 21.8446 23.8937 25.1678 19.9795 25.1678C16.0855 25.1471 13.0892 21.8446 13.0892 17.5026C13.0684 13.4256 16.1457 10 19.9795 10C23.8335 10 26.89 13.4256 26.89 17.5026Z"
                    fill="#C3C6CC"
                  />
                </svg>

<div className='pl-2'>

                {appt.patientName}
</div>
                <svg
                className='ml-auto'
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 4V16H5.17L4 17.17V4H20ZM20 2H4C2.9 2 2 2.9 2 4V19.59C2 20.48 3.08 20.93 3.71 20.3L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
                    fill="#6B6F7B"
                  />
                </svg>


              </div>))}

          </div>
        </div>
      </main>

    </section>
  );
}
