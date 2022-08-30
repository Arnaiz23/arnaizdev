import React from "react"
import styles from "./Header.module.css"
import brand from "../public/images/BrandTransparent.png"
import Image from "next/image"

import ActiveLink from "../components/ActiveLink"

export default function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <Image src={brand} width="80" height="80" />
        <h1>Arnaizdev</h1>
      </div>
      <div>
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
      </div>
    </nav>
  )
}
