import style from "@/styles/OneTechnologie.module.css"
import Image from "next/image"

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
            <Image
              src={`/images/previews/${project.preview}`}
              alt={`${project.name} preview`}
              width={300}
              height={170}
              objectFit="contain"
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
