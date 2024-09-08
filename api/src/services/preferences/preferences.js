import { hashPassword } from '@redwoodjs/auth-dbauth-api'

import { db } from 'src/lib/db'

export const updateUserEmail = async ({ id, email }) => {
  try {
    return {
      user: await db.user.update({
        data: { email: email },
        where: { id: id },
      }),
    }
  } catch (e) {
    return { error: e.message }
  }
}

export const updateUserName = async ({ id, name }) => {
  try {
    return {
      user: await db.user.update({
        data: { name: name },
        where: { id: id },
      }),
    }
  } catch (e) {
    return { error: e.message }
  }
}

export const updateUserPassword = async ({ id, newPassword }) => {
  const [hashedPassword, salt] = hashPassword(newPassword)
  try {
    return {
      user: await db.user.update({
        data: { hashedPassword: hashedPassword, salt: salt },
        where: { id: id },
      }),
    }
  } catch (e) {
    return { error: e.message }
  }
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}
