import { db } from 'src/lib/db'

export const getResume = ({ email }) => {
  return db.user.findUnique({
    where: { userEmail: email },
    select: {
      modestMaki: true,
      longTermPlayer: true,
      speedEater: true,
      forkForgetter: true,
      sushiThief: true,
      demandingCustomer: true,
      leftoverLover: true,
      wasabiWarrior: true,
      teaTime: true,
      soysauceSavant: true,
      goingForSeconds: true,
      dumplingDisciple: true,
      tempuraTitan: true,
      sashimiSensei: true,
      misoMaster: true,
      edamameExpert: true,
      unlikelyFriendship: true,
      onigiriGuru: true,
      greenTeaEightCream: true,
      fruitFiend: true,
      sushiLow: true,
      flashOfBrilliance: true,
      headChef: true,
      seasonedCompetitor: true,
      maturePalate: true,
    },
  })
}

export const updateAchievements = ({ email, input }) => {
  return db.user.update({
    data: input,
    where: { userEmail: email },
  })
}
