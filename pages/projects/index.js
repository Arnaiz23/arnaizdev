import Head from "next/head"

import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "../../styles/Projects.module.css"
import ProjectCard from "../../components/ProjectCard"

export default function Projects({ apiResponse }) {
  console.log(apiResponse)
  return (
    <>
      <Head>
        <title>Arnaizdev - Projects</title>
      </Head>
      <Header />
      <section className={styles.containerMain}>
        <h2>Proyectos</h2>
        <section className={styles.containerProjects}>
          {apiResponse.length <= 0 ? (
            <h4>No hay proyectos</h4>
          ) : (
            apiResponse.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))
          )}
        </section>
      </section>
      <Footer />
    </>
  )
}

Projects.getInitialProps = async () => {
  const apiResponse = await fetch("http://localhost:3000/api/projects").then(
    (res) => res.json()
  )
  return { apiResponse }
}
