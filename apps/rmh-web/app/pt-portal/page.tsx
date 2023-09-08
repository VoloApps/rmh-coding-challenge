import "@aws-amplify/ui-react/styles.css";import "../globals.css";
import Head from "next/head";
import TopBar from "@/components/TopBar";
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { AppointmentType } from "@/types/AppointmentType";
import { GET_APPOINMENTS } from "@/graphql/queries";

const getData = async () => {
  const res = await axios({
    url: process.env.GRAPHQL_URL as string,
    method: "post",
    data: {
      query: GET_APPOINMENTS.loc?.source.body,
    },
    headers: {
      "x-api-key": process.env.GRAPHQL_KEY,
      "Content-Type": "application/json",
    },
  });

  const items = res.data.data.getAppointments.items;

  items.sort(
    (a: AppointmentType, b: AppointmentType) =>
      new Date(b.appointmentDate).getTime() -
      new Date(a.appointmentDate).getTime()
  );

  return items;
};
export default async function PTPortal() {
  const data = await getData();

  return (
    <section>
      <Head>
        <title>PT Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="flex min-h-screen w-full">
        <Sidebar appoinments={data} />
        <div className="w-3/4"></div>
      </main>
    </section>
  );
}
