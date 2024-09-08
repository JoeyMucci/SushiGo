import { useEffect, useRef } from 'react'

import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  const emailRef = useRef(null)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const onSubmit = async (data) => {
    const response = await forgotPassword(data.email)

    if (response.error) {
      toast.error(response.error, {
        position: 'bottom-center',
        style: {
          background: '#004', // nightwing
          color: '#ff917d', // salmon
        },
        className: 'font-cal text-base',
      })
    } else {
      toast.success('Email Sent Successfully', {
        position: 'bottom-center',
        style: {
          background: '#004', // nightwing
          color: '#ff917d', // salmon
        },
        className: 'font-cal text-base',
      })
    }
  }

  return (
    <>
      <br />
      <br />
      <Form
        onSubmit={onSubmit}
        className="mx-auto flex w-1/4 flex-col rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-xl text-[color:var(--color-salmon)]"
      >
        <Label name="email">Email</Label>
        <TextField name="email" className="text-[color:black]" ref={emailRef} />
        <FieldError name="email" className="rw-field-error" />
        <br />
        <Submit className="rounded bg-[color:var(--color-oak)] px-2 py-2 font-cal text-6xl text-[color:var(--color-nature)]">
          Send Reset Email
        </Submit>
      </Form>
      <Toaster />
    </>
  )
}

export default ForgotPasswordPage
