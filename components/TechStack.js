import React from "react"
import Link from "next/link"
import Image from "next/image"

import style from "../styles/TechStack.module.css"

export default function TechStack({ title, line, elements }) {
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
          elements.map(({ name, icon }) => (
            <Link href={`/technologie/${name}`} key={name}>
              <picture className={style.iconTech} title={name}>
                <Image src={`/images/${icon}`} width={100} height={100} />
              </picture>
            </Link>
          ))
        )}
      </section>
    </div>
  )
}
