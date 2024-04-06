import React from "react"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <h3>&copy; {year} Adrián Arnaiz Fernández.</h3>
      <style jsx>{`
        h3 {
          color: #bbb;
          font-size: 14px;
          width: 100%;
          text-align: center;
          padding: 20px;
        }
      `}</style>
    </footer>
  )
}
