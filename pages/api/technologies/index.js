import { technologies } from "../../../data/technologies.js"

export default (req, res) => {
  res.setHeader("Content-type", "application/json")
  res.status(200).send(JSON.stringify(technologies))
}
