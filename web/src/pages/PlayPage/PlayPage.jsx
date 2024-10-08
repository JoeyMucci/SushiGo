/* eslint-disable no-fallthrough */

import { useState } from 'react'

import chopsticks1 from 'web/public/chopsticks(1).jpg'
import chopsticks2 from 'web/public/chopsticks(2).jpg'
import chopsticks3 from 'web/public/chopsticks(3).jpg'
import chopsticks from 'web/public/chopsticks.jpg'
import dumpling from 'web/public/dumpling.jpg'
import dumplingguide from 'web/public/dumplingguide.jpg'
import edamame from 'web/public/edamame.jpg'
import edamameguide from 'web/public/edamameguide.jpg'
import eel from 'web/public/eel.jpg'
import eelguide from 'web/public/eelguide.jpg'
import eggnigiri from 'web/public/egg_nigiri.jpg'
import fruitdoubleorange from 'web/public/fruit(double_orange).jpg'
import fruitdoublepineapple from 'web/public/fruit(double_pineapple).jpg'
import fruitdoublewatermelon from 'web/public/fruit(double_watermelon).jpg'
import fruitpineappleorange from 'web/public/fruit(pineapple_orange).jpg'
import fruitwatermelonorange from 'web/public/fruit(watermelon_orange).jpg'
import fruitwatermelonpineapple from 'web/public/fruit(watermelon_pineapple).jpg'
import fruit from 'web/public/fruit.jpg'
import greenteaicecream from 'web/public/green_tea_ice_cream.jpg'
import gticguide from 'web/public/gticguide.jpg'
import maki1 from 'web/public/maki(1).jpg'
import maki2 from 'web/public/maki(2).jpg'
import maki3 from 'web/public/maki(3).jpg'
import maki from 'web/public/maki.jpg'
import menu7 from 'web/public/menu(7).jpg'
import menu8 from 'web/public/menu(8).jpg'
import menu9 from 'web/public/menu(9).jpg'
import menu from 'web/public/menu.jpg'
import misosoup from 'web/public/miso_soup.jpg'
import misoguide from 'web/public/misoguide.jpg'
import nigiri from 'web/public/nigiri.jpg'
import onigiricircle from 'web/public/onigiri(circle).jpg'
import onigiriflat from 'web/public/onigiri(flat).jpg'
import onigirisquare from 'web/public/onigiri(square).jpg'
import onigiritriangle from 'web/public/onigiri(triangle).jpg'
import onigiri from 'web/public/onigiri.jpg'
import pudding from 'web/public/pudding.jpg'
import puddingguide from 'web/public/puddingguide.jpg'
import salmonnigiri from 'web/public/salmon_nigiri.jpg'
import sashimi from 'web/public/sashimi.jpg'
import sashimiguide from 'web/public/sashimiguide.jpg'
import soysauce from 'web/public/soysauce.jpg'
import soysauceguide from 'web/public/soysauceguide.jpg'
import specialorder from 'web/public/special_order.jpg'
import specialguide from 'web/public/specialguide.jpg'
import spoon4 from 'web/public/spoon(4).jpg'
import spoon5 from 'web/public/spoon(5).jpg'
import spoon6 from 'web/public/spoon(6).jpg'
import spoon from 'web/public/spoon.jpg'
import squidnigiri from 'web/public/squid_nigiri.jpg'
import takeoutbox10 from 'web/public/takeout_box(10).jpg'
import takeoutbox11 from 'web/public/takeout_box(11).jpg'
import takeoutbox12 from 'web/public/takeout_box(12).jpg'
import takeoutbox from 'web/public/takeout_box.jpg'
import tea from 'web/public/tea.jpg'
import teaguide from 'web/public/teaguide.jpg'
import temaki from 'web/public/temaki.jpg'
import temakiguide from 'web/public/temakiguide.jpg'
import tempura from 'web/public/tempura.jpg'
import tempuraguide from 'web/public/tempuraguide.jpg'
import tofu from 'web/public/tofu.jpg'
import tofuguide from 'web/public/tofuguide.jpg'
import turnedovercard from 'web/public/turned_over_card.jpg'
import uramaki3 from 'web/public/uramaki(3).jpg'
import uramaki4 from 'web/public/uramaki(4).jpg'
import uramaki5 from 'web/public/uramaki(5).jpg'
import uramaki from 'web/public/uramaki.jpg'
import wasabi from 'web/public/wasabi.jpg'
import wasabiguide from 'web/public/wasabiguide.jpg'
import {
  pickComputerCard,
  pickComputerSpecialOrder,
  pickComputerUsingUtensil,
  pickComputerSpoon,
  pickComputerBeingSpooned,
  pickComputerMenu,
  pickComputerTakeout,
} from 'web/src/pages/PlayPage/ComputerActions.jsx'
import {
  scoreNigiri,
  scoreMaki,
  scoreTemaki,
  scoreLeftovers,
  scoreTea,
  scoreSoysauce,
  scoreDumpling,
  scoreTempura,
  scoreSashimi,
  scoreMiso,
  scoreEdamame,
  scoreEel,
  scoreTofu,
  scoreOnigiri,
  scorePudding,
  scoreGTIC,
  scoreFruit,
} from 'web/src/pages/PlayPage/Scoring.jsx'

import { Label, Form, CheckboxField, Submit } from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

export const cards = Object.freeze({
  NIGIRIGUIDE: {
    type: 1,
    picpath: nigiri,
    text: 'nigiri',
    eligibleTypes: [24, 25, 26],
  },
  MAKIGUIDE: {
    type: 2,
    picpath: maki,
    text: 'maki',
    eligibleTypes: [27, 28, 29],
  },
  TEMAKIGUIDE: {
    type: 3,
    picpath: temakiguide,
    text: 'temaki',
    eligibleTypes: [30],
  },
  URAMAKIGUIDE: {
    type: 4,
    picpath: uramaki,
    text: 'uramaki',
    eligibleTypes: [31, 32, 33],
  },
  CHOPSTICKSGUIDE: {
    type: 5,
    picpath: chopsticks,
    text: 'chopsticks',
    eligibleTypes: [34, 35, 36],
  },
  SPOONGUIDE: {
    type: 6,
    picpath: spoon,
    text: 'spoon',
    eligibleTypes: [37, 38, 39],
  },
  MENUGUIDE: {
    type: 7,
    picpath: menu,
    text: 'menu',
    eligibleTypes: [40, 41, 42],
  },
  TAKEOUTGUIDE: {
    type: 8,
    picpath: takeoutbox,
    text: 'takeout box',
    eligibleTypes: [43, 44, 45],
  },
  TEAGUIDE: {
    type: 9,
    picpath: teaguide,
    text: 'tea',
    eligibleTypes: [46],
  },
  WASABIGUIDE: {
    type: 10,
    picpath: wasabiguide,
    text: 'wasabi',
    eligibleTypes: [47],
  },
  SOYSAUCEGUIDE: {
    type: 11,
    picpath: soysauceguide,
    text: 'soysauce',
    eligibleTypes: [48],
  },
  SPECIALOGUIDE: {
    type: 12,
    picpath: specialguide,
    text: 'special order',
    eligibleTypes: [49],
  },
  DUMPLINGGUIDE: {
    type: 13,
    picpath: dumplingguide,
    text: 'dumpling',
    eligibleTypes: [50],
  },
  TEMPURAGUIDE: {
    type: 14,
    picpath: tempuraguide,
    text: 'tempura',
    eligibleTypes: [51],
  },
  SASHIMIGUIDE: {
    type: 15,
    picpath: sashimiguide,
    text: 'sashimi',
    eligibleTypes: [52],
  },
  MISOGUIDE: {
    type: 16,
    picpath: misoguide,
    text: 'miso soup',
    eligibleTypes: [53],
  },
  EDAMAMEGUIDE: {
    type: 17,
    picpath: edamameguide,
    text: 'edamame',
    eligibleTypes: [54],
  },
  EELGUIDE: {
    type: 18,
    picpath: eelguide,
    text: 'eel',
    eligibleTypes: [55],
  },
  TOFUGUIDE: {
    type: 19,
    picpath: tofuguide,
    text: 'tofu',
    eligibleTypes: [56],
  },
  ONIGIRIGUIDE: {
    type: 20,
    picpath: onigiri,
    text: 'onigiri',
    eligibleTypes: [57, 58, 59, 60],
  },
  PUDDINGGUIDE: {
    type: 21,
    picpath: puddingguide,
    text: 'pudding',
    eligibleTypes: [61],
  },
  GTICGUIDE: {
    type: 22,
    picpath: gticguide,
    text: 'green tea ice cream',
    eligibleTypes: [62],
  },
  FRUITGUIDE: {
    type: 23,
    picpath: fruit,
    text: 'fruit',
    eligibleTypes: [63, 64, 65, 66, 67, 68],
  },
  EGG: {
    type: 24,
    text: 'egg nigiri',
    picpath: eggnigiri,
    color: 'yellow',
    count: 4,
  },
  SALMON: {
    type: 25,
    text: 'salmon nigiri',
    picpath: salmonnigiri,
    color: 'yellow',
    count: 5,
  },
  SQUID: {
    type: 26,
    text: 'squid nigiri',
    picpath: squidnigiri,
    color: 'yellow',
    count: 3,
  },
  MAKIONE: {
    type: 27,
    text: 'one maki roll',
    picpath: maki1,
    color: 'red',
    count: 4,
  },
  MAKITWO: {
    type: 28,
    text: 'two maki rolls',
    picpath: maki2,
    color: 'red',
    count: 5,
  },
  MAKITHREE: {
    type: 29,
    text: 'three maki rolls',
    picpath: maki3,
    color: 'red',
    count: 3,
  },
  TEMAKI: {
    type: 30,
    text: 'temaki',
    picpath: temaki,
    color: 'plum',
    count: 12,
  },
  URAMAKITHREE: {
    type: 31,
    text: 'three uramaki rolls',
    picpath: uramaki3,
    color: 'lime',
    count: 4,
  },
  URAMAKIFOUR: {
    type: 32,
    text: 'four uramaki rolls',
    picpath: uramaki4,
    color: 'lime',
    count: 4,
  },
  URAMAKIFIVE: {
    type: 33,
    text: 'five uramaki rolls',
    picpath: uramaki5,
    color: 'lime',
    count: 4,
  },
  CHOPSTICKSONE: {
    type: 34,
    text: 'chopsticks',
    picpath: chopsticks1,
    color: 'sky blue',
    count: 1,
  },
  CHOPSTICKSTWO: {
    type: 35,
    text: 'chopsticks',
    picpath: chopsticks2,
    color: 'sky blue',
    count: 1,
  },
  CHOPSTICKSTHREE: {
    type: 36,
    text: 'chopsticks',
    picpath: chopsticks3,
    color: 'sky blue',
    count: 1,
  },
  SPOONFOUR: {
    type: 37,
    text: 'spoon',
    picpath: spoon4,
    color: 'gray',
    count: 1,
  },
  SPOONFIVE: {
    type: 38,
    text: 'spoon',
    picpath: spoon5,
    color: 'gray',
    count: 1,
  },
  SPOONSIX: {
    type: 39,
    text: 'spoon',
    picpath: spoon6,
    color: 'gray',
    count: 1,
  },
  MENUSEVEN: {
    type: 40,
    text: 'menu',
    picpath: menu7,
    color: 'off white',
    count: 1,
  },
  MENUEIGHT: {
    type: 41,
    text: 'menu',
    picpath: menu8,
    color: 'off white',
    count: 1,
  },
  MENUNINE: {
    type: 42,
    text: 'menu',
    picpath: menu9,
    color: 'off white',
    count: 1,
  },
  TAKEOUTTEN: {
    type: 43,
    text: 'takeout box',
    picpath: takeoutbox10,
    color: 'tan',
    count: 1,
  },
  TAKEOUTELEVEN: {
    type: 44,
    text: 'takeout box',
    picpath: takeoutbox11,
    color: 'tan',
    count: 1,
  },
  TAKEOUTTWELVE: {
    type: 45,
    text: 'takeout box',
    picpath: takeoutbox12,
    color: 'tan',
    count: 1,
  },
  TEA: { type: 46, text: 'tea', picpath: tea, color: 'brown', count: 3 },
  WASABI: {
    type: 47,
    text: 'wasabi',
    picpath: wasabi,
    color: 'yellow',
    count: 3,
  },
  SOYSAUCE: {
    type: 48,
    text: 'soysauce',
    picpath: soysauce,
    color: 'orange',
    count: 3,
  },
  SPECIALO: {
    type: 49,
    text: 'special order',
    picpath: specialorder,
    color: 'rainbow',
    count: 3,
  },
  DUMPLING: {
    type: 50,
    text: 'dumpling',
    picpath: dumpling,
    color: 'indigo',
    count: 8,
  },
  TEMPURA: {
    type: 51,
    text: 'tempura',
    picpath: tempura,
    color: 'light purple',
    count: 8,
  },
  SASHIMI: {
    type: 52,
    text: 'sashimi',
    picpath: sashimi,
    color: 'light green',
    count: 8,
  },
  MISO: {
    type: 53,
    text: 'miso soup',
    picpath: misosoup,
    color: 'teal',
    count: 8,
  },
  EDAMAME: {
    type: 54,
    text: 'edamame',
    picpath: edamame,
    color: 'purple',
    count: 8,
  },
  EEL: { type: 55, text: 'eel', picpath: eel, color: 'poison', count: 8 },
  TOFU: { type: 56, text: 'tofu', picpath: tofu, color: 'green', count: 8 },
  ONICIRCLE: {
    type: 57,
    text: 'circle onigiri',
    picpath: onigiricircle,
    color: 'hot pink',
    count: 2,
  },
  ONISQUARE: {
    type: 58,
    text: 'square onigiri',
    picpath: onigirisquare,
    color: 'hot pink',
    count: 2,
  },
  ONITRI: {
    type: 59,
    text: 'triangle onigiri',
    picpath: onigiritriangle,
    color: 'hot pink',
    count: 2,
  },
  ONIFLAT: {
    type: 60,
    text: 'flat onigiri',
    picpath: onigiriflat,
    color: 'hot pink',
    count: 2,
  },
  PUDDING: {
    type: 61,
    text: 'pudding',
    picpath: pudding,
    color: 'pink',
    count: 15,
  },
  GTIC: {
    type: 62,
    text: 'green tea ice cream',
    picpath: greenteaicecream,
    color: 'blue',
    count: 15,
  },
  FRUITDUBWAT: {
    type: 63,
    text: 'two watermelons',
    picpath: fruitdoublewatermelon,
    color: 'peach',
    count: 2,
  },
  FRUITDUBPINE: {
    type: 64,
    text: 'two pineapples',
    picpath: fruitdoublepineapple,
    color: 'peach',
    count: 2,
  },
  FRUITDUBO: {
    type: 65,
    text: 'two oranges',
    picpath: fruitdoubleorange,
    color: 'peach',
    count: 2,
  },
  FRUITWATERO: {
    type: 66,
    text: 'one watermelon and one orange',
    picpath: fruitwatermelonorange,
    color: 'peach',
    count: 3,
  },
  FRUITPINEO: {
    type: 67,
    text: 'one pineapple and one orange',
    picpath: fruitpineappleorange,
    color: 'peach',
    count: 3,
  },
  FRUITWATERPINE: {
    type: 68,
    text: 'one watermlon and one pineapple',
    picpath: fruitwatermelonpineapple,
    color: 'peach',
    count: 3,
  },
  TOC: {
    type: 69,
    text: 'leftovers',
    picpath: turnedovercard,
    color: null,
    count: 0,
  },
})

// Returns a card given the type
export const typeToCard = (identType) => {
  for (let cardName in cards) {
    if (cards[cardName].type == identType) {
      return cards[cardName]
    }
  }
}

// Returns how many occurences of card are in cards
export const countCard = (cards, card) => {
  let count = 0
  for (let i = 0; i < cards.length; i++) if (cards[i].type == card.type) count++
  return count
}

export const NUMROUNDS = 3
export const MAXHANDCARDS = 9

/* Return counts in the following order: watermelon, pineapple, orange
   fruitNumnber = watermelon*11^2+pineapple*11+orange */
export const parseFruit = (fruitNumber) => {
  let watermelon = Math.floor(fruitNumber / 11 / 11)
  let dessertLeft = fruitNumber - watermelon * 11 * 11
  let pineapple = Math.floor(dessertLeft / 11)
  let orange = dessertLeft - pineapple * 11
  return [watermelon, pineapple, orange]
}

// Converts milliseconds to [hours, minutes, seconds]
export const SToHMS = (secs) => {
  let hours = Math.floor(secs / 60 / 60)
  let seconds = secs - hours * 60 * 60
  let minutes = Math.floor(seconds / 60)
  seconds -= minutes * 60
  return [hours, minutes, seconds]
}

const UPDATE_ACHIEVEMENTS = gql`
  mutation UpdateAchievementsMutation($id: Int!, $input: AchievementsInput!) {
    updateAchievements(id: $id, input: $input) {
      modestMaki
    }
  }
`
document.addEventListener('keydown', function (event) {
  if (event.key == 'Escape') window.location.href = '/'
})

const PlayPage = () => {
  const { isAuthenticated, currentUser } = useAuth()
  const [showGame, setShowGame] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const [userScoreF, setUserScoreF] = useState(0)
  const [cpuOneScoreF, setCpuOneScoreF] = useState(0)
  const [cpuTwoScoreF, setCpuTwoScoreF] = useState(0)
  const [cpuThreeScoreF, setCpuThreeScoreF] = useState(0)
  const [userDessertF, setUserDessertF] = useState(0)
  const [cpuOneDessertF, setCpuOneDessertF] = useState(0)
  const [cpuTwoDessertF, setCpuTwoDessertF] = useState(0)
  const [cpuThreeDessertF, setCpuThreeDessertF] = useState(0)

  const [roll, setRoll] = useState([])
  const [spec, setSpec] = useState([])
  const [app, setApp] = useState([])
  const [dess, setDess] = useState([])
  const [diff, setDiff] = useState([])
  const ROLLCAP = 1
  const SPECCAP = 2
  const APPCAP = 3
  const DESSCAP = 1
  const DIFFCAP = 1

  const resetGame = () => {
    toast.dismiss()
    setShowResults(false)
  }

  // Show the results screen
  if (showResults) {
    const comparePlayers = (a, b) => {
      if (a.score != b.score) return b.score - a.score
      if (a.dessert != b.dessert) return b.dessert - a.dessert
      return b.tiebreak - a.tiebreak
    }

    let userDessertCount = userDessertF
    let cpuOneDessertCount = cpuOneDessertF
    let cpuTwoDessertCount = cpuTwoDessertF
    let cpuThreeDessertCount = cpuThreeDessertF

    /* Change dessertCount to number of cards played for fruit
       For fruit dessert=watermelon*11^2+pineapple*11+orange */
    if (dess.includes(cards.FRUITGUIDE.type)) {
      let userFruitCounts = parseFruit(userDessertF)
      userDessertCount =
        (userFruitCounts[0] + userFruitCounts[1] + userFruitCounts[2]) / 2
      let cpuOneFruitCounts = parseFruit(cpuOneDessertF)
      cpuOneDessertCount =
        (cpuOneFruitCounts[0] + cpuOneFruitCounts[1] + cpuOneFruitCounts[2]) / 2
      let cpuTwoFruitCounts = parseFruit(cpuTwoDessertF)
      cpuTwoDessertCount =
        (cpuTwoFruitCounts[0] + cpuTwoFruitCounts[1] + cpuTwoFruitCounts[2]) / 2
      let cpuThreeFruitCounts = parseFruit(cpuThreeDessertF)
      cpuThreeDessertCount =
        (cpuThreeFruitCounts[0] +
          cpuThreeFruitCounts[1] +
          cpuThreeFruitCounts[2]) /
        2
    }

    // Tiebreak is cpuTwo > cpuThree > cpuOne > user
    let displayInfo = [
      {
        name: isAuthenticated ? currentUser.name : 'Guest',
        score: userScoreF,
        dessert: userDessertCount,
        tiebreak: 0,
      },
      {
        name: diff.includes('toxic') ? 'Jacob' : 'cpu one',
        score: cpuOneScoreF,
        dessert: cpuOneDessertCount,
        tiebreak: 1,
      },
      {
        name: diff.includes('toxic') ? 'Jeff' : 'cpu two',
        score: cpuTwoScoreF,
        dessert: cpuTwoDessertCount,
        tiebreak: 3,
      },
      {
        name: diff.includes('toxic') ? 'Jerry' : 'cpu three',
        score: cpuThreeScoreF,
        dessert: cpuThreeDessertCount,
        tiebreak: 2,
      },
    ]

    displayInfo.sort(comparePlayers)

    /* Display the players in order by score, gold for 1st,
       silver for 2nd, bronze for third, and regular for last */
    return (
      <>
        <div className="flex h-screen flex-col items-center justify-center">
          <p className="text-center font-cal text-6xl text-[color:var(--color-gold)]">
            {displayInfo[0].name}: {displayInfo[0].score} (
            {displayInfo[0].dessert})
          </p>
          <br />
          <p className="text-center font-cal text-6xl text-[color:var(--color-silver)]">
            {displayInfo[1].name}: {displayInfo[1].score} (
            {displayInfo[1].dessert})
          </p>
          <br />
          <p className="text-center font-cal text-6xl text-[color:var(--color-bronze)]">
            {displayInfo[2].name}: {displayInfo[2].score} (
            {displayInfo[2].dessert})
          </p>
          <br />
          <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
            {displayInfo[3].name}: {displayInfo[3].score} (
            {displayInfo[3].dessert})
          </p>
          <br />
          <Form className="flex flex-row">
            <Label className="no-highlight m-2">
              <CheckboxField
                id="newgame"
                name="options"
                onChange={() => (window.location.href = '/play')}
              />
              <p
                name="newgame"
                className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]"
              >
                New Game
              </p>
            </Label>
            <Label className="no-highlight m-2">
              <CheckboxField id="rematch" name="options" onChange={resetGame} />
              <p
                name="rematch"
                className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]"
              >
                Rematch
              </p>
            </Label>
            <Label className="no-highlight m-2">
              <CheckboxField
                id="home"
                name="options"
                onChange={() => (window.location.href = '/')}
              />
              <p
                name="home"
                className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]"
              >
                Home
              </p>
            </Label>
          </Form>
        </div>
        <Toaster />
      </>
    )
  }

  /* numberName - a number identifier
     info - the information about the actual card (text representation, source image, etc.)
     action - function to be called on click
     fullOpacity - shows the card at 50% opacity when false
     displayFrac - how much of the card to show */
  const Card = ({ numberName, info, action, fullOpacity, displayFrac }) => {
    if (displayFrac == '1')
      if (fullOpacity)
        return (
          // CSS shows cursor so it should be clear to user that this is an interactive element although it isn't technically
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <img
            name={numberName}
            src={info.picpath}
            alt={info.text}
            onClick={action}
            onKeyDown={action}
            className="h-36 w-24"
          />
        )
      else
        return (
          // CSS shows cursor so it should be clear to user that this is an interactive element although it isn't technically
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <img
            name={numberName}
            src={info.picpath}
            alt={info.text}
            onClick={action}
            onKeyDown={action}
            className="h-36 w-24 opacity-50"
          />
        )
    else if (displayFrac == '3')
      if (fullOpacity)
        return (
          // leaving clickableness for now
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <img
            name={numberName}
            src={info.picpath}
            alt={info.text}
            onClick={action}
            onKeyDown={action}
            className="h-12 w-24 object-cover object-top"
          />
        )
      else
        return (
          // leaving clickableness for now
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <img
            name={numberName}
            src={info.picpath}
            alt={info.text}
            onClick={action}
            onKeyDown={action}
            className="h-12 w-24 object-cover object-top opacity-50"
          />
        )
    else if (fullOpacity)
      return (
        // leaving clickableness for now
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <img
          name={numberName}
          src={info.picpath}
          alt={info.text}
          onClick={action}
          onKeyDown={action}
          className="h-9 w-24 object-cover object-top"
        />
      )
    else
      return (
        // leaving clickableness for now
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <img
          name={numberName}
          src={info.picpath}
          alt={info.text}
          onClick={action}
          onKeyDown={action}
          className="h-9 w-24 object-cover object-top opacity-50"
        />
      )
  }

  // The screen where the user selects the cards to play with
  const OrderScreen = () => {
    // Moves to the game screen IF all card information is supplied
    const updateScreen = () => {
      if (
        roll.length == ROLLCAP &&
        spec.length == SPECCAP &&
        app.length == APPCAP &&
        dess.length == DESSCAP &&
        diff.length == DIFFCAP
      )
        setShowGame(true)
    }

    // The following functions update the appropriate array depending on the card type
    const clickRoll = (e) => {
      if (roll.includes(parseInt(e.target.name))) {
        setRoll(roll.toSpliced(roll.indexOf(parseInt(e.target.name)), 1))
        if (diff.includes('toxic')) setDiff([])
      } else if (roll.length < ROLLCAP) {
        setRoll([...roll, parseInt(e.target.name)])
        if (diff.includes('toxic')) setDiff([])
      }
    }

    const clickSpec = (e) => {
      if (spec.includes(parseInt(e.target.name))) {
        setSpec(spec.toSpliced(spec.indexOf(parseInt(e.target.name)), 1))
        if (diff.includes('toxic')) setDiff([])
      } else if (spec.length < SPECCAP) {
        setSpec([...spec, parseInt(e.target.name)])
        if (diff.includes('toxic')) setDiff([])
      }
    }

    const clickApp = (e) => {
      if (app.includes(parseInt(e.target.name))) {
        setApp(app.toSpliced(app.indexOf(parseInt(e.target.name)), 1))
        if (diff.includes('toxic')) setDiff([])
      } else if (app.length < APPCAP) {
        setApp([...app, parseInt(e.target.name)])
        if (diff.includes('toxic')) setDiff([])
      }
    }

    const clickDess = (e) => {
      if (dess.includes(parseInt(e.target.name))) {
        setDess(dess.toSpliced(dess.indexOf(parseInt(e.target.name)), 1))
        if (diff.includes('toxic')) setDiff([])
      } else if (dess.length < DESSCAP) {
        setDess([...dess, parseInt(e.target.name)])
        if (diff.includes('toxic')) setDiff([])
      }
    }

    const clickDiff = (e) => {
      if (diff.includes(e.target.id))
        setDiff(diff.toSpliced(diff.indexOf(e.target.id), 1))
      else if (diff.length < DIFFCAP) {
        setDiff([...diff, e.target.id])
        if (e.target.id == 'toxic') {
          setRoll([cards.MAKIGUIDE.type])
          setSpec([cards.CHOPSTICKSGUIDE.type, cards.WASABIGUIDE.type])
          setApp([
            cards.DUMPLINGGUIDE.type,
            cards.TEMPURAGUIDE.type,
            cards.SASHIMIGUIDE.type,
          ])
          setDess([cards.PUDDINGGUIDE.type])
        }
      }
    }

    const randomizeOrder = () => {
      // ROLLS
      if (Math.random() > 0.33)
        if (Math.random() > 0.5) setRoll([cards.MAKIGUIDE.type])
        else setRoll([cards.TEMAKIGUIDE.type])
      else setRoll([cards.URAMAKIGUIDE.type])

      // SPECIALS
      let newSpec = []
      while (newSpec.length < SPECCAP)
        if (Math.random() > 0.5)
          if (Math.random() > 0.5)
            if (Math.random() > 0.5)
              newSpec.includes(cards.CHOPSTICKSGUIDE.type) ||
                newSpec.push(cards.CHOPSTICKSGUIDE.type)
            else
              newSpec.includes(cards.SPOONGUIDE.type) ||
                newSpec.push(cards.SPOONGUIDE.type)
          else {
            if (Math.random() > 0.5)
              newSpec.includes(cards.MENUGUIDE.type) ||
                newSpec.push(cards.MENUGUIDE.type)
            else
              newSpec.includes(cards.TAKEOUTGUIDE.type) ||
                newSpec.push(cards.TAKEOUTGUIDE.type)
          }
        else {
          if (Math.random() > 0.5)
            if (Math.random() > 0.5)
              newSpec.includes(cards.WASABIGUIDE.type) ||
                newSpec.push(cards.WASABIGUIDE.type)
            else
              newSpec.includes(cards.TEAGUIDE.type) ||
                newSpec.push(cards.TEAGUIDE.type)
          else {
            if (Math.random() > 0.5)
              newSpec.includes(cards.SOYSAUCEGUIDE.type) ||
                newSpec.push(cards.SOYSAUCEGUIDE.type)
            else
              newSpec.includes(cards.SPECIALOGUIDE.type) ||
                newSpec.push(cards.SPECIALOGUIDE.type)
          }
        }
      setSpec(newSpec)

      // APPETIZERS
      let newApp = []
      while (newApp.length < APPCAP)
        if (Math.random() > 0.5)
          if (Math.random() > 0.5)
            if (Math.random() > 0.5)
              newApp.includes(cards.DUMPLINGGUIDE.type) ||
                newApp.push(cards.DUMPLINGGUIDE.type)
            else
              newApp.includes(cards.TEMPURAGUIDE.type) ||
                newApp.push(cards.TEMPURAGUIDE.type)
          else {
            if (Math.random() > 0.5)
              newApp.includes(cards.SASHIMIGUIDE.type) ||
                newApp.push(cards.SASHIMIGUIDE.type)
            else
              newApp.includes(cards.MISOGUIDE.type) ||
                newApp.push(cards.MISOGUIDE.type)
          }
        else {
          if (Math.random() > 0.5)
            if (Math.random() > 0.5)
              newApp.includes(cards.EDAMAMEGUIDE.type) ||
                newApp.push(cards.EDAMAMEGUIDE.type)
            else
              newApp.includes(cards.EELGUIDE.type) ||
                newApp.push(cards.EELGUIDE.type)
          else {
            if (Math.random() > 0.5)
              newApp.includes(cards.TOFUGUIDE.type) ||
                newApp.push(cards.TOFUGUIDE.type)
            else
              newApp.includes(cards.ONIGIRIGUIDE.type) ||
                newApp.push(cards.ONIGIRIGUIDE.type)
          }
        }
      setApp(newApp)

      // DESSERT
      if (Math.random() > 0.33)
        if (Math.random() > 0.5) setDess([cards.PUDDINGGUIDE.type])
        else setDess([cards.GTICGUIDE.type])
      else setDess([cards.FRUITGUIDE.type])

      // DIFFICULTY
      if (Math.random() > 0.33)
        if (Math.random() > 0.5) setDiff(['easy'])
        else setDiff(['normal'])
      else setDiff(['hard'])
    }

    /* Displays guiding text at the top, then has 4 rows of cards for user to pick
       desired roll, specials, appetizers, and dessert respectively. Then, has a
       difficulty selection and a start button. Everything displayes with 50%
       opacity unless it is selected */
    return (
      <>
        <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
          Choose Your Meal
        </p>
        <p className="text-center font-cal text-2xl text-[color:var(--color-nature)]">
          {ROLLCAP} roll, {SPECCAP} specials, {APPCAP} appetizers, {DESSCAP}{' '}
          dessert
        </p>
        <Form onSubmit={updateScreen}>
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <Card
                info={cards.MAKIGUIDE}
                numberName={cards.MAKIGUIDE.type}
                action={clickRoll}
                fullOpacity={roll.includes(cards.MAKIGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.TEMAKIGUIDE}
                numberName={cards.TEMAKIGUIDE.type}
                action={clickRoll}
                fullOpacity={roll.includes(cards.TEMAKIGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.URAMAKIGUIDE}
                numberName={cards.URAMAKIGUIDE.type}
                action={clickRoll}
                fullOpacity={roll.includes(cards.URAMAKIGUIDE.type)}
                displayFrac={'1'}
              />
            </div>
            <div className="flex flex-row">
              <Card
                info={cards.CHOPSTICKSGUIDE}
                numberName={cards.CHOPSTICKSGUIDE.type}
                action={clickSpec}
                fullOpacity={spec.includes(cards.CHOPSTICKSGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.SPOONGUIDE}
                numberName={cards.SPOONGUIDE.type}
                action={clickSpec}
                fullOpacity={spec.includes(cards.SPOONGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.MENUGUIDE}
                numberName={cards.MENUGUIDE.type}
                action={clickSpec}
                fullOpacity={spec.includes(cards.MENUGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.TAKEOUTGUIDE}
                numberName={cards.TAKEOUTGUIDE.type}
                action={clickSpec}
                fullOpacity={spec.includes(cards.TAKEOUTGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.TEAGUIDE}
                numberName={cards.TEAGUIDE.type}
                action={clickSpec}
                fullOpacity={spec.includes(cards.TEAGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.WASABIGUIDE}
                numberName={cards.WASABIGUIDE.type}
                action={clickSpec}
                fullOpacity={spec.includes(cards.WASABIGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.SOYSAUCEGUIDE}
                numberName={cards.SOYSAUCEGUIDE.type}
                action={clickSpec}
                fullOpacity={spec.includes(cards.SOYSAUCEGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.SPECIALOGUIDE}
                numberName={cards.SPECIALOGUIDE.type}
                action={clickSpec}
                fullOpacity={spec.includes(cards.SPECIALOGUIDE.type)}
                displayFrac={'1'}
              />
            </div>
            <div className="flex flex-row">
              <Card
                info={cards.DUMPLINGGUIDE}
                numberName={cards.DUMPLINGGUIDE.type}
                action={clickApp}
                fullOpacity={app.includes(cards.DUMPLINGGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.TEMPURAGUIDE}
                numberName={cards.TEMPURAGUIDE.type}
                action={clickApp}
                fullOpacity={app.includes(cards.TEMPURAGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.SASHIMIGUIDE}
                numberName={cards.SASHIMIGUIDE.type}
                action={clickApp}
                fullOpacity={app.includes(cards.SASHIMIGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.MISOGUIDE}
                numberName={cards.MISOGUIDE.type}
                action={clickApp}
                fullOpacity={app.includes(cards.MISOGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.EDAMAMEGUIDE}
                numberName={cards.EDAMAMEGUIDE.type}
                action={clickApp}
                fullOpacity={app.includes(cards.EDAMAMEGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.EELGUIDE}
                numberName={cards.EELGUIDE.type}
                action={clickApp}
                fullOpacity={app.includes(cards.EELGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.TOFUGUIDE}
                numberName={cards.TOFUGUIDE.type}
                action={clickApp}
                fullOpacity={app.includes(cards.TOFUGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.ONIGIRIGUIDE}
                numberName={cards.ONIGIRIGUIDE.type}
                action={clickApp}
                fullOpacity={app.includes(cards.ONIGIRIGUIDE.type)}
                displayFrac={'1'}
              />
            </div>
            <div className="flex flex-row">
              <Card
                info={cards.PUDDINGGUIDE}
                numberName={cards.PUDDINGGUIDE.type}
                action={clickDess}
                fullOpacity={dess.includes(cards.PUDDINGGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.GTICGUIDE}
                numberName={cards.GTICGUIDE.type}
                action={clickDess}
                fullOpacity={dess.includes(cards.GTICGUIDE.type)}
                displayFrac={'1'}
              />

              <Card
                info={cards.FRUITGUIDE}
                numberName={cards.FRUITGUIDE.type}
                action={clickDess}
                fullOpacity={dess.includes(cards.FRUITGUIDE.type)}
                displayFrac={'1'}
              />
            </div>
            <div className="flex flex-row">
              <Label className="no-highlight m-2">
                <CheckboxField id="easy" name="diff" onChange={clickDiff} />
                <p
                  name="easy"
                  className={
                    diff.includes('easy')
                      ? 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
                      : 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
                  }
                >
                  Easy
                </p>
              </Label>
              <Label className="no-highlight m-2">
                <CheckboxField id="normal" name="diff" onChange={clickDiff} />
                <p
                  name="normal"
                  className={
                    diff.includes('normal')
                      ? 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
                      : 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
                  }
                >
                  Normal
                </p>
              </Label>
              <Label className="no-highlight m-2">
                <CheckboxField id="hard" name="diff" onChange={clickDiff} />
                <p
                  name="hard"
                  className={
                    diff.includes('hard')
                      ? 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
                      : 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
                  }
                >
                  Hard
                </p>
              </Label>
              {currentUser &&
                currentUser.modestMaki &&
                currentUser.longTermPlayer &&
                currentUser.speedEater &&
                currentUser.forkForgetter &&
                currentUser.sushiThief &&
                currentUser.demandingCustomer &&
                currentUser.leftoverLover &&
                currentUser.wasabiWarrior &&
                currentUser.teaTime &&
                currentUser.soysauceSavant &&
                currentUser.goingForSeconds &&
                currentUser.dumplingDisciple &&
                currentUser.tempuraTitan &&
                currentUser.sashimiSensei &&
                currentUser.misoMaster &&
                currentUser.edamameExpert &&
                currentUser.unlikelyFriendship &&
                currentUser.onigiriGuru &&
                currentUser.greenTeaEightCream &&
                currentUser.fruitFiend &&
                currentUser.sushiLow &&
                currentUser.flashOfBrilliance &&
                currentUser.headChef &&
                currentUser.easyClear &&
                currentUser.normalClear &&
                currentUser.hardClear &&
                currentUser.makiClear &&
                currentUser.temakiClear &&
                currentUser.uramakiClear &&
                currentUser.chopsticksClear &&
                currentUser.spoonClear &&
                currentUser.menuClear &&
                currentUser.takeoutBoxClear &&
                currentUser.wasabiClear &&
                currentUser.teaClear &&
                currentUser.soysauceClear &&
                currentUser.specialOrderClear &&
                currentUser.dumplingClear &&
                currentUser.tempuraClear &&
                currentUser.sashimiClear &&
                currentUser.misoSoupClear &&
                currentUser.edamameClear &&
                currentUser.eelClear &&
                currentUser.tofuClear &&
                currentUser.onigiriClear &&
                currentUser.puddingClear &&
                currentUser.gticClear &&
                currentUser.fruitClear && (
                  <Label className="no-highlight m-2">
                    <CheckboxField
                      id="toxic"
                      name="diff"
                      onChange={clickDiff}
                    />
                    <p
                      name="toxic"
                      className={
                        diff.includes('toxic')
                          ? 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
                          : 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
                      }
                    >
                      Toxic
                    </p>
                  </Label>
                )}
            </div>
            <div className="flex flex-row">
              <Label className="no-highlight m-2">
                <CheckboxField
                  id="randomize"
                  name="extra"
                  onChange={randomizeOrder}
                />
                <p
                  name="randomize"
                  className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50"
                >
                  Randomize
                </p>
              </Label>
              <div className="no-highlight m-2">
                <Submit
                  name="START"
                  className={
                    roll.length == ROLLCAP &&
                    spec.length == SPECCAP &&
                    app.length == APPCAP &&
                    dess.length == DESSCAP &&
                    diff.length == DIFFCAP
                      ? 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'
                      : 'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50'
                  }
                >
                  Start
                </Submit>
              </div>
            </div>
            <br />
            <br />
          </div>
        </Form>
      </>
    )
  }

  // The screen where the user actually plays the game
  const GameScreen = () => {
    const DESSERTCOUNTONE = 5
    const DESSERTCOUNTTWO = 3
    const DESSERTCOUNTTHREE = 2

    /* ACHIEVEMENT VARS */
    let achievementsData = {}

    let round = 1
    let priority = 0
    let cardsLeft = MAXHANDCARDS
    let uramakiPoints = 8
    let usingChopsticks = false
    let activeChopsticksTypes = []
    let usingSpoon = false
    let beingSpooned = false
    let spoonAsker = -1
    let requestedTypes = []
    let activeSpoonTypes = []
    let usingMenu = false
    let savedHand = []
    let takeoutBoxFreeze = false
    let takeoutCards = []
    let usedTakeout = false
    let specialOrderFreeze = false
    let misoAllowed = true
    let firstMisoIndex = -1
    let deck = {
      pile: [],
      dessertPile: [],
      discardPile: [],
    }
    let toastNotifications = [[], [], [], [], []]

    // players[0] is the user
    let players = [
      {
        name: isAuthenticated ? currentUser.name : 'Guest',
        hand: [],
        stash: [],
        score: 0,
        dessert: 0,
        uramakiScored: false,
        utensilUsed: false,
      },
      {
        name: diff.includes('toxic') ? 'Jacob' : 'cpu one',
        hand: [],
        willPlayIndex: -1,
        stash: [],
        score: 0,
        dessert: 0,
        uramakiScored: false,
        utensilUsed: false,
      },
      {
        name: diff.includes('toxic') ? 'Jeff' : 'cpu two',
        hand: [],
        willPlayIndex: -1,
        stash: [],
        score: 0,
        dessert: 0,
        uramakiScored: false,
        utensilUsed: false,
      },
      {
        name: diff.includes('toxic') ? 'Jerry' : 'cpu three',
        hand: [],
        willPlayIndex: -1,
        stash: [],
        score: 0,
        dessert: 0,
        uramakiScored: false,
        utensilUsed: false,
      },
    ]

    let modestMaki = roll.includes(cards.MAKIGUIDE.type)
    let longTermPlayer =
      roll.includes(cards.TEMAKIGUIDE.type) &&
      dess.includes(cards.PUDDINGGUIDE.type)
    let speedEats = 0
    let forkForgets = 0
    let sushiThiefs = 0
    let badSushiThief = false
    let menuUses = 0
    let takeoutUses = 0
    let wasabiNigiriPoints = 0
    let specialOrders = []
    let dumplingDisciple = app.includes(cards.DUMPLINGGUIDE.type)
    let misoUses = 0
    let badMiso = false
    let unlikelyFriendship =
      app.includes(cards.EELGUIDE.type) && app.includes(cards.TOFUGUIDE.type)
    let onigiriGuru = app.includes(cards.ONIGIRIGUIDE.type)
    let roundPoints = 0
    let flashedBrilliantly = false

    // The following functions add the appropriate versions of the different card types
    const addNigiri = () => {
      for (let i = 0; i < cards.EGG.count; i++) deck.pile.push(cards.EGG)
      for (let i = 0; i < cards.SALMON.count; i++) deck.pile.push(cards.SALMON)
      for (let i = 0; i < cards.SQUID.count; i++) deck.pile.push(cards.SQUID)
    }

    const addRolls = (rollName) => {
      if (rollName == cards.MAKIGUIDE.type) {
        for (let i = 0; i < cards.MAKIONE.count; i++)
          deck.pile.push(cards.MAKIONE)
        for (let i = 0; i < cards.MAKITWO.count; i++)
          deck.pile.push(cards.MAKITWO)
        for (let i = 0; i < cards.MAKITHREE.count; i++)
          deck.pile.push(cards.MAKITHREE)
      } else if (rollName == cards.TEMAKIGUIDE.type)
        for (let i = 0; i < cards.TEMAKI.count; i++)
          deck.pile.push(cards.TEMAKI)
      else {
        for (let i = 0; i < cards.URAMAKITHREE.count; i++)
          deck.pile.push(cards.URAMAKITHREE)
        for (let i = 0; i < cards.URAMAKIFOUR.count; i++)
          deck.pile.push(cards.URAMAKIFOUR)
        for (let i = 0; i < cards.URAMAKIFIVE.count; i++)
          deck.pile.push(cards.URAMAKIFIVE)
      }
    }

    const addSpecials = (specialName) => {
      if (specialName == cards.CHOPSTICKSGUIDE.type) {
        for (let i = 0; i < cards.CHOPSTICKSONE.count; i++)
          deck.pile.push(cards.CHOPSTICKSONE)
        for (let i = 0; i < cards.CHOPSTICKSTWO.count; i++)
          deck.pile.push(cards.CHOPSTICKSTWO)
        for (let i = 0; i < cards.CHOPSTICKSTHREE.count; i++)
          deck.pile.push(cards.CHOPSTICKSTHREE)
      } else if (specialName == cards.SPOONGUIDE.type) {
        for (let i = 0; i < cards.SPOONFOUR.count; i++)
          deck.pile.push(cards.SPOONFOUR)
        for (let i = 0; i < cards.SPOONFIVE.count; i++)
          deck.pile.push(cards.SPOONFIVE)
        for (let i = 0; i < cards.SPOONSIX.count; i++)
          deck.pile.push(cards.SPOONSIX)
      } else if (specialName == cards.MENUGUIDE.type) {
        for (let i = 0; i < cards.MENUSEVEN.count; i++)
          deck.pile.push(cards.MENUSEVEN)
        for (let i = 0; i < cards.MENUEIGHT.count; i++)
          deck.pile.push(cards.MENUEIGHT)
        for (let i = 0; i < cards.MENUNINE.count; i++)
          deck.pile.push(cards.MENUNINE)
      } else if (specialName == cards.TAKEOUTGUIDE.type) {
        for (let i = 0; i < cards.TAKEOUTTEN.count; i++)
          deck.pile.push(cards.TAKEOUTTEN)
        for (let i = 0; i < cards.TAKEOUTELEVEN.count; i++)
          deck.pile.push(cards.TAKEOUTELEVEN)
        for (let i = 0; i < cards.TAKEOUTTWELVE.count; i++)
          deck.pile.push(cards.TAKEOUTTWELVE)
      } else if (specialName == cards.TEAGUIDE.type)
        for (let i = 0; i < cards.TEA.count; i++) deck.pile.push(cards.TEA)
      else if (specialName == cards.WASABIGUIDE.type)
        for (let i = 0; i < cards.WASABI.count; i++)
          deck.pile.push(cards.WASABI)
      else if (specialName == cards.SOYSAUCEGUIDE.type)
        for (let i = 0; i < cards.SOYSAUCE.count; i++)
          deck.pile.push(cards.SOYSAUCE)
      else
        for (let i = 0; i < cards.SPECIALO.count; i++)
          deck.pile.push(cards.SPECIALO)
    }

    const addApps = (appName) => {
      if (appName == cards.DUMPLINGGUIDE.type)
        for (let i = 0; i < cards.DUMPLING.count; i++)
          deck.pile.push(cards.DUMPLING)
      else if (appName == cards.TEMPURAGUIDE.type)
        for (let i = 0; i < cards.TEMPURA.count; i++)
          deck.pile.push(cards.TEMPURA)
      else if (appName == cards.SASHIMIGUIDE.type)
        for (let i = 0; i < cards.SASHIMI.count; i++)
          deck.pile.push(cards.SASHIMI)
      else if (appName == cards.MISOGUIDE.type)
        for (let i = 0; i < cards.MISO.count; i++) deck.pile.push(cards.MISO)
      else if (appName == cards.EDAMAMEGUIDE.type)
        for (let i = 0; i < cards.EDAMAME.count; i++)
          deck.pile.push(cards.EDAMAME)
      else if (appName == cards.EELGUIDE.type)
        for (let i = 0; i < cards.EEL.count; i++) deck.pile.push(cards.EEL)
      else if (appName == cards.TOFUGUIDE.type)
        for (let i = 0; i < cards.TOFU.count; i++) deck.pile.push(cards.TOFU)
      else {
        for (let i = 0; i < cards.ONICIRCLE.count; i++)
          deck.pile.push(cards.ONICIRCLE)
        for (let i = 0; i < cards.ONISQUARE.count; i++)
          deck.pile.push(cards.ONISQUARE)
        for (let i = 0; i < cards.ONITRI.count; i++)
          deck.pile.push(cards.ONITRI)
        for (let i = 0; i < cards.ONIFLAT.count; i++)
          deck.pile.push(cards.ONIFLAT)
      }
    }

    const fillDessertPile = (dessertName) => {
      if (dessertName == cards.PUDDINGGUIDE.type)
        for (let i = 0; i < cards.PUDDING.count; i++)
          deck.dessertPile.push(cards.PUDDING)
      else if (dessertName == cards.GTICGUIDE.type)
        for (let i = 0; i < cards.GTIC.count; i++)
          deck.dessertPile.push(cards.GTIC)
      else {
        for (let i = 0; i < cards.FRUITDUBWAT.count; i++)
          deck.dessertPile.push(cards.FRUITDUBWAT)
        for (let i = 0; i < cards.FRUITDUBPINE.count; i++)
          deck.dessertPile.push(cards.FRUITDUBPINE)
        for (let i = 0; i < cards.FRUITDUBO.count; i++)
          deck.dessertPile.push(cards.FRUITDUBO)
        for (let i = 0; i < cards.FRUITWATERO.count; i++)
          deck.dessertPile.push(cards.FRUITWATERO)
        for (let i = 0; i < cards.FRUITPINEO.count; i++)
          deck.dessertPile.push(cards.FRUITPINEO)
        for (let i = 0; i < cards.FRUITWATERPINE.count; i++)
          deck.dessertPile.push(cards.FRUITWATERPINE)
      }
    }

    const shuffle = (neatPile) => {
      for (let i = neatPile.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = neatPile[i]
        neatPile[i] = neatPile[j]
        neatPile[j] = temp
      }
    }

    /* Fruit count is stored as an undecimal number (watermelon*11^2+pineapple*11+orange)
       Since fruit is stored weirdly adding this method for abstraction
       PRECONDITION: fruitCard.color == 'peach' */
    const addFruit = (fruitCard, player) => {
      if (fruitCard.type == cards.FRUITDUBWAT.type)
        player.dessert += 2 * 11 * 11
      else if (fruitCard.type == cards.FRUITDUBPINE.type)
        player.dessert += 2 * 11
      else if (fruitCard.type == cards.FRUITDUBO.type) player.dessert += 2
      else if (fruitCard.type == cards.FRUITWATERO.type) {
        player.dessert += 11 * 11
        player.dessert++
      } else if (fruitCard.type == cards.FRUITPINEO.type) {
        player.dessert += 11
        player.dessert++
      } else if (fruitCard.type == cards.FRUITWATERPINE.type) {
        player.dessert += 11 * 11
        player.dessert += 11
      }
    }

    const buildDeck = () => {
      // Add all necessary cards
      addNigiri()
      for (let i = 0; i < roll.length; i++) addRolls(roll[i])
      for (let i = 0; i < spec.length; i++) addSpecials(spec[i])
      for (let i = 0; i < app.length; i++) addApps(app[i])
      for (let i = 0; i < dess.length; i++) fillDessertPile(dess[i])

      // Fruit is the only dessert card that is heterogeneous, so shuffle if it appears
      if (dess.includes('fruit')) shuffle(deck.dessertPile)

      // Add dessert cards for first round
      for (let i = 0; i < DESSERTCOUNTONE; i++)
        deck.pile.push(deck.dessertPile.pop())

      // Shuffle full deck
      shuffle(deck.pile)
    }

    const dealToPlayers = () => {
      for (let i = 0; i < MAXHANDCARDS; i++)
        for (let j = 0; j < players.length; j++)
          players[j].hand.push(deck.pile.pop())
    }

    buildDeck()
    dealToPlayers()

    // Displays all the played cards, the user hand, and the scorelines
    const CardDisplay = () => {
      // const [showResults, setShowResults] = useState(false)
      const [userClickedType, setUserClickedType] = useState(-1)
      const [userHand, setUserHand] = useState(players[0].hand)
      const [userStash, setUserStash] = useState(players[0].stash)
      const [cpuOneStash, setCpuOneStash] = useState(players[1].stash)
      const [cpuTwoStash, setCpuTwoStash] = useState(players[2].stash)
      const [cpuThreeStash, setCpuThreeStash] = useState(players[3].stash)
      const [userScore, setUserScore] = useState(0)
      const [cpuOneScore, setCpuOneScore] = useState(0)
      const [cpuTwoScore, setCpuTwoScore] = useState(0)
      const [cpuThreeScore, setCpuThreeScore] = useState(0)
      const [userDessert, setUserDessert] = useState(players[0].dessert)
      const [cpuOneDessert, setCpuOneDessert] = useState(players[1].dessert)
      const [cpuTwoDessert, setCpuTwoDessert] = useState(players[2].dessert)
      const [cpuThreeDessert, setCpuThreeDessert] = useState(players[3].dessert)

      const [updateAchievements] = useMutation(UPDATE_ACHIEVEMENTS, {
        onCompleted: async () => {
          delete achievementsData['easyScore']
          delete achievementsData['easyDessert']
          delete achievementsData['normalScore']
          delete achievementsData['normalDessert']
          delete achievementsData['hardScore']
          delete achievementsData['hardDessert']
          delete achievementsData['toxicScore']
          delete achievementsData['toxicDessert']
          delete achievementsData['bestSpeedrun']
          if (Object.keys(achievementsData).length > 0)
            notify('Achievements Updated', '🏆', 4)
          achievementsData = {}
        },
      })

      // A cornerstone of SushiGO gameplay is that players swap hands clockwise after playing cards
      const swapCards = () => {
        let tempCards = players[3].hand
        for (let i = players.length - 1; i >= 1; i--)
          players[i].hand = players[i - 1].hand
        players[0].hand = tempCards
      }

      const resetUramaki = () => {
        uramakiPoints = 8
        for (let i = 0; i < players.length; i++)
          players[i].uramakiScored = false
      }

      const resetChopsticks = () => {
        activeChopsticksTypes = []
        for (let i = 0; i < players.length; i++) {
          players[i].utensilUsed = false
          for (let j = 0; j < players[i].stash.length; j++)
            if (
              players[i].stash[j].color == cards.CHOPSTICKSONE.color &&
              !activeChopsticksTypes.includes(players[i].stash[j].type)
            )
              activeChopsticksTypes.push(players[i].stash[j].type)
        }
      }

      const resetSpoon = () => {
        activeSpoonTypes = []
        for (let i = 0; i < players.length; i++) {
          players[i].utensilUsed = false
          for (let j = 0; j < players[i].stash.length; j++)
            if (
              players[i].stash[j].color == cards.SPOONFOUR.color &&
              !activeSpoonTypes.includes(players[i].stash[j].type)
            )
              activeSpoonTypes.push(players[i].stash[j].type)
        }
      }

      const resetMiso = () => {
        if (firstMisoIndex == 0) misoUses++
        misoAllowed = true
        firstMisoIndex = -1
      }

      const prepareNextTurn = () => {
        swapCards()
        if (spec.includes(cards.CHOPSTICKSGUIDE.type)) resetChopsticks()
        if (spec.includes(cards.SPOONGUIDE.type)) resetSpoon()
        if (app.includes(cards.MISOGUIDE.type)) resetMiso()
        priority = 0
        cardsLeft--
      }

      const getOpps = (excludedIndex) => {
        return [
          players[(excludedIndex + 1) % 4],
          players[(excludedIndex + 2) % 4],
          players[(excludedIndex + 3) % 4],
        ]
      }

      const getOppsStashes = (excludedIndex) => {
        return [
          players[(excludedIndex + 1) % 4].stash,
          players[(excludedIndex + 2) % 4].stash,
          players[(excludedIndex + 3) % 4].stash,
        ]
      }

      const getOppsDesserts = (excludedIndex) => {
        return [
          players[(excludedIndex + 1) % 4].dessert,
          players[(excludedIndex + 2) % 4].dessert,
          players[(excludedIndex + 3) % 4].dessert,
        ]
      }

      // Queues toast notifications
      const notify = (message, emoji, index, concat) => {
        if (concat)
          if (toastNotifications[index][0])
            toastNotifications[index][0].message += ' ' + message + '.'
          else
            toastNotifications[index].push({
              message: message + '.',
              emoji: emoji,
            })
        else toastNotifications[index].push({ message: message, emoji: emoji })
      }

      // Toast notifications for scoring
      const reportScore = (playerCards, score, card, area) => {
        let emoji = '📈'

        let pointsString = score == 1 ? 'point' : 'points'

        // Always display dessert and temaki scoring toast
        if (playerCards == null || card.type == cards.TEMAKIGUIDE.type) {
          notify(
            'Scored ' + score + ' ' + pointsString + ' from ' + card.text,
            emoji,
            area,
            true
          )
          return score
        }

        // Turned over card notification
        if (score > 0 && card.type == cards.TOC.type) {
          notify(
            'Scored ' + score + ' ' + pointsString + ' from leftovrs',
            emoji,
            area,
            true
          )
          return score
        }

        let seeking = card.eligibleTypes ? card.eligibleTypes : [card.type]

        for (let type of seeking)
          for (let i = 0; i < playerCards.length; i++)
            if (type == playerCards[i].type) {
              notify(
                'Scored ' + score + ' ' + pointsString + ' from ' + card.text,
                emoji,
                area,
                true
              )
              return score
            }
        return score
      }

      /* Returns the card given by priority
         (i.e. the special card currently in use) */
      const priorityToCard = () => {
        switch (priority) {
          case 1:
            return cards.CHOPSTICKSONE
          case 2:
            return cards.CHOPSTICKSTWO
          case 3:
            return cards.CHOPSTICKSTHREE
          case 4:
            return cards.SPOONFOUR
          case 5:
            return cards.SPOONFIVE
          case 6:
            return cards.SPOONSIX
          case 7:
            return cards.MENUSEVEN
          case 8:
            return cards.MENUEIGHT
          case 9:
            return cards.MENUNINE
          case 10:
            return cards.TAKEOUTTEN
          case 11:
            return cards.TAKEOUTELEVEN
          case 12:
            return cards.TAKEOUTTWELVE
          default:
            return null
        }
      }

      // Removes the special card currenlty in use
      const removePriorityCard = (index) => {
        for (let i = players[index].stash.length - 1; i >= 0; i--)
          if (players[index].stash[i].type == priorityToCard().type)
            return players[index].stash.splice(i, 1)[0]
      }

      const cleanupChopsticks = (playerIndex, pickedIndex) => {
        // Put the chopsticks back after the card to be played location, restoring it to a special order if it was one
        if (countCard(players[playerIndex].stash, priorityToCard()) > 1) {
          removePriorityCard(playerIndex)
          players[playerIndex].hand.splice(pickedIndex + 1, 0, cards.SPECIALO)
        } else
          players[playerIndex].hand.splice(
            pickedIndex + 1,
            0,
            removePriorityCard(playerIndex)
          )

        if (playerIndex == 0) {
          usingChopsticks = false
          setUserClickedType(-1)
        }
        players[playerIndex].utensilUsed = true
      }

      /* On successful spoon usage (i.e. player[requesteeIndex] has 1+ card with an allowedType)
         cardIndex will not be supplied unless the user is being spooned */
      const cleanupSpoon = (
        requesterIndex,
        requesteeIndex,
        allowedTypes,
        cardIndex
      ) => {
        if (requesteeIndex == 0 && !beingSpooned) {
          beingSpooned = true
          spoonAsker = requesterIndex
          requestedTypes = allowedTypes
          return
        }

        if (!beingSpooned)
          cardIndex = pickComputerBeingSpooned(
            players[requesterIndex],
            getOpps(requesterIndex),
            players[requesteeIndex],
            allowedTypes,
            cardsLeft,
            round,
            diff[0]
          )
        let card = players[requesteeIndex].hand[cardIndex]

        notify(
          'Gave ' + card.text + ' to ' + players[requesterIndex].name,
          '🥄',
          requesteeIndex
        )
        notify(
          'Received ' + card.text + ' from ' + players[requesteeIndex].name,
          '🥄',
          requesterIndex
        )

        if (requesterIndex == 0) sushiThiefs++

        players[requesterIndex].hand.unshift(
          players[requesteeIndex].hand.splice(cardIndex, 1)[0]
        )

        // Put the spoon in requestee's hand at a random location, restoring it to a special order if it was one
        if (countCard(players[requesterIndex].stash, priorityToCard()) > 1) {
          removePriorityCard(requesterIndex)
          players[requesteeIndex].hand.splice(
            Math.floor(
              Math.random() * (players[requesteeIndex].hand.length + 1)
            ),
            0,
            cards.SPECIALO
          )
        } else
          players[requesteeIndex].hand.splice(
            Math.floor(
              Math.random() * (players[requesteeIndex].hand.length + 1)
            ),
            0,
            removePriorityCard(requesterIndex)
          )

        playCard(0, requesterIndex, true)

        if (requesterIndex == 0) {
          usingSpoon = false
          setUserClickedType(-1)
        } else if (requesteeIndex == 0) {
          beingSpooned = false
          spoonAsker = -1
          requestedTypes = []
        }

        players[requesterIndex].utensilUsed = true
      }

      const cleanupMenu = (index) => {
        // Put the menu in the discard pile
        deck.discardPile.push(removePriorityCard(index))

        for (let i = players[index].hand.length - 1; i >= 0; i--)
          deck.pile.push(players[index].hand.pop())
        shuffle(deck.pile)
        players[index].hand = savedHand

        // Update the usingMenu var if the user used menu
        if (index == 0) usingMenu = false
      }

      // Once a player reaches 10 uramaki rolls they instantly score points
      const scoreUramakiDuring = () => {
        /* Check from 14 to 10 for scoring uramaki since 10 is the minimum to score and
           5 is the most icons on a card, so the max unscored amount is 10 - 1 + 5 = 14 */
        for (let goal = 14; goal >= 10; goal--) {
          if (uramakiPoints < 2) break // Cannot score less than 2 points
          let decrease = 0
          for (let i = 0; i < players.length; i++) {
            let uramakiCount =
              3 * countCard(players[i].stash, cards.URAMAKITHREE) +
              4 * countCard(players[i].stash, cards.URAMAKIFOUR) +
              5 * countCard(players[i].stash, cards.URAMAKIFIVE)

            /* If the player reaches the criteria for scoring uramaki, add
               to their score, remove their uramaki, and display toast */
            if (uramakiCount == goal && !players[i].uramakiScored) {
              players[i].score += uramakiPoints
              for (let j = players[i].stash.length - 1; j >= 0; j--)
                if (players[i].stash[j].color == cards.URAMAKITHREE.color)
                  deck.discardPile.push(players[i].stash.splice(j, 1)[0])
              notify(
                'Ate ' + goal + ' uramaki for ' + uramakiPoints + ' points',
                '😋',
                i
              )

              if (i == 0) roundPoints += uramakiPoints

              if (
                i == 0 &&
                cardsLeft == 8 &&
                ++speedEats == 3 &&
                currentUser &&
                !currentUser.speedEater &&
                !achievementsData.speedEater
              ) {
                achievementsData.speedEater = true
                notify('Speed Eater Achieved!', '🏆', 4)
              }

              /* It is not possible to score twice in a round by reaching 10+ rolls,
               However, it is possible to score uramaki again at the end of the round */
              players[i].uramakiScored = true
              decrease += 3 // Do not decrease right away so tied players receive the same points
            }
          }
          uramakiPoints -= decrease
        }
      }

      // The player with the most uramaki left gets any unclaimed points
      const scoreUramakiEnd = (playerCards, oppsCards) => {
        if (uramakiPoints < 2) return 0
        let uramakiCount =
          3 * countCard(playerCards, cards.URAMAKITHREE) +
          4 * countCard(playerCards, cards.URAMAKIFOUR) +
          5 * countCard(playerCards, cards.URAMAKIFIVE)

        for (let oppCards of oppsCards) {
          if (
            uramakiCount <
            3 * countCard(oppCards, cards.URAMAKITHREE) +
              4 * countCard(oppCards, cards.URAMAKIFOUR) +
              5 * countCard(oppCards, cards.URAMAKIFIVE)
          )
            return 0
        }
        return uramakiPoints
      }

      // Dessert does not go back into deck and is tracked to score at end
      const setAsideDessert = () => {
        for (let i = 0; i < players.length; i++) {
          for (let j = players[i].stash.length - 1; j >= 0; j--) {
            let removedCard = players[i].stash.pop()
            if (
              [
                cards.PUDDING.color,
                cards.GTIC.color,
                cards.FRUITDUBWAT.color,
              ].includes(removedCard.color)
            )
              if (removedCard.color == cards.FRUITDUBWAT.color)
                addFruit(removedCard, players[i])
              else players[i].dessert++
            else players[i].stash.unshift(removedCard)
          }

          let dessertDifference = players[i].dessert
          if (i == 0) dessertDifference -= userDessert
          else if (i == 1) dessertDifference -= cpuOneDessert
          else if (i == 2) dessertDifference -= cpuTwoDessert
          else dessertDifference -= cpuThreeDessert

          if (dessertDifference == 0) continue

          if (dess.includes(cards.FRUITGUIDE.type)) {
            let fruitCounts = parseFruit(dessertDifference)
            let waterString = fruitCounts[0] == 1 ? 'watermelon' : 'watermelons'
            let pineString = fruitCounts[1] == 1 ? 'pineapple' : 'pineapples'
            let orangeString = fruitCounts[2] == 1 ? 'orange' : 'oranges'
            if (fruitCounts[0])
              notify(
                'Stocked ' + fruitCounts[0] + ' ' + waterString,
                '📈',
                i,
                true
              )
            if (fruitCounts[1])
              notify(
                'Stocked ' + fruitCounts[1] + ' ' + pineString,
                '📈',
                i,
                true
              )
            if (fruitCounts[2])
              notify(
                'Stocked ' + fruitCounts[2] + ' ' + orangeString,
                '📈',
                i,
                true
              )
            continue
          }

          let baseString = dess.includes(cards.PUDDINGGUIDE.type)
            ? 'pudding'
            : 'green tea ice cream'
          let pluralString =
            dessertDifference == 1 ? baseString : baseString + 's'

          notify(
            'Stocked ' + dessertDifference + ' ' + pluralString,
            '📈',
            i,
            true
          )
        }
      }

      // Changes turned over cards back
      const takeoutBoxReplace = () => {
        for (let i = 0; i < deck.pile.length; i++)
          if (deck.pile[i].type == cards.TOC.type)
            deck.pile[i] = takeoutCards.pop()
      }

      // Changes special order cards that were transformed back
      const specialOrderReplace = () => {
        let specialOrderCount = countCard(deck.pile, cards.SPECIALO)

        if (specialOrderCount == cards.SPECIALO.count) return

        // If any card is more common than it should be, one is a special order
        for (let i = 0; i < deck.pile; i++)
          if (countCard(deck.pile, deck.pile[i]) > deck.pile[i].count) {
            deck.pile[i] = cards.SPECIALO
            specialOrderCount++
            if (specialOrderCount == cards.SPECIALO.count) return
          }
      }

      /* PRECONDITION: Desserts are cleaned from stashes
         Rebuilds the deck by grabbing all the played/discarded cards */
      const replenishDeck = (moreDes) => {
        for (let i = 0; i < players.length; i++)
          for (let j = players[i].stash.length - 1; j >= 0; j--)
            deck.pile.push(players[i].stash.pop())

        for (let i = deck.discardPile.length - 1; i >= 0; i--)
          deck.pile.push(deck.discardPile.pop())

        for (let i = 0; i < moreDes; i++) deck.pile.push(deck.dessertPile.pop())

        if (spec.includes(cards.TAKEOUTGUIDE.type)) takeoutBoxReplace()

        if (spec.includes(cards.SPECIALOGUIDE.type)) specialOrderReplace()

        shuffle(deck.pile)
      }

      /* Scores a player's cards, only accounts for end of turn
         (i.e. no uramaki reaching 10 or dessert) */
      const scoreRegular = (playerCards, oppsCards, area) => {
        const getWasabiNigiriPoints = () => {
          if (
            area != 0 ||
            !currentUser ||
            currentUser.wasabiWarrior ||
            achievementsData.wasabiWarrior
          )
            return 0

          let wnPoints = 0

          for (let i = 0; i < playerCards.length - 1; i++)
            if (playerCards[i].type == cards.WASABI.type)
              if (playerCards[i + 1].type == cards.EGG.type) wnPoints += 3
              else if (playerCards[i + 1].type == cards.SALMON.type)
                wnPoints += 6
              else wnPoints += 9

          return wnPoints
        }

        let runningScore = 0

        // NIGIRI
        runningScore += reportScore(
          playerCards,
          scoreNigiri(playerCards),
          cards.NIGIRIGUIDE,
          area
        )

        if (spec.includes(cards.WASABIGUIDE.type))
          wasabiNigiriPoints += getWasabiNigiriPoints()

        if (wasabiNigiriPoints > 40) {
          wasabiNigiriPoints = 0
          achievementsData.wasabiWarrior = true
          notify('Wasabi Warrior Achieved!', '🏆', 4)
        }

        // ROLLS
        if (roll.includes(cards.MAKIGUIDE.type)) {
          let points = reportScore(
            playerCards,
            scoreMaki(playerCards, oppsCards),
            cards.MAKIGUIDE,
            area
          )
          runningScore += points
          if (area == 0 && points != 3) modestMaki = false
        } else if (roll.includes(cards.TEMAKIGUIDE.type)) {
          let points = reportScore(
            playerCards,
            scoreTemaki(playerCards, oppsCards),
            cards.TEMAKIGUIDE,
            area
          )
          runningScore += points
          if (area == 0 && points != 4) longTermPlayer = false
        } else
          runningScore += reportScore(
            playerCards,
            scoreUramakiEnd(playerCards, oppsCards),
            cards.URAMAKIGUIDE,
            area
          )

        // SPECIALS
        if (spec.includes(cards.TAKEOUTGUIDE.type))
          runningScore += reportScore(
            playerCards,
            scoreLeftovers(playerCards),
            cards.TOC,
            area
          )
        if (spec.includes(cards.TEAGUIDE.type)) {
          let points = reportScore(
            playerCards,
            scoreTea(playerCards),
            cards.TEAGUIDE,
            area
          )
          runningScore += points
          if (
            area == 0 &&
            points / countCard(playerCards, cards.TEA) >= 6 &&
            currentUser &&
            !currentUser.teaTime &&
            !achievementsData.teaTime
          ) {
            achievementsData.teaTime = true
            notify('Tea Time Achieved!', '🏆', 4)
          }
        }
        if (spec.includes(cards.SOYSAUCEGUIDE.type)) {
          let points = reportScore(
            playerCards,
            scoreSoysauce(playerCards, oppsCards),
            cards.SOYSAUCEGUIDE,
            area
          )
          runningScore += points
          if (
            area == 0 &&
            points >= 12 &&
            currentUser &&
            !currentUser.soysauceSavant &&
            !achievementsData.soysauceSavant
          ) {
            achievementsData.soysauceSavant = true
            notify('Soysauce Savant Achieved!', '🏆', 4)
          }
        }

        // APPETIZERS
        if (app.includes(cards.DUMPLINGGUIDE.type)) {
          let points = reportScore(
            playerCards,
            scoreDumpling(playerCards),
            cards.DUMPLINGGUIDE,
            area
          )
          runningScore += points
          if (area == 0 && points < 15) dumplingDisciple = false
        }
        if (app.includes(cards.TEMPURAGUIDE.type)) {
          let points = reportScore(
            playerCards,
            scoreTempura(playerCards),
            cards.TEMPURAGUIDE,
            area
          )
          runningScore += points
          if (
            area == 0 &&
            points >= 15 &&
            currentUser &&
            !currentUser.tempuraTitan &&
            !achievementsData.tempuraTitan
          ) {
            achievementsData.tempuraTitan = true
            notify('Tempura Titan Achieved!', '🏆', 4)
          }
        }
        if (app.includes(cards.SASHIMIGUIDE.type)) {
          let points = reportScore(
            playerCards,
            scoreSashimi(playerCards),
            cards.SASHIMIGUIDE,
            area
          )
          runningScore += points
          if (
            area == 0 &&
            points >= 20 &&
            currentUser &&
            !currentUser.sashimiSensei &&
            !achievementsData.sashimiSensei
          ) {
            achievementsData.sashimiSensei = true
            notify('Sashimi Sensei Achieved!', '🏆', 4)
          }
        }
        if (app.includes(cards.MISOGUIDE.type))
          runningScore += reportScore(
            playerCards,
            scoreMiso(playerCards),
            cards.MISOGUIDE,
            area
          )
        if (app.includes(cards.EDAMAMEGUIDE.type)) {
          let points = reportScore(
            playerCards,
            scoreEdamame(playerCards, oppsCards),
            cards.EDAMAMEGUIDE,
            area
          )
          runningScore += points
          if (
            area == 0 &&
            points >= 15 &&
            currentUser &&
            !currentUser.edamameExpert &&
            !achievementsData.edamameExpert
          ) {
            achievementsData.edamameExpert = true
            notify('Edamame Expert Achieved!', '🏆', 4)
          }
        }
        if (app.includes(cards.EELGUIDE.type)) {
          let points = reportScore(
            playerCards,
            scoreEel(playerCards),
            cards.EELGUIDE,
            area
          )
          runningScore += points
          if (area == 0 && points < 7) unlikelyFriendship = false
        }
        if (app.includes(cards.TOFUGUIDE.type)) {
          let points = reportScore(
            playerCards,
            scoreTofu(playerCards),
            cards.TOFUGUIDE,
            area
          )
          runningScore += points
          if (area == 0 && points < 6) unlikelyFriendship = false
        }
        if (app.includes(cards.ONIGIRIGUIDE.type)) {
          runningScore += reportScore(
            playerCards,
            scoreOnigiri(playerCards),
            cards.ONIGIRIGUIDE,
            area
          )
          if (
            area == 0 &&
            (countCard(playerCards, cards.ONICIRCLE) == 0 ||
              countCard(playerCards, cards.ONISQUARE) == 0 ||
              countCard(playerCards, cards.ONITRI) == 0 ||
              countCard(playerCards, cards.ONIFLAT) == 0)
          )
            onigiriGuru = false
        }

        if (area == 0) {
          roundPoints += runningScore
          if (roundPoints >= 30) flashedBrilliantly = true
        }

        return runningScore
      }

      const scoreDessert = (playerDessert, oppsDessert, area) => {
        if (dess.includes(cards.PUDDINGGUIDE.type)) {
          let points = reportScore(
            null,
            scorePudding(playerDessert, oppsDessert),
            cards.PUDDINGGUIDE,
            area
          )
          if (area == 0 && points != 6) longTermPlayer = false
          return points
        } else if (dess.includes(cards.GTICGUIDE.type)) {
          let points = reportScore(
            null,
            scoreGTIC(playerDessert),
            cards.GTICGUIDE,
            area
          )
          if (
            area == 0 &&
            points >= 24 &&
            currentUser &&
            !currentUser.greenTeaEightCream
          ) {
            achievementsData.greenTeaEightCream = true
            notify('Green Tea Eight Cream Achieved!', '🏆', 4)
          }
          return points
        } else {
          let points = reportScore(
            null,
            scoreFruit(playerDessert),
            cards.FRUITGUIDE,
            area
          )
          if (
            area == 0 &&
            points == 30 &&
            currentUser &&
            !currentUser.fruitFiend
          ) {
            achievementsData.fruitFiend = true
            notify('Fruit Fiend Achieved!', '🏆', 4)
          }
          return points
        }
      }

      const scoreRound = () => {
        for (let i = 0; i < players.length; i++)
          players[i].score += scoreRegular(
            players[i].stash,
            getOppsStashes(i),
            i
          )
      }

      const scoreDesserts = () => {
        for (let i = 0; i < players.length; i++)
          players[i].score += scoreDessert(
            players[i].dessert,
            getOppsDesserts(i),
            i
          )
      }

      // Updates display data, should be called exactly once for each click
      const updateData = async () => {
        const showToasts = () => {
          for (let i = 0; i < players.length + 1; i++) {
            let location
            if (i == 0) location = 'bottom-left'
            else if (i == 1) location = 'top-left'
            else if (i == 2) location = 'top-right'
            else if (i == 3) location = 'bottom-right'
            else location = 'top-center'

            if (i == 0 || i == 3)
              for (let j = 0; j < toastNotifications[i].length; j++)
                toast(toastNotifications[i][j].message, {
                  icon: toastNotifications[i][j].emoji,
                  position: location,
                  style: {
                    background: '#004', // nightwing
                    color: '#ff917d', // salmon
                  },
                  className: 'font-cal text-base',
                })
            else if (i == 1 || i == 2)
              for (let j = toastNotifications[i].length - 1; j >= 0; j--)
                toast(toastNotifications[i][j].message, {
                  icon: toastNotifications[i][j].emoji,
                  position: location,
                  style: {
                    background: '#004', // nightwing
                    color: '#ff917d', // salmon
                  },
                  className: 'font-cal text-base',
                })
            else
              for (let j = toastNotifications[i].length - 1; j >= 0; j--)
                toast(toastNotifications[i][j].message, {
                  icon: toastNotifications[i][j].emoji,
                  position: location,
                  style: {
                    background: '#004', // nightwing
                    color: '#ff917d', // salmon
                  },
                  className: 'font-cal text-2xl',
                })
          }

          toastNotifications = [[], [], [], [], []]
        }

        if (round > NUMROUNDS) {
          let userTrueDessert
          if (currentUser) {
            if (modestMaki && !currentUser.modestMaki) {
              achievementsData.modestMaki = true
              notify('Modest Maki Achieved!', '🏆', 4)
            }

            if (longTermPlayer && !currentUser.longTermPlayer) {
              achievementsData.longTermPlayer = true
              notify('Long Term Player Achieved!', '🏆', 4)
            }

            // Sushi Thief: 4 spoon uses without fail
            if (sushiThiefs >= 4 && !badSushiThief) {
              achievementsData.sushiThief = true
              notify('Sushi Thief Achieved!', '🏆', 4)
            }

            if (dumplingDisciple && !currentUser.dumplingDisciple) {
              achievementsData.dumplingDisciple = true
              notify('Dumpling Disciple Achieved!', '🏆', 4)
            }

            // Miso Master: 6 miso uses without fail
            if (misoUses >= 6 && !badMiso) {
              achievementsData.misoMaster = true
              notify('Miso Master Achieved!', '🏆', 4)
            }

            if (unlikelyFriendship && !currentUser.unlikelyFriendship) {
              achievementsData.unlikelyFriendship = true
              notify('An Unlikely Friendship Achieved!', '🏆', 4)
            }

            if (onigiriGuru && !currentUser.onigiriGuru) {
              achievementsData.onigiriGuru = true
              notify('Onigiri Guru Achieved!', '🏆', 4)
            }

            if (players[0].score < 0 && !currentUser.sushiLow) {
              achievementsData.sushiLow = true
              notify('Sushi Low Achieved!', '🏆', 4)
            }

            let quickScores = []
            for (let i = 0; i < players.length; i++) {
              let fruitCounts = parseFruit(players[i].dessert)
              let totalFruitCount =
                fruitCounts[0] + fruitCounts[1] + fruitCounts[2]
              let trueDessert = dess.includes(cards.FRUITGUIDE.type)
                ? totalFruitCount / 2
                : players[i].dessert
              if (i == 0) userTrueDessert = trueDessert
              quickScores[i] = players[i].score + 0.05 * trueDessert
            }

            let lastPlace =
              quickScores[0] <= quickScores[1] &&
              quickScores[0] <= quickScores[2] &&
              quickScores[0] <= quickScores[3]

            let firstPlace =
              quickScores[0] > quickScores[1] &&
              quickScores[0] > quickScores[2] &&
              quickScores[0] > quickScores[3]

            let seasonedCompetitorBefore =
              currentUser.easyClear &&
              currentUser.normalClear &&
              currentUser.hardClear

            let maturePalateBefore =
              currentUser.makiClear &&
              currentUser.temakiClear &&
              currentUser.uramakiClear &&
              currentUser.chopsticksClear &&
              currentUser.spoonClear &&
              currentUser.menuClear &&
              currentUser.takeoutBoxClear &&
              currentUser.wasabiClear &&
              currentUser.teaClear &&
              currentUser.soysauceClear &&
              currentUser.specialOrderClear &&
              currentUser.dumplingClear &&
              currentUser.tempuraClear &&
              currentUser.sashimiClear &&
              currentUser.misoSoupClear &&
              currentUser.edamameClear &&
              currentUser.eelClear &&
              currentUser.tofuClear &&
              currentUser.onigiriClear &&
              currentUser.puddingClear &&
              currentUser.gticClear &&
              currentUser.fruitClear

            // Flash of Brilliance: Score 30+ in a round and get last place in the game
            if (
              flashedBrilliantly &&
              lastPlace &&
              !currentUser.flashOfBrilliance
            ) {
              achievementsData.flashOfBrilliance = true
              notify('Flash of Brilliance Achieved!', '🏆', 4)
            }

            if (players[0].score >= 80 && !currentUser.headChef) {
              achievementsData.headChef = true
              notify('Head Chef Achieved!', '🏆', 4)
            }

            if (firstPlace && !seasonedCompetitorBefore) {
              if (diff.includes('easy') && !currentUser.easyClear)
                achievementsData.easyClear = true
              else if (diff.includes('normal') && !currentUser.normalClear)
                achievementsData.normalClear = true
              else if (diff.includes('hard') && !currentUser.hardClear)
                achievementsData.hardClear = true

              if (
                (achievementsData.easyClear || currentUser.easyClear) &&
                (achievementsData.normalClear || currentUser.normalClear) &&
                (achievementsData.hardClear || currentUser.hardClear)
              )
                notify('Seasoned Competitor Achieved', '🏆', 4)
            }

            if (firstPlace && !maturePalateBefore) {
              if (roll.includes(cards.MAKIGUIDE.type) && !currentUser.makiClear)
                achievementsData.makiClear = true
              else if (
                roll.includes(cards.TEMAKIGUIDE.type) &&
                !currentUser.temakiClear
              )
                achievementsData.temakiClear = true
              else if (
                roll.includes(cards.URAMAKIGUIDE.type) &&
                !currentUser.uramakiClear
              )
                achievementsData.uramakiClear = true

              if (
                spec.includes(cards.CHOPSTICKSGUIDE.type) &&
                !currentUser.chopsticksClear
              )
                achievementsData.chopsticksClear = true
              if (
                spec.includes(cards.SPOONGUIDE.type) &&
                !currentUser.spoonClear
              )
                achievementsData.spoonClear = true
              if (spec.includes(cards.MENUGUIDE.type) && !currentUser.menuClear)
                achievementsData.menuClear = true
              if (
                spec.includes(cards.TAKEOUTGUIDE.type) &&
                !currentUser.takeoutBoxClear
              )
                achievementsData.takeoutBoxClear = true
              if (
                spec.includes(cards.WASABIGUIDE.type) &&
                !currentUser.wasabiClear
              )
                achievementsData.wasabiClear = true
              if (spec.includes(cards.TEAGUIDE.type) && !currentUser.teaClear)
                achievementsData.teaClear = true
              if (
                spec.includes(cards.SOYSAUCEGUIDE.type) &&
                !currentUser.soysauceClear
              )
                achievementsData.soysauceClear = true
              if (
                spec.includes(cards.SPECIALOGUIDE.type) &&
                !currentUser.specialOrderClear
              )
                achievementsData.specialOrderClear = true

              if (
                app.includes(cards.DUMPLINGGUIDE.type) &&
                !currentUser.dumplingClear
              )
                achievementsData.dumplingClear = true
              if (
                app.includes(cards.TEMPURAGUIDE.type) &&
                !currentUser.tempuraClear
              )
                achievementsData.tempuraClear = true
              if (
                app.includes(cards.SASHIMIGUIDE.type) &&
                !currentUser.sashimiClear
              )
                achievementsData.sashimiClear = true
              if (
                app.includes(cards.MISOGUIDE.type) &&
                !currentUser.misoSoupClear
              )
                achievementsData.misoSoupClear = true
              if (
                app.includes(cards.EDAMAMEGUIDE.type) &&
                !currentUser.edamameClear
              )
                achievementsData.edamameClear = true
              if (app.includes(cards.EELGUIDE.type) && !currentUser.eelClear)
                achievementsData.eelClear = true
              if (app.includes(cards.TOFUGUIDE.type) && !currentUser.tofuClear)
                achievementsData.tofuClear = true
              if (
                app.includes(cards.ONIGIRIGUIDE.type) &&
                !currentUser.onigiriClear
              )
                achievementsData.onigiriClear = true

              if (
                dess.includes(cards.PUDDINGGUIDE.type) &&
                !currentUser.puddingClear
              )
                achievementsData.puddingClear = true
              else if (
                dess.includes(cards.GTICGUIDE.type) &&
                !currentUser.gticClear
              )
                achievementsData.gticClear = true
              else if (
                dess.includes(cards.FRUITGUIDE.type) &&
                !currentUser.fruitClear
              )
                achievementsData.fruitClear = true

              if (
                (achievementsData.makiClear || currentUser.makiClear) &&
                (achievementsData.temakiClear || currentUser.temakiClear) &&
                (achievementsData.uramakiClear || currentUser.uramakiClear) &&
                (achievementsData.chopsticksClear ||
                  currentUser.chopsticksClear) &&
                (achievementsData.spoonClear || currentUser.spoonClear) &&
                (achievementsData.menuClear || currentUser.menuClear) &&
                (achievementsData.takeoutBoxClear ||
                  currentUser.takeoutBoxClear) &&
                (achievementsData.wasabiClear || currentUser.wasabiClear) &&
                (achievementsData.teaClear || currentUser.teaClear) &&
                (achievementsData.soysauceClear || currentUser.soysauceClear) &&
                (achievementsData.specialOrderClear ||
                  currentUser.specialOrderClear) &&
                (achievementsData.dumplingClear || currentUser.dumplingClear) &&
                (achievementsData.tempuraClear || currentUser.tempuraClear) &&
                (achievementsData.sashimiClear || currentUser.sashimiClear) &&
                (achievementsData.misoSoupClear || currentUser.misoSoupClear) &&
                (achievementsData.edamameClear || currentUser.edamameClear) &&
                (achievementsData.eelClear || currentUser.eelClear) &&
                (achievementsData.tofuClear || currentUser.tofuClear) &&
                (achievementsData.onigiriClear || currentUser.onigiriClear) &&
                (achievementsData.puddingClear || currentUser.puddingClear) &&
                (achievementsData.gticClear || currentUser.gticClear) &&
                (achievementsData.fruitClear || currentUser.fruitClear)
              )
                notify('Mature Palate Achieved', '🏆', 4)
            }

            if (diff.includes('easy')) {
              if (
                players[0].score > currentUser.easyScore ||
                (players[0].score == currentUser.easyScore &&
                  userTrueDessert > currentUser.easyDessert)
              ) {
                achievementsData.easyScore = players[0].score
                achievementsData.easyDessert = userTrueDessert
                notify('New High Score!', '🥇', 4)
              }
            } else if (diff.includes('normal')) {
              if (
                players[0].score > currentUser.normalScore ||
                (players[0].score == currentUser.normalScore &&
                  userTrueDessert > currentUser.normalDessert)
              ) {
                achievementsData.normalScore = players[0].score
                achievementsData.normalDessert = userTrueDessert
                notify('New High Score!', '🥇', 4)
              }
            } else if (diff.includes('hard')) {
              if (
                players[0].score > currentUser.hardScore ||
                (players[0].score == currentUser.hardScore &&
                  userTrueDessert > currentUser.hardDessert)
              ) {
                achievementsData.hardScore = players[0].score
                achievementsData.hardDessert = userTrueDessert
                notify('New High Score!', '🥇', 4)
              }
            } else if (
              players[0].score > currentUser.toxicScore ||
              (players[0].score == currentUser.toxicScore &&
                userTrueDessert > currentUser.toxicDessert)
            ) {
              achievementsData.toxicScore = players[0].score
              achievementsData.toxicDessert = userTrueDessert
              notify('New High Score!', '🥇', 4)
            }

            if (firstPlace && diff.includes('toxic')) {
              let currentDate = new Date()
              let currentTimestamp = currentDate.getTime()
              let oldTimestamp = new Date(currentUser.speedrunStart).getTime()
              let [hours, minutes, seconds] = SToHMS(
                Math.floor((currentTimestamp - oldTimestamp) / 1000)
              )
              let totalTime = 60 * 60 * hours + 60 * minutes + seconds

              let notifString = 'You beat the game in '

              if (hours == 1) notifString += '1 hour, '
              else if (hours > 1) notifString += hours + ' hours, '

              if (minutes == 1) notifString += '1 minute and '
              else if (minutes > 1 || minutes > 0)
                notifString += minutes + ' minutes and '

              if (seconds == 1) notifString += '1 second!'
              else if (seconds > 1) notifString += seconds + ' seconds!'

              notify(notifString, '👑', 4)

              if (
                currentUser.bestSpeedrun == -1 ||
                totalTime < currentUser.bestSpeedrun
              ) {
                achievementsData.bestSpeedrun = totalTime
              }
            }
          }

          setUserScoreF(players[0].score)
          setCpuOneScoreF(players[1].score)
          setCpuTwoScoreF(players[2].score)
          setCpuThreeScoreF(players[3].score)
          setUserDessertF(players[0].dessert)
          setCpuOneDessertF(players[1].dessert)
          setCpuTwoDessertF(players[2].dessert)
          setCpuThreeDessertF(players[3].dessert)
          setShowResults(true)

          // Only update achievements if new progress has been made
          if (currentUser && Object.keys(achievementsData).length > 0)
            await updateAchievements({
              variables: {
                id: currentUser.id,
                input: achievementsData,
              },
            })
        } else {
          setUserHand([...players[0].hand])
          setUserStash([...players[0].stash])
          setCpuOneStash([...players[1].stash])
          setCpuTwoStash([...players[2].stash])
          setCpuThreeStash([...players[3].stash])
          setUserScore(players[0].score)
          setCpuOneScore(players[1].score)
          setCpuTwoScore(players[2].score)
          setCpuThreeScore(players[3].score)
        }

        toast.dismiss()
        showToasts()
      }

      const incrementRound = () => {
        if (roll.includes(cards.URAMAKIGUIDE.type)) resetUramaki()
        if (spec.includes(cards.CHOPSTICKSGUIDE.type)) resetChopsticks()
        if (spec.includes(cards.SPOONGUIDE.type)) resetSpoon()
        if (app.includes(cards.MISOGUIDE.type)) resetMiso()
        if (spec.includes(cards.SPECIALOGUIDE.type)) specialOrders = []
        roundPoints = 0
        priority = 0
        cardsLeft = MAXHANDCARDS
        round++
      }

      // Automatically display makis in order of decreasing icons
      const reorderMaki = (index) => {
        if (
          players[index].stash.length == 0 ||
          players[index].stash[players[index].stash.length - 1].color !=
            cards.MAKIONE.color
        )
          return

        if (
          players[index].stash[players[index].stash.length - 1].type ==
          cards.MAKIONE.type
        )
          return

        if (
          players[index].stash[players[index].stash.length - 1].type ==
          cards.MAKITWO.type
        ) {
          for (let i = 0; i < players[index].stash.length; i++)
            if (players[index].stash[i].type == cards.MAKIONE.type) {
              players[index].stash[i] = cards.MAKITWO
              players[index].stash[players[index].stash.length - 1] =
                cards.MAKIONE
              break
            }
          return
        }

        let makiSpots = []

        for (let i = 0; i < players[index].stash.length; i++)
          if (players[index].stash[i].color == cards.MAKIONE.color)
            makiSpots.push(i)

        for (let i = makiSpots.length - 1; i > 0; i--)
          players[index].stash[makiSpots[i]] =
            players[index].stash[makiSpots[i - 1]]

        players[index].stash[makiSpots[0]] = cards.MAKITHREE
      }

      // Automatically display uramakis in order of decreasing icons
      const reorderUramaki = (index) => {
        if (
          players[index].stash.length == 0 ||
          players[index].stash[players[index].stash.length - 1].color !=
            cards.URAMAKITHREE.color
        )
          return

        if (
          players[index].stash[players[index].stash.length - 1].type ==
          cards.URAMAKITHREE.type
        )
          return

        if (
          players[index].stash[players[index].stash.length - 1].type ==
          cards.URAMAKIFOUR.type
        ) {
          for (let i = 0; i < players[index].stash.length; i++)
            if (players[index].stash[i].type == cards.URAMAKITHREE.type) {
              players[index].stash[i] = cards.URAMAKIFOUR
              players[index].stash[players[index].stash.length - 1] =
                cards.URAMAKITHREE
              break
            }
          return
        }

        let uramakiSpots = []

        for (let i = 0; i < players[index].stash.length; i++)
          if (players[index].stash[i].color == cards.URAMAKITHREE.color)
            uramakiSpots.push(i)

        for (let i = uramakiSpots.length - 1; i > 0; i--)
          players[index].stash[uramakiSpots[i]] =
            players[index].stash[uramakiSpots[i - 1]]

        players[index].stash[uramakiSpots[0]] = cards.URAMAKIFIVE
      }

      /* If more than one miso soup is played all are removed
         PRECONDITION: Miso soup was played by player at index */
      const handleMiso = (index) => {
        const removeMiso = (index) => {
          for (let i = players[index].stash.length - 1; i >= 0; i--)
            if (players[index].stash[i].type == cards.MISO.type) {
              deck.discardPile.push(players[index].stash.splice(i, 1)[0])
              notify('Gave up non-unique miso soup', '😩', index)
              if (index == 0) badMiso = true
              return
            }
        }
        /* If miso soup is allowed, do not remove but flag this player
           in case someone play miso soup later, when it would not be allowed */
        if (misoAllowed) {
          misoAllowed = false
          firstMisoIndex = index
          return
        }

        // Miso soup is not allowed, so remove the miso soup
        removeMiso(index)

        // Remove the player who played the first miso soup if not done yet
        if (firstMisoIndex != -1) {
          removeMiso(firstMisoIndex)
          firstMisoIndex = -1
        }
      }

      // Display message for successful usage and swap for display
      const handleWasabi = (index) => {
        // Move on if nigiri is not most recently played
        if (
          ![cards.EGG.type, cards.SALMON.type, cards.SQUID.type].includes(
            players[index].stash[players[index].stash.length - 1].type
          )
        )
          return

        /* If an unclaimed wasabi is found, insert nigiri immediately after wasabi
           and display a toast message */
        for (
          let wasabiLoc = 0;
          wasabiLoc < players[index].stash.length - 1;
          wasabiLoc++
        )
          if (
            players[index].stash[wasabiLoc].type == cards.WASABI.type &&
            (wasabiLoc == players[index].stash.length - 2 ||
              ![cards.EGG.type, cards.SALMON.type, cards.SQUID.type].includes(
                players[index].stash[wasabiLoc + 1].type
              ))
          ) {
            players[index].stash.splice(
              wasabiLoc + 1,
              0,
              players[index].stash.pop()
            )
            notify(
              'Tripled ' +
                players[index].stash[wasabiLoc + 1].text +
                ' with wasabi',
              '💥',
              index
            )

            break
          }
      }

      /* Handles the actions that must be taken after playing a card at any stage
         1. Copy a card if special order played
         2. Reorder maki or uramaki
         3. Reorder nigiri if it is played on a wasabi
         4. Check to remove miso soup
         5. Check to score uramaki */
      const playCard = (cardIndex, playerIndex, checkUramaki) => {
        let card = players[playerIndex].hand.splice(cardIndex, 1)[0]
        players[playerIndex].stash.push(card)
        if (card.type == cards.SPECIALO.type) {
          let canUseSpecialOrder = false
          for (let i = 0; i < players[playerIndex].stash.length; i++)
            if (
              players[playerIndex].stash[i].type != cards.SPECIALO.type &&
              players[playerIndex].stash[i].color != cards.MENUSEVEN.color &&
              (i != 0 ||
                players[playerIndex].stash[i].type != userClickedType ||
                ![cards.CHOPSTICKSONE.color, cards.SPOONFOUR.color].includes(
                  players[playerIndex].stash[i].color
                ))
            )
              canUseSpecialOrder = true

          if (!canUseSpecialOrder) {
            notify(
              'Could not copy anything with special order',
              '🌈',
              playerIndex
            )
            deck.discardPile.push(players[playerIndex].stash.pop())
          } else if (playerIndex == 0) {
            specialOrderFreeze = true
            return
          } else {
            let choice = pickComputerSpecialOrder(
              players[playerIndex],
              getOpps(playerIndex),
              cardsLeft,
              round,
              diff[0]
            )

            if (
              choice == -1 ||
              players[playerIndex].stash[choice].type == cards.SPECIALO.type
            ) {
              notify('Played special order without copying', '🌈', playerIndex)
              deck.discardPile.push(players[playerIndex].stash.pop())
            } else {
              // Render copied utentsils unusable
              if (
                players[playerIndex].stash[choice].color ==
                cards.CHOPSTICKSONE.color
              ) {
                let indexToRemove = activeChopsticksTypes.indexOf(
                  players[playerIndex].stash[choice].type
                )
                if (indexToRemove != -1)
                  activeChopsticksTypes.splice(indexToRemove, 1)
              }

              if (
                players[playerIndex].stash[choice].color ==
                cards.SPOONFOUR.color
              ) {
                let indexToRemove = activeSpoonTypes.indexOf(
                  players[playerIndex].stash[choice].type
                )
                if (indexToRemove != -1)
                  activeSpoonTypes.splice(indexToRemove, 1)
              }

              notify(
                'Copied ' +
                  players[playerIndex].stash[choice].text +
                  ' with special order',
                '🌈',
                playerIndex
              )
              players[playerIndex].stash.pop()
              players[playerIndex].hand.unshift(
                players[playerIndex].stash[choice]
              )
              playCard(0, playerIndex, priority > 0)
            }
          }
        }

        if (roll.includes(cards.MAKIGUIDE.type)) reorderMaki(playerIndex)

        if (roll.includes(cards.URAMAKIGUIDE.type)) reorderUramaki(playerIndex)

        if (spec.includes(cards.WASABIGUIDE.type)) handleWasabi(playerIndex)

        // Check if the actual card is miso soup because wasabi step can shift the stash
        if (card.type == cards.MISO.type) handleMiso(playerIndex)

        if (checkUramaki && roll.includes(cards.URAMAKIGUIDE.type))
          scoreUramakiDuring()
      }

      // Ends a round and moves to the next (or results screen)
      const advanceRound = () => {
        players[0].hand = []
        scoreRound()

        setAsideDessert()

        if (round == 1) replenishDeck(DESSERTCOUNTTWO)
        else if (round == 2) replenishDeck(DESSERTCOUNTTHREE)

        setUserDessert(players[0].dessert)
        setCpuOneDessert(players[1].dessert)
        setCpuTwoDessert(players[2].dessert)
        setCpuThreeDessert(players[3].dessert)

        if (round == NUMROUNDS) scoreDesserts()
        else dealToPlayers()

        incrementRound()
        updateData()
      }

      /* Priority variable tracks what stage we are are
         1. Play computer cards (if desired) (priority 0)
         2. Chopsticks (priority 1-3)
         3. Spoon (priority 4-6)
         4. Menu (priority 7-9)
         5. Takeout Box (priority 10-12)
         6. Swap cards for next turn */
      const resolveTurn = () => {
        const handleChopsticks = (index) => {
          // Can only use chopsticks/spoon once a turn and hand must not be empty
          if (players[index].utensilUsed || players[index].hand.length == 0)
            return

          if (index == 0) {
            usingChopsticks = true
            return
          }

          let choice
          // Jacob will pretend as if he has Jeff's stash and then play a card that Jeff would not want to play
          if (diff.includes('toxic') && index == 1) {
            let saveHand = players[2].hand
            players[2].hand = players[1].hand
            choice = pickComputerCard(
              players[2],
              getOpps(2),
              cardsLeft,
              round,
              'toxic reverse'
            )
            players[2].hand = saveHand
          } // Jerry will pretend as if he has the user's stash and then play a card that the user would want to play
          else if (diff.includes('toxic') && index == 3) {
            let saveHand = players[0].hand
            players[0].hand = players[3].hand
            choice = pickComputerCard(
              players[0],
              getOpps(0),
              cardsLeft,
              round,
              diff[0]
            )
            players[0].hand = saveHand
          } else
            choice = pickComputerCard(
              players[index],
              getOpps(index),
              cardsLeft,
              round,
              diff[0]
            )

          cleanupChopsticks(index, choice)

          notify(
            'Played ' + players[index].hand[choice].text + ' with chopsticks',
            '🥢',
            index
          )

          playCard(choice, index, true)
        }

        const handleSpoon = (index) => {
          // Can only use chopsticks/spoon once a turn and hand must not be empty
          if (players[index].utensilUsed || players[index].hand.length == 0)
            return

          if (index == 0) {
            usingSpoon = true
            return
          }

          let choiceCard = pickComputerSpoon(
            players[index],
            getOpps(index),
            cardsLeft,
            round,
            diff[0],
            [roll, spec, app, dess]
          )
          let seeking = choiceCard.eligibleTypes
            ? choiceCard.eligibleTypes
            : [choiceCard.type]

          notify('Requested ' + choiceCard.text + ' with spoon', '🥄', index)

          let requesterIndex = index
          for (let i = 1; i < players.length; i++) {
            let requesteeIndex = (index + i) % 4
            for (let j = 0; j < players[requesteeIndex].hand.length; j++)
              if (seeking.includes(players[requesteeIndex].hand[j].type)) {
                cleanupSpoon(requesterIndex, requesteeIndex, seeking)
                return
              }
            notify('Did not have ' + choiceCard.text, '🥄', requesteeIndex)
          }
          notify('Did not receive ' + choiceCard.text, '🥄', requesterIndex)
          if (requesterIndex == 0) badSushiThief = true
          deck.discardPile.push(removePriorityCard(requesterIndex))
        }

        const handleMenu = (index) => {
          // Make the 4 card choice provided by playing a menu
          let tempHand = [
            deck.pile.pop(),
            deck.pile.pop(),
            deck.pile.pop(),
            deck.pile.pop(),
          ]

          savedHand = players[index].hand
          players[index].hand = tempHand

          if (index == 0) {
            usingMenu = true
            return
          }

          players[index].hand = tempHand
          let choice = pickComputerMenu(
            players[index],
            getOpps(index),
            cardsLeft,
            round,
            diff[0]
          )

          notify(
            'Played ' + players[index].hand[choice].text + ' with menu',
            '📖',
            index
          )

          playCard(choice, index, true)

          cleanupMenu(index)
        }

        const handleTakeout = (index) => {
          // Cannot use takeout box if there are no cards to turn over
          let canUseTakeoutBox = false

          for (let card of players[index].stash)
            if (
              card.type != cards.TOC.type &&
              card.type != priorityToCard().type
            )
              canUseTakeoutBox = true

          if (!canUseTakeoutBox) {
            notify('Could not takeout anything with takeout box', '🥡', index)

            // Move takeout box to discard pile
            deck.discardPile.push(removePriorityCard(index))
            return
          }

          if (index == 0) {
            takeoutBoxFreeze = true
            return
          }

          let takenOutCards = pickComputerTakeout(
            players[index],
            getOpps(index),
            cardsLeft,
            round,
            diff[0]
          )

          if (takenOutCards.length == 0)
            notify('Took out 0 items with takeout box', '🥡', index)

          for (let i = 0; i < takenOutCards.length; i++)
            notify(
              'Took out ' + takenOutCards[i].text + ' with takeout box',
              '🥡',
              index
            )

          for (let i = 0; i < takenOutCards.length; i++)
            takeoutCards.push(takenOutCards[i])

          // Move takeout box to discard pile
          deck.discardPile.push(removePriorityCard(index))
        }

        /* There is INTENTIONAL fall-through here, the idea is that priority
           marks where to start and then you keep going until a user action
           potentially necessitates a break in the sequence, but the spot will
           be saved for when the user is done with that action  */
        switch (priority) {
          case 0:
            for (let i = 1; i < players.length; i++)
              playCard(players[i].willPlayIndex, i, i == players.length - 1)
            priority++
          case 1:
            for (let i = 0; i < players.length; i++)
              if (
                activeChopsticksTypes.includes(priorityToCard().type) &&
                countCard(players[i].stash, priorityToCard()) > 0 &&
                ((i > 0 &&
                  pickComputerUsingUtensil(
                    players[i].stash,
                    cardsLeft,
                    diff[0]
                  )) ||
                  userClickedType == priorityToCard().type)
              )
                handleChopsticks(i)
            if (usingChopsticks) break
            priority++
          case 2:
            for (let i = 0; i < players.length; i++)
              if (
                activeChopsticksTypes.includes(priorityToCard().type) &&
                countCard(players[i].stash, priorityToCard()) > 0 &&
                ((i > 0 &&
                  pickComputerUsingUtensil(
                    players[i].stash,
                    cardsLeft,
                    diff[0]
                  )) ||
                  userClickedType == priorityToCard().type)
              )
                handleChopsticks(i)
            if (usingChopsticks) return
            priority++
          case 3:
            for (let i = 0; i < players.length; i++)
              if (
                activeChopsticksTypes.includes(priorityToCard().type) &&
                countCard(players[i].stash, priorityToCard()) > 0 &&
                ((i > 0 &&
                  pickComputerUsingUtensil(
                    players[i].stash,
                    cardsLeft,
                    diff[0]
                  )) ||
                  userClickedType == priorityToCard().type)
              )
                handleChopsticks(i)
            if (usingChopsticks) break
            priority++
          case 4:
            for (let i = 0; i < players.length; i++)
              if (
                activeSpoonTypes.includes(priorityToCard().type) &&
                countCard(players[i].stash, priorityToCard()) > 0 &&
                ((i > 0 &&
                  pickComputerUsingUtensil(
                    players[i].stash,
                    cardsLeft,
                    diff[0]
                  )) ||
                  userClickedType == priorityToCard().type)
              )
                handleSpoon(i)
            if (usingSpoon || beingSpooned) break
            priority++
          case 5:
            for (let i = 0; i < players.length; i++)
              if (
                activeSpoonTypes.includes(priorityToCard().type) &&
                countCard(players[i].stash, priorityToCard()) > 0 &&
                ((i > 0 &&
                  pickComputerUsingUtensil(
                    players[i].stash,
                    cardsLeft,
                    diff[0]
                  )) ||
                  userClickedType == priorityToCard().type)
              )
                handleSpoon(i)
            if (usingSpoon || beingSpooned) break
            priority++
          case 6:
            for (let i = 0; i < players.length; i++)
              if (
                activeSpoonTypes.includes(priorityToCard().type) &&
                countCard(players[i].stash, priorityToCard()) > 0 &&
                ((i > 0 &&
                  pickComputerUsingUtensil(
                    players[i].stash,
                    cardsLeft,
                    diff[0]
                  )) ||
                  userClickedType == priorityToCard().type)
              )
                handleSpoon(i)
            if (usingSpoon || beingSpooned) break
            priority++
          case 7:
            for (let i = 0; i < players.length; i++)
              if (
                players[i].stash.length > 0 &&
                countCard(players[i].stash, priorityToCard()) == 1
              )
                handleMenu(i)
            if (usingMenu) break
            priority++
          case 8:
            for (let i = 0; i < players.length; i++)
              if (
                players[i].stash.length > 0 &&
                countCard(players[i].stash, priorityToCard()) == 1
              )
                handleMenu(i)
            if (usingMenu) break
            priority++
          case 9:
            for (let i = 0; i < players.length; i++)
              if (
                players[i].stash.length > 0 &&
                countCard(players[i].stash, priorityToCard()) == 1
              )
                handleMenu(i)
            if (usingMenu) break
            priority++
          case 10:
            for (let i = 0; i < players.length; i++)
              if (
                players[i].stash.length > 0 &&
                countCard(players[i].stash, priorityToCard()) == 1
              )
                handleTakeout(i)
            if (takeoutBoxFreeze) break
            priority++
          case 11:
            for (let i = 0; i < players.length; i++)
              if (
                players[i].stash.length > 0 &&
                countCard(players[i].stash, priorityToCard()) == 1
              )
                handleTakeout(i)
            if (takeoutBoxFreeze) break
            priority++
          case 12:
            for (let i = 0; i < players.length; i++)
              if (
                players[i].stash.length > 0 &&
                countCard(players[i].stash, priorityToCard()) == 1
              )
                handleTakeout(i)
            if (takeoutBoxFreeze) break
            priority++
          default:
            prepareNextTurn()
        }
      }

      const handClick = (e) => {
        const userChopsticksHandling = () => {
          cleanupChopsticks(0, parseInt(e.target.name))

          notify(
            'Played ' +
              players[0].hand[parseInt(e.target.name)].text +
              ' with chopsticks',
            '🥢',
            0
          )

          if (++forkForgets == 4 && currentUser && !currentUser.forkForgetter) {
            achievementsData.forkForgetter = true
            notify('Fork Forgetter Achieved!', '🏆', 4)
          }

          playCard(parseInt(e.target.name), 0, true)

          if (!specialOrderFreeze) {
            priority++
            resolveTurn()
          }

          updateData()
        }

        const userBeingSpoonedHandling = () => {
          if (
            !requestedTypes.includes(
              players[0].hand[parseInt(e.target.name)].type
            )
          ) {
            notify(
              players[0].hand[parseInt(e.target.name)].text
                .substring(0, 1)
                .toUpperCase() +
                players[0].hand[parseInt(e.target.name)].text.substring(1) +
                ' was not requested',
              '🥄',
              0
            )
            updateData()
            return
          }

          cleanupSpoon(spoonAsker, 0, requestedTypes, parseInt(e.target.name))
          priority++
          resolveTurn()
          updateData()
        }

        const userMenuHandling = () => {
          let clicked = players[0].hand[parseInt(e.target.name)]
          if (clicked.color == cards.MENUSEVEN.color) {
            notify('Cannot play menu from menu', '📖', 0)
            updateData()
            return
          }

          notify('Played ' + clicked.text + ' with menu', '📖', 0)

          if (
            ++menuUses == 4 &&
            currentUser &&
            !currentUser.demandingCustomer &&
            !achievementsData.demandingCustomer
          ) {
            achievementsData.demandingCustomer = true
            notify('Demanding Customer Achieved!', '🏆', 4)
          }

          playCard(parseInt(e.target.name), 0, true) // Play the clicked card

          cleanupMenu(0)

          if (!specialOrderFreeze) {
            priority++
            resolveTurn()
          }

          updateData()
        }

        const regularClick = () => {
          // Have the computers make up their mind
          for (let i = 1; i < players.length; i++) {
            // Jacob will pretend as if he has Jeff's stash and then play a card that Jeff would not want to play
            if (diff.includes('toxic') && i == 1) {
              let saveHand = players[2].hand
              players[2].hand = players[1].hand
              players[1].willPlayIndex = pickComputerCard(
                players[2],
                getOpps(2),
                cardsLeft,
                round,
                'toxic reverse'
              )
              players[2].hand = saveHand
            } // Jerry will pretend as if he has the user's stash and then play a card that the user would want to play
            else if (diff.includes('toxic') && i == 3) {
              let saveHand = players[0].hand
              players[0].hand = players[3].hand
              players[3].willPlayIndex = pickComputerCard(
                players[0],
                getOpps(0),
                cardsLeft,
                round,
                diff[0]
              )
              players[0].hand = saveHand
            } else
              players[i].willPlayIndex = pickComputerCard(
                players[i],
                getOpps(i),
                cardsLeft,
                round,
                diff[0]
              )
          }

          // Play the user card
          playCard(parseInt(e.target.name), 0, false)

          if (!specialOrderFreeze) resolveTurn()

          updateData()
        }

        // During special order or takeout box use, cannot play from hand
        if (specialOrderFreeze || takeoutBoxFreeze);
        else if (usingChopsticks) userChopsticksHandling()
        else if (beingSpooned) userBeingSpoonedHandling()
        else if (usingMenu) userMenuHandling()
        else regularClick()
      }

      const spoonClick = (e) => {
        let seeking = typeToCard(parseInt(e.target.name)).eligibleTypes
          ? typeToCard(parseInt(e.target.name)).eligibleTypes
          : [parseInt(e.target.name)]

        notify('Requested ' + e.target.alt + ' with spoon', '🥄', 0)

        for (let i = 1; i < players.length; i++) {
          for (let j = 0; j < players[i].hand.length; j++) {
            if (seeking.includes(players[i].hand[j].type)) {
              cleanupSpoon(0, i, seeking)

              if (!specialOrderFreeze) {
                priority++
                resolveTurn()
              }

              updateData()
              return
            }
          }
          notify('Did not have ' + e.target.alt, '🥄', i)
        }
        notify('Did not receive ' + e.target.alt, '🥄', 0)
        deck.discardPile.push(removePriorityCard(0))
        usingSpoon = false
        priority++
        resolveTurn()
        updateData()
      }

      const stashClick = (e) => {
        const userTakeoutBoxHandling = (e) => {
          // Ends the selection process for takeout box
          const takeoutPressed = () => {
            deck.discardPile.push(removePriorityCard(0))
            takeoutBoxFreeze = false
            priority++
            if (!usedTakeout)
              notify('Took out 0 items with takeout box', '🥡', 0)
            else if (
              ++takeoutUses == 4 &&
              currentUser &&
              !currentUser.leftoverLover
            ) {
              achievementsData.leftoverLover = true
              notify('Leftover Lover Achieved!', '🏆', 4)
            }
            usedTakeout = false
            resolveTurn()
            updateData()
          }

          if (priorityToCard().type == parseInt(e.target.name)) takeoutPressed()
          else {
            /* This code is for actually turning over a card
                 Note: Cannot turn over an already turned over card
                 Otherwise, turn the card over and record it to be reset correctly later */
            for (let i = 0; i < players[0].stash.length; i++)
              if (
                e.target.alt == players[0].stash[i].text &&
                e.target.alt != 'turned over card'
              ) {
                takeoutCards.push(players[0].stash[i])
                notify(
                  'Took out ' + players[0].stash[i].text + ' with takeout box',
                  '🥡',
                  0
                )
                usedTakeout = true
                players[0].stash[i] = cards.TOC
                updateData()

                // If there are no more cards to turn over automatically end selection
                for (let card of players[0].stash)
                  if (
                    card.type != cards.TOC.type &&
                    card.type != priorityToCard().type
                  )
                    return

                takeoutPressed()
                break
              }
          }
        }

        const userSpecialOrderHandling = (e) => {
          // If the user clicks special order, they elect not to use it
          if (e.target.name == cards.SPECIALO.type) {
            players[0].stash.pop() // Pop the special order from stash
            notify('Played special order without copying', '🌈', 0)
            deck.discardPile.push(cards.SPECIALO)
            specialOrderFreeze = false

            resolveTurn()
            updateData()
            return
          }

          // Cannot copy a utensil currently in use
          if (
            parseInt(e.target.name) == userClickedType &&
            [
              cards.CHOPSTICKSONE.type,
              cards.CHOPSTICKSTWO.type,
              cards.CHOPSTICKSTHREE.type,
            ].includes(parseInt(e.target.name))
          ) {
            notify('Cannot copy chopsticks currently being used', '🌈', 0)
            updateData()
            return
          }

          if (
            parseInt(e.target.name) == userClickedType &&
            [
              cards.SPOONFOUR.type,
              cards.SPOONFIVE.type,
              cards.SPOONSIX.type,
            ].includes(parseInt(e.target.name))
          ) {
            notify('Cannot copy spoon currently being used', '🌈', 0)
            updateData()
            return
          }

          // Normal Special Order Usage
          for (let i = 0; i < players[0].stash.length; i++)
            if (e.target.name == players[0].stash[i].type) {
              players[0].stash.pop() // Pop the special order from stash
              // Add selected card to start of hand then play it
              players[0].hand.unshift(players[0].stash[i])
              notify(
                'Copied ' + players[0].stash[i].text + ' with special order',
                '🌈',
                0
              )

              specialOrders.push(players[0].stash[i].type)

              if (
                specialOrders.length == 3 &&
                specialOrders[0] == specialOrders[1] &&
                specialOrders[1] == specialOrders[2] &&
                currentUser &&
                !currentUser.goingForSeconds &&
                !achievementsData.goingForSeconds
              ) {
                achievementsData.goingForSeconds = true
                notify('Going for Seconds Achieved!', '🏆', 4)
              }
              playCard(0, 0, priority > 0)
              break
            }
          specialOrderFreeze = false
          resolveTurn()
          updateData()
        }

        if (takeoutBoxFreeze) userTakeoutBoxHandling(e)
        else if (specialOrderFreeze) userSpecialOrderHandling(e)
        else {
          if (priority == 0)
            if (e.target.name == userClickedType) setUserClickedType(-1)
            else setUserClickedType(parseInt(e.target.name))
        }
      }

      // Display a selection of all possible spoon requests
      const SpoonHand = () => {
        const getNigiriLayout = () => {
          return (
            <>
              <div className="flex flex-col">
                <Card
                  numberName={cards.EGG.type}
                  info={cards.EGG}
                  action={spoonClick}
                  fullOpacity={true}
                  displayFrac={'3'}
                />
                <Card
                  numberName={cards.SALMON.type}
                  info={cards.SALMON}
                  action={spoonClick}
                  fullOpacity={true}
                  displayFrac={'3'}
                />
                <Card
                  numberName={cards.SQUID.type}
                  info={cards.SQUID}
                  action={spoonClick}
                  fullOpacity={true}
                  displayFrac={'3'}
                />
              </div>
              <Card
                numberName={cards.NIGIRIGUIDE.type}
                info={cards.NIGIRIGUIDE}
                action={spoonClick}
                fullOpacity={true}
                displayFrac={'1'}
              />
            </>
          )
        }

        const getRollLayout = (rollType) => {
          const getMultiple = () => {
            if (rollType == cards.MAKIGUIDE.type)
              return (
                <>
                  <div className="flex flex-col">
                    <Card
                      numberName={cards.MAKIONE.type}
                      info={cards.MAKIONE}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'3'}
                    />
                    <Card
                      numberName={cards.MAKITWO.type}
                      info={cards.MAKITWO}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'3'}
                    />
                    <Card
                      numberName={cards.MAKITHREE.type}
                      info={cards.MAKITHREE}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'3'}
                    />
                  </div>
                </>
              )
            else if (rollType == cards.URAMAKIGUIDE.type)
              return (
                <>
                  <div className="flex flex-col">
                    <Card
                      numberName={cards.URAMAKITHREE.type}
                      info={cards.URAMAKITHREE}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'3'}
                    />
                    <Card
                      numberName={cards.URAMAKIFOUR.type}
                      info={cards.URAMAKIFOUR}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'3'}
                    />
                    <Card
                      numberName={cards.URAMAKIFIVE.type}
                      info={cards.URAMAKIFIVE}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'3'}
                    />
                  </div>
                </>
              )
          }

          return (
            <>
              {getMultiple()}
              <Card
                numberName={rollType}
                info={typeToCard(rollType)}
                action={spoonClick}
                fullOpacity={true}
                displayFrac={'1'}
              />
            </>
          )
        }

        const getSpecLayout = (specType) => {
          return (
            <Card
              numberName={specType}
              info={typeToCard(specType)}
              action={spoonClick}
              fullOpacity={true}
              displayFrac={'1'}
            />
          )
        }

        const getAppLayout = (appType) => {
          const getMultiple = () => {
            if (appType == cards.ONIGIRIGUIDE.type)
              return (
                <>
                  <div className="flex flex-col">
                    <Card
                      numberName={cards.ONICIRCLE.type}
                      info={cards.ONICIRCLE}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'4'}
                    />
                    <Card
                      numberName={cards.ONISQUARE.type}
                      info={cards.ONISQUARE}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'4'}
                    />
                    <Card
                      numberName={cards.ONITRI.type}
                      info={cards.ONITRI}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'4'}
                    />
                    <Card
                      numberName={cards.ONIFLAT.type}
                      info={cards.ONIFLAT}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'4'}
                    />
                  </div>
                </>
              )
          }

          return (
            <>
              {getMultiple()}
              <Card
                numberName={appType}
                info={typeToCard(appType)}
                action={spoonClick}
                fullOpacity={true}
                displayFrac={'1'}
              />
            </>
          )
        }

        const getDessLayout = (dessType) => {
          const getMultiple = () => {
            if (dessType == cards.FRUITGUIDE.type)
              return (
                <>
                  <div className="flex flex-col">
                    <Card
                      numberName={cards.FRUITDUBPINE.type}
                      info={cards.FRUITDUBWAT}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'3'}
                    />
                    <Card
                      numberName={cards.FRUITDUBPINE.type}
                      info={cards.FRUITDUBPINE}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'3'}
                    />
                    <Card
                      numberName={cards.FRUITDUBO.type}
                      info={cards.FRUITDUBO}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'3'}
                    />
                  </div>
                  <div className="flex flex-col">
                    <Card
                      numberName={cards.FRUITWATERO.type}
                      info={cards.FRUITWATERO}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'3'}
                    />
                    <Card
                      numberName={cards.FRUITPINEO.type}
                      info={cards.FRUITPINEO}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'3'}
                    />
                    <Card
                      numberName={cards.FRUITWATERPINE.type}
                      info={cards.FRUITWATERPINE}
                      action={spoonClick}
                      fullOpacity={true}
                      displayFrac={'3'}
                    />
                  </div>
                </>
              )
          }

          return (
            <>
              {getMultiple()}
              <Card
                numberName={dessType}
                info={typeToCard(dessType)}
                action={spoonClick}
                fullOpacity={true}
                displayFrac={'1'}
              />
            </>
          )
        }

        return (
          <div className="flex flex-row justify-center">
            {getNigiriLayout()}
            {roll.map((rollType, i) => {
              return (
                <div className="flex flex-row" key={i}>
                  {getRollLayout(rollType)}
                </div>
              )
            })}
            {spec.map((specType, i) => {
              return (
                <div className="flex flex-row" key={i}>
                  {getSpecLayout(specType)}
                </div>
              )
            })}
            {app.map((appType, i) => {
              return (
                <div className="flex flex-row" key={i}>
                  {getAppLayout(appType)}
                </div>
              )
            })}
            {dess.map((dessType, i) => {
              return (
                <div className="flex flex-row" key={i}>
                  {getDessLayout(dessType)}
                </div>
              )
            })}
          </div>
        )
      }

      // selection - The cards in the hand
      const Hand = ({ selection }) => {
        // Special hand interface for when requesting with spoon
        if (usingSpoon) return <SpoonHand />

        // Display button to progress round once out of cards
        if (selection.length == 0) {
          let buttonText = round == NUMROUNDS ? 'FINAL SCORE' : 'NEXT ROUND'
          if (priority == 0 && !specialOrderFreeze)
            return (
              <Form>
                <br />
                <br />
                <Label className="no-highlight m-2">
                  <CheckboxField
                    id="advance"
                    name="advanceButton"
                    onChange={advanceRound}
                  />
                  <span className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-6xl text-[color:var(--color-salmon)]">
                    {buttonText}
                  </span>
                </Label>
                <br />
                <br />
              </Form>
            )
          else
            return (
              <Form>
                <br />
                <br />
                <Label className="no-highlight m-2">
                  <CheckboxField id="advance" name="advanceButton" />
                  <span className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-6xl text-[color:var(--color-salmon)] opacity-50">
                    {buttonText}
                  </span>
                </Label>
                <br />
                <br />
              </Form>
            )
        }

        // Normal display
        return (
          <div className="flex flex-row justify-center">
            {selection.map((card, i) => {
              if (specialOrderFreeze || takeoutBoxFreeze)
                return (
                  <Card
                    key={i}
                    numberName={i}
                    info={card}
                    action={handClick}
                    fullOpacity={false}
                    displayFrac={'1'}
                  />
                )
              else if (beingSpooned)
                return (
                  <Card
                    key={i}
                    numberName={i}
                    info={card}
                    action={handClick}
                    fullOpacity={requestedTypes.includes(card.type)}
                    displayFrac={'1'}
                  />
                )
              else if (usingMenu)
                return (
                  <Card
                    key={i}
                    numberName={i}
                    info={card}
                    action={handClick}
                    fullOpacity={card.color != cards.MENUSEVEN.color}
                    displayFrac={'1'}
                  />
                )
              else
                return (
                  <Card
                    key={i}
                    numberName={i}
                    info={card}
                    action={handClick}
                    fullOpacity={true}
                    displayFrac={'1'}
                  />
                )
            })}
          </div>
        )
      }

      /* platter - The cards in the stash
         area - 0 to 3 value representing where the stash is situated (12)
                                                                      (03) */
      const Stash = ({ platter, area }) => {
        const compareStacks = (a, b) => {
          return b.length - a.length
        }

        let columnColors = []
        let cardColumns = []
        let classStrings = []

        if (area == 0)
          classStrings = [
            'absolute bottom-36 left-0',
            'absolute bottom-36 left-24',
            'absolute bottom-36 left-48',
            'absolute bottom-36 left-72',
            'absolute bottom-36 left-96',
            'absolute bottom-0 left-96',
            'absolute bottom-0 left-72',
            'absolute bottom-0 left-48',
            'absolute bottom-0 left-24',
            'absolute bottom-0 left-0',
          ]
        else if (area == 1)
          classStrings = [
            'absolute bottom-36 right-0',
            'absolute bottom-36 right-24',
            'absolute bottom-36 right-48',
            'absolute bottom-36 right-72',
            'absolute bottom-36 right-96',
            'absolute bottom-0 right-96',
            'absolute bottom-0 right-72',
            'absolute bottom-0 right-48',
            'absolute bottom-0 right-24',
            'absolute bottom-0 right-0',
          ]
        else if (area == 2)
          classStrings = [
            'absolute bottom-0 right-0',
            'absolute bottom-0 right-24',
            'absolute bottom-0 right-48',
            'absolute bottom-0 right-72',
            'absolute bottom-0 right-96',
            'absolute bottom-36 right-96',
            'absolute bottom-36 right-72',
            'absolute bottom-36 right-48',
            'absolute bottom-36 right-24',
            'absolute bottom-36 right-0',
          ]
        else
          classStrings = [
            'absolute bottom-0 left-0',
            'absolute bottom-0 left-24',
            'absolute bottom-0 left-48',
            'absolute bottom-0 left-72',
            'absolute bottom-0 left-96',
            'absolute bottom-36 left-96',
            'absolute bottom-36 left-72',
            'absolute bottom-36 left-48',
            'absolute bottom-36 left-24',
            'absolute bottom-36 left-0',
          ]

        // Group the cards by color for display
        for (let i = 0; i < platter.length; i++) {
          if (columnColors.indexOf(platter[i].color) == -1) {
            columnColors.push(platter[i].color)
            cardColumns.push([platter[i]])
          } else
            cardColumns[columnColors.indexOf(platter[i].color)].unshift(
              platter[i]
            )
        }

        // Display the most populated stacks first
        cardColumns.sort(compareStacks)

        // Used so only one card glows when special order duplicates a utentsil
        let glow = 0

        // Displays only the top of cards and sorts them by color
        return (
          <div>
            {cardColumns.map((cardColumn, i) => {
              return (
                <div key={i} className={classStrings[i]}>
                  {cardColumn.map((card, j) => {
                    if (area == 0)
                      return (
                        <Card
                          key={j}
                          numberName={card.type}
                          info={card}
                          action={stashClick}
                          displayFrac={'4'}
                          fullOpacity={
                            ![
                              cards.CHOPSTICKSONE.color,
                              cards.SPOONFOUR.color,
                              cards.MENUSEVEN.color,
                              cards.TAKEOUTTEN.color,
                            ].includes(card.color) ||
                            (priority >= 1 &&
                              priority <= 12 &&
                              priorityToCard().type == card.type &&
                              !glow++) ||
                            (priority == 0 &&
                              card.type == userClickedType &&
                              userHand.length > 1 &&
                              !glow++)
                          }
                        />
                      )
                    else
                      return (
                        <Card
                          key={j}
                          numberName={card.type}
                          info={card}
                          displayFrac={'4'}
                          fullOpacity={
                            ![
                              cards.CHOPSTICKSONE.color,
                              cards.SPOONFOUR.color,
                              cards.MENUSEVEN.color,
                              cards.TAKEOUTTEN.color,
                            ].includes(card.color) ||
                            (priority >= 1 &&
                              priority <= 12 &&
                              priorityToCard().type == card.type)
                          }
                        />
                      )
                  })}
                </div>
              )
            })}
          </div>
        )
      }

      // Displays a user's name, score, and dessert count
      const Scoreline = ({ name, score, dessert }) => {
        if (dess.includes(cards.PUDDINGGUIDE.type))
          return (
            <div className="basis-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
              {name}: Score: {score}; Pudding: {dessert}
            </div>
          )
        else if (dess.includes(cards.GTICGUIDE.type))
          return (
            <div className="basis-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
              {name}: Score: {score}; Green Tea Ice Cream: {dessert}
            </div>
          )
        else {
          let [watermelon, pineapple, orange] = parseFruit(dessert)

          return (
            <div className="basis-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
              {name}: Score: {score}; Watermelon: {watermelon}, Pineapple:{' '}
              {pineapple}, Orange: {orange}
            </div>
          )
        }
      }

      /* If not showing results, then display one hand in each corner and the user hand
       in the middle with the scores. Otherwise, show the results screen, which has the
       player's and their scores sorted to determine the winner. */
      if (!showResults) {
        const getActionSpecialTip = () => {
          let message = ''
          if (usingChopsticks)
            message = 'Chopsticks: Play another card from hand'
          else if (usingSpoon)
            message =
              'Spoon: Pick a card to request from above. If card has multiple types click its guide to request all types simultaneously'
          else if (beingSpooned)
            message = 'Spoon: Pick an applicable card to give to requester'
          else if (usingMenu)
            message = 'Menu: Pick a card from new hand to play'
          else if (takeoutBoxFreeze)
            message =
              'Takeout Box: Click a card from your played cards to turn it over. Click Takeout Box to end'
          else if (specialOrderFreeze)
            message =
              'Special Order: Click a card from your played cards to copy. Click Special Order to not copy any card'
          else return

          return (
            <>
              <br />
              <span className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 text-center font-cal text-2xl text-[color:var(--color-salmon)]">
                {message}
              </span>
            </>
          )
        }

        return (
          <>
            <div className="flex h-screen flex-col text-center">
              <div className="relative basis-2/5">
                <Stash platter={cpuOneStash} area={3} />
                <Stash platter={cpuTwoStash} area={2} />
              </div>
              <div className="basis-1/5">
                <div className="flex flex-row">
                  <Scoreline
                    name={players[1].name}
                    score={cpuOneScore}
                    dessert={cpuOneDessert}
                  />
                  <Scoreline
                    name={players[2].name}
                    score={cpuTwoScore}
                    dessert={cpuTwoDessert}
                  />
                </div>
                <Hand selection={userHand} />
                <div className="flex flex-row">
                  <Scoreline
                    name={players[0].name}
                    score={userScore}
                    dessert={userDessert}
                  />
                  <Scoreline
                    name={players[3].name}
                    score={cpuThreeScore}
                    dessert={cpuThreeDessert}
                  />
                </div>
              </div>
              <div className="">{getActionSpecialTip()}</div>
              <div className="relative basis-2/5">
                <Stash platter={userStash} area={0} />
                <Stash platter={cpuThreeStash} area={1} />
              </div>
            </div>
          </>
        )
      }
    }

    return <CardDisplay />
  }

  /* If we are not showing the game, show the selection screen,
     otherwise, show the game screen */
  if (!showGame)
    return (
      <>
        <span
          className="absolute bottom-0 font-cal text-base text-[color:var(--color-nature)]"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
        >
          Hold escape to return home. Achievements will not be saved.
        </span>
        <OrderScreen />
        <Toaster />
      </>
    )
  else
    return (
      <>
        <span
          className="absolute bottom-0 font-cal text-base text-[color:var(--color-nature)]"
          style={{ left: '50%', transform: 'translateX(-50%)' }}
        >
          Hold escape to return home. Achievements will not be saved.
        </span>
        <GameScreen />
        <Toaster />
      </>
    )
}

export default PlayPage
