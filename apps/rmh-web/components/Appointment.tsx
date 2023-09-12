import React from 'react'
import { IconButton } from './IconButton';

export type Patient = {
    profilePic: string;
    name: string;
}

export type Appointment = {
    patient: Patient;
    time: string;
}

export const Appointment = ({
    patient,
    time,
}: Appointment) => {
  return (
    <li className='flex space-x-16 p-4 bg-white hover:bg-red focus:bg-red'>
        <div className='flex items-center space-x-4'>
            <img className="w-10 h-10 rounded-full" src={patient.profilePic} alt="Rounded avatar" />
            <span className='text-xs'>{patient.name}</span>
        </div>
        <IconButton />
    </li>
  )
}
