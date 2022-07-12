import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'
import Services from '../components/Services'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Abob furniture--remake</title>
        <meta name="description" content="Remake of ossy furniture by AbobTech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      {/* <Services/> */}
    </>
  )
}
