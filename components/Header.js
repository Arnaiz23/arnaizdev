import React from "react"
import styles from "../styles/Header.module.css"
import brand from "public/images/BrandTransparent.webp"
import Image from "next/image"
import Link from "next/link"

import ActiveLink from "../components/ActiveLink"
import HeaderResp from "./HeaderResp"

export default function Header() {
  return (
    <header className={styles.nav}>
      <div className={styles.brand}>
        <Image src={brand} width="80" height="80" alt="Arnaizdev brand" />
        <Link href="/">
          <h1>Arnaizdev</h1>
        </Link>
      </div>
      <nav>
        <ul className={styles.navOptions}>
          <ActiveLink href="/" name="Inicio" />
          <ActiveLink href="/about" name="Sobre mi" />
          <ActiveLink href="/projects" name="Proyectos" />
          <ActiveLink
            href="/contact"
            name="Contactame"
            style={styles.navContact}
          />
        </ul>
      </nav>
      <HeaderResp />
    </header>
  )
}
