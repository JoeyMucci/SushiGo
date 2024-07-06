import { cards, parseFruit } from 'web/src/pages/PlayPage/PlayPage.jsx'

// returns how many occurences of card are in cards
export const countCard = (cards, card) => {
  let count = 0
  for (let i = 0; i < cards.length; i++) if (cards[i].type == card.type) count++
  return count
}

export const scoreMaki = (playerCards, oppsCards) => {
  let makiCount =
    countCard(playerCards, cards.MAKIONE) +
    2 * countCard(playerCards, cards.MAKITWO) +
    3 * countCard(playerCards, cards.MAKITHREE)

  if (makiCount == 0) return 0

  let points = 6

  let oppMakiCounts = []

  for (let oppCards of oppsCards) {
    let oppMakiCount =
      countCard(oppCards, cards.MAKIONE) +
      2 * countCard(oppCards, cards.MAKITWO) +
      3 * countCard(oppCards, cards.MAKITHREE)
    if (!oppMakiCounts.includes(oppMakiCount)) oppMakiCounts.push(oppMakiCount)
  }

  for (let oppMakiCount of oppMakiCounts)
    if (makiCount < oppMakiCount) points -= 3

  return Math.max(points, 0)
}

export const scoreTemaki = (playerCards, oppsCards) => {
  let points = 0
  let flagMost = false
  let flagLeast = false
  let temakiCount = countCard(playerCards, cards.TEMAKI)
  for (let oppCards of oppsCards) {
    if (!flagMost && temakiCount < countCard(oppCards, cards.TEMAKI)) {
      points -= 4
      flagMost = true
    }
    if (!flagLeast && temakiCount > countCard(oppCards, cards.TEMAKI)) {
      points += 4
      flagLeast = true
    }
  }
  return points
}

export const scoreLeftovers = (playerCards) => {
  return 2 * countCard(playerCards, cards.TOC)
}

export const scoreTea = (playerCards) => {
  let columnColors = []
  let cardColumns = []
  let mostCommonColorCount = 1

  for (let i = 0; i < playerCards.length; i++) {
    // Turned over cards do not count towards tea scoring
    if (playerCards[i].type == cards.TOC.type) break

    if (columnColors.indexOf(playerCards[i].color) == -1) {
      columnColors.push(playerCards[i].color)
      cardColumns.push([playerCards[i]])
    } else
      cardColumns[columnColors.indexOf(playerCards[i].color)].unshift(
        playerCards[i]
      )
  }

  for (let cardColumn of cardColumns)
    mostCommonColorCount = Math.max(mostCommonColorCount, cardColumn.length)

  return mostCommonColorCount * countCard(playerCards, cards.TEA)
}

export const scoreSoysauce = (playerCards, oppsCards) => {
  let columnColors = []

  for (let i = 0; i < playerCards.length; i++) {
    // Turned over cards do not count towards soysauce scoring
    if (playerCards[i].type == cards.TOC.type) break

    if (columnColors.indexOf(playerCards[i].color) == -1)
      columnColors.push(playerCards[i].color)
  }

  for (let oppCards of oppsCards) {
    let oppColumnColors = []

    for (let i = 0; i < oppCards.length; i++) {
      // Turned over cards do not count towards soysauce scoring
      if (oppCards[i].type == cards.TOC.type) break

      if (oppColumnColors.indexOf(oppCards[i].color) == -1)
        oppColumnColors.push(oppCards[i].color)
    }

    if (columnColors.length < oppColumnColors.length) return 0
    else return 4 * countCard(playerCards, cards.SOYSAUCE)
  }
}

export const scoreDumpling = (playerCards) => {
  switch (countCard(playerCards, cards.DUMPLING)) {
    case 0:
      return 0
    case 1:
      return 1
    case 2:
      return 3
    case 3:
      return 6
    case 4:
      return 10
    default:
      return 15
  }
}

export const scoreTempura = (playerCards) => {
  return Math.floor(countCard(playerCards, cards.TEMPURA) / 2) * 5
}

export const scoreSashimi = (playerCards) => {
  return Math.floor(countCard(playerCards, cards.SASHIMI) / 3) * 10
}

export const scoreMiso = (playerCards) => {
  return 3 * countCard(playerCards, cards.MISO)
}

export const scoreEdamame = (playerCards, oppsCards) => {
  let oppWithEdamame = 0

  for (let oppCards of oppsCards)
    if (countCard(oppCards, cards.EDAMAME) > 0) oppWithEdamame++

  return oppWithEdamame * countCard(playerCards, cards.EDAMAME)
}

export const scoreEel = (playerCards) => {
  switch (countCard(playerCards, cards.EEL)) {
    case 0:
      return 0
    case 1:
      return -3
    default:
      return 7
  }
}

export const scoreTofu = (playerCards) => {
  switch (countCard(playerCards, cards.TOFU)) {
    case 1:
      return 2
    case 2:
      return 6
    default:
      return 0
  }
}

export const scoreOnigiri = (playerCards) => {
  let onigiriCounts = [
    countCard(playerCards, cards.ONICIRCLE),
    countCard(playerCards, cards.ONISQUARE),
    countCard(playerCards, cards.ONITRI),
    countCard(playerCards, cards.ONIFLAT),
  ]

  let points = 0

  while (Math.max(...onigiriCounts) > 0) {
    let count = 0
    for (let i = 0; i < onigiriCounts.length; i++)
      if (onigiriCounts[i] > 0) {
        count++
        onigiriCounts[i]--
      }

    if (count == 1) points += 1
    else if (count == 2) points += 4
    else if (count == 3) points += 9
    else points += 16
  }

  return points
}

export const scorePudding = (playerDessert, oppsDessert) => {
  let points = 0
  let flagMost = false
  let flagLeast = false
  for (let oppDessert of oppsDessert) {
    if (!flagMost && playerDessert < oppDessert) {
      points -= 6
      flagMost = true
    }
    if (!flagLeast && playerDessert > oppDessert) {
      points += 6
      flagLeast = true
    }
  }
  return points
}

export const scoreGTIC = (playerDessert) => {
  return 12 * Math.floor(playerDessert / 4)
}

export const scoreFruit = (fruitNumber) => {
  let fruitCounts = parseFruit(fruitNumber)
  let points = 0

  for (let fruitCount of fruitCounts) {
    if (fruitCount == 0) points -= 2
    else if (fruitCount == 1) continue
    else if (fruitCount == 2) points += 1
    else if (fruitCount == 3) points += 3
    else if (fruitCount == 4) points += 6
    else points += 10
  }

  return points
}
