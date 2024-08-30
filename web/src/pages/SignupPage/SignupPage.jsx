import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, routes, navigate } from '@redwoodjs/router'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on username box on page load
  const emailRef = useRef(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const passwordRef = useRef(null)

  const onSubmit = async (data) => {
    const response = await signUp({
      username: data.email.toLowerCase(),
      name:
        data.nickname.toUpperCase().substring(0, 1) +
        data.nickname.toLowerCase().substring(1),
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
      toast(response.message)
    } else if (response.error) {
      let message = response.error
      if (
        response.error.includes(
          'Unique constraint failed on the fields: (`name`)'
        )
      )
        message =
          'Name ' +
          data.nickname.toUpperCase().substring(0, 1) +
          data.nickname.toLowerCase().substring(1) +
          ' is already in use'
      toast.error(message, {
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
          className="text-[color:black]"
          ref={emailRef}
          validation={{
            required: {
              value: true,
              message: 'Email is required',
            },
            pattern: {
              value: /^[^@]+@[^.]+\.(co|com|edu|org|net|int|mil|gov)$/,
              message: 'Please enter a valid email address',
            },
          }}
        />
        <FieldError name="email" className="rw-field-error" />

        <br />

        <Label name="nickname">Name</Label>
        <TextField
          name="nickname"
          className="text-[color:black]"
          validation={{
            required: {
              value: true,
              message: 'Name is required',
            },
            validate: (value) =>
              value.toUpperCase() != 'GUEST' || "Cannot use name 'Guest'",
            pattern: {
              value: /^[^ ]{3,12}$/,
              message: 'Name must be 3-12 characters without spaces',
            },
          }}
        />
        <FieldError name="nickname" className="rw-field-error" />

        <br />

        <Label name="password">Password</Label>
        <PasswordField
          name="password"
          className="text-[color:black]"
          ref={passwordRef}
          validation={{
            required: {
              value: true,
              message: 'Password is required',
            },
            pattern: {
              value: /^(?=.*[A-Z0-9])(?=.*[!@#$%^&*]).{8,}$/,
              message:
                'Password needs 8+ characters, special character, capital, digit',
            },
          }}
        />
        <FieldError name="password" className="rw-field-error" />

        <br />

        <Label name="retypepassword">Retype Password</Label>
        <PasswordField
          name="retypepassword"
          className="text-[color:black]"
          validation={{
            required: {
              value: true,
              message: 'Retyped Password is required',
            },
            validate: (value) =>
              value == passwordRef.current.value || 'Passwords do not match',
          }}
        />
        <FieldError name="retypepassword" className="rw-field-error" />

        <br />

        <Submit className="rounded bg-[color:var(--color-oak)] px-2 py-2 font-cal text-6xl text-[color:var(--color-nature)]">
          Sign Up
        </Submit>

        <br />

        <div className="text-center">
          <Link className="rw-link" to={routes.login()}>
            Already have an account?
          </Link>
        </div>
      </Form>
      <Toaster />
    </>
  )
}

export default SignupPage
