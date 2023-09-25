/**
 * (Isaac): I removed the "use client" and add it to the TopBar as that is where the client logic is needed.
 * It was also preventing Sidebar to be rendered as a server copmonent.
 */

import "@aws-amplify/ui-react/styles.css";
import "../globals.css";
import Head from "next/head";
import TopBar from "@/components/TopBar";
import { SideBar } from "@/components/SideBar";

export default function PTPortal() {
  return (
    <section className="flex flex-col h-screen max-h-screen">
      <Head>
        <title>PT Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <section className="flex flex-row flex-1 h-full">
        <SideBar />
        <main className="flex flex-1 h-full justify-center w-full"></main>
      </section>
    </section>
  );
}
