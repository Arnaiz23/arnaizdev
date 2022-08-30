import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function ActiveLink({ name, href, style }) {
  const router = useRouter()

  const styles = {
    color: router.pathname === href ? "var(--secondary-green)" : "#fff",
  }

  return (
    <Link href={href}>
      <a style={styles} className={style}>
        <li>{name}</li>
      </a>
    </Link>
  )
}
