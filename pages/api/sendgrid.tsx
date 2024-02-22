// import ContactFormEmail from '@/email/ContactFormEmail'
// import sendgrid from '@sendgrid/mail'
// import { renderToString } from 'react-dom/server'

// sendgrid.setApiKey(process.env.SEND_API_KEY)

// async function sendEmail(req, res) {
//   try {
//     const emailHtml = renderToString(
//       <ContactFormEmail
//         fullname={req.body.fullname}
//         email={req.body.email}
//         subject={req.body.subject}
//         message={req.body.message}
//       />
//     )
//     await sendgrid.send({
//       to: 'hellmyezzat@gmail.com',
//       from: 'helmyezzat3000@gmail.com',
//       subject: `[Lead from website] : ${req.body.subject}`,
//       html: emailHtml,
//     })
//   } catch (error) {
//     // console.log(error);
//     return res.status(error.statusCode || 500).json({ error: error.message })
//   }

//   return res.status(200).json({ error: '' })
// }

// export default sendEmail

import ContactFormEmail from '@/email/ContactFormEmail'
import sendgrid from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'
import { renderToString } from 'react-dom/server'

if (!process.env.SEND_API_KEY) {
  throw new Error('SEND_API_KEY is not defined')
}

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const emailHtml = renderToString(
      <ContactFormEmail
        fullname={req.body.fullname! as string}
        email={req.body.email! as string}
        subject={req.body.subject! as string}
        message={req.body.message! as string}
      />
    )
    await sendgrid.send({
      to: 'hellmyezzat@gmail.com',
      from: 'helmyezzat3000@gmail.com',
      subject: `[Lead from website] : ${req.body.subject}`,
      html: emailHtml,
    })
    return res.status(200).json({ error: '' })
  } catch (error) {
   if (error instanceof Error && typeof error === 'number') {
     return res.status(error || 500).json({ error: error })
   } else {
     return res.status(500).json({ error: 'An unexpected error occurred' })
   }
  }
}

export default sendEmail
