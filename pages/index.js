import style from "../styles/Home.module.css"
import Head from "next/head"
import Image from "next/image"

import Header from "../components/Header"
import Footer from "../components/Footer"

import front from "../public/images/front.png"
import back from "../public/images/back.png"

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
      {/* ------------------- HEADER HOME ----------------------- */}
      <div className={style.containerHeaderHome}>
        <div className={style.headerHomeLeft}>
          <h2 className={style.nameBrandTitle}>Arnaizdev</h2>
          <h3>
            Full-Stack Web Developer and
            <b className={style.javascript}>JavaScript</b> lover.
          </h3>
          <p>Fan de la maquetación con HTML y CSS</p>
        </div>
        <div className={style.headerHomeRight}></div>
      </div>

      {/* --------------------- OPTIONS CARDS ------------------------------- */}
      <div className={style.containerHomeCards}>
        <div className={style.homeCard}>
          <Image src={front} width="60" height="60" />
          <h3>Front-end</h3>
          <p>Experiencia adquirida a través de cursos y proyectos realizados</p>
        </div>
        <div className={style.homeCard}>
          <Image src={back} width="60" height="60" />
          <h3>Back-end</h3>
          <p>Actualmente solo he creado y practicado con API REST</p>
        </div>
      </div>

      <Footer />
    </>
  )
}
