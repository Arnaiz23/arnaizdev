import Image from "next/image"

import midu from "../public/images/midu.jpg"
import style from "../styles/OneTechnologie.module.css"

export default function Course() {
  return (
    <section className={style.courseCard}>
      <a
        href="https://www.youtube.com/watch?v=T_j60n1zgu0"
        target="_blank"
        rel="noreferrer"
      >
        <Image src={midu} alt="Curso" className={style.image} />
        <h4>Master en Frameworks JavaScript...</h4>
        <p>
          En este curso aprendí React desde cero. Se usan las clases de React.
        </p>
      </a>
    </section>
  )
}
