import React from "react"
import Image from "next/image"

import style from "../styles/OptionsCardsHome.module.css"
import back from "public/images/back.webp"
import front from "public/images/front.webp"

export default function OptionsCardsHome() {
  return (
    <div className={style.containerHomeCards}>
      <div className={style.homeCard}>
        <figure>
          <Image src={front} width={60} height={60} alt="FrontEnd image" />
        </figure>
        <h3>Front-end</h3>
        <p>Experiencia adquirida a través de cursos y proyectos realizados</p>
      </div>
      <div className={style.homeCard}>
        <figure>
          <Image src={back} width="60" height="60" alt="BackEnd image" />
        </figure>
        <h3>Back-end</h3>
        <p>Actualmente solo he creado y practicado con API REST</p>
      </div>
    </div>
  )
}
