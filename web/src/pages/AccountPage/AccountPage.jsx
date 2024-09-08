import { useRef, useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
  useForm,
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

export const UPDATE_PASSWORD = gql`
  mutation UpdateUserPassword($id: Int!, $newPassword: String!) {
    updateUserPassword(id: $id, newPassword: $newPassword) {
      user {
        id
      }
      error
    }
  }
`

const UPDATE_ACHIEVEMENTS = gql`
  mutation UpdateAchievementsMutation($id: Int!, $input: AchievementsInput!) {
    updateAchievements(id: $id, input: $input) {
      modestMaki
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

  const emailMethods = useForm()
  const nameMethods = useForm()
  const passwordMethods = useForm()

  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const [updateEmail] = useMutation(UPDATE_EMAIL, {
    onCompleted: () => {
      emailMethods.reset()
    },
  })

  const [updateName] = useMutation(UPDATE_NAME, {
    onCompleted: () => {
      nameMethods.reset()
    },
  })

  const [updatePassword] = useMutation(UPDATE_PASSWORD, {
    onCompleted: () => {
      passwordMethods.reset()
    },
  })

  const [updateAchievements] = useMutation(UPDATE_ACHIEVEMENTS, {
    onCompleted: async () => {
      toast.error('Achievements Reset', '🏆', 4, {
        position: 'bottom-center',
        style: {
          background: '#004', // nightwing
          color: '#ff917d', // salmon
        },
        className: 'font-cal text-base',
      })
    },
  })

  const [deleteUser] = useMutation(DELETE, {
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
        formMethods={emailMethods}
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
        formMethods={nameMethods}
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
        onSubmit={async (data) => {
          const response = await updatePassword({
            variables: {
              id: currentUser.id,
              newPassword: data.password,
            },
          })

          let result = response.data.updateUserPassword

          if (result.user) {
            toast.success('Password Changed', {
              position: 'bottom-center',
              style: {
                background: '#004', // nightwing
                color: '#ff917d', // salmon
              },
              className: 'font-cal text-base',
            })
          } else
            toast.error(result.error, {
              position: 'bottom-center',
              style: {
                background: '#004', // nightwing
                color: '#ff917d', // salmon
              },
              className: 'font-cal text-base',
            })
        }}
        className="mx-auto flex w-1/4 flex-col rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-xl text-[color:var(--color-salmon)]"
        formMethods={passwordMethods}
      >
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
            'Are you sure you want to reset your achievements? Leaderboard stats will not be erased and your speedrun will restart.'
          )
          if (isConfirm)
            try {
              await updateAchievements({
                variables: {
                  id: currentUser.id,
                  input: {
                    speedrunStart: new Date(),
                    modestMaki: false,
                    longTermPlayer: false,
                    speedEater: false,
                    forkForgetter: false,
                    sushiThief: false,
                    demandingCustomer: false,
                    leftoverLover: false,
                    wasabiWarrior: false,
                    teaTime: false,
                    soysauceSavant: false,
                    goingForSeconds: false,
                    dumplingDisciple: false,
                    tempuraTitan: false,
                    sashimiSensei: false,
                    misoMaster: false,
                    edamameExpert: false,
                    unlikelyFriendship: false,
                    onigiriGuru: false,
                    greenTeaEightCream: false,
                    fruitFiend: false,
                    sushiLow: false,
                    flashOfBrilliance: false,
                    headChef: false,
                    easyClear: false,
                    normalClear: false,
                    hardClear: false,
                    makiClear: false,
                    temakiClear: false,
                    uramakiClear: false,
                    chopsticksClear: false,
                    spoonClear: false,
                    menuClear: false,
                    takeoutBoxClear: false,
                    wasabiClear: false,
                    teaClear: false,
                    soysauceClear: false,
                    specialOrderClear: false,
                    dumplingClear: false,
                    tempuraClear: false,
                    sashimiClear: false,
                    misoSoupClear: false,
                    edamameClear: false,
                    eelClear: false,
                    tofuClear: false,
                    onigiriClear: false,
                    puddingClear: false,
                    gticClear: false,
                    fruitClear: false,
                  },
                },
              })
            } catch (error) {
              toast.error('Failed to reset achievements', {
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
          Reset Achievements
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
