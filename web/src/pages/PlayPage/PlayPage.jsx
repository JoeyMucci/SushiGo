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

import { Label, Form, CheckboxField, Submit } from '@redwoodjs/forms'

const PlayPage = () => {
  const screens = Object.freeze({
    SELECTION: 1,
    GAME: 2,
  })

  const cards = Object.freeze({
    EGG: { type: 0, text: 'egg nigiri', picpath: eggnigiri, color: 'yellow' },
    SALMON: {
      type: 1,
      text: 'salmon nigiri',
      picpath: salmonnigiri,
      color: 'yellow',
    },
    SQUID: {
      type: 2,
      text: 'squid nigiri',
      picpath: squidnigiri,
      color: 'yellow',
    },
    MAKIONE: {
      type: 3,
      text: 'one maki roll',
      picpath: maki1,
      color: 'red',
    },
    MAKITWO: {
      type: 4,
      text: 'two maki rolls',
      picpath: maki2,
      color: 'red',
    },
    MAKITHREE: {
      type: 5,
      text: 'three maki rolls',
      picpath: maki3,
      color: 'red',
    },
    TEMAKI: { type: 6, text: 'temaki', picpath: temaki, color: 'plum' },
    URAMAKITHREE: {
      type: 7,
      text: 'three uramaki rolls',
      picpath: uramaki3,
      color: 'lime',
    },
    URAMAKIFOUR: {
      type: 8,
      text: 'four uramaki rolls',
      picpath: uramaki4,
      color: 'lime',
    },
    URAMAKIFIVE: {
      type: 9,
      text: 'five uramaki rolls',
      picpath: uramaki5,
      color: 'lime',
    },
    CHOPSTICKSONE: {
      type: 10,
      text: 'chopsticks',
      picpath: chopsticks1,
      color: 'sky blue',
    },
    CHOPSTICKSTWO: {
      type: 11,
      text: 'chopsticks',
      picpath: chopsticks2,
      color: 'sky blue',
    },
    CHOPSTICKSTHREE: {
      type: 12,
      text: 'chopsticks',
      picpath: chopsticks3,
      color: 'sky blue',
    },
    SPOONFOUR: { type: 13, text: 'spoon', picpath: spoon4, color: 'gray' },
    SPOONFIVE: { type: 14, text: 'spoon', picpath: spoon5, color: 'gray' },
    SPOONSIX: { type: 15, text: 'spoon', picpath: spoon6, color: 'gray' },
    MENUSEVEN: { type: 16, text: 'menu', picpath: menu7, color: 'off white' },
    MENUEIGHT: { type: 17, text: 'menu', picpath: menu8, color: 'off white' },
    MENUNINE: { type: 18, text: 'menu', picpath: menu9, color: 'off white' },
    TAKEOUTTEN: {
      type: 19,
      text: 'takeout box',
      picpath: takeoutbox10,
      color: 'tan',
    },
    TAKEOUTELEVEN: {
      type: 20,
      text: 'takeout box',
      picpath: takeoutbox11,
      color: 'tan',
    },
    TAKEOUTTWELVE: {
      type: 21,
      text: 'takeout box',
      picpath: takeoutbox12,
      color: 'tan',
    },
    TEA: { type: 22, text: 'tea', picpath: tea, color: 'brown' },
    WASABI: { type: 23, text: 'wasabi', picpath: wasabi, color: 'yellow' },
    SOYSAUCE: {
      type: 24,
      text: 'soysauce',
      picpath: soysauce,
      color: 'orange',
    },
    SPECIALO: {
      type: 25,
      text: 'special order',
      picpath: specialorder,
      color: 'rainbow',
    },
    DUMPLING: {
      type: 26,
      text: 'dumpling',
      picpath: dumpling,
      color: 'indigo',
    },
    TEMPURA: {
      type: 27,
      text: 'tempura',
      picpath: tempura,
      color: 'light purple',
    },
    SASHIMI: {
      type: 28,
      text: 'sashimi',
      picpath: sashimi,
      color: 'light green',
    },
    MISO: { type: 29, text: 'miso soup', picpath: misosoup, color: 'teal' },
    EDAMAME: { type: 30, text: 'edamame', picpath: edamame, color: 'purple' },
    EEL: { type: 31, text: 'eel', picpath: eel, color: 'yellow' },
    TOFU: { type: 32, text: 'tofu', picpath: tofu, color: 'green' },
    ONICIRCLE: {
      type: 33,
      text: 'circle onigiri',
      picpath: onigiricircle,
      color: 'hot pink',
    },
    ONISQUARE: {
      type: 34,
      text: 'square onigiri',
      picpath: onigirisquare,
      color: 'hot pink',
    },
    ONITRI: {
      type: 35,
      text: 'triangle onigiri',
      picpath: onigiritriangle,
      color: 'hot pink',
    },
    ONIFLAT: {
      type: 36,
      text: 'flat onigiri',
      picpath: onigiriflat,
      color: 'hot pink',
    },
    PUDDING: { type: 37, text: 'pudding', picpath: pudding, color: 'pink' },
    GTIC: {
      type: 38,
      text: 'green tea ice cream',
      picpath: greenteaicecream,
      color: 'blue',
    },
    FRUITDUBWAT: {
      type: 39,
      text: 'two watermelons',
      picpath: fruitdoublewatermelon,
      color: 'peach',
    },
    FRUITDUBPINE: {
      type: 40,
      text: 'two pineapples',
      picpath: fruitdoublepineapple,
      color: 'peach',
    },
    FRUITDUBO: {
      type: 41,
      text: 'two oranges',
      picpath: fruitdoubleorange,
      color: 'peach',
    },
    FRUITWATERO: {
      type: 42,
      text: 'one watermelon and one orange',
      picpath: fruitwatermelonorange,
      color: 'peach',
    },
    FRUITPINEO: {
      type: 43,
      text: 'one pineapple and one orange',
      picpath: fruitpineappleorange,
      color: 'peach',
    },
    FRUITWATERPINE: {
      type: 44,
      text: 'one watermlon and one pineapple',
      picpath: fruitwatermelonpineapple,
      color: 'peach',
    },
    TOC: {
      type: 45,
      text: 'turned over card',
      picpath: turnedovercard,
      color: 'gamewright',
    },
  })

  let order = {
    roll: [],
    spec: [],
    app: [],
    dess: [],
    diff: [],
  }

  const SelectionScreen = () => {
    const ROLLCAP = 1
    const SPECCAP = 2
    const APPCAP = 3
    const DESSCAP = 1
    const DIFFCAP = 1

    const BUTTONCLASS =
      'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'

    let allowSelection = false

    const changeSelectionToGame = () => {
      if (allowSelection) {
        document.getElementsByName(screens.SELECTION.toString())[0].className =
          'hidden'
        document.getElementsByName(screens.GAME.toString())[0].className = ''
      }
    }

    // Populates order, which tracks what cards are being used in the game
    // Also limits the user from entering too many of a particular card type
    // Finally, updates the opacity variable and allows submission if everything is full
    const registerSelection = (e) => {
      let orderList = []
      let cap = 0

      if (e.target.name == 'roll') {
        orderList = order.roll
        cap = ROLLCAP
      } else if (e.target.name == 'spec') {
        orderList = order.spec
        cap = SPECCAP
      } else if (e.target.name == 'app') {
        orderList = order.app
        cap = APPCAP
      } else if (e.target.name == 'dess') {
        orderList = order.dess
        cap = DESSCAP
      } else {
        orderList = order.diff
        cap = DIFFCAP
      }

      if (orderList.includes(e.target.id))
        orderList.splice(orderList.indexOf(e.target.id), 1)
      else if (orderList.length < cap) orderList.push(e.target.id)
      else e.target.checked = false

      // Show the difficulty button fully if it is selected
      if (e.target.name == 'diff')
        if (e.target.checked)
          document.getElementsByName(e.target.id)[0].className = BUTTONCLASS
        else
          document.getElementsByName(e.target.id)[0].className =
            BUTTONCLASS + ' opacity-50'

      // If all the info is selected, show START button fully and allow submission
      if (
        order.roll.length == ROLLCAP &&
        order.spec.length == SPECCAP &&
        order.app.length == APPCAP &&
        order.dess.length == DESSCAP &&
        order.diff.length == DIFFCAP
      ) {
        document.getElementsByName('START')[0].className = BUTTONCLASS
        allowSelection = true
      } else {
        document.getElementsByName('START')[0].className =
          BUTTONCLASS + ' opacity-50'
        allowSelection = false
      }
    }

    return (
      <>
        <p className="text-center font-cal text-6xl text-[color:var(--color-nature)]">
          Choose Your Meal
        </p>
        <p className="text-center font-cal text-2xl text-[color:var(--color-nature)]">
          {ROLLCAP} roll, {SPECCAP} specials, {APPCAP} appetizers, {DESSCAP}{' '}
          dessert
        </p>
        <Form onSubmit={changeSelectionToGame}>
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField
                  id="maki"
                  name="roll"
                  onChange={registerSelection}
                />
                <img src={maki} alt="maki roll" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="temaki"
                  name="roll"
                  onChange={registerSelection}
                />
                <img
                  src={temakiguide}
                  alt="temaki roll"
                  className="h-48 w-36"
                />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="uramaki"
                  name="roll"
                  onChange={registerSelection}
                />
                <img src={uramaki} alt="uramaki roll" className="h-48 w-36" />
              </Label>
            </div>
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField
                  id="chopsticks"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={chopsticks} alt="chopsticks" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="spoon"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={spoon} alt="spoon" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="menu"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={menu} alt="menu" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="takeoutbox"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={takeoutbox} alt="takeout box" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="tea"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={teaguide} alt="tea" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="wasabi"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={wasabiguide} alt="wasabi" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="soysauce"
                  name="spec"
                  onChange={registerSelection}
                />
                <img src={soysauceguide} alt="soysauce" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="specialorder"
                  name="spec"
                  onChange={registerSelection}
                />
                <img
                  src={specialguide}
                  alt="special order"
                  className="h-48 w-36"
                />
              </Label>
            </div>
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField
                  id="dumpling"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={dumplingguide} alt="dumpling" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="tempura"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={tempuraguide} alt="tempura" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="sashimi"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={sashimiguide} alt="sashimi" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="misosoup"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={misoguide} alt="miso soup" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="edamame"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={edamameguide} alt="edamame" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="eel"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={eelguide} alt="eel" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="tofu"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={tofuguide} alt="tofu" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="onigiri"
                  name="app"
                  onChange={registerSelection}
                />
                <img src={onigiri} alt="onigiri" className="h-48 w-36" />
              </Label>
            </div>
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField
                  id="pudding"
                  name="dess"
                  onChange={registerSelection}
                />
                <img src={puddingguide} alt="pudding" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="greenteaicecream"
                  name="dess"
                  onChange={registerSelection}
                />
                <img
                  src={gticguide}
                  alt="green tea ice cream"
                  className="h-48 w-36"
                />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="fruit"
                  name="dess"
                  onChange={registerSelection}
                />
                <img src={fruit} alt="fruit" className="h-48 w-36" />
              </Label>
            </div>
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField
                  id="easy"
                  name="diff"
                  onChange={registerSelection}
                />
                <p
                  name="easy"
                  className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50"
                >
                  Easy
                </p>
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="normal"
                  name="diff"
                  onChange={registerSelection}
                />
                <p
                  name="normal"
                  className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50"
                >
                  Normal
                </p>
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="hard"
                  name="diff"
                  onChange={registerSelection}
                />
                <p
                  name="hard"
                  className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50"
                >
                  Hard
                </p>
              </Label>
            </div>
            <Submit
              name="START"
              className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50"
            >
              START
            </Submit>
            <br></br>
            <br></br>
          </div>
        </Form>
      </>
    )
  }

  const GameScreen = () => {
    let player = {
      name: 'Joey',
      cards: [cards.EGG, cards.TEA, cards.WASABI],
      score: 0,
      dessert: 0,
    }

    let cpuOne = {
      name: 'cpu one',
      cards: [cards.ONIFLAT, cards.ONISQUARE, cards.EEL],
      score: 0,
      dessert: 0,
    }

    let cpuTwo = {
      name: 'cpu two',
      cards: [cards.DUMPLING, cards.TEMPURA, cards.SASHIMI],
      score: 0,
      dessert: 0,
    }

    let cpuThree = {
      name: 'cpu three',
      cards: [cards.MISO, cards.SPOONSIX, cards.MISO],
      score: 0,
      dessert: 0,
    }

    const Card = ({ info }) => {
      return <img src={info.picpath} alt={info.text} className="h-36 w-24" />
    }

    const Hand = ({ cards }) => {
      return (
        <div className="flex flex-row justify-center">
          {cards.map((card, i) => {
            return <Card key={i} info={card} />
          })}
        </div>
      )
    }

    const Stash = ({ cards }) => {
      let columnColors = []
      let cardColumns = []

      // Group the cards by color for display
      for (let i = 0; i < cards.length; i++) {
        if (columnColors.indexOf(cards[i].color) == -1) {
          columnColors.push(cards[i].color)
          cardColumns.push([cards[i]])
        } else
          cardColumns[columnColors.indexOf(cards[i].color)].unshift(cards[i])
      }

      return (
        <div className="flex flex-row">
          {cardColumns.map((cardColumn, i) => {
            return (
              <div key={i} className="absolute bottom-0 flex flex-col">
                {cardColumn.map((card, j) => {
                  return <Card key={j} info={card} />
                })}
              </div>
            )
          })}
        </div>
      )
    }

    return (
      <>
        <div className="flex h-screen flex-col">
          <div className="relative basis-2/5">
            <div className="flex flex-row">
              <div className="basis-1/2">
                <Stash cards={cpuThree.cards} />
              </div>
              <div className="basis-1/2">
                <Stash cards={cpuTwo.cards} />
              </div>
            </div>
          </div>
          <div className="basis-1/5">
            <div className="flex flex-row">
              <div className="basis-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
                {cpuThree.name}: Score: {cpuThree.score}, Dessert:{' '}
                {cpuThree.dessert}
              </div>
              <div className="basis-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
                {cpuTwo.name}: Score: {cpuTwo.score}, Dessert: {cpuTwo.dessert}
              </div>
            </div>
            <Hand cards={player.cards} />
            <div className="flex flex-row">
              <div className="basis-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
                {player.name}: Score: {player.score}, Dessert: {player.dessert}
              </div>
              <div className="basis-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
                {cpuOne.name}: Score: {cpuOne.score}, Dessert: {cpuOne.dessert}
              </div>
            </div>
          </div>
          <div className="basis-2/5">
            <div className="flex flex-row">
              <div className="basis-1/2">
                <Stash cards={player.cards} />
              </div>
              <div className="basis-1/2">
                <Stash cards={cpuOne.cards} />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div name={screens.SELECTION} className="hidden">
        <SelectionScreen />
      </div>
      <div name={screens.GAME} className="">
        <GameScreen />
      </div>
    </>
  )
}

export default PlayPage
