import Image from "next/image"
import Head from "next/head"
import Layout from "../../components/Layout"

import style from "../../styles/OneProject.module.css"

const TECHNOLOGIES_URL = {
  React: "https://react.dev/",
  NodeJS: "https://nodejs.org/en",
  MongoDB: "https://www.mongodb.com/",
  "Tailwind CSS": "https://tailwindcss.com/",
  TypeScript: "https://www.typescriptlang.org/",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  "React Native": "https://reactnative.dev/",
}

export default function PageProject({
  name,
  description,
  date,
  url,
  repositorie,
  languages,
  images,
}) {
  return (
    <Layout>
      <Head>
        <title>Arnaizdev - {name}</title>
      </Head>
      <section className={style.mainContainer}>
        <header className={style.headerContainer}>
          <h2>{name}</h2>
          <h3 className={style.dateProject}>{date}</h3>
        </header>
        <p className={style.paragraph}>{description}</p>
        <section className={style.containerDataProject}>
          <div className={style.containerRow}>
            <h3>URL</h3>
            {url ? (
              <a
                href={url}
                target="_blank"
                className={style.link}
                rel="noreferrer"
              >
                {url}
              </a>
            ) : (
              <p className={style.link}>No existe</p>
            )}
          </div>
          <div className={style.containerRow}>
            <h3>Lenguajes</h3>
            <div className={style.projectLanguages}>
              {languages.map(({ name, class: classLang }) => (
                <a
                  href={TECHNOLOGIES_URL[name]}
                  key={name}
                  target="_blank"
                  rel="noreferrer"
                  className={style.linkLanguage}
                >
                  <span className={`${style.tagLanguage} ${classLang}`}>
                    {name}
                  </span>
                </a>
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
        <picture className={style.imagesContainer}>
          {images &&
            images.map((image) => (
              <Image
                src={`/images/projects/${image}`}
                width={1528}
                height={850}
                className={style.pictureProject}
                alt={`${name} Home`}
                key={image}
              />
            ))}
        </picture>
      </section>
    </Layout>
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
