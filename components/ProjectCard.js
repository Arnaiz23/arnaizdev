import Link from "next/link"
import Image from "next/image"

import style from "../styles/ProjectCard.module.css"
import tumanga from "../public/images/TuManga.png"

export default function ProjectCard() {
  return (
    <Link href="/projects/tumanga">
      <section className={style.projectContainer}>
        <picture>
          <Image src={tumanga} alt="TuManga" className={style.projectImage} />
        </picture>
        <h3>TuManga</h3>
        <p>Tienda online sobre mangas, novelas ligeras y merchandising.</p>
      </section>
    </Link>
  )
}
