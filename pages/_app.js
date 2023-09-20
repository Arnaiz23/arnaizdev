import "../styles/globals.css"
import Head from "next/head"
import { Analytics } from "@vercel/analytics/react"
import ButtonUp from "@/components/ButtonUp"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon.ico"
        />
        <meta name="author" content="Adrián Arnaiz Fernández" />
        <meta
          name="description"
          content="Portfolio de Adrián Arnaiz Fernández. Se explica los lenguajes que sabe utilizar, los proyectos realizados e información sobre él."
        />
        <meta name="robots" content="index" />
        <link rel="canonical" href="https://arnaizdev.com/" />
        <meta name="theme-color" content="#3e4144" />
      </Head>
      <Component {...pageProps} />
      <ButtonUp />
      <Analytics />
    </>
  )
}
