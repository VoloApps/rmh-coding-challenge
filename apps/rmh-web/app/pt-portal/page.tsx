"use client";

import "@aws-amplify/ui-react/styles.css";
import "../globals.css";
import Head from "next/head";
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";
import { useUsers } from "./hooks";

export default function PTPortal() {
  const { isLoading, users } = useUsers("6b87d552-a2fe-465a-998c-1b288fee212f");

  return (
    <section>
      <Head>
        <title>PT Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className="flex min-h-screen w-full">
        <SideBar isLoading={isLoading} users={users} />
      </main>
    </section>
  );
}
