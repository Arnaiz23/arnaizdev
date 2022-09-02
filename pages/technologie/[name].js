import { useRouter } from "next/router"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"

import style from "../../styles/OneTechnologie.module.css"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

export default function OneTechnologie() {
  const router = useRouter()
  const name = router.query.name

  return (
    <>
      <Header />
      <main>
        <header className={style.header}>
          <i>
            <FontAwesomeIcon icon={faReact} />
          </i>
          <h2>{name}</h2>
        </header>
        <p>
          Es el lenguaje que más uso actualmente para generar los frontends.
        </p>
        <section>
          <header>
            <h3>Proyectos</h3>
          </header>
          <ul>
            <li>contacts-app-nodejs</li>
            <li>TuManga</li>
          </ul>
        </section>
        <section>
          <header>
            <h3>Cursos</h3>
          </header>
          <div>
            <section>
              <img />
              <h4>Master en Frameworks JavaScript...</h4>
              <p>
                En este curso aprendí React desde cero. Se usan las clases de
                React.
              </p>
            </section>
            <section>
              <img />
              <h4>Master en Frameworks JavaScript...</h4>
              <p>
                En este curso aprendí React desde cero. Se usan las clases de
                React.
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
