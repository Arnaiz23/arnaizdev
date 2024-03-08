import style from "../styles/ContactOption.module.css"

export default function ContactOption({
  reverse,
  image,
  title,
  link,
  ariaLabel,
}) {
  const Icon = image

  return (
    <article className={`${style.contactOption} ${reverse && style.reverse}`}>
      <a
        href={link}
        target="_blank"
        className={style.icon}
        rel="noreferrer"
        aria-label={ariaLabel}
      >
        <Icon />
      </a>
      <h3>{title}</h3>
    </article>
  )
}
