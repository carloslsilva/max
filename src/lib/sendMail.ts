'use server'

import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD
  }
})

export const sendMail = async ({
  name,
  email,
  message
}: {
  name: string
  email: string
  message: string
}) => {
  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: `${name} has messaged you from (${email})`,
    text: message
  }

  try {
    await transport.sendMail(mailOptions)
  } catch (error) {
    console.log(`The email was not sent. Error: ${error}`)
  }
}
