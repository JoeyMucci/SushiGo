import { useRef, useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const emailRef = useRef(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message, {
        position: 'bottom-center',
        style: {
          background: '#004', // nightwing
          color: '#ff917d', // salmon
        },
        className: 'font-cal text-base',
      })
    } else if (response.error) {
      toast.error(response.error, {
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
        <TextField
          name="email"
          ref={emailRef}
          validation={{
            required: {
              value: true,
              message: 'Email is required',
            },
          }}
        />
        <FieldError name="email" className="rw-field-error" />

        <br />
        <Label name="password">Password</Label>
        <PasswordField
          name="password"
          validation={{
            required: {
              value: true,
              message: 'Password is required',
            },
          }}
        />
        <FieldError name="password" className="rw-field-error" />

        <br />

        <Submit className="rounded bg-[color:var(--color-oak)] px-2 py-2 font-cal text-6xl text-[color:var(--color-nature)]">
          Login
        </Submit>

        <br />

        <div className="text-center">
          <Link className="rw-link" to={routes.signup()}>
            Don&apos;t have an account?
          </Link>
          <br />
          <Link className="rw-link" to={routes.forgotPassword()}>
            Forgot Password?
          </Link>
        </div>
      </Form>
      <Toaster />
    </>
  )
}

export default LoginPage
