import React, {ChangeEventHandler, useEffect, useState, useRef} from 'react';
import axios, {AxiosResponse} from "axios";
import { useSelector } from "react-redux";
import {Appointment, AppointmentResponse} from "@/app/pt-portal/models";
import ClientListItem from "@/components/ClientListItem";
import TabContainer from "@/components/TabContainer";
import {getSelectedUser} from "@/features/appointmentSlice";

const AppointmentsManifest = () => {
  const masterAppts = useRef<Appointment[]>([]);
  const selectedUser = useSelector(getSelectedUser);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const onSearchFieldChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setAppointments(masterAppts?.current?.filter(a => a.patientName.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  const renderTodaysApptsTab = () => {
    return (
      <>
        <div className='p-4 relative'>
          <img src='/search.svg' alt='Magnifiying glass' className='absolute top-6 left-8' />
          <input type='text' placeholder='Search client' onChange={onSearchFieldChange} className='pr-4 pl-14 py-2 border-[#C3C6CC] border-solid border-[1px] rounded-lg w-full' />
        </div>
        <ul className="flex flex-col">
          {appointments.map((item, i) => {
            return <ClientListItem name={item.patientName} isSelected={item.patientName === selectedUser} key={`client${i}`} />
          })}
        </ul>
      </>
    );
  }

  useEffect(() => {
    const getApptPromise = async () => {
      try {
        const appointmentsRes: AxiosResponse<AppointmentResponse, any> = await axios.get('/api/get-appointments');
        const apptData = appointmentsRes.data.data.getAppointments.items.sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate));
        masterAppts.current = apptData;
        setAppointments(apptData);
      } catch (e) {
        console.error(e);
      }
    }

    getApptPromise().catch(console.error);
  }, []);

  return (
    <section className='flex flex-col w-[400px] rounded-t-2xl bg-white mx-1'>
      <header className='p-6'>
        <span className='text-[22px] font-bold'>My Appointments</span>
      </header>
      <TabContainer tabs={['Today\'s', 'All']} tabContent={[renderTodaysApptsTab(), <div></div>]} />
    </section>
  )
};

export default AppointmentsManifest;