import React from "react"
import Link from "next/link"
import Image from "next/image"

import react from "../public/images/react.png"
import style from "../styles/TechStack.module.css"

export default function TechStack({ title, line }) {
  return (
    <div className={style.containerHomeStacks}>
      <header>
        <h4>{title}</h4>
        <div className={line}></div>
      </header>
      <section className={style.techsImages}>
        <Link href="/technologie/react">
          <figure>
            <Image src={react} width="80" height="80" />
          </figure>
        </Link>
        <Link href="/technologie/react">
          <figure>
            <Image src={react} width="80" height="80" />
          </figure>
        </Link>
        <Link href="/technologie/react">
          <figure>
            <Image src={react} width="80" height="80" />
          </figure>
        </Link>
        <Link href="/technologie/react">
          <figure>
            <Image src={react} width="80" height="80" />
          </figure>
        </Link>
        <Link href="/technologie/react">
          <figure>
            <Image src={react} width="80" height="80" />
          </figure>
        </Link>
      </section>
    </div>
  )
}
