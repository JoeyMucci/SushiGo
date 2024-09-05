export const schema = gql`
  type User {
    id: Int!
    name: String
    email: String!
    password: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type UpdateResponse {
    user: User
    error: String
  }

  type Mutation {
    updateUserEmail(id: Int!, email: String!): UpdateResponse! @requireAuth
    updateUserName(id: Int!, name: String!): UpdateResponse! @requireAuth
    updateUserPassword(id: Int!, newPassword: String!): UpdateResponse!
      @requireAuth
  }
`
