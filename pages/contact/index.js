import Head from "next/head"
import ContactOption from "../../components/ContactOption"
import Layout from "../../components/Layout"

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Arnaizdev - Contact</title>
      </Head>
      <article>
        <h2>Contacto y recursos</h2>
        <section>
          <ContactOption
            title="Arnaiz23"
            image={faGithub}
            link="https://github.com/Arnaiz23"
            ariaLabel="GitHub link"
          />
          <ContactOption
            title="adri.arnaizfernandez@gmail.com"
            image={faEnvelope}
            reverse
            link="mailto:adri.arnaizfernandez@gmail.com"
            ariaLabel="Gmail link"
          />
          <ContactOption
            title="Adrián Arnaiz Fernández"
            image={faLinkedin}
            link="https://es.linkedin.com/in/adri%C3%A1n-arnaiz-fern%C3%A1ndez-b67743227/en?trk=people-guest_people_search-card"
            ariaLabel="Linkedin link"
          />
        </section>
      </article>
      <style jsx>{`
        article {
          width: 100%;
        }
        article h2 {
          text-align: center;
          margin: 40px;
          font-size: 30px;
        }
      `}</style>
    </Layout>
  )
}
