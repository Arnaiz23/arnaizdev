import Image from "next/image"

import style from "../styles/OneTechnologie.module.css"

export default function Course({ course }) {
  return (
    <section className={style.courseCard}>
      <a href={course.url} target="_blank" rel="noreferrer">
        <picture>
          <Image
            src={`/images/courses/${course.image}`}
            alt={course.name}
            width={300}
            height={200}
            className={style.image}
          />
        </picture>
        <h4>{course.name}</h4>
        <p>{course.description} </p>
      </a>
    </section>
  )
}
