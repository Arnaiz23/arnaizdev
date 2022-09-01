import { useRouter } from "next/router"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

export default function PageProject(props) {
  const router = useRouter()
  const name = router.query.name

  return (
    <>
      <Header />
      <main>
        <h2>Project name: {name}</h2>
      </main>
      <Footer />
    </>
  )
}
