'use client'

import '@aws-amplify/ui-react/styles.css';
import '../globals.css';
import Head from 'next/head';
import TopBar from '@/components/TopBar';
import Appointments from '@/components/Appointments';


export default function PTPortal() {

  return (
    <section>
      <Head>
        <title>PT Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBar />
      <main className='flex min-h-screen w-full'>
        <Appointments />
      </main>

    </section>
  );
}
