import { EmailTemplate } from "@/components/EmailTemplate.js"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export default async (req, res) => {
  try {
    const { email, name, message } = req.body
    const data = await resend.emails.send({
      from: "Arnaizdev <onboarding@resend.dev>",
      to: [process.env.RESEND_TO_EMAIL],
      subject: "New message from my portfolio",
      react: EmailTemplate({ name, email, message }),
    })

    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}
