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

export const getStats = ({ difficulty }) => {
  if (difficulty == 'easy')
    return db.user.findMany({
      select: {
        name: true,
        easyScore: true,
        easyDessert: true,
      },
      where: {
        easyScore: { not: null },
        easyDessert: { not: null },
      },
      orderBy: [
        {
          easyScore: 'desc',
        },
        {
          easyDessert: 'desc',
        },
        {
          name: 'asc',
        },
      ],
      take: 100,
    })
  else if (difficulty == 'normal')
    return db.user.findMany({
      select: {
        name: true,
        normalScore: true,
        normalDessert: true,
      },
      where: {
        normalScore: { not: null },
        normalDessert: { not: null },
      },
      orderBy: [
        {
          normalScore: 'desc',
        },
        {
          normalDessert: 'desc',
        },
        {
          name: 'asc',
        },
      ],
      take: 100,
    })
  else if (difficulty == 'hard') {
    return db.user.findMany({
      select: {
        name: true,
        hardScore: true,
        hardDessert: true,
      },
      where: {
        hardScore: { not: null },
        hardDessert: { not: null },
      },
      orderBy: [
        {
          hardScore: 'desc',
        },
        {
          hardDessert: 'desc',
        },
        {
          name: 'asc',
        },
      ],
      take: 100,
    })
  } else if (difficulty == 'toxic') {
    return db.user.findMany({
      select: {
        name: true,
        toxicScore: true,
        toxicDessert: true,
      },
      where: {
        toxicScore: { not: null },
        toxicDessert: { not: null },
      },
      orderBy: [
        {
          toxicScore: 'desc',
        },
        {
          toxicDessert: 'desc',
        },
        {
          name: 'asc',
        },
      ],
      take: 100,
    })
  } else {
    return db.user.findMany({
      select: {
        name: true,
        bestSpeedrun: true,
      },
      where: {
        bestSpeedrun: { not: null },
      },
      orderBy: [
        {
          bestSpeedrun: 'asc',
        },
        {
          name: 'asc',
        },
      ],
      take: 100,
    })
  }
}

export const updateAchievements = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id: id },
  })
}
