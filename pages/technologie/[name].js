import Head from "next/head"
import Image from "next/image"

import style from "../../styles/OneTechnologie.module.css"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Course from "../../components/course"

export default function OneTechnologie({
  name,
  description,
  projects,
  courses,
  icon,
}) {
  return (
    <>
      <Head>
        <title>Arnaizdev - {name}</title>
      </Head>
      <Header />
      <section className={style.main}>
        <header className={style.header}>
          <Image src={icon} width={100} height={100} />
          <h2>{name}</h2>
        </header>
        <p>{description}</p>
        {projects.length > 0 && (
          <section className={style.projects}>
            <header>
              <h3>Proyectos</h3>
            </header>

            <ul>
              {projects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <li>{project.name}</li>
                </a>
              ))}
            </ul>
          </section>
        )}
        <section className={style.courses}>
          <header>
            <h3>Cursos</h3>
          </header>
          <div className={style.coursesGrid}>
            {courses.length <= 0 ? (
              <h4>No he realizado cursos extras de este lenguaje</h4>
            ) : (
              courses.map((course) => (
                <Course key={course.name} course={course} />
              ))
            )}
          </div>
        </section>
      </section>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const { params } = context
  const { name } = params
  const data = await fetch(`${process.env.API_URL}/technologies`).then((res) =>
    res.json()
  )
  const tech = data.find((e) => e.name === name)
  return { props: tech }
}
