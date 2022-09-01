import style from "../styles/ContactOption.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ContactOption({ reverse, image, title, link }) {
  return (
    <article className={`${style.contactOption} ${reverse && style.reverse}`}>
      <a href={link} target="_blank" className={style.icon} rel="noreferrer">
        <i>
          <FontAwesomeIcon icon={image} />
        </i>
      </a>
      <h3>{title}</h3>
    </article>
  )
}
