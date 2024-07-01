import Head from "next/head"

import styles from "@/styles/Contact.module.css"

import ContactOption from "@/components/ContactOption"
import Layout from "@/components/Layout"
import ContactForm from "@/components/ContactForm"
import GithubIcon from "@/components/icons/Github"
import LinkedinIcon from "@/components/icons/Linkedin"

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Arnaizdev - Contact</title>
        <link rel="canonical" href="https://arnaizdev.com/contact" />
      </Head>
      <section className={styles.main}>
        <section>
          <h2 className={styles.title}>Recursos</h2>
          <ContactOption
            title="Arnaiz23"
            image={GithubIcon}
            link="https://github.com/Arnaiz23"
            ariaLabel="GitHub link"
          />
          <ContactOption
            title="Adrián Arnaiz Fernández"
            image={LinkedinIcon}
            reverse
            link="https://es.linkedin.com/in/adri%C3%A1n-arnaiz-fern%C3%A1ndez-b67743227/en?trk=people-guest_people_search-card"
            ariaLabel="Linkedin link"
          />
        </section>
        <section>
          <h2 className={styles.title}>Contacto</h2>
          <ContactForm />
        </section>
      </section>
    </Layout>
  )
}
