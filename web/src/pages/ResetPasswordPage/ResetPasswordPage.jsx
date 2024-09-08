import { useEffect, useRef, useState } from 'react'

import {
  Form,
  Label,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const ResetPasswordPage = ({ resetToken }) => {
  const { isAuthenticated, reauthenticate, validateResetToken, resetPassword } =
    useAuth()
  const [enabled, setEnabled] = useState(true)

  const passwordRef = useRef(null)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  useEffect(() => {
    const validateToken = async () => {
      const response = await validateResetToken(resetToken)
      if (response.error) {
        setEnabled(false)
        toast.error(response.error, {
          position: 'bottom-center',
          style: {
            background: '#004', // nightwing
            color: '#ff917d', // salmon
          },
          className: 'font-cal text-base',
        })
      } else {
        setEnabled(true)
      }
    }
    validateToken()
  }, [resetToken, validateResetToken])

  useEffect(() => {
    passwordRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await resetPassword({
      resetToken,
      password: data.password,
    })

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
      toast.success('Password changed!', {
        position: 'bottom-center',
        style: {
          background: '#004', // nightwing
          color: '#ff917d', // salmon
        },
        className: 'font-cal text-base',
      })
      await reauthenticate()
      navigate(routes.login())
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
        <Label name="password">New Password</Label>
        <PasswordField
          name="password"
          disabled={!enabled}
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
          Reset Password
        </Submit>
      </Form>
      <Toaster />
    </>
  )
}

export default ResetPasswordPage
