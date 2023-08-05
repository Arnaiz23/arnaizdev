import "../styles/globals.css"
import Head from "next/head"
import { Analytics } from "@vercel/analytics/react"
import ButtonUp from "@/components/ButtonUp"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <meta name="author" content="Adrián Arnaiz Fernández" />
        <meta
          name="keywords"
          content="Portfolio, Madrid, Full Stack Developer, Frontend, Programador web, React, NextJS, NodeJS, Frontend developer, Programador Madrid, Programador web madrid"
        />
        <meta
          name="description"
          content="Portfolio de Adrián Arnaiz Fernández. Se explica los lenguajes que sabe utilizar, los proyectos realizados e información sobre él."
        />
        <meta name="robots" content="index" />
      </Head>
      <Component {...pageProps} />
      <ButtonUp />
      <Analytics />
    </>
  )
}
