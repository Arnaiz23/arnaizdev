import { useRouter } from "next/router"
import Head from "next/head"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"

import style from "../../styles/OneTechnologie.module.css"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Course from "../../components/course"

export default function OneTechnologie() {
  const router = useRouter()
  const name = router.query.name

  return (
    <>
      <Head>
        <title>Arnaizdev - {name}</title>
      </Head>
      <Header />
      <section className={style.main}>
        <header className={style.header}>
          <i>
            <FontAwesomeIcon icon={faReact} />
          </i>
          <h2>{name}</h2>
        </header>
        <p>
          Es el lenguaje que más uso actualmente para generar los frontends.
        </p>
        <section className={style.projects}>
          <header>
            <h3>Proyectos</h3>
          </header>
          <ul>
            <a
              href="https://github.com/Arnaiz23/contacts-app-nodejs"
              target="_blank"
              rel="noreferrer"
            >
              <li>contacts-app-nodejs</li>
            </a>
            <a
              href="https://github.com/Arnaiz23/TuManga"
              target="_blank"
              rel="noreferrer"
            >
              <li>TuManga</li>
            </a>
          </ul>
        </section>
        <section className={style.courses}>
          <header>
            <h3>Cursos</h3>
          </header>
          <div className={style.coursesGrid}>
            <Course />
            <Course />
            <Course />
          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}
