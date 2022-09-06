import Head from "next/head"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "../../styles/Projects.module.css"
import ProjectCard from "../../components/ProjectCard"

export default function Projects({ data }) {
  return (
    <>
      <Head>
        <title>Arnaizdev - Projects</title>
      </Head>
      <Header />
      <section className={styles.containerMain}>
        <h2>Proyectos</h2>
        <section className={styles.containerProjects}>
          {data.length <= 0 ? (
            <h4>No hay proyectos</h4>
          ) : (
            data.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))
          )}
        </section>
      </section>
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const apiResponse = await fetch(`${process.env.API_URL}/projects`)

  if (apiResponse.ok) {
    const data = await apiResponse.json()
    return { props: { data } }
  }
}
