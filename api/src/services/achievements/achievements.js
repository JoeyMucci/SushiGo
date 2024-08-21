import { db } from 'src/lib/db'

export const getResume = ({ id }) => {
  return db.user.findUnique({
    where: { id: id },
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
      easyClear: true,
      normalClear: true,
      hardClear: true,
      makiClear: true,
      temakiClear: true,
      uramakiClear: true,
      chopsticksClear: true,
      spoonClear: true,
      menuClear: true,
      takeoutBoxClear: true,
      wasabiClear: true,
      teaClear: true,
      soysauceClear: true,
      specialOrderClear: true,
      dumplingClear: true,
      tempuraClear: true,
      sashimiClear: true,
      misoSoupClear: true,
      edamameClear: true,
      eelClear: true,
      tofuClear: true,
      onigiriClear: true,
      puddingClear: true,
      gticClear: true,
      fruitClear: true,
    },
  })
}

export const updateAchievements = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id: id },
  })
}
