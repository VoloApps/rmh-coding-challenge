"use client";

import "@aws-amplify/ui-react/styles.css";
import "../globals.css";
import Head from "next/head";
import TopBar from "@/components/TopBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { User } from "./models";
import SideBar from "@/components/SideBar";

export default function PTPortal() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadAppointments = async () => {
      const { data }: { data: User[] } = await axios.get(
        "http://localhost:3000/api/get-appointments"
      );

      const sortedData = data.sort(
        (a, b) =>
          new Date(a.appointmentDate).getTime() -
          new Date(b.appointmentDate).getTime()
      );

      setUsers(sortedData);
    };

    loadAppointments();
  }, []);

  return (
    <section>
      <Head>
        <title>PT Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="flex min-h-screen w-full">
        <SideBar users={users} />
      </main>
    </section>
  );
}
