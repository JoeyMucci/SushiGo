import React, { useState } from 'react'

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

  const [screenNum, setScreenNum] = useState(screens.SELECTION)
  const [roll, setRoll] = useState([])
  const [spec, setSpec] = useState([])
  const [app, setApp] = useState([])
  const [dess, setDess] = useState([])
  const [diff, setDiff] = useState([])

  const SelectionScreen = () => {
    const ROLLCAP = 1
    const SPECCAP = 2
    const APPCAP = 3
    const DESSCAP = 1
    const DIFFCAP = 1

    const BUTTONCLASS =
      'rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)]'

    let allowSelection = false

    const updateScreen = () => {
      if (allowSelection) setScreenNum(screens.GAME)
    }

    const clickRoll = (e) => {
      let mockList = roll
      let cap = ROLLCAP
      if (mockList.includes(e.target.id))
        mockList.splice(mockList.indexOf(e.target.id), 1)
      else if (mockList.length < cap) mockList.push(e.target.id)
      else e.target.checked = false

      setRoll(mockList)
      updateAfterClick()
    }

    const clickSpec = (e) => {
      let mockList = spec
      let cap = SPECCAP
      if (mockList.includes(e.target.id))
        mockList.splice(mockList.indexOf(e.target.id), 1)
      else if (mockList.length < cap) mockList.push(e.target.id)
      else e.target.checked = false

      setSpec(mockList)
      updateAfterClick()
    }

    const clickApp = (e) => {
      let mockList = app
      let cap = APPCAP
      if (mockList.includes(e.target.id))
        mockList.splice(mockList.indexOf(e.target.id), 1)
      else if (mockList.length < cap) mockList.push(e.target.id)
      else e.target.checked = false

      setApp(mockList)
      updateAfterClick()
    }

    const clickDess = (e) => {
      let mockList = dess
      let cap = DESSCAP
      if (mockList.includes(e.target.id))
        mockList.splice(mockList.indexOf(e.target.id), 1)
      else if (mockList.length < cap) mockList.push(e.target.id)
      else e.target.checked = false

      setDess(mockList)
      updateAfterClick()
    }

    const clickDiff = (e) => {
      let mockList = diff
      let cap = DIFFCAP
      if (mockList.includes(e.target.id))
        mockList.splice(mockList.indexOf(e.target.id), 1)
      else if (mockList.length < cap) mockList.push(e.target.id)
      else e.target.checked = false

      setDiff(mockList)

      // Change opacity according to new selection status
      if (e.target.checked)
        document.getElementsByName(e.target.id)[0].className = BUTTONCLASS
      else
        document.getElementsByName(e.target.id)[0].className =
          BUTTONCLASS + ' opacity-50'

      updateAfterClick()
    }

    const updateAfterClick = () => {
      if (
        roll.length == ROLLCAP &&
        spec.length == SPECCAP &&
        app.length == APPCAP &&
        dess.length == DESSCAP &&
        diff.length == DIFFCAP
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
        <Form onSubmit={updateScreen}>
          <div className="flex flex-col items-center">
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField id="maki" name="roll" onChange={clickRoll} />
                <img src={maki} alt="maki roll" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField id="temaki" name="roll" onChange={clickRoll} />
                <img
                  src={temakiguide}
                  alt="temaki roll"
                  className="h-48 w-36"
                />
              </Label>
              <Label className="m-2">
                <CheckboxField id="uramaki" name="roll" onChange={clickRoll} />
                <img src={uramaki} alt="uramaki roll" className="h-48 w-36" />
              </Label>
            </div>
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField
                  id="chopsticks"
                  name="spec"
                  onChange={clickSpec}
                />
                <img src={chopsticks} alt="chopsticks" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField id="spoon" name="spec" onChange={clickSpec} />
                <img src={spoon} alt="spoon" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField id="menu" name="spec" onChange={clickSpec} />
                <img src={menu} alt="menu" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="takeoutbox"
                  name="spec"
                  onChange={clickSpec}
                />
                <img src={takeoutbox} alt="takeout box" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField id="tea" name="spec" onChange={clickSpec} />
                <img src={teaguide} alt="tea" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField id="wasabi" name="spec" onChange={clickSpec} />
                <img src={wasabiguide} alt="wasabi" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField id="soysauce" name="spec" onChange={clickSpec} />
                <img src={soysauceguide} alt="soysauce" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="specialorder"
                  name="spec"
                  onChange={clickSpec}
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
                <CheckboxField id="dumpling" name="app" onChange={clickApp} />
                <img src={dumplingguide} alt="dumpling" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField id="tempura" name="app" onChange={clickApp} />
                <img src={tempuraguide} alt="tempura" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField id="sashimi" name="app" onChange={clickApp} />
                <img src={sashimiguide} alt="sashimi" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField id="misosoup" name="app" onChange={clickApp} />
                <img src={misoguide} alt="miso soup" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField id="edamame" name="app" onChange={clickApp} />
                <img src={edamameguide} alt="edamame" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField id="eel" name="app" onChange={clickApp} />
                <img src={eelguide} alt="eel" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField id="tofu" name="app" onChange={clickApp} />
                <img src={tofuguide} alt="tofu" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField id="onigiri" name="app" onChange={clickApp} />
                <img src={onigiri} alt="onigiri" className="h-48 w-36" />
              </Label>
            </div>
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField id="pudding" name="dess" onChange={clickDess} />
                <img src={puddingguide} alt="pudding" className="h-48 w-36" />
              </Label>
              <Label className="m-2">
                <CheckboxField
                  id="greenteaicecream"
                  name="dess"
                  onChange={clickDess}
                />
                <img
                  src={gticguide}
                  alt="green tea ice cream"
                  className="h-48 w-36"
                />
              </Label>
              <Label className="m-2">
                <CheckboxField id="fruit" name="dess" onChange={clickDess} />
                <img src={fruit} alt="fruit" className="h-48 w-36" />
              </Label>
            </div>
            <div className="flex flex-row">
              <Label className="m-2">
                <CheckboxField id="easy" name="diff" onChange={clickDiff} />
                <p
                  name="easy"
                  className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50"
                >
                  Easy
                </p>
              </Label>
              <Label className="m-2">
                <CheckboxField id="normal" name="diff" onChange={clickDiff} />
                <p
                  name="normal"
                  className="rounded bg-[color:var(--color-nightwing)] px-2 py-2 font-cal text-2xl text-[color:var(--color-salmon)] opacity-50"
                >
                  Normal
                </p>
              </Label>
              <Label className="m-2">
                <CheckboxField id="hard" name="diff" onChange={clickDiff} />
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
    const cards = Object.freeze({
      EGG: {
        type: 0,
        text: 'egg nigiri',
        picpath: eggnigiri,
        color: 'yellow',
        count: 4,
      },
      SALMON: {
        type: 1,
        text: 'salmon nigiri',
        picpath: salmonnigiri,
        color: 'yellow',
        count: 5,
      },
      SQUID: {
        type: 2,
        text: 'squid nigiri',
        picpath: squidnigiri,
        color: 'yellow',
        count: 3,
      },
      MAKIONE: {
        type: 3,
        text: 'one maki roll',
        picpath: maki1,
        color: 'red',
        count: 4,
      },
      MAKITWO: {
        type: 4,
        text: 'two maki rolls',
        picpath: maki2,
        color: 'red',
        count: 5,
      },
      MAKITHREE: {
        type: 5,
        text: 'three maki rolls',
        picpath: maki3,
        color: 'red',
        count: 3,
      },
      TEMAKI: {
        type: 6,
        text: 'temaki',
        picpath: temaki,
        color: 'plum',
        count: 12,
      },
      URAMAKITHREE: {
        type: 7,
        text: 'three uramaki rolls',
        picpath: uramaki3,
        color: 'lime',
        count: 4,
      },
      URAMAKIFOUR: {
        type: 8,
        text: 'four uramaki rolls',
        picpath: uramaki4,
        color: 'lime',
        count: 4,
      },
      URAMAKIFIVE: {
        type: 9,
        text: 'five uramaki rolls',
        picpath: uramaki5,
        color: 'lime',
        count: 4,
      },
      CHOPSTICKSONE: {
        type: 10,
        text: 'chopsticks',
        picpath: chopsticks1,
        color: 'sky blue',
        count: 1,
      },
      CHOPSTICKSTWO: {
        type: 11,
        text: 'chopsticks',
        picpath: chopsticks2,
        color: 'sky blue',
        count: 1,
      },
      CHOPSTICKSTHREE: {
        type: 12,
        text: 'chopsticks',
        picpath: chopsticks3,
        color: 'sky blue',
        count: 1,
      },
      SPOONFOUR: {
        type: 13,
        text: 'spoon',
        picpath: spoon4,
        color: 'gray',
        count: 1,
      },
      SPOONFIVE: {
        type: 14,
        text: 'spoon',
        picpath: spoon5,
        color: 'gray',
        count: 1,
      },
      SPOONSIX: {
        type: 15,
        text: 'spoon',
        picpath: spoon6,
        color: 'gray',
        count: 1,
      },
      MENUSEVEN: {
        type: 16,
        text: 'menu',
        picpath: menu7,
        color: 'off white',
        count: 1,
      },
      MENUEIGHT: {
        type: 17,
        text: 'menu',
        picpath: menu8,
        color: 'off white',
        count: 1,
      },
      MENUNINE: {
        type: 18,
        text: 'menu',
        picpath: menu9,
        color: 'off white',
        count: 1,
      },
      TAKEOUTTEN: {
        type: 19,
        text: 'takeout box',
        picpath: takeoutbox10,
        color: 'tan',
        count: 1,
      },
      TAKEOUTELEVEN: {
        type: 20,
        text: 'takeout box',
        picpath: takeoutbox11,
        color: 'tan',
        count: 1,
      },
      TAKEOUTTWELVE: {
        type: 21,
        text: 'takeout box',
        picpath: takeoutbox12,
        color: 'tan',
        count: 1,
      },
      TEA: { type: 22, text: 'tea', picpath: tea, color: 'brown', count: 3 },
      WASABI: {
        type: 23,
        text: 'wasabi',
        picpath: wasabi,
        color: 'yellow',
        count: 3,
      },
      SOYSAUCE: {
        type: 24,
        text: 'soysauce',
        picpath: soysauce,
        color: 'orange',
        count: 3,
      },
      SPECIALO: {
        type: 25,
        text: 'special order',
        picpath: specialorder,
        color: 'rainbow',
        count: 3,
      },
      DUMPLING: {
        type: 26,
        text: 'dumpling',
        picpath: dumpling,
        color: 'indigo',
        count: 8,
      },
      TEMPURA: {
        type: 27,
        text: 'tempura',
        picpath: tempura,
        color: 'light purple',
        count: 8,
      },
      SASHIMI: {
        type: 28,
        text: 'sashimi',
        picpath: sashimi,
        color: 'light green',
        count: 8,
      },
      MISO: {
        type: 29,
        text: 'miso soup',
        picpath: misosoup,
        color: 'teal',
        count: 8,
      },
      EDAMAME: {
        type: 30,
        text: 'edamame',
        picpath: edamame,
        color: 'purple',
        count: 8,
      },
      EEL: { type: 31, text: 'eel', picpath: eel, color: 'yellow', count: 8 },
      TOFU: { type: 32, text: 'tofu', picpath: tofu, color: 'green', count: 8 },
      ONICIRCLE: {
        type: 33,
        text: 'circle onigiri',
        picpath: onigiricircle,
        color: 'hot pink',
        count: 2,
      },
      ONISQUARE: {
        type: 34,
        text: 'square onigiri',
        picpath: onigirisquare,
        color: 'hot pink',
        count: 2,
      },
      ONITRI: {
        type: 35,
        text: 'triangle onigiri',
        picpath: onigiritriangle,
        color: 'hot pink',
        count: 2,
      },
      ONIFLAT: {
        type: 36,
        text: 'flat onigiri',
        picpath: onigiriflat,
        color: 'hot pink',
        count: 2,
      },
      PUDDING: {
        type: 37,
        text: 'pudding',
        picpath: pudding,
        color: 'pink',
        count: 15,
      },
      GTIC: {
        type: 38,
        text: 'green tea ice cream',
        picpath: greenteaicecream,
        color: 'blue',
        count: 15,
      },
      FRUITDUBWAT: {
        type: 39,
        text: 'two watermelons',
        picpath: fruitdoublewatermelon,
        color: 'peach',
        count: 2,
      },
      FRUITDUBPINE: {
        type: 40,
        text: 'two pineapples',
        picpath: fruitdoublepineapple,
        color: 'peach',
        count: 2,
      },
      FRUITDUBO: {
        type: 41,
        text: 'two oranges',
        picpath: fruitdoubleorange,
        color: 'peach',
        count: 2,
      },
      FRUITWATERO: {
        type: 42,
        text: 'one watermelon and one orange',
        picpath: fruitwatermelonorange,
        color: 'peach',
        count: 3,
      },
      FRUITPINEO: {
        type: 43,
        text: 'one pineapple and one orange',
        picpath: fruitpineappleorange,
        color: 'peach',
        count: 3,
      },
      FRUITWATERPINE: {
        type: 44,
        text: 'one watermlon and one pineapple',
        picpath: fruitwatermelonpineapple,
        color: 'peach',
        count: 3,
      },
      TOC: {
        type: 45,
        text: 'turned over card',
        picpath: turnedovercard,
        color: 'gamewright',
        count: 0,
      },
    })

    // DECK PREPERATION
    const DESSERTCOUNTONE = 5
    const DESSERTCOUNTTWO = 3
    const DESSERTCOUNTTHREE = 2

    let round = 1
    let uramakiPoints = 8
    let deck = {
      pile: [],
      dessertPile: [],
    }

    const addNigiri = () => {
      for (let i = 0; i < cards.EGG.count; i++) deck.pile.push(cards.EGG)
      for (let i = 0; i < cards.SALMON.count; i++) deck.pile.push(cards.SALMON)
      for (let i = 0; i < cards.SQUID.count; i++) deck.pile.push(cards.SQUID)
    }

    const addRolls = (rollName) => {
      if (rollName == 'maki') {
        for (let i = 0; i < cards.MAKIONE.count; i++)
          deck.pile.push(cards.MAKIONE)
        for (let i = 0; i < cards.MAKITWO.count; i++)
          deck.pile.push(cards.MAKITWO)
        for (let i = 0; i < cards.MAKITHREE.count; i++)
          deck.pile.push(cards.MAKITHREE)
      } else if (rollName == 'temaki')
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
      if (specialName == 'chopsticks') {
        for (let i = 0; i < cards.CHOPSTICKSONE.count; i++)
          deck.pile.push(cards.CHOPSTICKSONE)
        for (let i = 0; i < cards.CHOPSTICKSTWO.count; i++)
          deck.pile.push(cards.CHOPSTICKSTWO)
        for (let i = 0; i < cards.CHOPSTICKSTHREE.count; i++)
          deck.pile.push(cards.CHOPSTICKSTHREE)
      } else if (specialName == 'spoon') {
        for (let i = 0; i < cards.SPOONFOUR.count; i++)
          deck.pile.push(cards.SPOONFOUR)
        for (let i = 0; i < cards.SPOONFIVE.count; i++)
          deck.pile.push(cards.SPOONFIVE)
        for (let i = 0; i < cards.SPOONSIX.count; i++)
          deck.pile.push(cards.SPOONSIX)
      } else if (specialName == 'menu') {
        for (let i = 0; i < cards.MENUSEVEN.count; i++)
          deck.pile.push(cards.MENUSEVEN)
        for (let i = 0; i < cards.MENUEIGHT.count; i++)
          deck.pile.push(cards.MENUEIGHT)
        for (let i = 0; i < cards.MENUNINE.count; i++)
          deck.pile.push(cards.MENUNINE)
      } else if (specialName == 'takeoutbox') {
        for (let i = 0; i < cards.TAKEOUTTEN.count; i++)
          deck.pile.push(cards.TAKEOUTTEN)
        for (let i = 0; i < cards.TAKEOUTELEVEN.count; i++)
          deck.pile.push(cards.TAKEOUTELEVEN)
        for (let i = 0; i < cards.TAKEOUTTWELVE.count; i++)
          deck.pile.push(cards.TAKEOUTTWELVE)
      } else if (specialName == 'tea')
        for (let i = 0; i < cards.TEA.count; i++) deck.pile.push(cards.TEA)
      else if (specialName == 'wasabi')
        for (let i = 0; i < cards.WASABI.count; i++)
          deck.pile.push(cards.WASABI)
      else if (specialName == 'soysauce')
        for (let i = 0; i < cards.SOYSAUCE.count; i++)
          deck.pile.push(cards.SOYSAUCE)
      else
        for (let i = 0; i < cards.SPECIALO.count; i++)
          deck.pile.push(cards.SPECIALO)
    }

    const addApps = (appName) => {
      if (appName == 'dumpling')
        for (let i = 0; i < cards.DUMPLING.count; i++)
          deck.pile.push(cards.DUMPLING)
      else if (appName == 'tempura')
        for (let i = 0; i < cards.TEMPURA.count; i++)
          deck.pile.push(cards.TEMPURA)
      else if (appName == 'sashimi')
        for (let i = 0; i < cards.SASHIMI.count; i++)
          deck.pile.push(cards.SASHIMI)
      else if (appName == 'misosoup')
        for (let i = 0; i < cards.MISO.count; i++) deck.pile.push(cards.MISO)
      else if (appName == 'edamame')
        for (let i = 0; i < cards.EDAMAME.count; i++)
          deck.pile.push(cards.EDAMAME)
      else if (appName == 'eel')
        for (let i = 0; i < cards.EEL.count; i++) deck.pile.push(cards.EEL)
      else if (appName == 'tofu')
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
      if (dessertName == 'pudding')
        for (let i = 0; i < cards.PUDDING.count; i++)
          deck.dessertPile.push(cards.PUDDING)
      else if (dessertName == 'greenteaicecream')
        for (let i = 0; i < cards.TEMAKI.count; i++)
          deck.dessertPile.push(cards.TEMAKI)
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
          deck.dessertPile.push(cards.FRUITDUBO)
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

    // Add all necessary cards
    addNigiri()
    for (let i = 0; i < roll.length; i++) addRolls(roll[i])
    for (let i = 0; i < spec.length; i++) addSpecials(spec[i])
    for (let i = 0; i < app.length; i++) addApps(app[i])
    for (let i = 0; i < dess.length; i++) fillDessertPile(dess[i])

    // Fruit is the only dessert card that is heterogeneous, so its the only one that needs to be shuffled
    if (dess[0] == 'fruit') shuffle(deck.dessertPile)

    // Add dessert cards for first round
    for (let i = 0; i < DESSERTCOUNTONE; i++)
      deck.pile.push(deck.dessertPile.pop())

    // Shuffle full deck
    shuffle(deck.pile)

    // PLAYER INITIALIZATION
    const STARTCARDS = 9

    // players[0] is the user
    let players = [
      {
        name: 'Joey',
        hand: [],
        stash: [],
        dessert: 0,
        uramakiScored: false,
      },
      {
        name: 'cpu one',
        hand: [],
        stash: [],
        dessert: 0,
        uramakiScored: false,
      },
      {
        name: 'cpu two',
        hand: [],
        stash: [],
        dessert: 0,
        uramakiScored: false,
      },
      {
        name: 'cpu three',
        hand: [],
        stash: [],
        dessert: 0,
        uramakiScored: false,
      },
    ]

    const dealToPlayers = () => {
      for (let i = 0; i < STARTCARDS; i++)
        for (let j = 0; j < players.length; j++)
          players[j].hand.push(deck.pile.pop())
    }

    dealToPlayers()

    const CardDisplay = () => {
      let [userHand, setUserHand] = useState(players[0].hand)
      let [userStash, setUserStash] = useState(players[0].stash)
      let [cpuOneStash, setCpuOneStash] = useState(players[1].stash)
      let [cpuTwoStash, setCpuTwoStash] = useState(players[2].stash)
      let [cpuThreeStash, setCpuThreeStash] = useState(players[3].stash)
      let [userScore, setUserScore] = useState(0)
      let [cpuOneScore, setCpuOneScore] = useState(0)
      let [cpuTwoScore, setCpuTwoScore] = useState(0)
      let [cpuThreeScore, setCpuThreeScore] = useState(0)

      // Fruit is stored as a 3 undigit base-11 number (watermelon is most significant, orange is least significant)
      // This is possible because for each fruit type the max icons is 10: 15 fruit cards * 2 icons/card / 3 icon types = 10
      // e.g. 2 watermelon, 1 pineapple, 3 orange is represented as 2 * 11 * 11 + 1 * 11 + 3 = 256
      let [userDessert, setUserDessert] = useState(players[0].dessert)
      let [cpuOneDessert, setCpuOneDessert] = useState(players[1].dessert)
      let [cpuTwoDessert, setCpuTwoDessert] = useState(players[2].dessert)
      let [cpuThreeDessert, setCpuThreeDessert] = useState(players[3].dessert)

      const Card = ({ info, action }) => {
        return (
          // CSS shows cursor so it should be clear to user that this is an interactive element although it isn't technically
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <img
            src={info.picpath}
            alt={info.text}
            onClick={action}
            onKeyDown={action}
            className="h-36 w-24"
          />
        )
      }

      const Hand = ({ selection }) => {
        const swapCards = () => {
          let tempCards = players[0].hand
          for (let i = 0; i < players.length - 1; i++)
            players[i].hand = players[i + 1].hand
          players[players.length - 1].hand = tempCards
        }

        // returns how many occurences of card are in cards
        const countCard = (cards, card) => {
          let count = 0
          for (let i = 0; i < cards.length; i++)
            if (cards[i].type == card.type) count++
          return count
        }

        const scoreMaki = (playerCards, oppsCards) => {
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
            if (!oppMakiCounts.includes(oppMakiCount))
              oppMakiCounts.push(oppMakiCount)
          }

          for (let oppMakiCount of oppMakiCounts)
            if (makiCount < oppMakiCount) points -= 3

          return Math.max(points, 0)
        }

        const scoreTemaki = (playerCards, oppsCards) => {
          let points = 0
          let flagMost = false
          let flagLeast = true
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

        const scoreUramakiDuring = () => {
          // Check from 14 to 10 for scoring uramaki since ten is the minimum to score and
          // 5 is the max that can be played in a round, so the max unscored amount is 10 - 1 + 5 = 14
          for (let goal = 14; goal >= 10; goal--) {
            if (uramakiPoints < 2) break
            let decrease = 0
            for (let i = 0; i < players.length; i++) {
              let uramakiCount =
                3 * countCard(players[i].hand, cards.URAMAKITHREE) +
                4 * countCard(players[i].hand, cards.URAMAKIFOUR) +
                5 * countCard(players[i].hand, cards.URAMAKIFIVE)

              // It is not possible to score twice in a round by reaching 10+ rolls, hence the second condition
              // However, it is possible to score uramaki again at the end of the round
              if (uramakiCount == goal && !players[i].uramakiScored) {
                if (i == 0) setUserScore(userScore + uramakiPoints)
                else if (i == 1) setCpuOneScore(cpuOneScore + uramakiPoints)
                else if (i == 2) setCpuOneScore(cpuTwoScore + uramakiPoints)
                else if (i == 3) setCpuOneScore(cpuThreeScore + uramakiPoints)
                players[i].uramakiScored = false
                decrease += 3 // Do not decrease right away so tied players receive the same points
              }
            }
            uramakiPoints -= decrease
          }
        }

        const scoreUramakiEnd = () => {}

        const replenishDeck = (moreDes) => {
          let usedCards = []

          for (let i = 0; i < players.length; i++)
            for (let j = players[i].stash.length - 1; j >= 0; j--) {
              let removedCard = players[i].stash.pop()
              if (
                removedCard.type == cards.PUDDING.type ||
                removedCard.type == cards.GTIC.type
              )
                players[i].dessert++
              // Fruit count is stored as an undecimal number (watermelon is most significant, orange is least significant)
              else if (removedCard.type == cards.FRUITDUBWAT.type)
                players[i].dessert += 2 * 11 * 11
              else if (removedCard.type == cards.FRUITDUBPINE.type)
                players[i].dessert += 2 * 11
              else if (removedCard.type == cards.FRUITDUBO.type)
                players[i].dessert += 2
              else if (removedCard.type == cards.FRUITWATERO.type) {
                players[i].dessert += 11 * 11
                players[i].dessert++
              } else if (removedCard.type == cards.FRUITPINEO.type) {
                players[i].dessert += 11
                players[i].dessert++
              } else if (removedCard.type == cards.FRUITWATERPINE.type) {
                players[i].dessert += 11 * 11
                players[i].dessert += 11
              } else usedCards.push(removedCard)
            }

          for (let usedCard of usedCards) deck.pile.push(usedCard)

          for (let i = 0; i < moreDes; i++)
            deck.pile.push(deck.dessertPile.pop())

          shuffle(deck.pile)
        }

        const scorePlayer = (playerCards, oppCards) => {
          let runningScore = 0
          // ROLLS
          if (roll[0] == 'maki')
            runningScore += scoreMaki(playerCards, oppCards)
          else if (roll[0] == 'temaki')
            runningScore += scoreTemaki(playerCards, oppCards)
          else runningScore += scoreUramakiEnd(playerCards, oppCards)
          // else if (roll[0] == 'temaki') scoreTemaki()
          // else scoreUramaki()

          return runningScore
        }

        const updateState = () => {
          setUserHand(players[0].hand)
          setUserStash(players[0].stash)
          setCpuOneStash(players[1].stash)
          setCpuTwoStash(players[2].stash)
          setCpuThreeStash(players[3].stash)
        }

        const handlePlayerSelection = (e) => {
          for (let i = 0; i < players[0].hand.length; i++)
            if (e.target.alt == players[0].hand[i].text) {
              let temp = players[0].hand[players[0].hand.length - 1]
              players[0].hand[players[0].hand.length - 1] = players[0].hand[i]
              players[0].hand[i] = temp
              players[0].stash.push(players[0].hand.pop())
              break
            }
          players[1].stash.push(players[1].hand.pop())
          players[2].stash.push(players[2].hand.pop())
          players[3].stash.push(players[3].hand.pop())

          scoreUramakiDuring()

          if (players[0].hand.length == 0) {
            setUserScore(
              scorePlayer(players[0].stash, [
                players[1].stash,
                players[2].stash,
                players[3].stash,
              ])
            )
            setCpuOneScore(
              scorePlayer(players[1].stash, [
                players[0].stash,
                players[2].stash,
                players[3].stash,
              ])
            )
            setCpuTwoScore(
              scorePlayer(players[2].stash, [
                players[1].stash,
                players[0].stash,
                players[3].stash,
              ])
            )
            setCpuThreeScore(
              scorePlayer(players[3].stash, [
                players[1].stash,
                players[2].stash,
                players[0].stash,
              ])
            )

            if (round == 1) replenishDeck(DESSERTCOUNTTWO)
            else if (round == 2) replenishDeck(DESSERTCOUNTTHREE)

            setUserDessert(players[0].dessert)
            setCpuOneDessert(players[1].dessert)
            setCpuTwoDessert(players[2].dessert)
            setCpuThreeDessert(players[3].dessert)

            dealToPlayers()
            round++
          } else swapCards()
          updateState()
        }

        return (
          <div className="flex flex-row justify-center">
            {selection.map((card, i) => {
              return <Card key={i} info={card} action={handlePlayerSelection} />
            })}
          </div>
        )
      }

      const Stash = ({ platter }) => {
        let columnColors = []
        let cardColumns = []

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

        return (
          <div className="flex flex-row">
            {cardColumns.map((cardColumn, i) => {
              return (
                <div key={i}>
                  {cardColumn.map((card, j) => {
                    return <Card key={j} info={card} />
                  })}
                </div>
              )
            })}
          </div>
        )
      }

      const Scoreline = ({ name, score, dessert }) => {
        if (dess[0] == 'pudding')
          return (
            <div className="basis-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
              {name}: Score: {score}, Pudding: {dessert}
            </div>
          )
        else if (dess[0] == 'green tea ice cream')
          return (
            <div className="basis-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
              {name}: Score: {score}, Green Tea Ice Cream: {dessert}
            </div>
          )
        else {
          // Parse undenary representation of fruit counts (watermelon is most significant, orange is least significant)
          let watermelon = Math.floor(dessert / 11 / 11)
          let dessertLeft = dessert - watermelon * 11 * 11
          let pineapple = Math.floor(dessert / 11)
          let orange = dessertLeft - pineapple * 11
          return (
            <div className="basis-1/2 text-center font-cal text-2xl text-[color:var(--color-nature)]">
              {name}: Score: {score}; Watermelon: {watermelon}, Pineapple:{' '}
              {pineapple}, Orange: {orange}
            </div>
          )
        }
      }

      return (
        <>
          <div className="flex h-screen flex-col">
            <div className="basis-2/5">
              <div className="flex flex-row">
                <div className="basis-1/2">
                  <Stash platter={cpuThreeStash} />
                </div>
                <div className="basis-1/2">
                  <Stash platter={cpuTwoStash} />
                </div>
              </div>
            </div>
            <div className="basis-1/5">
              <div className="flex flex-row">
                <Scoreline
                  name={players[3].name}
                  score={cpuThreeScore}
                  dessert={cpuThreeDessert}
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
                  name={players[1].name}
                  score={cpuOneScore}
                  dessert={cpuOneDessert}
                />
              </div>
            </div>
            <div className="basis-2/5">
              <div className="flex flex-row">
                <div className="basis-1/2">
                  <Stash platter={userStash} />
                </div>
                <div className="basis-1/2">
                  <Stash platter={cpuOneStash} />
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }

    return <CardDisplay />
  }

  if (screenNum == screens.SELECTION) return <SelectionScreen />
  else return <GameScreen />
}

export default PlayPage
