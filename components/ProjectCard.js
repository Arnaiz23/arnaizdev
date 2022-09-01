import Link from "next/link"

export default function ProjectCard() {
  return (
    <Link href="/projects/tumanga">
      <article>
        <picture>
          <img src="" alt="" />
        </picture>
        <h3>TuManga</h3>
        <p>Tienda online sobre mangas, novelas ligeras y merchandising.</p>
      </article>
    </Link>
  )
}
