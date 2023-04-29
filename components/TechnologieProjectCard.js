import style from "@/styles/OneTechnologie.module.css"

export default function TechnologieProjectCard({ project }) {
  return (
    <li className={style.card}>
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className={style.listAnchor}
      >
        <header className={style.headerCard}>
          <picture>
            <img
              src={`/images/projects/${project.preview}`}
              alt={`${project.name} preview`}
              width={300}
              height={170}
              style={{ objectFit: "contain" }}
            />
          </picture>
        </header>
        <footer className={style.footerCard}>
          <span>{project.name}</span>
        </footer>
      </a>
    </li>
  )
}
