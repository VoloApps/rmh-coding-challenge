import axios from "axios";
import { useEffect, useState } from "react";
import { AppointmentsList } from "./AppointmentList";

// todo: move these types to a single file.
type GetAppointmentsResponse = {
    data: {
        getAppointments: {
            items: [Appointment]
        }
    }
}

export type Appointment = {
    appointmentDate: string;
    createdOn: string;
    duration: number;
    patientName: string;
    ptId: string;
    zoomUrl: string;
}

export default function Appointments() {

    const [data, setData] = useState<Appointment[]>([]);

    // todo: move graphql api request to a different file and can be generalized
    const getAppointments = async () => {
        const GRAPHQL_API_URL = 'https://acnxb73revg5rbelc22nrft7re.appsync-api.us-east-1.amazonaws.com/graphql';
        const GRAPHQL_API_URL_API_KEY = 'da2-xko5sleonrcgpijnqjvqy2arzy';
        console.log(`API_KEY ${GRAPHQL_API_URL_API_KEY}, GRAPHQL_API_URL ${GRAPHQL_API_URL}`)


        const headers = {
            'Content-Type': 'application/json',
            'x-api-key': GRAPHQL_API_URL_API_KEY,
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS'
        }

        const requestBody = {
            query: `query MyQuery { 
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
            }`
        }

        const options = {
            method: 'POST',
            url: GRAPHQL_API_URL,
            headers,
            data: JSON.stringify(requestBody)
        }

        return axios(options);
    }

    useEffect(() => {
        try {
            getAppointments().then(res => {
                setData(res.data.data.getAppointments.items);
                console.log(data);
            });
        } catch (err) {
            console.log('Error from Axios Request', err);
        }
    }, [])


    return <div className="bg-white p-4 min-w-[20%]">
        <h1 className="text-sm">My Appointments</h1>
        <div className="border-b border-gray-200 dark:border-gray-700">
            <ul className="flex justify-center -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li className="mr-2">
                    <a href="#" className="inline-flex w-[50%] text-sm items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group" aria-current="page">Today's</a>
                </li>
                <li className="mr-2">
                    <a href="#" className="inline-flex w-[50%] text-sm items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group">All</a>
                </li>
            </ul>
        </div>
        <AppointmentsList appointments={data} />
    </div >
}
