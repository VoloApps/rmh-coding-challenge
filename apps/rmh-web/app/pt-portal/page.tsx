"use client";

import "@aws-amplify/ui-react/styles.css";
import "../globals.css";
import { Suspense } from "react";
import Head from "next/head";
import TopBar from "@/components/TopBar";
import SideBar from "@/components/SideBar";

export default function PTPortal() {
  return (
    <section className="flex flex-col h-full">
      <Head>
        <title>PT Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <section className="flex flex-row flex-1 h-full">
        <Suspense fallback={<p>Loading feed...</p>}>
          <SideBar />
        </Suspense>
        <main className="flex flex-1 h-full justify-center w-full"></main>
      </section>
    </section>
  );
}
