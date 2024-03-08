import { Resend } from "resend"
import z from "zod"

import { EmailTemplate } from "@/components/EmailTemplate.js"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async (req, res) => {
  const { email, name, message } = req.body

  const schema = z.object({
    email: z
      .string({
        required_error: "The email is required!!!",
      })
      .email(),
    name: z.string({
      required_error: "The name is required!!!",
    }),
    message: z.string({
      required_error: "The message is required!!!",
    }),
  })

  try {
    schema.parse({ email, name, message })
  } catch (error) {
    return res.status(404).json(error.issues)
  }

  try {
    const data = await resend.emails.send({
      from: "Arnaizdev <noreply@arnaizdev.com>",
      to: [process.env.RESEND_TO_EMAIL],
      subject: "New message from my portfolio",
      react: EmailTemplate({ name, email, message }),
    })

    return res.status(200).json(data)
  } catch (error) {
    return res.status(400).json(error)
  }
}
