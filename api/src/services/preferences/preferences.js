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

// TO BE IMPLEMENTED
export const updateUserPassword = ({ id, password }) => {
  return db.user.findUnique({
    where: { id: id },
  })
}
