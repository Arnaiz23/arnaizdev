import { join } from "path"
import { readFileSync } from "fs"

export default (_, res) => {
  const path = join(process.cwd(), "./public/curriculum.pdf")
  const cv = readFileSync(path)
  res.send(cv)
}
