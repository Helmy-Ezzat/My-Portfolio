'use client'
import { useEffect } from 'react'
import { Heading } from '.'
import { useSectionInView } from '@/hooks/useSectionInView'
import useHandleSubmitAndValidation from '@/hooks/useHandleSubmit'
import { CgAirplane } from 'react-icons/cg'
import { PiAirplaneTiltLight } from 'react-icons/pi'

export default function ContactMe() {
  const { ref } = useSectionInView('Contact')
  const {
    email,
    errors,
    fullname,
    handleSubmit,
    message,
    setEmail,
    setFullname,
    setMessage,
    setSubject,
    subject,
    pending,
    showSuccessMessage,
    setShowSuccessMessage,
    showFailureMessage,
  } = useHandleSubmitAndValidation()

  useEffect(() => {
    const timer = setTimeout(() => setShowSuccessMessage(false), 3000)
    return () => clearTimeout(timer)
  }, [showSuccessMessage])

  return (
    <section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] scroll-mt-[5rem] sm:scroll-mt-[8rem]"
    >
      <Heading>Contact me</Heading>
      <p className="text-gray-700 -mt-6  dark:text-white/80 text-center">
        Please contact me directly at{' '}
        <a
          className="text-blue-600 hover:underline dark:text-blue/80"
          href="mailto:hellmyezzat@gmail.com"
        >
          hellmyezzat@gmail.com
        </a>{' '}
        or WhatsApp, <br /> or through this form.
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-10 rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-gray-800 dark:bg-opacity-70"
      >
        <h1 className="text-2xl font-bold dark:text-gray-50">Send a message</h1>

        <label
          htmlFor="fullname"
          className="text-gray-500 font-light mt-8 dark:text-gray-50"
        >
          Full name<span className="text-red-500 dark:text-gray-50">*</span>
        </label>
        <input
          type="text"
          value={fullname}
          onChange={(e) => {
            setFullname(e.target.value)
          }}
          name="fullname"
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />
        {errors && errors.fullname && (
          <div className="text-red-500 text-sm mt-3">{errors.fullname}</div>
        )}

        <label
          htmlFor="email"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          E-mail<span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />
        {errors && errors.email && (
          <div className="text-red-500 text-sm mt-3">{errors.email}</div>
        )}

        <label
          htmlFor="subject"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          Subject<span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value)
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        />
        {errors && errors.subject && (
          <div className="text-red-500 text-sm mt-3">{errors.subject}</div>
        )}

        <label
          htmlFor="message"
          className="text-gray-500 font-light mt-4 dark:text-gray-50"
        >
          Message<span className="text-red-500">*</span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
          className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
        ></textarea>
        {errors && errors.message && (
          <div className="text-red-500 text-sm mt-3">{errors.message}</div>
        )}

        <button
          type="submit"
          className="group mt-8
            flex items-center justify-center gap-2 bg-gray-900 text-white
            h-[3rem] w-[8rem] rounded-full outline-none transition-all
            focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
            disabled:scale-100 disabled:bg-opacity-65
           dark:bg-white/30 dark:bg-opacity-10"
          disabled={pending}
        >
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white disabled:scale-100 disabled:bg-opacity-65"></div>
          ) : (
            <div className="flex gap-2 items-center justify-center">
              Submit
              <PiAirplaneTiltLight className="text-2xl opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
              {/* <airplaneIcon/> */}
            </div>
          )}
        </button>

        {showSuccessMessage && (
          <div>
            <p className="text-green-500 text-center mt-1">
              Thankyou! Your Message has been delivered.👍🎉
            </p>
          </div>
        )}
        {showFailureMessage && (
          <div>
            <p className="text-red-500 text-center mt-1">
              Error! Failed to deliver the message. 😞
            </p>
          </div>
        )}
      </form>
    </section>
  )
}
