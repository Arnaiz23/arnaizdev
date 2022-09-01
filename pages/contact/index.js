import Head from "next/head"
import ContactOption from "../../components/ContactOption"

import Footer from "../../components/Footer"
import Header from "../../components/Header"

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Arnaizdev - Contact</title>
      </Head>
      <Header />
      <main>
        <h2>Contacto y recursos</h2>
        <section>
          <ContactOption
            title="Arnaiz23"
            image={faGithub}
            link="https://github.com/Arnaiz23"
          />
          <ContactOption
            title="adri.arnaizfernandez@gmail.com"
            image={faEnvelope}
            reverse
            link="mailto:adri.arnaizfernandez@gmail.com"
          />
          <ContactOption
            title="Adrián Arnaiz Fernández"
            image={faLinkedin}
            link="https://es.linkedin.com/in/adri%C3%A1n-arnaiz-fern%C3%A1ndez-b67743227/en?trk=people-guest_people_search-card"
          />
        </section>
      </main>
      <style jsx>{`
        main {
          width: 100%;
        }
        main h2 {
          text-align: center;
          margin: 40px;
          font-size: 30px;
        }
      `}</style>
      <Footer />
    </>
  )
}
