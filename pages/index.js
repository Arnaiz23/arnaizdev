import style from "../styles/Home.module.css"
import Head from "next/head"

import Header from "../components/Header"
import Footer from "../components/Footer"

import TechStack from "../components/TechStack"
import OptionsCardsHome from "../components/OptionsCardsHome"
import HeaderHome from "../components/HeaderHome"

export default function Home() {
  return (
    <>
      <Head>
        <title>Arnaizdev - Home</title>
      </Head>
      <Header />
      <HeaderHome />
      <OptionsCardsHome />
      <div className={style.line}></div>

      {/* ----------------------------- TECHNOLOGIES ------------------------------- */}
      <div className={style.containerHomeTechnologies}>
        <h2>Tecnologías</h2>
        <TechStack title="Front-end stack" line={style.line} />
        <TechStack title="Back-end stack" line={style.line} />
        <TechStack title="Other stack" line={style.line} />
      </div>

      <Footer />
    </>
  )
}
