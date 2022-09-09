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
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="author" content="Adrián Arnaiz Fernández" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
