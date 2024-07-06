import Header from "@/components/global/header"
import "./../styles/globals.css"
import 'swiper/css';
import Footer from "@/components/global/footer";
import DataProvider from "@/context/dataProvider";
import Sidebar from "@/components/global/sidebar";
import { useState } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  const [displaySide , setDisplaySide] = useState(false)

  

  return (
    <>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" key="meta"/>
      <link rel="shortcut icon" href="/images/logo.png" />
    </Head>
    <DataProvider>
      <Header setDisplaySide={setDisplaySide}/>
      <Component {...pageProps} />
      <Footer/>
      <Sidebar display={displaySide} displayHandler={setDisplaySide}/>
    </DataProvider>
    </>
  )
}
