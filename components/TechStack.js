import React from "react"
import Link from "next/link"

import style from "../styles/TechStack.module.css"

export default function TechStack({ title, line, elements }) {
  console.log(elements)
  return (
    <div className={style.containerHomeStacks}>
      <header>
        <h4>{title}</h4>
        <div className={line}></div>
      </header>
      <section className={style.techsImages}>
        {elements.length <= 0 ? (
          <h4>No hay tecnologías</h4>
        ) : (
          elements.map((element) => (
            <Link href={`/technologie/${element.name}`} key={element.name}>
              <i className={style.iconTech} title={element.name}></i>
            </Link>
          ))
        )}
      </section>
    </div>
  )
}
