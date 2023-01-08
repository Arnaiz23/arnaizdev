import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function ActiveLink({ name, href, style }) {
  const router = useRouter()

  const styles = {
    color: router.pathname === href ? "var(--secondary-green)" : "#fff",
  }

  return (
    <li style={styles} className={style}>
      <Link href={href} style={{ color: "#fff" }}>
        {name}
      </Link>
    </li>
  )
}
