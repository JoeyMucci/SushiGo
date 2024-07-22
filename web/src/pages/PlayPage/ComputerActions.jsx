import {
  cards,
  countCard,
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

// Returns the index of the card in player.hand to be played
export const pickComputerCard = (
  player,
  opps,
  cardsLeft,
  round,
  difficulty
) => {
  let oppsStashes = []
  for (let i = 0; i < opps.length; i++) oppsStashes.push(opps[i].stash)

  /* Filters out repeats and cards that are objectively worse than other cards in hand
     (e.g. Takes out egg nigiris from a hand with salmon nigiri)
     Filtering includes action specials too even though they are mostly equivalent*/
  const filter = () => {
    const isAllowed = (i) => {
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

  // Gets the expected value of playing playerCard
  const getExpectedVal = (playerCard) => {
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

        for (let oppCount of oppsCounts)
          if (oppCount > playerCount) return false
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
      if (
        uramakiCountAfter >= 10 &&
        !player.uramakiScored &&
        uramakiPoints >= 2
      )
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

      return (cardsLeft / 2.8) * (0.7 - 0.05 * (MAXHANDCARDS - cardsLeft))
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

    // TAKEOUT BOX - Yea im doing this later
    if (playerCard.color == cards.TAKEOUTTEN.color) return 1.5

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

      let maxVal = 0.1
      for (let i = 0; i < player.stash.length; i++)
        if (getExpectedVal(player.stash[i]) > maxVal)
          maxVal = getExpectedVal(player.stash[i])

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
      switch (countCard(player.stash, cards.EEL)) {
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
        oppsPuddingCounts.push(
          opps.dessert + countCard(opp.stash, cards.PUDDING)
        )

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
        else if (fruitCard.type == cards.FRUITWATERPINE.type)
          return 11 * 11 + 11
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

    // Catch all case for some anomaly
    return 2
  }

  /* Actually picks the card. Does not simply pick the highest expected value, that would limit variety.
     The implementation is somewhat jank but the idea is that the higher the expected value the higher the
     probability that the card is played. For harder difficulties, the probabilities are more skewed towards
     the higher expected values */
  const chooseIndex = (expectedVals) => {
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
    return 0
  }

  if (difficulty == 'easy')
    return Math.floor(Math.random() * player.hand.length)

  let expectedVals = []
  let allowedIndices = filter(player.hand)

  for (let i = 0; i < player.hand.length; i++)
    if (allowedIndices.includes(i))
      expectedVals.push(
        getExpectedVal(player.hand[i], player.stash, oppsStashes, round)
      )

  let j = 0
  for (let allowedIndex of allowedIndices)
    console.log(player.hand[allowedIndex].text + ': ' + expectedVals[j++])

  return allowedIndices[chooseIndex(expectedVals)]
}

export const pickComputerSpoon = () => {
  return cards.EGG
}

export const pickComputerMenu = () => {}

// Return a list of cards that were taken out
export const pickComputerTakeout = () => {}

// ADD FILTER FN
