import React, {ChangeEventHandler, useEffect, useState, useRef} from 'react';
import axios, {AxiosResponse} from "axios";
import {Appointment, AppointmentResponse} from "@/app/pt-portal/models";
import ClientListItem from "@/components/ClientListItem";

const AppointmentsManifest = () => {
  const masterAppts = useRef<Appointment[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const onSearchFieldChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setAppointments(masterAppts?.current?.filter(a => a.patientName.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  useEffect(() => {
    const getApptPromise = async () => {
      try {
        const appointmentsRes: AxiosResponse<AppointmentResponse, any> = await axios.get('/api/get-appointments');
        const apptData = appointmentsRes.data.data.getAppointments.items.sort((a, b) => new Date(a.appointmentDate) - new Date(b.appointmentDate));
        masterAppts.current = apptData;
        setAppointments(apptData);
        console.log(apptData);
      } catch (e) {
        console.error(e);
      }
    }

    getApptPromise().catch(console.error);
  }, []);

  return (
    <section className='flex flex-col w-[400px] rounded-t-2xl bg-white'>
      <header className='p-6'>
        <span className='text-[22px] font-bold'>My Appointments</span>
      </header>
      <div className='p-4'>
        <input type='text' placeholder='Search client' onChange={onSearchFieldChange} className='px-4 py-2  border-[#C3C6CC] border-solid border-[1px] rounded-md w-full' />
      </div>
      <ul className="flex flex-col">
        {appointments.map((item, i) => {
          return <ClientListItem name={item.patientName} key={`client${i}`} />
        })}
      </ul>
    </section>
  )
};

export default AppointmentsManifest;