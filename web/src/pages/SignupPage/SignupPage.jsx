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
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const CREATE_ACHIEVEMENTS = gql`
  mutation CreateAchievementsMutation($input: String!) {
    createAchievements(email: $input) {
      id
    }
  }
`

const SignupPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [createAchievements, { loading, error }] = useMutation(
    CREATE_ACHIEVEMENTS,
    {
      onCompleted: () => {},
    }
  )

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
    console.log(passwordRef)
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
    } else {
      console.log('flag')
      await createAchievements({
        variables: { input: data.email.toLowerCase() },
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

  /*
  return (
    <>
      <Metadata title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Username
                  </Label>
                  <TextField
                    name="username"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={usernameRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    }}
                  />

                  <FieldError name="username" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />

                  <FieldError name="password" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{' '}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
    */
}

export default SignupPage
