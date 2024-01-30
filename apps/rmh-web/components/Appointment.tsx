"use client";
import React from "react";
import Avatar from "./Avatar";
import type { Appointment } from "./Tabs";
import { setSelectedAppointment } from "@/features/appointmentSlice";
import { useDispatch } from "react-redux";

const AppointmentCard = ({ appointment }: { appointment: Appointment }) => {
  const dispatch = useDispatch();
  const handleAppointmentClick = () => {
    console.log(
      "Dispatching Redux action to set selected appointment",
      appointment
    );
    dispatch(setSelectedAppointment(appointment));
  };
  return (
    <div
      onClick={handleAppointmentClick}
      className="flex flex-row items-center justify-center pl-1 pt-3 hover:bg-appointment-gray"
    >
      <div className="flex-none">
        <Avatar></Avatar>
      </div>
      <div className="flex-auto ml-3">{appointment.patientName}</div>
      <div className="flex-none">
        <button>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 4V16H5.17L4 17.17V4H20ZM20 2H4C2.9 2 2 2.9 2 4V19.59C2 20.48 3.08 20.93 3.71 20.3L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
              fill="#6B6F7B"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
