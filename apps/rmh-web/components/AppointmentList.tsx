'use client'
import React from 'react'
import { Appointment } from './Appointment'
import { SearchBar } from './SearchBar'
import { Tabs } from './Tabs'
import { isTemplateSpan } from 'typescript'

interface AppointmentListProps {
   appointments: Appointment[]
}

export const AppointmentList = ({
    appointments
}: AppointmentListProps) => {
  const [currentList, setCurrentList] = React.useState<Appointment[]>([]);
  const [searchText, setSearchText] = React.useState<String>("");
  React.useEffect(() => {
    setCurrentList(appointments);
  }, [appointments])

  const onSearch = (event) => {
    setSearchText(event.target.value);
    const filtered = appointments.filter(item => {
        return event.target.value === "" || item.patient.name.toLowerCase().includes(event.target.value);
    })
    setCurrentList(filtered);
  }

  return (
    <div className='flex flex-col'>
        <span className='text-xl p-4 bg-white'>
            My Appointments
        </span>
        <Tabs />
        <div className='p-4 bg-white'>
            <SearchBar value={searchText} onChange={onSearch} />
        </div>
        <ul className='flex flex-col'>
            {currentList.map(appointment => {
                return (
                    <Appointment patient={appointment.patient} time={appointment.time} />
                )
            })}
        </ul>
    </div>
    
  )
}

