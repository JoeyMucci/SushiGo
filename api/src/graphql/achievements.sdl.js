export const schema = gql`
  type Achievements {
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

  input UpdateAchievementsInput {
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

  type Query {
    getResume(email: String!): Achievements! @requireAuth
  }

  type Mutation {
    updateAchievements(
      email: String!
      input: UpdateAchievementsInput!
    ): Achievements! @requireAuth
  }
`
