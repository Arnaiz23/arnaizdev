import style from "../styles/Home.module.css"
import Head from "next/head"

import Header from "../components/Header"

export default function Home() {
  return (
    <>
      <Head>
        <title>Arnaizdev - Home</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <h1 className={style.title}>Adrián Arnaiz Portfolio</h1>
    </>
  )
}
