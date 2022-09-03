import Image from "next/image"

import style from "../../styles/About.module.css"

import Footer from "../../components/Footer"
import Header from "../../components/Header"

import arnaiz from "../../public/images/arnaiz.jpg"

export default function AboutMe() {
  return (
    <>
      <Header />
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
        <article className={style.containerText}>
          <h3>Sobre mi</h3>
          <p>
            Es un hecho establecido hace demasiado tiempo que un lector se
            distraerá con el contenido del texto de un sitio mientras que mira
            su diseño. El punto de usar Lorem Ipsum es que tiene una
            distribución más o menos normal de las letras, al contrario de usar
            textos como por ejemplo "Contenido aquí, contenido aquí". Estos
            textos hacen parecerlo un español que se puede leer. Muchos paquetes
            de autoedición y editores de páginas web usan el Lorem Ipsum como su
            texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar
            por resultado muchos sitios web que usan este texto si se encuentran
            en estado de desarrollo. Muchas versiones han evolucionado a través
            de los años, algunas veces por accidente, otras veces a propósito
            (por ejemplo insertándole humor y cosas por el estilo).
          </p>
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
      </section>
      <Footer />
    </>
  )
}
