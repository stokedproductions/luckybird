import { NextApiRequest, NextApiResponse } from 'next'

const sgMail = require('@sendgrid/mail')

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  console.log('SEND EMAIL')
  const mailString = process.env.NOTIFICATION_EMAILS
  const mailTo = mailString?.split(',')

  sgMail.setApiKey(process.env.SENDGRID_API_TOKEN)
  const { name, email, phone, company, roleInCompany } = request.body

  const msg = `
  Good News,\r\n\r\n
  We have a form submittion,\r\n\r\n
  Name: ${name},\r\n
  Email: ${email},\r\n
  Phone: ${phone},\r\n
  Company: ${company},\r\n
  Role: ${roleInCompany}\r\n
`

  try {
    await sgMail.send({
      to: mailTo,
      from: 'dean@stokedproductions.co.za',
      subject: 'Form Submittion',
      text: msg,
      html: msg.replace(/\r\n/g, '<br>'),
    })
    response.status(200).json({ text_status: 'Message sent successfully.' })
  } catch (error) {
    response.status(400).json({ text_status: 'Message not sent.' })
  }
}

export default handler
