import style from "../styles/Home.module.css"
import Head from "next/head"

import TechStack from "@/components/TechStack"
import OptionsCardsHome from "@/components/OptionsCardsHome"
import HeaderHome from "@/components/HeaderHome"
import Layout from "@/components/Layout"

export default function Home({ frontend, backend, other }) {
  return (
    <Layout>
      <Head>
        <title>Arnaizdev - Home</title>
        <link rel="canonical" href="https://arnaizdev.com/" />
      </Head>
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
    </Layout>
  )
}

export async function getServerSideProps() {
  const technologies = await fetch(`${process.env.API_URL}/technologies`)

  if (technologies.ok) {
    const data = await technologies.json()

    const frontend = data.filter((object) => object.stack === "frontend")
    const backend = data.filter((object) => object.stack === "backend")
    const other = data.filter((object) => object.stack === "other")
    return { props: { frontend, backend, other } }
  }
}
