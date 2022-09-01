import Footer from "../../components/Footer"
import Header from "../../components/Header"
import styles from "../../styles/Projects.module.css"
import ProjectCard from "../../components/ProjectCard"

export default function Projects() {
  return (
    <>
      <Header />
      <main>
        <h2>Proyectos</h2>
        <section className={styles.containerProjects}>
          <ProjectCard />
        </section>
      </main>
      <Footer />
    </>
  )
}
