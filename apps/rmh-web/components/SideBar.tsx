import React from "react";
import Tabs from "./Tabs";
import "server-only";

const apiQuery = `
  query MyQuery {
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
  }
`;

const SideBar = async () => {
  try {
    const data = await fetch(`${process.env.GRAPHQL_API_URL!}`, {
      method: "POST",
      body: JSON.stringify({
        query: apiQuery,
      }),
      headers: {
        "x-api-key": process.env.GRAPHQL_API_URL_API_KEY!,
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 },
    });
    const {
      data: {
        getAppointments: { items },
      },
    } = await data.json();
    return (
      <div className="drawer md:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            View Appointments
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu w-80 min-h-full bg-base-200 text-base-content p-0">
            <h1 className=" text-xl font-bold p-5">My Appointments</h1>
            <Tabs appointments={items} />
          </ul>
        </div>
      </div>
    );
  } catch (error) {
    console.log(error);
    // TODO: redirect to error page
    <div>ERROR</div>;
  }
};

export default SideBar;
