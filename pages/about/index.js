import Image from "next/image"
import Head from "next/head"

import style from "../../styles/About.module.css"

import arnaiz from "/public/images/arnaiz.jpg"
import Layout from "../../components/Layout"

export default function AboutMe() {
  return (
    <Layout>
      <Head>
        <title>Arnaizdev - About</title>
      </Head>
      <section className={style.center}>
        <header className={style.header}>
          <div className={style.containerName}>
            <h2>Adrián Arnaiz Fernández</h2>
            <h3>Full Stack Developer</h3>
          </div>
          <div className={style.containerImage}>
            <Image src={arnaiz} alt="Adrián Arnaiz face" />
          </div>
        </header>
        <div className={style.containerButton}>
          <a
            href={`${process.env.NEXT_PUBLIC_API_URL}/curriculum`}
            download
            className={style.buttonCV}
          >
            Descargar CV
          </a>
        </div>
        <article className={style.containerText}>
          <h3>Sobre mi</h3>
          <div>
            <p>
              Soy Adrián Arnaiz Fernández, desarrollo aplicaciones web desde
              2021. Actualmente residiendo en Madrid, España.
            </p>
            <p>
              En segundo de Grado Medio, descubri la parte de programación con
              HTML, CSS y JavaScript. A partir de ahí, me gusto y empecé a
              interesarme lo suficiente como para investigar más y poder
              dedicarme a ello.
            </p>
            <p>
              Actualmente he desarrollado algunos proyectos, tanto personales
              como para los Grados.
            </p>
            <p>
              Estoy en proceso de aprendizaje / mejora de mis habilidades con el
              Inglés. Tengo el nivel suficiente para poder manejarme con las
              documentaciones.
            </p>
          </div>
        </article>
        <article className={style.containerText}>
          <h3>Bio</h3>
          <section className={style.containerBio}>
            <div>
              <h4>2022</h4>
              <p>Prácticas del Grado Superior en Secretaligner</p>
            </div>
            <div>
              <h4>2020 - 2022</h4>
              <p>
                Realizado el Grado Superior "Desarrollo de Aplicaciones Web" en
                IES El Cañaveral
              </p>
            </div>
            <div>
              <h4>2018 - 2020</h4>
              <p>
                Realizado el Grado Medio "Sistemas Microinformáticos en Red" en
                IES El Cañaveral
              </p>
            </div>
          </section>
        </article>
        <article className={style.containerText}>
          <h3>I ♥</h3>
          <p>Leer, Series, Películas, Música.</p>
        </article>
      </section>
    </Layout>
  )
}
