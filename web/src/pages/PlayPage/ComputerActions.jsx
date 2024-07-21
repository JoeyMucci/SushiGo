import {
  cards,
  countCard,
  MAXHANDCARDS,
} from 'web/src/pages/PlayPage/PlayPage.jsx'
import {
  scoreMaki,
  scoreTemaki,
  scoreTea,
  scoreDumpling,
  scoreOnigiri,
} from 'web/src/pages/PlayPage/Scoring.jsx'

// Returns the index of the card in playerHand to be played
export const pickComputerCard = (
  playerHand,
  playerStash,
  oppsStashes,
  cardsLeft,
  round,
  difficulty
) => {
  /* Filters out cards that are objectively worse than other cards in hand
     (e.g. Takes out egg nigiris from a hand with salmon nigiri)
     Including action specials too even though they are mostly equivalent*/
  const filterLow = () => {
    const isAllowed = (i) => {
      if (playerHand[i].type == cards.EGG.type)
        return (
          countCard(playerHand, cards.SALMON) +
            countCard(playerHand, cards.SQUID) ==
          0
        )
      if (playerHand[i].type == cards.SALMON.type)
        return countCard(playerHand, cards.SQUID) == 0
      if (playerHand[i].type == cards.MAKIONE.type)
        return (
          countCard(playerHand, cards.MAKITWO) +
            countCard(playerHand, cards.MAKITHREE) ==
          0
        )
      if (playerHand[i].type == cards.MAKITWO.type)
        return countCard(playerHand, cards.MAKITHREE) == 0
      if (playerHand[i].type == cards.URAMAKITHREE.type)
        return (
          countCard(playerHand, cards.URAMAKIFOUR) +
            countCard(playerHand, cards.URAMAKIFIVE) ==
          0
        )
      if (playerHand[i].type == cards.URAMAKIFOUR.type)
        return countCard(playerHand, cards.URAMAKIFIVE) == 0
      if (playerHand[i].type == cards.CHOPSTICKSTHREE.type)
        return (
          countCard(playerHand, cards.CHOPSTICKSTWO) +
            countCard(playerHand, cards.CHOPSTICKSONE) ==
          0
        )
      if (playerHand[i].type == cards.CHOPSTICKSTWO.type)
        return countCard(playerHand, cards.CHOPSTICKSONE) == 0
      if (playerHand[i].type == cards.SPOONSIX.type)
        return (
          countCard(playerHand, cards.SPOONFIVE) +
            countCard(playerHand, cards.SPOONFOUR) ==
          0
        )
      if (playerHand[i].type == cards.SPOONFIVE.type)
        return countCard(playerHand, cards.SPOONFOUR) == 0
      if (playerHand[i].type == cards.MENUSEVEN.type)
        return (
          countCard(playerHand, cards.MENUEIGHT) +
            countCard(playerHand, cards.MENUNINE) ==
          0
        )
      if (playerHand[i].type == cards.MENUEIGHT.type)
        return countCard(playerHand, cards.MENUNINE) == 0
      if (playerHand[i].type == cards.TAKEOUTTEN.type)
        return (
          countCard(playerHand, cards.TAKEOUTELEVEN) +
            countCard(playerHand, cards.TAKEOUTTWELVE) ==
          0
        )
      if (playerHand[i].type == cards.TAKEOUTELEVEN.type)
        return countCard(playerHand, cards.TAKEOUTTWELVE) == 0
      return true
    }
    let allowedIndices = []
    for (let i = 0; i < playerHand.length; i++)
      if (isAllowed(i)) allowedIndices.push(i)
    return allowedIndices
  }

  // Gets the expected value of playing playerCard given playerStash, oppsStashes, and round
  const getExpectedVal = (playerCard) => {
    const hasActiveWasabi = () => {
      for (let wasabiLoc = 0; wasabiLoc < playerStash.length - 1; wasabiLoc++)
        if (
          playerStash[wasabiLoc].type == cards.WASABI.type &&
          (wasabiLoc == playerStash.length - 2 ||
            ![cards.EGG.type, cards.SALMON.type, cards.SQUID.type].includes(
              playerStash[wasabiLoc + 1].type
            ))
        )
          return true
      return false
    }

    // Use this when conducting mock scoring to get expected value
    let newPlayerStash = [...playerStash, playerCard]

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
          scoreMaki(playerStash, oppsStashes)) *
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
          scoreTemaki(playerStash, oppsStashes)) *
          (MAXHANDCARDS - cardsLeft)) /
          MAXHANDCARDS
      )
    }

    /* URAMAKI - I'll do it later LOL */
    if (playerCard.color == cards.URAMAKITHREE.color) return 1.5

    /* CHOPSTICKS - Assign a low value if there already is a chopsticks or it is late in
    the round, otherwise assign a value that decreases as the round progresses */
    if (playerCard.color == cards.CHOPSTICKSONE.color) {
      if (
        countCard(playerStash, cards.CHOPSTICKSONE) +
          countCard(playerStash, cards.CHOPSTICKSTWO) +
          countCard(playerStash, cards.CHOPSTICKSTHREE) >
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
        countCard(playerStash, cards.SPOONFOUR) +
          countCard(playerStash, cards.SPOONFIVE) +
          countCard(playerStash, cards.SPOONSIX) >
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
      return scoreTea(newPlayerStash) - scoreTea(playerStash)

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

    // SPECIAL ORDER - LATER
    if (playerCard.type == cards.SPECIALO.type) return 2.5

    /* DUMPLING - Value of playing the card plus a small bonus earlier
       in the round since dumpling is more of an investment card */
    if (playerCard.type == cards.DUMPLING.type)
      return (
        scoreDumpling(newPlayerStash) -
        scoreDumpling(playerStash) +
        cardsLeft / 4
      )

    // TEMPURA - 5 if it completes the set, otherwise value declines as round progresses
    if (playerCard.type == cards.TEMPURA.type)
      return countCard(playerStash, cards.TEMPURA) % 2 ? 5 : cardsLeft / 3.5

    /* SASHIMI - 10 if it completes the set, otherwise value declines as round progresses.
       If set is partial completed there is a big expected value bump */
    if (playerCard.type == cards.SASHIMI.type) {
      let sashimiCount = countCard(playerStash, cards.SASHIMI) % 3

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
      switch (countCard(playerStash, cards.EEL)) {
        case 0:
          return cardsLeft / 3.5
        case 1:
          return 10
        default:
          return 0.1
      }

    /* TOFU - 2 (face value) + bonus for large opportunity of completing set for first play.
       4 for completing the set (2 to 6), very small value for third since it is -6.
       For beyond third slightly more since no longer losing points. */
    if (playerCard.type == cards.TOFU.type)
      switch (countCard(playerStash, cards.EEL)) {
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
       to achieve it. The upside is dramatically decreased if the shape is not unique in the players stash. */
    if (playerCard.color == cards.ONICIRCLE.color) {
      let newShape = countCard(playerStash, playerCard) == 0
      let diff = scoreOnigiri(newPlayerStash) - scoreOnigiri(playerStash)

      if (diff == 7) return 7

      if (newShape) return diff + cardsLeft / 4
      else return diff + cardsLeft / 15
    }

    /* Dessert not right now */
    return 2.25
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

  if (difficulty == 'easy') return Math.floor(Math.random() * playerHand.length)

  let expectedVals = []
  let allowedIndices = filterLow(playerHand)

  for (let i = 0; i < playerHand.length; i++)
    if (allowedIndices.includes(i))
      expectedVals.push(
        getExpectedVal(playerHand[i], playerStash, oppsStashes, round)
      )

  let j = 0
  for (let allowedIndex of allowedIndices)
    console.log(playerHand[allowedIndex].text + ': ' + expectedVals[j++])

  return allowedIndices[chooseIndex(expectedVals)]
}

export const pickComputerSpoon = () => {
  return cards.EGG
}

export const pickComputerMenu = () => {}

// Return a list of cards that were taken out
export const pickComputerTakeout = () => {}

// ADD FILTER FN
