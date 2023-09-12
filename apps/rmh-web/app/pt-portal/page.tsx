import '@aws-amplify/ui-react/styles.css';
import '../globals.css';
import Head from 'next/head';
import TopBar from '@/components/TopBar';
import axios from 'axios';
import { query } from '@/lib/graphql/gql';
import { AppointmentList } from '@/components/AppointmentList';


type appointmentFromServer = {
  "appointmentDate": string;
					"createdOn": "2023-10-14T08:13:27+04:00",
					"duration": 60,
					"patientName": "Mcintyre Hodge",
					"ptId": "6b87d552-a2fe-465a-998c-1b288fee212f",
					"zoomUrl": "https://zoom.us/rightmovehealth/patient"
}
type response = {
  data: {
    getAppointments: {
      items: {

      }
    }
  }
}

export default async function PTPortal() {
  const data = await axios({
    url: process.env.GRAPHQL_API_URL,
    method: "post",
    data: {
      operationName: "myQuery",
      query: query
    },
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.GRAPHQL_API_URL_API_KEY
    }
  }).then((res) => {
    return res.data
  })
  
  const appointmentsData = data.data.getAppointments.items;
  const appointments = appointmentsData.map(data => {
    return {
      patient: {
        name: data.patientName,
        profilePic: '/avatar.png'
      },
      time: data.appointmentDate
    }
  })
  appointments.sort((a,b) => {
    return new Date(a.time).getTime() - new Date(b.time).getTime()
  })

  return (
    <section>
      <Head>
        <title>PT Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className='flex min-h-screen justify-center w-full'>
        <div className='w-full flex'>
          <AppointmentList
            appointments={appointments} 
          />
        </div>
      </main>
    </section>
  );
}
