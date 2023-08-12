import styles from "@/styles/Contact.module.css"

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.containerInput}>
          <label>Correo</label>
          <input type="email" placeholder="test@gmail.com" />
        </div>
        <div className={styles.containerInput}>
          <label>Nombre</label>
          <input type="text" placeholder="Adrián" />
        </div>
      </div>
      <div className={styles.containerTextArea}>
        <label>Mensaje</label>
        <textarea placeholder="Escribe tu mensaje..."></textarea>
      </div>
      <button type="submit" className={styles.buttonSubmit}>
        Enviar
      </button>
    </form>
  )
}

export default ContactForm
