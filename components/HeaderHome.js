import React from "react"
import Image from "next/image"

import style from "../styles/HeaderHome.module.css"

export default function HeaderHome() {
  return (
    <div className={style.containerHeaderHome}>
      <div className={style.headerHomeLeft}>
        <h2 className={style.nameBrandTitle}>Arnaizdev</h2>
        <h3>
          Full-Stack Web Developer and
          <b className={style.javascript}>JavaScript</b> lover.
        </h3>
        <p>Fan de la maquetación con HTML y CSS</p>
      </div>
      <div className={style.headerHomeRight}>
        <Image src="/images/BrandTransparent.png" width={200} height={200} />
      </div>
    </div>
  )
}
