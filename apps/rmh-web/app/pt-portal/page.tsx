import "@aws-amplify/ui-react/styles.css";
import "../globals.css";
import Head from "next/head";
import TopBar from "@/components/TopBar";
import AppointmentList from "./_components/appointment-list";

export default function PTPortal() {
  return (
    <section>
      <Head>
        <title>PT Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="flex min-h-screen justify-center w-full text-black">
        <div className="w-1/6  h-screen bg-white">
          <AppointmentList />
        </div>
        <div className="w-5/6 h-screen bg-gray-50"></div>
      </main>
    </section>
  );
}
