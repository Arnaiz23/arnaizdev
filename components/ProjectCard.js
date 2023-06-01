import Link from "next/link"
import Image from "next/image"

import style from "../styles/ProjectCard.module.css"

export default function ProjectCard({ project }) {
  return (
    <Link href={`/projects/${project.name}`}>
      <section className={style.projectContainer}>
        <picture>
          <Image
            src={`/images/projects/${project.image}`}
            alt={project.name}
            width={300}
            // height={170}
            height={146}
            className={style.projectImage}
          />
        </picture>
        <h3>{project.name}</h3>
        <p>{project.short_description}</p>
      </section>
    </Link>
  )
}
