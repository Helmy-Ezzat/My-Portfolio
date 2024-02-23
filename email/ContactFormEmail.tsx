import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
  fullname: string
  email: string
  subject: string
  message: string
}

export default function ContactFormEmail({
  fullname,
  email,
  message,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight text-center">
                You've got a new mail from{' '}
                <span className="text-blue-500">{fullname} 🧑‍💼</span>
              </Heading>
              <Text className="text-center font-semibold">Message</Text>
              <Text className="text-center">{message}</Text> <Hr />
              <Text className="text-center">
                {' '}
                <span className="font-semibold">Email:</span> {email}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}
