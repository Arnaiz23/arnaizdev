import { useState } from "react"
import style from "../styles/HeaderResp.module.css"

import ActiveLink from "./ActiveLink"
import BarsIcons from "@/components/icons/Bars"

export default function HeaderResp() {
  const [show, setShow] = useState(false)

  const handleResp = () => {
    show ? setShow(false) : setShow(true)
  }

  return (
    <div className={style.navResp}>
      <i onClick={handleResp}>
        <BarsIcons className={style.icon} />
      </i>
      <ul className={`${style.navRespUl} ${show ? style.showNav : ""}`}>
        <ActiveLink href="/" name="Inicio" />
        <ActiveLink href="/about" name="Sobre mi" />
        <ActiveLink href="/projects" name="Proyectos" />
        <ActiveLink href="/contact" name="Contactame" />
      </ul>
    </div>
  )
}
