import Head from "next/head"

import Layout from "@/components/Layout"

import style from "../styles/404.module.css"

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>Arnaizdev - 404</title>
      </Head>
      <div className={style.container}>
        <h2>Página no encontrada 404</h2>
        <img src="/images/this-is-fine-404.gif" alt="404 meme gif" />
      </div>
    </Layout>
  )
}
