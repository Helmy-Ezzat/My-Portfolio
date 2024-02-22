import { useState } from 'react'
import * as Yup from 'yup'
const useHandleSubmitAndValidation = () => {
  const [fullname, setFullname] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [pending, setPending] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [showFailureMessage, setShowFailureMessage] = useState(false)

  const handleValidation = async () => {
    const schema = Yup.object().shape({
      fullname: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      subject: Yup.string().required('Subject is required'),
      message: Yup.string().required('Message is required'),
    })
    try {
      await schema.validate(
        { fullname, email, subject, message },
        { abortEarly: false }
      )
      setErrors({})
      return true
    } catch (validationErrors) {
      let errorsObject: Record<string, string> = {}

      if (validationErrors instanceof Yup.ValidationError) {
        validationErrors.inner.forEach((error) => {
          if (error.path) {
            errorsObject[error.path] = error.message
          }
        })
      }
      setErrors(errorsObject)
      return false
    }
  }

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  try {
    let isValidForm = await handleValidation()
    if (!isValidForm) {
      console.log('Validation errors:', errors)
      return
    }

    setPending(true)
    const res = await fetch('/api/sendgrid', {
      body: JSON.stringify({
        email: email,
        fullname: fullname,
        subject: subject,
        message: message,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await res.json()
    if (error) {
      console.log(error)
      setShowSuccessMessage(false)
      setShowFailureMessage(true)
      setPending(false)
      return
    }

    setShowSuccessMessage(true)
    setShowFailureMessage(false)
    setPending(false)
    console.log(fullname, email, subject, message)
  } catch (error) {
    console.error('An unexpected error occurred:', error)
    setShowSuccessMessage(false)
    setShowFailureMessage(true)
    setPending(false)
  }
}

  return {
    email,
    errors,
    fullname,
    handleSubmit,
    message,
    setEmail,
    setErrors,
    setFullname,
    setMessage,
    setSubject,
    subject,
    pending,
    showSuccessMessage,
    setShowSuccessMessage,
    showFailureMessage,
  }
}

export default useHandleSubmitAndValidation
