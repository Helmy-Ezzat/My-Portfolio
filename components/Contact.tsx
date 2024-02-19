'use client'
import { useSectionInView } from '@/hooks/useSectionInView'
import React from 'react'
import { Heading } from '.'
import SubmitBtn from './SubmitBtn'

function Contact() {
  const { ref } = useSectionInView('Contact')

  return (
    <section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <Heading>Contact me</Heading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{' '}
        <a
          className="text-blue-600 hover:underline"
          href="mailto:hellmyezzat@gmail.com"
        >
          hellmyezzat@gmail.com
        </a>{' '}
        or WhatsApp, <br /> or through this form.
      </p>
      <form className="flex flex-col mt-10 gap-2">
        <input
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          className="borderBlack h-14 px-4 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
          className="borderBlack h-52 rounded-lg p-4"
        />
        <SubmitBtn />
      </form>
    </section>
  )
}

export default Contact
