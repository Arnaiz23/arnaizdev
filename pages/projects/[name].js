import { useRouter } from "next/router"
import Image from "next/image"

import Footer from "../../components/Footer"
import Header from "../../components/Header"

import tumanga from "../../public/images/TuManga.png"
import style from "../../styles/OneProject.module.css"

export default function PageProject() {
  const router = useRouter()
  const name = router.query.name

  return (
    <>
      <Header />
      <main className={style.mainContainer}>
        <header className={style.headerContainer}>
          <h2>{name}</h2>
          <h3 className={style.dateProject}>2022</h3>
        </header>
        <p className={style.paragraph}>
          Aplicación web creada para el TFG del Grado Superior de Desarrollo de
          Aplicaciones Web. La idea era formar una web para una tienda online en
          la que se vendería mangas, novelas ligeras y merchandising
          relacionado.
        </p>
        <section className={style.containerDataProject}>
          <div className={style.containerRow}>
            <h3>URL</h3>
            <a
              href="http://tumanga.arnaizdev.com/"
              target="_blank"
              className={style.link} rel="noreferrer"
            >
              https://tumanga.arnaizdev.com/
            </a>
          </div>
          <div className={style.containerRow}>
            <h3>Lenguajes</h3>
            <div className={style.projectLanguages}>
              <span className={style.tagLanguage}>React</span>
              <span className={style.tagLanguage}>NodeJS</span>
              <span className={style.tagLanguage}>MongoDB</span>
            </div>
          </div>
          <div className={style.containerRow}>
            <h3>Repositorio</h3>
            <a
              href="https://github.com/Arnaiz23/TuManga"
              target="_blank"
              className={style.link} rel="noreferrer"
            >
              http://github.com/Arnaiz23/TuManga
            </a>
          </div>
        </section>
        <picture>
          <Image
            src={tumanga}
            className={style.pictureProject}
            alt="TuManga Home"
          />
        </picture>
      </main>
      <Footer />
    </>
  )
}
