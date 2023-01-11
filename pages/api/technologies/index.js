import technologies from "@/public/data/technologies.json"

export default (_, res) => {
  res.setHeader("Content-type", "application/json")
  res.status(200).send(JSON.stringify(technologies))
}
