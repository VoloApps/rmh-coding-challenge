"use client";import { AppointmentType } from "@/types/AppointmentType";
import ClientListItem from "./common/ClientListItem";
import Tabs from "./common/TabsContainer";
import SeachInput from "./forms/SeachInput";
import { useState } from "react";

function Sidebar({ appoinments }: { appoinments: AppointmentType[] }) {
  const [activePatient, setActivePatient] = useState(
    appoinments[0].patientName ?? ""
  );
  return (
    <section className="flex w-1/4 flex-col bg-white rounded-md mt-2 mx-1">
      <p className="text-lg font-bold mt-5 ml-5">My Patients</p>
      <Tabs
        tabs={[
          {
            label: "Today's",
            isActive: true,
            content: (
              <>
                <SeachInput />
                {appoinments.map((data, index) => (
                  <ClientListItem
                    key={index}
                    name={data.patientName}
                    activePatient={activePatient}
                    setActivePatient={setActivePatient}
                  />
                ))}
              </>
            ),
          },
          { label: "All", isActive: false },
        ]}
      />
    </section>
  );
}

export default Sidebar;
