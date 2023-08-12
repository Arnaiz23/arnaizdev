import { EmailTemplate } from "@/components/EmailTemplate.js"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async (req, res) => {
  try {
    const { email, name, message } = req.body
    console.log({ email, name, message })
    const data = await resend.emails.send({
      from: "Arnaizdev <onboarding@resend.dev>",
      to: ["aaf110501@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ name, email, message }),
    })

    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}
