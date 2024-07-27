import {
  cards,
  countCard,
  typeToCard,
  NUMROUNDS,
  MAXHANDCARDS,
} from 'web/src/pages/PlayPage/PlayPage.jsx'
import {
  scoreMaki,
  scoreTemaki,
  scoreTea,
  scoreDumpling,
  scoreOnigiri,
  scorePudding,
  scoreFruit,
} from 'web/src/pages/PlayPage/Scoring.jsx'

// Gets the expected value of playing playerCard
const getExpectedVal = (playerCard, player, opps, cardsLeft, round) => {
  const hasActiveWasabi = () => {
    for (let wasabiLoc = 0; wasabiLoc < player.stash.length - 1; wasabiLoc++)
      if (
        player.stash[wasabiLoc].type == cards.WASABI.type &&
        (wasabiLoc == player.stash.length - 2 ||
          ![cards.EGG.type, cards.SALMON.type, cards.SQUID.type].includes(
            player.stash[wasabiLoc + 1].type
          ))
      )
        return true
    return false
  }

  // Use this when conducting mock scoring to get expected value
  let newPlayerStash = [...player.stash, playerCard]

  let oppsStashes = []
  for (let i = 0; i < opps.length; i++) oppsStashes.push(opps[i].stash)

  /* NIGIRI - Straightforward, simply the number of points multiplied by three if there's a wasabi.
     There is a small disincentive to use egg nigiri on a wasabi early, because there is an opportunity
     cost of playing a salmon or squid with the nigiri instead */
  if (
    [cards.EGG.type, cards.SALMON.type, cards.SQUID.type].includes(
      playerCard.type
    )
  ) {
    let exVal = 1
    if (playerCard.type == cards.SALMON.type) exVal = 2
    else if (playerCard.type == cards.SQUID.type) exVal = 3
    if (hasActiveWasabi())
      return exVal == 1 ? 2.5 + 0.1 * (MAXHANDCARDS - cardsLeft) : exVal * 3
    return exVal
  }

  /* MAKI - Weighted average between how many icons and how much score is improved.
     The latter component is weighed more as the end of the round approaches */
  if (playerCard.color == cards.MAKIONE.color) {
    let icons = 1
    if (playerCard.type == cards.MAKITWO.type) icons = 2
    if (playerCard.type == cards.MAKITHREE.type) icons = 3

    return (
      (icons * cardsLeft) / MAXHANDCARDS +
      ((scoreMaki(newPlayerStash, oppsStashes) -
        scoreMaki(player.stash, oppsStashes)) *
        (MAXHANDCARDS - cardsLeft)) /
        MAXHANDCARDS
    )
  }

  /* TEMAKI - Weighted average between 2.5 and how much score is improved,
     The latter component is weighed more as the end of the round approaches */
  if (playerCard.type == cards.TEMAKI.type) {
    return (
      (2.5 * cardsLeft) / MAXHANDCARDS +
      ((scoreTemaki(newPlayerStash, oppsStashes) -
        scoreTemaki(player.stash, oppsStashes)) *
        (MAXHANDCARDS - cardsLeft)) /
        MAXHANDCARDS
    )
  }

  /* URAMAKI - Bit of a doozy here. If scores uramaki instantly exVal is just that
     amount of points. Otherwise, as long as some points still on table, weight
     between icon related value and marginalValue of playing it (for end of round scoring).
     The marginalValue is weighted more as end of round approaches.  */
  if (playerCard.color == cards.URAMAKITHREE.color) {
    const scoresUramakiPoints = (playerCount) => {
      let oppsCounts = []
      for (let opp of opps)
        oppsCounts.push(
          3 * countCard(opp.stash, cards.URAMAKITHREE) +
            4 * countCard(opp.stash, cards.URAMAKIFOUR) +
            5 * countCard(opp.stash, cards.URAMAKIFIVE)
        )

      for (let oppCount of oppsCounts) if (oppCount > playerCount) return false
      return true
    }
    // Uramaki max points is 8, and it gets decreased by 3 for each score
    let uramakiPoints = 8
    for (let opp of opps) if (opp.uramakiScored) uramakiPoints -= 3

    let uramakiCountBefore =
      3 * countCard(player.stash, cards.URAMAKITHREE) +
      4 * countCard(player.stash, cards.URAMAKIFOUR) +
      5 * countCard(player.stash, cards.URAMAKIFIVE)

    let uramakiCountAfter =
      3 * countCard(newPlayerStash, cards.URAMAKITHREE) +
      4 * countCard(newPlayerStash, cards.URAMAKIFOUR) +
      5 * countCard(newPlayerStash, cards.URAMAKIFIVE)

    // Player scores uramaki after reaching ten icons
    if (uramakiCountAfter >= 10 && !player.uramakiScored && uramakiPoints >= 2)
      return uramakiPoints

    if (player.scoredUramaki) uramakiPoints -= 3

    if (uramakiPoints < 2) return 0.1

    // As this increases exVal decreases
    let badMultiplier = 0
    if (playerCard.type == cards.URAMAKIFOUR.type) badMultiplier = 1
    else if (playerCard.type == cards.URAMAKITHREE.type) badMultiplier = 2

    // Times devalued = (Uramaki max - current uramaki) / step
    let timesDevalued = (8 - uramakiPoints) / 3

    let marginalValue =
      scoresUramakiPoints(uramakiCountAfter) &&
      !scoresUramakiPoints(uramakiCountBefore)
        ? uramakiPoints
        : 0

    return (
      ((3.5 - timesDevalued - (1 - 0.25 * timesDevalued) * badMultiplier) *
        cardsLeft) /
        MAXHANDCARDS +
      (marginalValue * (MAXHANDCARDS - cardsLeft)) / MAXHANDCARDS
    )
  }

  /* CHOPSTICKS - Assign a low value if there already is a chopsticks or it is late in
  the round, otherwise assign a value that decreases as the round progresses */
  if (playerCard.color == cards.CHOPSTICKSONE.color) {
    if (
      countCard(player.stash, cards.CHOPSTICKSONE) +
        countCard(player.stash, cards.CHOPSTICKSTWO) +
        countCard(player.stash, cards.CHOPSTICKSTHREE) >
      1
    )
      return 0.1

    if (cardsLeft <= 2) return 0.1

    return cardsLeft / 2.8
  }

  /* SPOON - Assign a low value if there already is a spoon or it is late in
  the round, otherwise assign a value proportional to how much time is left in the round */
  if (playerCard.color == cards.SPOONFOUR.color) {
    if (
      countCard(player.stash, cards.SPOONFOUR) +
        countCard(player.stash, cards.SPOONFIVE) +
        countCard(player.stash, cards.SPOONSIX) >
      1
    )
      return 0.1

    if (cardsLeft <= 2) return 0.1

    return cardsLeft / 2.65
  }

  // MENU - Start at 2, increase linearly as time goes on
  if (playerCard.color == cards.MENUSEVEN.color) {
    return 2 + 0.1 * (MAXHANDCARDS - cardsLeft)
  }

  // TAKEOUT BOX - Made a whole function for this
  if (playerCard.color == cards.TAKEOUTTEN.color) {
    console.log(player.stash)
    let originalStash = [...player.stash]
    let exVal = workTakeout(player, opps, cardsLeft, round)[0]
    player.stash = [...originalStash]
    console.log(player.stash)
    return Math.max(0.1, exVal)
  }

  /* WASABI - Assign a low value if there already a wasabi that is unused, otherwise assign
     a value proportional to how much time is left in the round */
  if (playerCard.type == cards.WASABI.type) {
    if (hasActiveWasabi()) return 0.1
    return cardsLeft / 2.35
  }

  // TEA - Value of playing the card
  if (playerCard.type == cards.TEA.type)
    return scoreTea(newPlayerStash) - scoreTea(player.stash)

  /* SOYSAUCE - Correlated to how many colors player has ahead of the competition. The farther
     ahead (or less far behind), the higher the value */
  if (playerCard.type == cards.SOYSAUCE.type) {
    const countColors = (stash) => {
      let columnColors = []

      for (let i = 0; i < stash.length; i++) {
        // Turned over cards do not count towards soysauce scoring
        if (stash[i].type == cards.TOC.type) break

        if (columnColors.indexOf(stash[i].color) == -1)
          columnColors.push(stash[i].color)
      }

      return columnColors.length
    }

    let playerColors = countColors(newPlayerStash)
    let maxOppColors = -1
    for (let oppStash of oppsStashes)
      if (countColors(oppStash) > maxOppColors)
        maxOppColors = countColors(oppStash)

    let diff = playerColors - maxOppColors

    if (diff <= -2) return 0.1
    else if (diff == -1) return 1
    else if (diff == 0) return 2
    else if (diff == 1) return 3
    else if (diff == 2) return 3.5
    else return 4
  }

  /* SPECIAL ORDER - Very low value if there are no cards to copy. Otherwise take the max expected value
     available from the cards that can be copied (the stash) */
  if (playerCard.type == cards.SPECIALO.type) {
    if (player.stash.length == 0) return 0.1

    // Go through every non special order and non menu card and return the index with the highest exVal
    let maxVal = 0.1
    for (let i = 0; i < player.stash.length; i++)
      if (
        player.stash[i].type != cards.SPECIALO.type &&
        player.stash[i].color != cards.MENUSEVEN.type &&
        getExpectedVal(player.stash[i], player, opps, cardsLeft, round) > maxVal
      )
        maxVal = getExpectedVal(player.stash[i], player, opps, cardsLeft, round)

    return maxVal
  }

  /* DUMPLING - Value of playing the card plus a small bonus earlier
     in the round since dumpling is more of an investment card */
  if (playerCard.type == cards.DUMPLING.type)
    return (
      scoreDumpling(newPlayerStash) -
      scoreDumpling(player.stash) +
      cardsLeft / 4
    )

  // TEMPURA - 5 if it completes the set, otherwise value declines as round progresses
  if (playerCard.type == cards.TEMPURA.type)
    return countCard(player.stash, cards.TEMPURA) % 2 ? 5 : cardsLeft / 3.5

  /* SASHIMI - 10 if it completes the set, otherwise value declines as round progresses.
     If set is partial completed there is a big expected value bump */
  if (playerCard.type == cards.SASHIMI.type) {
    let sashimiCount = countCard(player.stash, cards.SASHIMI) % 3

    if (sashimiCount == 0) return cardsLeft > 2 ? cardsLeft / 2.8 : 0.1
    if (sashimiCount == 1) return cardsLeft > 1 ? 3.33 + cardsLeft / 2.8 : 0.1
    return 10
  }

  // MISO SOUP - Assuming an 80% success rate, exVal = 0.80 * 3 - 2.4
  if (playerCard.type == cards.MISO.type) return 2.4

  /* EDAMAME - For each opp, if opps has edamame, exVal += 1, else exVal += .75
     (Assume 75% chance that edamame will appear in opponent's stash before end of round) */
  if (playerCard.type == cards.EDAMAME.type) {
    let oppsWithEda = 0
    for (let oppStash of oppsStashes)
      if (countCard(oppStash, cards.EDAMAME) > 0) oppsWithEda++

    return oppsWithEda + 0.75 * (oppsStashes.length - oppsWithEda)
  }

  /* EEL - 10 points for completing set (-3 to 7). Small value for any after set completed.
     Before any played, decrease value as time in round increases */
  if (playerCard.type == cards.EEL.type)
    switch (countCard(player.stash, cards.EEL)) {
      case 0:
        return cardsLeft / 3.5
      case 1:
        return 10
      default:
        return 0.1
    }

  /* TOFU - 2 (face value) + bonus for large opportunity of completing set for first play.
     4 for completing the set (2 to 6), very small value for third since it is -6.
     For beyond third slightly more since no longer losing points  */
  if (playerCard.type == cards.TOFU.type)
    switch (countCard(player.stash, cards.TOFU)) {
      case 0:
        return 2 + cardsLeft / 6
      case 1:
        return 10
      case 2:
        return 0.02
      default:
        return 0.1
    }

  /* ONIGIRI - Face value + upside for the potential high payoff proportional to how much time their is
     to achieve it. The upside is dramatically decreased if the shape is not unique in the players stash  */
  if (playerCard.color == cards.ONICIRCLE.color) {
    let newShape = countCard(player.stash, playerCard) == 0
    let diff = scoreOnigiri(newPlayerStash) - scoreOnigiri(player.stash)

    if (diff == 7) return 7

    if (newShape) return diff + cardsLeft / 4
    else return diff + cardsLeft / 15
  }

  /* PUDDING - Weighted avergae between 3 and the marginal value of playing it for end of game scoring.
     The marginal value piece is weighed more as the end of the game approaches */
  if (playerCard.type == cards.PUDDING.type) {
    let playerPuddingCountBefore =
      player.dessert + countCard(player.stash, cards.PUDDING)
    let playerPuddingCountAfter = playerPuddingCountBefore + 1

    let oppsPuddingCounts = []
    for (let opp of opps)
      oppsPuddingCounts.push(opps.dessert + countCard(opp.stash, cards.PUDDING))

    let marginalValue =
      scorePudding(playerPuddingCountAfter, oppsPuddingCounts) -
      scorePudding(playerPuddingCountBefore, oppsPuddingCounts)

    let trueCardsLeft = cardsLeft + (NUMROUNDS - round) * MAXHANDCARDS
    let trueCardsMax = NUMROUNDS * MAXHANDCARDS

    return (
      (3 * trueCardsLeft) / trueCardsMax +
      (marginalValue * (trueCardsMax - trueCardsLeft)) / trueCardsMax
    )
  }

  /* GREEN TEA ICE CREAM - Pretty simple here, just a somewhat arbitrarily determined map. Number left to complete
     set is inversely proportional to expected value while round remaining is directly proportional */
  if (playerCard.type == cards.GTIC.type) {
    let gticCount = (player.dessert + countCard(player.stash, cards.GTIC)) % 4
    if (gticCount == 0)
      if (round == 1) return 3
      else if (round == 2) return 1.5
      else return 0.25
    else if (gticCount == 1)
      if (round == 1) return 4.5
      else if (round == 2) return 2.75
      else return 0.75
    else if (gticCount == 2)
      if (round == 1) return 8
      else if (round == 2) return 5
      else return 2
    else return 12
  }

  // FRUIT - Marginal value of playing the card
  if (playerCard.color == cards.FRUITDUBWAT.color) {
    // Fruit is stored in base 11 (watermelon * 11 * 11 + pineapple * 11 + orange)
    const cardToFruitRepresentation = (fruitCard) => {
      if (fruitCard.type == cards.FRUITDUBWAT.type) return 11 * 11 + 11 * 11
      else if (fruitCard.type == cards.FRUITDUBPINE.type) return 11 + 11
      else if (fruitCard.type == cards.FRUITDUBO.type) return 1 + 1
      else if (fruitCard.type == cards.FRUITWATERO.type) return 11 * 11 + 1
      else if (fruitCard.type == cards.FRUITPINEO.type) return 11 + 1
      else if (fruitCard.type == cards.FRUITWATERPINE.type) return 11 * 11 + 11
    }

    let fruitNumber = player.dessert

    for (let i = 0; i < player.stash.length; i++)
      if (player.stash[i].color == cards.FRUITDUBWAT.color)
        fruitNumber += cardToFruitRepresentation(player.stash[i])

    let oldScore = scoreFruit(fruitNumber)
    fruitNumber += cardToFruitRepresentation(playerCard)
    let newScore = scoreFruit(fruitNumber)

    return newScore - oldScore
  }

  // Now entering spoon which is aggregated stuff

  let sum = 0
  for (let eligibleType of playerCard.eligibleTypes)
    sum += getExpectedVal(
      typeToCard(eligibleType),
      player,
      opps,
      cardsLeft,
      round
    )

  return sum / playerCard.eligibleTypes.length
}

const getExpectedValSpoon = (playerCard, player, opps, cardsLeft, round) => {
  // Return a value 0-1 representative of how likely the requested card is to be found in general
  const getProbability = () => {
    if (
      [cards.SQUID.type, cards.MAKITHREE.type, cards.URAMAKIFIVE.type].includes(
        playerCard.type
      )
    )
      return cardsLeft > 6 ? 0.9 - 0.15 * (MAXHANDCARDS - cardsLeft) : 0

    if (
      [cards.SALMON.type, cards.MAKITWO.type, cards.URAMAKIFOUR.type].includes(
        playerCard.type
      )
    )
      return cardsLeft <= 6 && cardsLeft > 3 ? 0.9 - 0.1 * (6 - cardsLeft) : 0

    if (
      [cards.SALMON.type, cards.MAKITWO.type, cards.URAMAKIFOUR.type].includes(
        playerCard.type
      )
    )
      return cardsLeft <= 6 && cardsLeft > 3 ? 0.9 - 0.1 * (6 - cardsLeft) : 0

    if (playerCard.type == cards.TEMAKIGUIDE.type)
      return cardsLeft >= 6
        ? 1 - 0.05 * (MAXHANDCARDS - cardsLeft)
        : 0.75 - 0.1 * (5 - cardsLeft)

    if (playerCard.type == cards.CHOPSTICKSGUIDE.type)
      return 0.7 - 0.05 * (MAXHANDCARDS - cardsLeft)

    if (playerCard.type == cards.SPOONGUIDE.type) return 0

    if (playerCard.type == cards.MENUGUIDE.type)
      if (cardsLeft >= 7) return 0.75 - 0.05 * (9 - cardsLeft)
      else if (cardsLeft >= 5) return 0.55 - 0.1 * (6 - cardsLeft)
      else if (cardsLeft >= 3) return 0.3 - 0.15 * (4 - cardsLeft)
      else return 0.1

    if (playerCard.type == cards.TAKEOUTGUIDE.type)
      return cardsLeft >= 7 ? 0.75 : 0.7 - 0.1 * (6 - cardsLeft)

    if (
      [
        cards.WASABI.type,
        cards.TEA.type,
        cards.SOYSAUCE.type,
        cards.SPECIALORDER.type,
        cards.PUDDINGGUIDE.type,
        cards.GTICGUIDE.type,
        cards.FRUITGUIDE.type,
      ].includes(playerCard.type)
    )
      return cardsLeft / 13.5

    if (
      [
        cards.DUMPLINGGUIDE.type,
        cards.TEMPURAGUIDE.type,
        cards.SASHIMIGUIDE.type,
        cards.MISOUGIDE.type,
        cards.EDAMAMEGUIDE.type,
        cards.EELGUIDE.type,
        cards.TOFUGUIDE.type,
        cards.ONIGIRIGUIDE.type,
      ].includes(playerCard.type)
    )
      return cardsLeft / MAXHANDCARDS

    if (
      [
        cards.NIGIRIGUIDE.type,
        cards.MAKIGUIDE.type,
        cards.URAMAKIGUIDE.type,
      ].includes(playerCard.type)
    )
      return cardsLeft <= 3 ? 0.9 - 0.15 * (3 - cardsLeft) : 0

    if (
      [
        cards.ONICIRCLE.type,
        cards.ONISQUARE.type,
        cards.ONITRIANGLE.type,
        cards.ONIFLAT.type,
      ].includes(playerCard.type)
    )
      return cardsLeft / 18

    if (
      [
        cards.FRUITWATERO.type,
        cards.FRUITPINEO.type,
        cards.FRUITWATERPINE.type,
      ].includes(playerCard.type)
    )
      return cardsLeft / 22.5

    if (
      [
        cards.FRUITDUBWAT.type,
        cards.FRUITDUBPINE.type,
        cards.FRUITDUBO.type,
      ].includes(playerCard.type)
    )
      return cardsLeft / 27
  }

  return (
    getExpectedVal(
      typeToCard(playerCard.type),
      player,
      opps,
      cardsLeft,
      round
    ) * getProbability()
  )
}

// Returns an array: 0 -> exVal; 1-> cards taken out to get that exVal
const workTakeout = (player, opps, cardsLeft, round) => {
  let takeoutCards = []

  const turnToTakeout = (searchCard, num) => {
    if (num == 0) return
    for (let i = 0; i < player.stash.length; i++)
      if (player.stash[i].type == searchCard.type) {
        takeoutCards.push(player.stash[i])
        player.stash[i] = cards.TOC
        if (--num == 0) break
      }
  }

  const getMockStash = (removeCard) => {
    for (let i = 0; i < player.stash.length; i++)
      if (player.stash[i].type == removeCard.type)
        return player.stash.toSpliced(i, 1)
  }

  const removeAnalysis = (card) => {
    if (countCard(player.stash, card) > 0) {
      let originalStash = [...player.stash]
      let takeouts = 0
      while (countCard(player.stash, card) > 1) {
        player.stash = getMockStash(card)
        if (getExpectedVal(card, player, opps, cardsLeft, round) < 2) takeouts++
        addedValue += 2 - getExpectedVal(card, player, opps, cardsLeft, round)
      }
      player.stash = [...originalStash]
      turnToTakeout(card, takeouts)
    }
  }

  // No value in playing a second takeout (i.e. from chopsticks)
  if (
    countCard(cards.TAKEOUTTEN) +
      countCard(cards.TAKEOUTELEVEN) +
      countCard(cards.TAKEOUTTWELVE) >
    1
  )
    return 0.1

  const multiplier = (MAXHANDCARDS - cardsLeft + 1) / MAXHANDCARDS
  const dessertMultiplier =
    (NUMROUNDS * MAXHANDCARDS -
      (NUMROUNDS - round) * MAXHANDCARDS -
      cardsLeft +
      1) /
    (NUMROUNDS * MAXHANDCARDS)
  let addedValue = 0

  // WASABI - Remove all inactive wasabis, and wasabis with egg nigiri (but don't add value there)
  if (countCard(player.stash, cards.WASABI) > 0) {
    let takeouts = 0
    for (let i = 0; i < player.stash.length; i++)
      if (
        player.stash[i].type == cards.WASABI.type &&
        (i == player.stash.length - 1 ||
          ![cards.SALMON.type, cards.SQUID.type].includes(player.stash[i + 1]))
      ) {
        takeouts++
        addedValue += 2
        if (
          i != player.stash.length - 1 &&
          player.stash[i + 1].type == cards.EGG.type
        )
          addedValue -= 2
      }
    turnToTakeout(cards.WASABI, takeouts)
  }

  // NIGIRI - Remove all eggs and give + 1 value (1 -> 2). Even on wasabi, that step accounts for egg on wasabi value loss.
  addedValue += countCard(player.stash, cards.EGG)
  turnToTakeout(cards.EGG, -1)

  // MAKI
  removeAnalysis(cards.MAKIONE)
  removeAnalysis(cards.MAKITWO)
  removeAnalysis(cards.MAKITHREE)

  // TEMAKI
  removeAnalysis(cards.TEMAKI)

  // URAMAKI
  removeAnalysis(cards.URAMAKITHREE)
  removeAnalysis(cards.URAMAKIFOUR)
  removeAnalysis(cards.URAMAKIFIVE)

  // CHOPSTICKS
  removeAnalysis(cards.CHOPSTICKSONE)
  removeAnalysis(cards.CHOPSTICKSTWO)
  removeAnalysis(cards.CHOPSTICKSTHREE)

  // SPOON
  removeAnalysis(cards.SPOONFOUR)
  removeAnalysis(cards.SPOONFIVE)
  removeAnalysis(cards.SPOONSIX)

  // MENU - Impossible to be in stash

  // TAKEOUT BOX - Handled at start, very low incentive to play a second when one is already in stash

  // WASABI - Done earlier

  // TEA - Remove if there is only one tea and it is scoring one
  if (countCard(player.stash, cards.TEA) == 1 && scoreTea(player.stash) == 1) {
    addedValue += 1
    turnToTakeout(cards.TEA, 1)
  }

  // SOYSAUCE
  removeAnalysis(cards.SOYSAUCE)

  // SPECIAL ORDER - Impossible to be in stash

  // DUMPLING - Turn over if <= 2 (each has 1.5 value)
  if ([1, 2].includes(countCard(player.stash, cards.DUMPLING) <= 2)) {
    turnToTakeout(cards.DUMPLING, -1)
    addedValue += 1
  }

  // TEMPURA - Turn over any odd one out tempura (has 0 value)
  if (countCard(player.stash, cards.TEMPURA) % 2 == 1) {
    turnToTakeout(cards.TEMPURA, 1)
    addedValue += 2
  }

  // SASHIMI - Turn over any ones not part of a set (have o value)
  if (countCard(player.stash, cards.SASHIMI) % 3 != 0) {
    addedValue += 2 * (countCard(player.stash, cards.SASHIMI) % 3)
    turnToTakeout(cards.SASHIMI, countCard(player.stash, cards.SASHIMI) % 3)
  }

  // MISO SOUP - Never turn over (has 3 value)

  /* EDAMAME - Turn over all if expected value lost on net is less than .5
     (assumed benefit from reducing others' scores) */
  if (countCard(player.stash, cards.EDAMAME) > 0) {
    let marginalValue =
      (2 - getExpectedVal(cards.EDAMAME, player, opps, cardsLeft, round)) *
      countCard(player.stash, cards.EDAMAME)
    marginalValue += 0.5

    if (marginalValue > 0) {
      turnToTakeout(cards.EDAMAME, -1)
      addedValue += marginalValue
    }
  }

  // EEL - Turn over if there is only one (-3 value), and any over two (0 value) */
  if (![0, 2].includes(countCard(player.stash, cards.EEL))) {
    if (countCard(player.stash, cards.EEL) == 1) addedValue += 5
    else addedValue += 2 * (countCard(player.stash, cards.EEL) - 2)
    turnToTakeout(cards.EEL, countCard(player.stash, cards.EEL) - 2)
  }

  // TOFU - Turn over any over two (-6 value)
  if (countCard(player.stash, cards.TOFU) > 2) {
    addedValue += 6 + 2 * (countCard(player.stash, cards.EEL) - 2)
    turnToTakeout(cards.TOFU, countCard(player.stash, cards.EEL) - 2)
  }

  // ONIGIRI - Turn over any that count for one (only of its kind)
  if (countCard(player.stash, cards.ONICIRCLE) > 0) {
    let maxOthers = Math.max(
      countCard(player.stash, cards.ONISQUARE),
      countCard(player.stash, cards.ONITRI),
      countCard(player.stash, cards.ONIFLAT)
    )

    if (countCard(player.stash, cards.ONICIRCLE) > maxOthers) {
      addedValue += countCard(player.stash, cards.ONICIRCLE) - maxOthers
      turnToTakeout(
        cards.TOFU,
        countCard(player.stash, cards.ONICIRCLE) - maxOthers
      )
    }
  }

  if (countCard(player.stash, cards.ONISQUARE) > 0) {
    let maxOthers = Math.max(
      countCard(player.stash, cards.ONICIRCLE),
      countCard(player.stash, cards.ONITRI),
      countCard(player.stash, cards.ONIFLAT)
    )

    if (countCard(player.stash, cards.ONISQUARE) > maxOthers) {
      addedValue += countCard(player.stash, cards.ONISQUARE) - maxOthers
      turnToTakeout(
        cards.TOFU,
        countCard(player.stash, cards.ONISQUARE) - maxOthers
      )
    }
  }

  if (countCard(player.stash, cards.ONITRI) > 0) {
    let maxOthers = Math.max(
      countCard(player.stash, cards.ONICIRCLE),
      countCard(player.stash, cards.ONISQUARE),
      countCard(player.stash, cards.ONIFLAT)
    )

    addedValue += countCard(player.stash, cards.ONITRI) - maxOthers
    if (countCard(player.stash, cards.ONITRI) > maxOthers) {
      turnToTakeout(
        cards.TOFU,
        countCard(player.stash, cards.ONITRI) - maxOthers
      )
    }
  }

  if (countCard(player.stash, cards.ONIFLAT) > 0) {
    let maxOthers = Math.max(
      countCard(player.stash, cards.ONICIRCLE),
      countCard(player.stash, cards.ONISQUARE),
      countCard(player.stash, cards.ONITRI)
    )

    addedValue += countCard(player.stash, cards.ONIFLAT) - maxOthers
    if (countCard(player.stash, cards.ONIFLAT) > maxOthers) {
      turnToTakeout(
        cards.TOFU,
        countCard(player.stash, cards.ONIFLAT) - maxOthers
      )
    }
  }

  // Before desserts apply non dessert multiplier
  let nonDessertValue = addedValue * multiplier
  addedValue = 0

  // PUDDING - Use expected value analysis
  removeAnalysis(cards.PUDDING)

  // GREEN TEA ICE CREAM - Remove any one not part of a set (0 value )
  if (countCard(player.stash, cards.GTIC) > 0) {
    addedValue +=
      (2 * (player.dessert + countCard(player.stash, cards.GTIC))) % 4
    turnToTakeout(
      cards.GTIC,
      (player.dessert + countCard(player.stash, cards.GTIC)) % 4
    )
  }

  // FRUIT - If expected value is less than 2 turn it over
  for (let fruitCard of [
    cards.FRUITDUBWAT,
    cards.FRUITDUBPINE,
    cards.FRUITDUBO,
    cards.FRUITWATERO,
    cards.FRUITGUIDE,
    cards.FRUITWATERPINE,
  ])
    removeAnalysis(fruitCard)

  let dessertValue = addedValue * dessertMultiplier
  return [nonDessertValue + dessertValue, takeoutCards]
}

/* Actually picks the card. Does not simply pick the highest expected value, that would limit variety.
     The implementation is somewhat jank but the idea is that the higher the expected value the higher the
     probability that the card is played. For harder difficulties, the probabilities are more skewed towards
     the higher expected values */
const chooseIndex = (expectedVals, cardsLeft, difficulty) => {
  let sum = 0

  // Increase power (which skews towards higher exVals) as stashes differentiate, as redundancy is matters less
  let pow = 2.4 + 0.24 * (MAXHANDCARDS - cardsLeft)

  if (difficulty == 'normal') pow /= 2
  else if (difficulty == 'toxic') pow *= 2

  for (let i = 0; i < expectedVals.length; i++)
    sum += Math.pow(expectedVals[i], pow)

  let choice = Math.random() * sum

  for (let i = 0; i < expectedVals.length; i++) {
    choice -= Math.pow(expectedVals[i], pow)
    if (choice <= 0) return i
  }

  // In case due to rounding a card is nor already selected
  return Math.floor(Math.random() * expectedVals.length)
}

// Returns the index of the card in player.hand to be played
const pickComputerCardFull = (
  player,
  opps,
  cardsLeft,
  round,
  difficulty,
  fromMenu
) => {
  /* Filters out repeats and cards that are objectively worse than other cards in hand
     (e.g. Takes out egg nigiris from a hand with salmon nigiri)
     Filtering includes action specials too even though they are mostly equivalent*/
  const filter = () => {
    const isAllowed = (i) => {
      // Cannot play menu from menu
      if (fromMenu && player.hand[i].color == cards.MENUSEVEN.color)
        return false
      if (player.hand[i].type == cards.EGG.type)
        return (
          countCard(player.hand, cards.SALMON) +
            countCard(player.hand, cards.SQUID) ==
          0
        )
      if (player.hand[i].type == cards.SALMON.type)
        return countCard(player.hand, cards.SQUID) == 0
      if (player.hand[i].type == cards.MAKIONE.type)
        return (
          countCard(player.hand, cards.MAKITWO) +
            countCard(player.hand, cards.MAKITHREE) ==
          0
        )
      if (player.hand[i].type == cards.MAKITWO.type)
        return countCard(player.hand, cards.MAKITHREE) == 0
      if (player.hand[i].type == cards.URAMAKITHREE.type)
        return (
          countCard(player.hand, cards.URAMAKIFOUR) +
            countCard(player.hand, cards.URAMAKIFIVE) ==
          0
        )
      if (player.hand[i].type == cards.URAMAKIFOUR.type)
        return countCard(player.hand, cards.URAMAKIFIVE) == 0
      if (player.hand[i].type == cards.CHOPSTICKSTHREE.type)
        return (
          countCard(player.hand, cards.CHOPSTICKSTWO) +
            countCard(player.hand, cards.CHOPSTICKSONE) ==
          0
        )
      if (player.hand[i].type == cards.CHOPSTICKSTWO.type)
        return countCard(player.hand, cards.CHOPSTICKSONE) == 0
      if (player.hand[i].type == cards.SPOONSIX.type)
        return (
          countCard(player.hand, cards.SPOONFIVE) +
            countCard(player.hand, cards.SPOONFOUR) ==
          0
        )
      if (player.hand[i].type == cards.SPOONFIVE.type)
        return countCard(player.hand, cards.SPOONFOUR) == 0
      if (player.hand[i].type == cards.MENUSEVEN.type)
        return (
          countCard(player.hand, cards.MENUEIGHT) +
            countCard(player.hand, cards.MENUNINE) ==
          0
        )
      if (player.hand[i].type == cards.MENUEIGHT.type)
        return countCard(player.hand, cards.MENUNINE) == 0
      if (player.hand[i].type == cards.TAKEOUTTEN.type)
        return (
          countCard(player.hand, cards.TAKEOUTELEVEN) +
            countCard(player.hand, cards.TAKEOUTTWELVE) ==
          0
        )
      if (player.hand[i].type == cards.TAKEOUTELEVEN.type)
        return countCard(player.hand, cards.TAKEOUTTWELVE) == 0
      return true
    }
    let allowedIndices = []
    let currentTypes = []
    for (let i = 0; i < player.hand.length; i++)
      if (isAllowed(i) && !currentTypes.includes(player.hand[i].type)) {
        allowedIndices.push(i)
        currentTypes.push(player.hand[i].type)
      }
    return allowedIndices
  }

  if (difficulty == 'easy')
    return Math.floor(Math.random() * player.hand.length)

  let expectedVals = []
  let allowedIndices = filter(player.hand)

  for (let i = 0; i < player.hand.length; i++)
    if (allowedIndices.includes(i))
      expectedVals.push(
        getExpectedVal(player.hand[i], player, opps, cardsLeft, round)
      )

  let j = 0
  for (let allowedIndex of allowedIndices)
    console.log(player.hand[allowedIndex].text + ': ' + expectedVals[j++])

  console.log('--------------')

  return allowedIndices[chooseIndex(expectedVals, cardsLeft, difficulty)]
}

export const pickComputerCard = (
  player,
  opps,
  cardsLeft,
  round,
  difficulty
) => {
  return pickComputerCardFull(player, opps, cardsLeft, round, difficulty, false)
}

export const pickComputerSpecialOrder = (
  player,
  opps,
  cardsLeft,
  round,
  difficulty
) => {
  if (difficulty == 'easy')
    return Math.floor(Math.random() * player.stash.length)

  let maxIndex = -1
  let maxExVal = -1

  for (let i = 0; i < player.stash.length; i++)
    if (
      player.stash[i].type != cards.SPECIALO.type &&
      player.stash[i].color != cards.MENUSEVEN.type &&
      getExpectedVal(player.stash[i], player, opps, cardsLeft, round) > maxExVal
    ) {
      maxIndex = i
      maxExVal = getExpectedVal(player.stash[i], player, opps, cardsLeft, round)
    }

  return maxIndex
}

export const pickComputerSpoon = (
  player,
  opps,
  cardsLeft,
  round,
  difficulty,
  info
) => {
  let spoonCards = []
  for (let i = 0; i < info.length; i++)
    for (let type of info[i]) {
      let eligibleTypes = typeToCard(type).eligibleTypes
      for (let i = 0; i < eligibleTypes.length; i++)
        spoonCards.push(typeToCard(eligibleTypes[i]))
      if (eligibleTypes.length > 1) spoonCards.push(typeToCard(type))
    }

  console.log(spoonCards)

  if (difficulty == 'easy')
    return spoonCards[Math.floor(Math.random() * spoonCards.length)]

  let expectedVals = []

  for (let i = 0; i < spoonCards.length; i++)
    expectedVals.push(
      getExpectedValSpoon(spoonCards[i], player, opps, cardsLeft, round)
    )

  for (let j = 0; j < spoonCards.length; j++)
    console.log(spoonCards[j].text + ': ' + expectedVals[j])

  console.log('--------------')

  return spoonCards[chooseIndex(expectedVals, cardsLeft, difficulty)]
}

export const pickComputerMenu = (
  player,
  opps,
  cardsLeft,
  round,
  difficulty
) => {
  return pickComputerCardFull(player, opps, cardsLeft, round, difficulty, true)
}

// Return a list of cards that were taken out
export const pickComputerTakeout = (
  player,
  opps,
  cardsLeft,
  round,
  difficulty
) => {
  let takeoutCards = []

  if (difficulty == 'easy') {
    for (let i = 0; i < player.stash.length; i++)
      if (
        player.stash[i].color != cards.TAKEOUTTEN.color &&
        Math.random() > 0.5
      ) {
        takeoutCards.push(player.stash[i])
        player.stash[i] = cards.TOC
      }
  } else takeoutCards = workTakeout(player, opps, cardsLeft, round)[1]

  return takeoutCards
}

// ADD FILTER FN
