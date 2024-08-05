import { useRef } from 'react'
import { useEffect } from 'react'

import { Form, Label, TextField, PasswordField, Submit } from '@redwoodjs/forms'
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

  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({
      username: data.username,
      email: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
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
        <Label name="username">Username</Label>
        <TextField
          name="username"
          autoComplete="username"
          ref={usernameRef}
          validation={{
            required: {
              value: true,
              message: 'Username is required',
            },
          }}
        />
        <br />
        <Label name="email">Email</Label>
        <TextField
          name="email"
          validation={{
            required: {
              value: true,
              message: 'Email is required',
            },
          }}
        />
        <br />
        <Label name="password">Password</Label>
        <PasswordField
          name="password"
          autoComplete="current-password"
          validation={{
            required: {
              value: true,
              message: 'Password is required',
            },
          }}
        />

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
