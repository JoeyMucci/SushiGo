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

  type Query {
    getResume(id: Int!): Achievements! @requireAuth
  }

  type Mutation {
    updateAchievements(id: Int!, input: AchievementsInput!): Achievements!
      @requireAuth
  }
`
