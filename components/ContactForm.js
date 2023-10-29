import { useState } from "react"
import { Toaster, toast } from "sonner"

import styles from "@/styles/Contact.module.css"

const ContactForm = () => {
  const [data, setData] = useState({
    email: "",
    name: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    email: false,
    name: false,
    message: false,
  })

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!data.email) {
      setErrors({
        ...errors,
        email: true,
      })
      toast.error("The email is required!!!")
      return
    }

    if (!data.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      setErrors({
        ...errors,
        email: true,
      })
      toast.error("The email format is invalid!!!")
      return
    }

    errors.email = false

    if (!data.name) {
      setErrors({
        ...errors,
        name: true,
      })
      toast.error("The name is required!!!")
      return
    }

    errors.name = false

    if (!data.message) {
      setErrors({
        ...errors,
        message: true,
      })
      toast.error("The message is required!!!")
      return
    }

    errors.message = false

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.status !== 200)
        throw new Error("Error al enviar el formulario. Intentelo más tarde.")

      await response.json()

      setData({
        email: "",
        name: "",
        message: "",
      })

      toast.success("Correo enviado!!!")
    } catch (error) {
      toast.error(error.message)
    }
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
              className={errors.email ? styles.contactFormError : ""}
            />
          </div>
          <div className={styles.containerInput}>
            <label>Nombre y apellidos</label>
            <input
              type="text"
              name="name"
              placeholder="Adrián"
              onChange={handleChange}
              required
              value={data.name}
              className={errors.name ? styles.contactFormError : ""}
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
            className={errors.message ? styles.contactFormError : ""}
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
