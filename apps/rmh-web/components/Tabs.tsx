import React from "react";
import AppointmentCard from "./Appointment";
import { Search } from "./Search";

export interface Appointment {
  appointmentDate: string;
  createdOn: string;
  duration: number;
  patientName: string;
  ptId: string;
  zoomUrl: string;
}

interface Props {
  appointments: Appointment[];
}

const Tabs = ({ appointments }: Props) => {
  return (
    <div role="tablist" className="tabs tabs-bordered">
      <input
        id="tab1"
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Today's"
        checked
        readOnly
      />
      <div role="tabpanel" className="tab-content">
        <Search></Search>

        {appointments.map((appointment: any) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
          ></AppointmentCard>
        ))}
      </div>

      <input
        id="tab2"
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="All"
      />
      <div role="tabpanel" className="tab-content">
        <Search></Search>
        <div>different tab (for demo purposes).</div>
        {appointments.map((appointment: any) => (
          <AppointmentCard
            key={appointment.id}
            appointment={appointment}
          ></AppointmentCard>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
