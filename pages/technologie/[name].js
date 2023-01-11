import Head from "next/head"
import Image from "next/image"

import style from "../../styles/OneTechnologie.module.css"
import Course from "../../components/course"
import Layout from "../../components/Layout"

export default function OneTechnologie({
  name,
  description,
  projects,
  courses,
  icon,
}) {
  return (
    <Layout>
      <Head>
        <title>Arnaizdev - {name}</title>
      </Head>
      <section className={style.main}>
        <header className={style.header}>
          <Image
            src={`/images/${icon}`}
            width={100}
            height={100}
            alt={`${name} icon`}
          />
          <h2>{name}</h2>
        </header>
        <p>{description}</p>
        {projects.length > 0 && (
          <section className={style.projects}>
            <header>
              <h3>Proyectos</h3>
            </header>

            <ul className={style.projectList}>
              {projects.map((project) => (
                <li key={project.name}>
                  <a href={project.url} target="_blank" rel="noreferrer">
                    {project.name}
                  </a>
                </li>
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
    </Layout>
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
