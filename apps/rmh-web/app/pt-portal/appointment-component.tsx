import React from "react";
import { useEffect } from 'react'
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { Input } from 'antd';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, List, message } from 'antd';
import { Appointment } from "./models";
import axios from 'axios'
import { responsePathAsArray } from "graphql";
import { log } from "console";

const AppointmentComponent = () => {

    let appointments: Array<Appointment> = new Array(
        new Appointment(new Date(), new Date(), 30, "Ignacio Espino", 'asdfsdfe234', "example.com")
    )

    const items: TabsProps['items'] = [
        {
          key: '1',
          label: "Today's",
        },
        {
          key: '2',
          label: 'All',
        },
      ];

      useEffect(() => {
        axios.post('https://acnxb73revg5rbelc22nrft7re.appsync-api.us-east-1.amazonaws.com/graphql', {query: `query MyQuery {
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
            }`}, {headers : {
                'Content-Type': 'application/json',
                "x-api-key": "<REPLACEME>"
            }})
        .then(function (response) {
                const data = response['data']['data']['getAppointments']['items']
                console.log(data)
                data.forEach(appointment => {
                    appointments.push(appointment)
                });
              })
          .catch(function (error) {
            console.log(error);
          });
      }, [])

    


    return (
        <div className="container bg-white items-start ml-2 p-2 rounded-2xl" style={{width: '400px'}} >
            <h3 className="text-lg font-semibold">My Appointments</h3>
            <Tabs items={items} />
            <Input placeholder="Search" prefix={<SearchOutlined />}/>
            
            <div className="container">
                <List>
                { appointments.map(app => {
                    return <List.Item.Meta key={app.ptId}
                    avatar={<Avatar icon={<UserOutlined />} />}
                    title={app.patientName}
                  />
                }) }
                </List>
            </div>

        </div>
    )
}

export default AppointmentComponent