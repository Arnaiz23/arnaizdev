import React, { useEffect, useState } from "react"

import styles from "../styles/ButtonUp.module.css"
import ArrowUpIcon from "./icons/ArrowUp"

export default function ButtonUp() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const showButtonScroll = () => {
      const currentScroll = document.documentElement.scrollTop

      if (currentScroll > 200) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    }

    window.addEventListener("scroll", showButtonScroll)

    return () => window.removeEventListener("scroll", showButtonScroll)
  }, [])

  const scrollToTop = () => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      className={`${styles.button} ${showButton ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label="Up"
    >
      <ArrowUpIcon />
    </button>
  )
}
