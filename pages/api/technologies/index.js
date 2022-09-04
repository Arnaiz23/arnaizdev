import { technologies } from "../../../data/technologies.js"

export default (req, res) => {
  res.status(200).send(JSON.stringify(technologies))
}
