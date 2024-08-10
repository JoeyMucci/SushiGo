export const schema = gql`
  type Achievements {
    id: Int!
    userEmail: String!
    modestMaki: Boolean
    longTermPlayer: Boolean
    speedEater: Boolean
    forkForgetter: Boolean
    sushiThief: Boolean
    demandingCustomer: Boolean
    leftoverLover: Boolean
    wasabiWarrior: Boolean
    teaTime: Boolean
    soysauceSavant: Boolean
    goingForSeconds: Boolean
    dumplingDisciple: Boolean
    tempuraTitan: Boolean
    sashimiSensei: Boolean
    misoMaster: Boolean
    edamameExpert: Boolean
    unlikelyFriendship: Boolean
    onigiriGuru: Boolean
    greenTeaEightCream: Boolean
    fruitFiend: Boolean
    sushiLow: Boolean
    flashOfBrilliance: Boolean
    headChef: Boolean
    seasonedCompetitor: Boolean
    maturePalate: Boolean
  }

  type Mutation {
    createAchievements(email: String!): Achievements! @requireAuth
  }
`
