import projects from "@/public/data/projects.json"

export default (req, res) => {
  res.setHeader("Content-type", "application/json")
  res.status(200).send(projects)
}
