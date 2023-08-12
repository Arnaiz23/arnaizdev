import { useState } from "react"
import { Toaster, toast } from "sonner"

import styles from "@/styles/Contact.module.css"

const ContactForm = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    message: "",
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log({ data })
    const response = await fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })

    await response.json()

    setData({
      email: "",
      name: "",
      message: "",
    })

    toast.success("Correo enviado!!!")
  }

  return (
    <>
      <Toaster richColors />
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.containerInput}>
            <label>Correo</label>
            <input
              type="email"
              name="email"
              placeholder="test@gmail.com"
              onChange={handleChange}
              required
              value={data.email}
            />
          </div>
          <div className={styles.containerInput}>
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              placeholder="Adrián"
              onChange={handleChange}
              required
              value={data.name}
            />
          </div>
        </div>
        <div className={styles.containerTextArea}>
          <label>Mensaje</label>
          <textarea
            name="message"
            placeholder="Escribe tu mensaje..."
            onChange={handleChange}
            required
            value={data.message}
          ></textarea>
        </div>
        <button type="submit" className={styles.buttonSubmit}>
          Enviar
        </button>
      </form>
    </>
  )
}

export default ContactForm
