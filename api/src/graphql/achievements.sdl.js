export const schema = gql`
  type Achievements {
    easyScore: Int
    easyDessert: Int
    normalScore: Int
    normalDessert: Int
    hardScore: Int
    hardDessert: Int
    toxicScore: Int
    toxicDessert: Int
    speedrunStart: DateTime
    bestSpeedrun: Int
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
    easyClear: Boolean
    normalClear: Boolean
    hardClear: Boolean
    makiClear: Boolean
    temakiClear: Boolean
    uramakiClear: Boolean
    chopsticksClear: Boolean
    spoonClear: Boolean
    menuClear: Boolean
    takeoutBoxClear: Boolean
    wasabiClear: Boolean
    teaClear: Boolean
    soysauceClear: Boolean
    specialOrderClear: Boolean
    dumplingClear: Boolean
    tempuraClear: Boolean
    sashimiClear: Boolean
    misoSoupClear: Boolean
    edamameClear: Boolean
    eelClear: Boolean
    tofuClear: Boolean
    onigiriClear: Boolean
    puddingClear: Boolean
    gticClear: Boolean
    fruitClear: Boolean
  }

  input AchievementsInput {
    easyScore: Int
    easyDessert: Int
    normalScore: Int
    normalDessert: Int
    hardScore: Int
    hardDessert: Int
    toxicScore: Int
    toxicDessert: Int
    speedrunStart: DateTime
    bestSpeedrun: Int
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
    easyClear: Boolean
    normalClear: Boolean
    hardClear: Boolean
    makiClear: Boolean
    temakiClear: Boolean
    uramakiClear: Boolean
    chopsticksClear: Boolean
    spoonClear: Boolean
    menuClear: Boolean
    takeoutBoxClear: Boolean
    wasabiClear: Boolean
    teaClear: Boolean
    soysauceClear: Boolean
    specialOrderClear: Boolean
    dumplingClear: Boolean
    tempuraClear: Boolean
    sashimiClear: Boolean
    misoSoupClear: Boolean
    edamameClear: Boolean
    eelClear: Boolean
    tofuClear: Boolean
    onigiriClear: Boolean
    puddingClear: Boolean
    gticClear: Boolean
    fruitClear: Boolean
  }

  type Stats {
    name: String
    easyScore: Int
    easyDessert: Int
    normalScore: Int
    normalDessert: Int
    hardScore: Int
    hardDessert: Int
    toxicScore: Int
    toxicDessert: Int
    bestSpeedrun: Int
  }

  type Query {
    getResume(id: Int!): Achievements! @skipAuth
    getStats(difficulty: String!): [Stats!]! @skipAuth
  }

  type Mutation {
    updateAchievements(id: Int!, input: AchievementsInput!): Achievements!
      @requireAuth
  }
`
