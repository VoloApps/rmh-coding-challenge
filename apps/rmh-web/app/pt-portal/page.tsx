'use client'

import '@aws-amplify/ui-react/styles.css';
import '../globals.css';
import Head from 'next/head';
import TopBar from '@/components/TopBar';
import AppointmentComponent from './appointment-component';


export default function PTPortal() {

  return (
    <section>
      <Head>
        <title>PT Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className='flex min-h-screen justify-items-start w-full'>
        <AppointmentComponent  />
      </main>

    </section>
  );
}
