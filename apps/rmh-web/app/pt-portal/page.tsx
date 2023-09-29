"use client";

import "@aws-amplify/ui-react/styles.css";
import "../globals.css";
import Head from "next/head";
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import { useUsers } from "./hooks";

export default function PTPortal() {
  const users = useUsers();

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
