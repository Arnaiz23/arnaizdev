import React from "react"
import Link from "next/link"

import style from "../styles/TechStack.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact } from "@fortawesome/free-brands-svg-icons"

export default function TechStack({ title, line }) {
  return (
    <div className={style.containerHomeStacks}>
      <header>
        <h4>{title}</h4>
        <div className={line}></div>
      </header>
      <section className={style.techsImages}>
        <Link href="/technologie/react">
          <i className={style.iconTech}>
            <FontAwesomeIcon icon={faReact} />
          </i>
        </Link>
        <Link href="/technologie/react">
          <i className={style.iconTech}>
            <FontAwesomeIcon icon={faReact} />
          </i>
        </Link>{" "}
        <Link href="/technologie/react">
          <i className={style.iconTech}>
            <FontAwesomeIcon icon={faReact} />
          </i>
        </Link>{" "}
        <Link href="/technologie/react">
          <i className={style.iconTech}>
            <FontAwesomeIcon icon={faReact} />
          </i>
        </Link>{" "}
        <Link href="/technologie/react">
          <i className={style.iconTech}>
            <FontAwesomeIcon icon={faReact} />
          </i>
        </Link>{" "}
        <Link href="/technologie/react">
          <i className={style.iconTech}>
            <FontAwesomeIcon icon={faReact} />
          </i>
        </Link>
      </section>
    </div>
  )
}
