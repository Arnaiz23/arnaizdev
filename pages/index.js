import style from "../styles/Home.module.css"
import Head from "next/head"

import Header from "../components/Header"
import Footer from "../components/Footer"

import TechStack from "../components/TechStack"
import OptionsCardsHome from "../components/OptionsCardsHome"
import HeaderHome from "../components/HeaderHome"

export default function Home({ frontend, backend, other }) {
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
        <TechStack
          title="Front-end stack"
          line={style.line}
          elements={frontend}
        />
        <TechStack
          title="Back-end stack"
          line={style.line}
          elements={backend}
        />
        <TechStack title="Other stack" line={style.line} elements={other} />
      </div>

      <Footer />
    </>
  )
}

Home.getInitialProps = async () => {
  const technologies = await fetch(
    "http://localhost:3000/api/technologies"
  ).then((res) => res.json())

  const frontend = technologies.filter((object) => object.stack === "frontend")
  const backend = technologies.filter((object) => object.stack === "backend")
  const other = technologies.filter((object) => object.stack === "other")
  return { frontend, backend, other }
  /* 
   return fetch("http://localhost:3000/api/technologies").then((res) =>
    res.json()
  )
    */
}
