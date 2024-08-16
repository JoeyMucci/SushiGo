import { db } from 'src/lib/db'

export const getResume = async ({ email }) => {
  return db.achievements.findMany({
    where: { userEmail: email },
  })
}

export const createAchievements = ({ email }) => {
  return db.achievements.create({
    data: {
      userEmail: email,
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
      seasonedCompetitor: false,
      maturePalate: false,
    },
  })
}
