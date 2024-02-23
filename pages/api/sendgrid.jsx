import ContactFormEmail from '@/email/ContactFormEmail'
import { renderToString } from 'react-dom/server'
import sendgrid from '@sendgrid/mail'

sendgrid.setApiKey(process.env.SEND_API_KEY)

async function sendEmail(req, res) {
  try {
    const emailHtml = renderToString(
      <ContactFormEmail
        fullname={req.body.fullname}
        email={req.body.email}
        subject={req.body.subject}
        message={req.body.message}
      />
    )
    await sendgrid.send({
      to: 'hellmyezzat@gmail.com', // Your email where you'll receive emails
      from: 'hellmyezzat@gmail.com', // your website email address here
      subject: `My Portfolio: ${req.body.subject}`,
      html: emailHtml,
    })
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}

export default sendEmail
