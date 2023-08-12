import Head from "next/head"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import ContactOption from "@/components/ContactOption"
import Layout from "@/components/Layout"

import styles from "@/styles/Contact.module.css"

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Arnaizdev - Contact</title>
      </Head>
      <section className={styles.main}>
        <section>
          <h2 className={styles.title}>Recursos</h2>
          <ContactOption
            title="Arnaiz23"
            image={faGithub}
            link="https://github.com/Arnaiz23"
            ariaLabel="GitHub link"
          />
          <ContactOption
            title="Adrián Arnaiz Fernández"
            image={faLinkedin}
            reverse
            link="https://es.linkedin.com/in/adri%C3%A1n-arnaiz-fern%C3%A1ndez-b67743227/en?trk=people-guest_people_search-card"
            ariaLabel="Linkedin link"
          />
        </section>
        <section>
          <h2 className={styles.title}>Contacto</h2>
          <form className={styles.formContainer}>
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
        </section>
      </section>
    </Layout>
  )
}
