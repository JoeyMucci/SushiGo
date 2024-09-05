import { useRef, useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

export const UPDATE_EMAIL = gql`
  mutation UpdateUserEmail($id: Int!, $email: String!) {
    updateUserEmail(id: $id, email: $email) {
      user {
        id
      }
      error
    }
  }
`

export const UPDATE_NAME = gql`
  mutation UpdateUserName($id: Int!, $name: String!) {
    updateUserName(id: $id, name: $name) {
      user {
        id
      }
      error
    }
  }
`

export const DELETE = gql`
  mutation DeleteUser($id: Int!) {
    deleteUser(id: $id) {
      id
    }
  }
`

const AccountPage = () => {
  const { logOut, isAuthenticated, currentUser, loading } = useAuth()

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const [updateEmail, { loadingEmail, errorEmail }] = useMutation(
    UPDATE_EMAIL,
    {
      onCompleted: () => {},
    }
  )

  const [updateName, { loadingName, errorName }] = useMutation(UPDATE_NAME, {
    onCompleted: async () => {},
  })

  const [deleteUser, { loadingDelete, errorDelete }] = useMutation(DELETE, {
    onCompleted: async () => {
      toast.success('Your account is deleted!', {
        position: 'bottom-center',
        style: {
          background: '#004', // nightwing
          color: '#ff917d', // salmon
        },
        className: 'font-cal text-base',
      })
    },
  })

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(routes.signup())
    }
  }, [isAuthenticated])

  if (loading || !isAuthenticated) {
    return <></>
  }

  /* First the change email form is displayed.
     Then, the change name form is displayed. */
  return (
    <>
      <br />
      <br />

      <Form
        onSubmit={async (data) => {
          const response = await updateEmail({
            variables: {
              id: currentUser.id,
              email: data.email,
            },
          })

          let result = response.data.updateUserEmail

          if (result.user) {
            toast.success('Email Changed', {
              position: 'bottom-center',
              style: {
                background: '#004', // nightwing
                color: '#ff917d', // salmon
              },
              className: 'font-cal text-base',
            })
          } else {
            let message = result.error
            if (
              message.includes(
                'Unique constraint failed on the fields: (`email`)'
              )
            )
              message =
                'Email ' + data.email.toLowerCase() + ' is already in use'
            toast.error(message, {
              position: 'bottom-center',
              style: {
                background: '#004', // nightwing
                color: '#ff917d', // salmon
              },
              className: 'font-cal text-base',
            })
          }
        }}
        className="mx-auto flex w-1/4 flex-col rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-xl text-[color:var(--color-salmon)]"
      >
        <Label name="email">New Email</Label>
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
        <Submit className="rounded bg-[color:var(--color-oak)] px-2 py-2 font-cal text-6xl text-[color:var(--color-nature)]">
          Change Email
        </Submit>
      </Form>

      <br />
      <br />

      <Form
        onSubmit={async (data) => {
          const response = await updateName({
            variables: {
              id: currentUser.id,
              name:
                data.nickname.toUpperCase().substring(0, 1) +
                data.nickname.toLowerCase().substring(1),
            },
          })

          let result = response.data.updateUserName

          if (result.user) {
            toast.success('Name Changed', {
              position: 'bottom-center',
              style: {
                background: '#004', // nightwing
                color: '#ff917d', // salmon
              },
              className: 'font-cal text-base',
            })
          } else {
            let message = result.error
            if (
              message.includes(
                'Unique constraint failed on the fields: (`name`)'
              )
            )
              message =
                'Name ' +
                data.nickname.toUpperCase().substring(0, 1) +
                data.nickname.toLowerCase().substring(1).toLowerCase() +
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
        }}
        className="mx-auto flex w-1/4 flex-col rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-xl text-[color:var(--color-salmon)]"
      >
        <Label name="nickname">New Name</Label>
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
        <Submit className="rounded bg-[color:var(--color-oak)] px-2 py-2 font-cal text-6xl text-[color:var(--color-nature)]">
          Change Name
        </Submit>
      </Form>

      <br />
      <br />

      <Form
        onSubmit={() => {}}
        className="mx-auto flex w-1/4 flex-col rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-xl text-[color:var(--color-salmon)]"
      >
        <Label name="oldpass">Current Password</Label>
        <TextField name="oldpass" className="text-[color:black]" />
        <br />

        <Label name="password">New Password</Label>
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
          Change Password
        </Submit>
      </Form>

      <br />
      <br />

      <Form
        onSubmit={async () => {
          var isConfirm = confirm(
            'Are you sure you want to delete your account? All achievements and leaderboard stats will be erased.'
          )
          if (isConfirm)
            try {
              await deleteUser({
                variables: { id: currentUser.id },
              })
              logOut()
            } catch (error) {
              toast.error('Failed to delete account', {
                position: 'bottom-center',
                style: {
                  background: '#004', // nightwing
                  color: '#ff917d', // salmon
                },
                className: 'font-cal text-base',
              })
            }
        }}
        className="mx-auto flex w-1/4 flex-col rounded bg-[color:red] font-cal text-xl text-[color:var(--color-salmon)]"
      >
        <Submit className="rounded font-cal text-6xl text-[color:var(--color-salmon)]">
          Delete Account
        </Submit>
      </Form>

      <br />
      <br />
      <Toaster />
    </>
  )
}

export default AccountPage
