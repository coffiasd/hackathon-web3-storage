import Head from 'next/head'
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import React from "react";
import Banner from '../components/Banner';
import { Alert } from '../components/alert.jsx';

const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
})

const AvatarEditor = dynamic(() => import('../components/AvatarEditor'), {
  ssr: false,
})

export default function Home() {
  return (
    <div className="min-h-screen bg-base-200" data-theme="bumblebee">
      <Head>
        <title>Hackathon web3.storage project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Alert />

      <Header />

      <div className='min-h-screen'>

        <Banner />

        <div className='bg-white'>
          <AvatarEditor />
        </div>

      </div>
      <Footer />
    </div >
  )
}
