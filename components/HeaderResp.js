import { useState } from "react"
import style from "../styles/HeaderResp.module.css"

import ActiveLink from "./ActiveLink"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function HeaderResp() {
  const [show, setShow] = useState(false)

  const handleResp = () => {
    console.log(show)
    show ? setShow(false) : setShow(true)
  }

  return (
    <div className={style.navResp}>
      <i onClick={handleResp}>
        <FontAwesomeIcon icon={faBars} className={style.icon} />
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
