import "../styles/globals.css"
import Head from "next/head"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RNGX5Z9JNC"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {window.dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-RNGX5Z9JNC');
        </script>
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="author" content="Adrián Arnaiz Fernández" />
        <meta
          name="keywords"
          content="Portfolio Madrid Full Stack Developer Frontend Programador web React"
        />
        <meta
          name="desctiption"
          content="Portfolio de Adrián Arnaiz Fernández. Se explica los lenguajes que sabe utilizar, los proyectos realizados e información sobre él."
        />
        <meta name="robots" content="index" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
