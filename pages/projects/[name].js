import Image from "next/image"
import Head from "next/head"

import Footer from "../../components/Footer"
import Header from "../../components/Header"

import style from "../../styles/OneProject.module.css"

export default function PageProject({
  image,
  name,
  description,
  date,
  url,
  repositorie,
  languages,
}) {
  return (
    <>
      <Head>
        <title>Arnaizdev - {name}</title>
      </Head>
      <Header />
      <section className={style.mainContainer}>
        <header className={style.headerContainer}>
          <h2>{name}</h2>
          <h3 className={style.dateProject}>{date}</h3>
        </header>
        <p className={style.paragraph}>{description}</p>
        <section className={style.containerDataProject}>
          <div className={style.containerRow}>
            <h3>URL</h3>
            <a
              href={url}
              target="_blank"
              className={style.link}
              rel="noreferrer"
            >
              {url}
            </a>
          </div>
          <div className={style.containerRow}>
            <h3>Lenguajes</h3>
            <div className={style.projectLanguages}>
              {languages.map((lang) => (
                <span className={style.tagLanguage} key={lang}>
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div className={style.containerRow}>
            <h3>Repositorio</h3>
            <a
              href={repositorie}
              target="_blank"
              className={style.link}
              rel="noreferrer"
            >
              {repositorie}
            </a>
          </div>
        </section>
        <picture>
          <Image
            src={image}
            width={1528}
            height={850}
            className={style.pictureProject}
            alt="TuManga Home"
          />
        </picture>
      </section>
      <Footer />
    </>
  )
}

export async function getServerSideProps(context) {
  const { params } = context
  const { name } = params

  const apiResponse = await fetch(`${process.env.API_URL}/projects`)
  if (apiResponse.ok) {
    const data = await apiResponse.json()
    const props = data.find((project) => project.name === name)
    return { props }
  }
}
